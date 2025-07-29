"use client";
import React, { useState } from "react";

export default function FormWithoutReactHookForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState<string[]>([]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		if (password !== confirmPassword) {
			setErrors(["Passwords do not match"]);
			setIsSubmitting(false);
			return;
		}
		await new Promise((resolve) => setTimeout(resolve, 1000));
		// Simulate a server request
		setEmail("");
		setPassword("");
		setConfirmPassword("");
		setErrors([]);
		setIsSubmitting(false);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-y-2 max-w-xl items-center justify-center mx-auto py-6 min-h-screen"
		>
			{errors.length > 0 && (
				<div className="text-red-500">
					{errors.map((error, index) => (
						<p key={index}>{error}</p>
					))}
				</div>
			)}
			<input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
				type="email"
				placeholder="Email"
				className="px-4 py-2  border rounded w-full border-slate-100"
			/>
			<input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
				type="password"
				placeholder="Password"
				className="px-4 py-2  border rounded w-full border-slate-100"
			/>
			<input
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
				required
				type="password"
				placeholder="Confirm password"
				className="px-4 py-2  border rounded w-full border-slate-100"
			/>
			<button
				type="submit"
				disabled={isSubmitting}
				className="px-4 py-2 bg-blue-500 text-white rounded w-full disabled:bg-gray-500"
			>
				Submit
			</button>
		</form>
	);
}
