import { sendMail } from "@/lib/mailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = request.body;
  console.log(body);

  const formData = await request.formData();
  console.log(formData);

  const data = Object.fromEntries(formData.entries());
  console.log(data);

  await sendMail({
    from: data['email'] as string,
    to: 'mattoskamp@gmail.com',
    subject: 'New Contact Form Submission',
    text: data['message'] as string,
    html: `<h1>New Contact Form Submission</h1>
    <p>First Name: ${data['first-name']}</p>
    <p>Last Name: ${data['last-name']}</p>
    <p>Email: ${data['email']}</p>
    <p>Phone: ${data['phone']}</p>
    <p>Message: ${data['message']}</p>`
  })

  const url = new URL(request.url);
  console.log(url.origin);
  const redirect_uri = `${url.origin}?success=true`;
  console.log(redirect_uri);
  return NextResponse.redirect(redirect_uri, 302);
}