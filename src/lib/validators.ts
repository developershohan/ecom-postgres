import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z.string().refine((val) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(val))), "Invalid price format")

export const insertProductSchema = z.object({
    name: z.string().min(1, "Name is required"),
    slug: z.string().min(1, "Slug is required"),
    description: z.string().min(1, "Description is required"),
    category: z.string().min(1, "Category is required"),
    brand: z.string().min(1, "Brand is required"),
    stock: z.number().min(0, "Stock must be a positive number"),
    price: currency,
    images: z.array(z.string().url("Invalid image URL")).min(1, "Image is required"),
    isFeatured: z.boolean(),
    isActive: z.boolean().optional(),
});

export const signInFormSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})
export const registerFormSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})