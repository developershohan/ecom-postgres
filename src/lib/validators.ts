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
    isActive: z.boolean(),
});