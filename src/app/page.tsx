import { getServerAuthSession } from "~/server/auth";
import LogOutButton from "./_components/logoutButton";

export default async function Home() {
  const session = await getServerAuthSession();
  return (
    <main>
      {session ? (
        <>
          {session.user.name} <LogOutButton />
        </>
      ) : (
        "Logged out"
      )}
    </main>
  );
}
