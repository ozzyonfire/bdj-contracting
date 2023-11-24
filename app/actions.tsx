import { sendMail } from "@/lib/mailer";

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