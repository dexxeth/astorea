import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
	firstName?: string;
	lastName?: string;
	phone?: string;
	email?: string;
	message?: string;
	company?: string;
};

const DEFAULT_SUBJECT = "New Inqurie";

function getEnvConfig() {
	const smtpHost = process.env.SMTP_HOST ?? "smtp.gmail.com";
	const smtpPort = Number(process.env.SMTP_PORT ?? 465);
	const smtpUser = process.env.SMTP_USER;
	const smtpPass = process.env.SMTP_PASS;
	const mailTo = process.env.MAIL_TO ?? smtpUser;
	const mailFrom = process.env.MAIL_FROM ?? smtpUser;
	const subject = process.env.MAIL_SUBJECT ?? DEFAULT_SUBJECT;

	const missing = [
		!smtpUser ? "SMTP_USER" : null,
		!smtpPass ? "SMTP_PASS" : null,
		!mailTo ? "MAIL_TO" : null,
		!mailFrom ? "MAIL_FROM" : null
	].filter(Boolean);

	if (missing.length > 0) {
		return {
			error: `Missing email configuration: ${missing.join(", ")}.`
		} as const;
	}

	return {
		smtpHost,
		smtpPort,
		smtpUser,
		smtpPass,
		mailTo,
		mailFrom,
		subject
	};
}

export async function POST(request: Request) {
	let payload: ContactPayload;

	try {
		payload = (await request.json()) as ContactPayload;
	} catch {
		return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
	}

	if (payload.company) {
		return NextResponse.json({ ok: true });
	}

	const firstName = payload.firstName?.trim();
	const lastName = payload.lastName?.trim();
	const email = payload.email?.trim();
	const message = payload.message?.trim();

	if (!firstName || !lastName || !email || !message) {
		return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
	}

	const config = getEnvConfig();
	if ("error" in config) {
		return NextResponse.json({ error: config.error }, { status: 500 });
	}

	const transporter = nodemailer.createTransport({
		host: config.smtpHost,
		port: config.smtpPort,
		secure: config.smtpPort === 465,
		auth: {
			user: config.smtpUser,
			pass: config.smtpPass
		}
	});

	const fullName = `${firstName} ${lastName}`.trim();
	const phone = payload.phone?.trim() ?? "";

	const text = [
		`Name: ${fullName}`,
		`Email: ${email}`,
		phone ? `Phone: ${phone}` : "Phone: -",
		"",
		message
	].join("\n");

	const html = `
		<h2>New contact form inquiry</h2>
		<p><strong>Name:</strong> ${fullName}</p>
		<p><strong>Email:</strong> ${email}</p>
		<p><strong>Phone:</strong> ${phone || "-"}</p>
		<p><strong>Message:</strong></p>
		<p>${message.replace(/\n/g, "<br />")}</p>
	`;

	try {
		await transporter.sendMail({
			from: config.mailFrom,
			to: config.mailTo,
			subject: config.subject,
			text,
			html
		});
	} catch (error) {
		console.error("Contact email send failed", error);
		return NextResponse.json({ error: "Email send failed." }, { status: 500 });
	}

	return NextResponse.json({ ok: true });
}
