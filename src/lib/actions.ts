"use server";

import { ActionResult } from "@/types";
import { redirect } from "next/navigation"
import { schemaSignIn } from "./schema";


export async function SignIn(
    _: unknown,
    formData: FormData
): Promise<ActionResult> {

    console.log(formData.get('email'));

    const validate = schemaSignIn.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    })

    if (!validate.success) {
        console.log(validate);

        return {
            error: validate.error.errors[0].message
        }
    }
    return redirect('/dashboard/sign-in');
}