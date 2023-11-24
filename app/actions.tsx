'use server';

import { sendMail } from "@/lib/mailer";
import { updateToken } from "@/model/client";
const INSTAGRAM_APP_ID = process.env.INSTAGRAM_APP_ID || '';
const INSTAGRAM_APP_SECRET = process.env.INSTAGRAM_APP_SECRET || '';
const clientName = 'bdj-contracting';

export async function submitContactForm(data: FormData) {
	const email = data.get('email') as string;
	const name = data.get('first-name') as string;
	const lastName = data.get('last-name') as string;
	const phone = data.get('phone') as string;
	const message = data.get('message') as string;

	await sendMail({
		from: email,
		to: 'mattoskamp@gmail.com',
		subject: 'New Contact Form Submission',
		text: message,
		html: `<h1>New Contact Form Submission</h1>
    <p>First Name: ${name}</p>
    <p>Last Name: ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Message: ${message}</p>`
	});

	return {
		status: 'success'
	}
}

export async function refreshToken(clientName: string, access_token: string, user_id: string) {
	// get the long-lived token
	const response2 = await fetch(`https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${INSTAGRAM_APP_SECRET}&access_token=${access_token}`);

	const data2 = await response2.json();

	const {
		access_token: long_lived_token,
		expires_in
	} = data2;

	// save the token
	await updateToken(clientName, {
		instagram_access_token: long_lived_token,
		instagram_user_id: user_id,
		expires_in
	});

	return long_lived_token;
}