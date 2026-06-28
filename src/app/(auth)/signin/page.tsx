import CredentialsSignInForm from "./credentialsSignInForm";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const session = await auth();
  const { callbackUrl = "/" } = await searchParams;

  if (session) {
    redirect(callbackUrl);
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <Link href="/" className="mx-auto mb-2 text-lg font-semibold">
            {APP_NAME}
          </Link>
          <CardTitle className="text-base">Sign in to your account</CardTitle>
          <CardDescription>
            Enter your credentials or use GitHub
          </CardDescription>
        </CardHeader>

        <CardContent>
          <CredentialsSignInForm />
        </CardContent>

        <CardFooter className="justify-center">
          <p className="text-xs text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-foreground underline underline-offset-4 hover:text-foreground/80"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
