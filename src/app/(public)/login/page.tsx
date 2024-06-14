"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { CredentialsSchema } from "~/common/validators/credentialsValidator";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

function LoginPage() {
  const loginForm = useForm<z.infer<typeof CredentialsSchema>>({
    resolver: zodResolver(CredentialsSchema),
  });

  const onSubmit = async (values: z.infer<typeof CredentialsSchema>) => {
    const result = await signIn("credentials", values);
    console.log(result);
  };

  return (
    <main className="flex justify-center md:mt-24">
      <Card className="w-[30rem]">
        <CardHeader className="text-2xl font-semibold">
          Welcome back!
        </CardHeader>
        <CardContent>
          <Form {...loginForm}>
            <form id="login-form" onSubmit={loginForm.handleSubmit(onSubmit)}>
              <FormField
                control={loginForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{field.name}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">{field.name}</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" form="login-form">
            Login
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

export default LoginPage;
