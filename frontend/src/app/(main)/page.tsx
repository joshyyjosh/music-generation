import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "~/lib/auth";
import { redirect } from "next/navigation";
import CreateSong from "~/components/create";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <p>Dashboard</p>
      <CreateSong />
    </main>
  );
}
