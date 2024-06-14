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
import { api } from "~/trpc/react";

function SignUpPage() {
  const { isPending, mutate: signUp } = api.userRouter.createUser.useMutation();
  const signinForm = useForm<z.infer<typeof CredentialsSchema>>({
    resolver: zodResolver(CredentialsSchema),
  });

  const onSubmit = async (values: z.infer<typeof CredentialsSchema>) => {
    signUp(values);
  };

  return (
    <main className="flex justify-center md:mt-24">
      <Card className="w-[30rem]">
        <CardHeader className="text-2xl font-semibold">Welcome!</CardHeader>
        <CardContent>
          <Form {...signinForm}>
            <form id="login-form" onSubmit={signinForm.handleSubmit(onSubmit)}>
              <FormField
                control={signinForm.control}
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
                control={signinForm.control}
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
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

export default SignUpPage;
