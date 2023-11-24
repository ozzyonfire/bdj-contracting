'use client';

import { Button } from "@/components/ui/button";
import { submitContactForm } from "./actions";
import { useRef, useState } from "react";

export default function ContactUs() {
	const [isSuccess, setIsSuccess] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	const handleFormSubmit = async (formData: FormData) => {
		const response = await submitContactForm(formData);
		if (response.status === 'success') {
			setIsSuccess(true);
			// reset the form
			formRef.current?.reset();
		}
	}

	return (
		<section id="contact-us" className="w-full flex flex-col min-h-screen bg-gradient-to-b dark:from-gray-900 from-50% dark:to-gray-950 relative from-gray-50 to-gray-100">
			<div className="container my-12 flex flex-col gap-4 flex-grow h-full">
				<div className="flex flex-col gap-4">
					<h2 className="text-5xl font-serif font-bold text-center">
						Contact Us
					</h2>
					<p className="text-xl font-sans dark:text-gray-300 text-gray-800 font-light text-center">
						Let&apos;s get started on your next project.
					</p>
				</div>
				<div className="flex-grow flex flex-col justify-center">
					<form className='min-w-[480px] max-w-screen-md mx-auto' action={handleFormSubmit} ref={formRef}>
						<div className='flex flex-col gap-2'>
							{isSuccess && (
								<div className="bg-green-500 bg-opacity-50 dark:text-white text-center p-4 rounded-md">
									<p>Thank you for contacting us. We will get back to you within 24 hours.</p>
								</div>
							)}
							<CustomInput autoComplete='off' placeholder='First name' type="text" name="first-name" required />
							<CustomInput autoComplete='off' placeholder='Last name' type="text" name="last-name" required />
							<CustomInput autoComplete='off' placeholder="Email" type="email" required name="email" />
							<CustomInput placeholder="Phone" name="phone" />
							<CustomTextarea placeholder="Message" required name="message" />
							<div className="flex justify-center mt-4">
								<Button variant="default" size="lg" type="submit">Send</Button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

function CustomInput(props: CustomInputProps) {
	const { label, ...other } = props;
	return (
		<div className="relative">
			<input
				className="w-full px-4 py-2 border bg-transparent border-gray-700 rounded-md focus:ring-primary focus:border-primary"
				{...other}
			/>
		</div>
	)
}

function CustomTextarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
	return (
		<div className="relative">
			<textarea
				rows={4}
				className="w-full px-4 py-2 border bg-transparent border-gray-700 rounded-md focus:ring-primary focus:border-primary"
				{...props}
			/>
		</div>
	)
}