"use server";

import { signInFormSchema } from "@/lib/validators";
import { signIn, signOut } from "next-auth/react";
import { isRedirectError } from "next/dist/client/components/redirect-error";

//signin user
export async function signInUser(prevState: unknown, formData: FormData) {
  try {
    const validatedData = signInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    console.log("validatedData", validatedData);

    await signIn("credentials", {
      email: validatedData.email,
      password: validatedData.password,
    });

    return { success: true, message: "User signed in successfully" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return { success: false, message: "Invalid email or password" };
  }
}

export async function signOutUser() {
  await signOut();
}
