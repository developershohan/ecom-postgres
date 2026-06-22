'use server'

import {signInFormSchema} from '@/lib/validators'
import { isRedirectError } from 'next/dist/client/components/redirect-error'
import { signIn, signOut } from 'next-auth/react'


//signin user
export async function signInUser( prevState: unknown, formData: FormData) {
    try {
        const validatedData = signInFormSchema.parse({
            email: formData.get('email'),
            password: formData.get('password')
        });

        // const user = await prisma.user.findUnique({
        //     where: { email: validatedData.email }
        // })
        // if (!user) return {error: 'User not found'}

        // const isPasswordValid = await compare(validatedData.password, user.password)

        // if (!isPasswordValid) return {error: 'Invalid password'}

        await signIn('credentials', {email: validatedData.email, password: validatedData.password})

        return {message: 'User signed in successfully'}
    } catch (error) {
       if(isRedirectError(error)) {
            throw error
       }

       return {success: false, message: 'Invalid email or password'}
    }
}

export async function signOutUser(){
    await signOut()
}