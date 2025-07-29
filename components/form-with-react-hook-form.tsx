"use client";
import { type FieldValues, useForm } from "react-hook-form";

export default function FormWithReactHookForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		getValues,
	} = useForm();
	const onSubmit = async (data: FieldValues) => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-y-2 max-w-xl items-center justify-center mx-auto py-6 min-h-screen"
		>
			<input
				{...register("email", { required: "Email is required" })}
				type="email"
				placeholder="Email"
				className="px-4 py-2  border rounded w-full border-slate-100"
			/>
			{errors.email && (
				<span className="text-red-500">{`${errors.email.message}`}</span>
			)}
			<input
				{...register("password", { required: "Password is required" })}
				type="password"
				placeholder="Password"
				className="px-4 py-2  border rounded w-full border-slate-100"
			/>
			{errors.password && (
				<span className="text-red-500">{`${errors.password.message}`}</span>
			)}
			<input
				{...register("confirmPassword", {
					required: "Confirm password is required",
					validate: (value) =>
						value === getValues("password") || "Passwords do not match",
				})}
				type="password"
				placeholder="Confirm password"
				className="px-4 py-2  border rounded w-full border-slate-100"
			/>
			{errors.confirmPassword && (
				<span className="text-red-500">{`${errors.confirmPassword.message}`}</span>
			)}
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
