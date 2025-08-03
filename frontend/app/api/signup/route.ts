import { signUpSchema } from "@/lib/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const body: unknown = await request.json();

	const result = signUpSchema.safeParse(body);

	// check out Zod's .flatten() method for an easier way to process errors
	let zodErrors = {};
	if (!result.success) {
		result.error.issues.forEach((issue) => {
			zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
		});
	}

	return NextResponse.json(
		Object.keys(zodErrors).length > 0
			? { errors: zodErrors }
			: { success: true }
	);
}
// If you want to handle the success case, you can add logic here
// For example, you might want to save the user to a database
// and return a success response.
// However, this is not included in the current implementation.
// You can also add error handling for other potential issues, such as database errors.
// This is a basic implementation and can be extended as needed.
