"use client";

import { signOut } from "next-auth/react";
import { Button } from "~/components/ui/button";

function LogOutButton() {
  return <Button onClick={() => signOut()}>Logout</Button>;
}

export default LogOutButton;
