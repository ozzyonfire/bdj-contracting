import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'matt@ecstasycrafts.com',
    pass: process.env.GMAIL_PASS,
  }
});

export function sendMail(mailOptions: MailOptions) {
  return new Promise<SMTPTransport.SentMessageInfo>((resolve, reject) => {
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        reject(err);
      }
      resolve(info);
    });
  });
}