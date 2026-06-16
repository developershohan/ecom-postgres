'use server'

import {prisma} from '@/db/prisma'
import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCT_LIMIT } from "@/lib/constants/index";

export async function getLatestProducts() {
  
  const products = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: { createdAt: 'desc' },
  });

  return convertToPlainObject(products);
}

//get single product by its slug
export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findUnique({
    where: { slug },
  });
  return convertToPlainObject(product);
}