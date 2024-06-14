import Link from "next/link";
import Signup from "./signup/page";

export default async function Home() {
  return (
    <main className="flex items-center justify-center w-full h-screen flex-col gap-2">
      <h1 className="text-6xl">HOME PAGE</h1>
      <Link className="btn btn-link" href="/signup">Aller a l&apos;authentification</Link>
      <Link className="btn btn-link" href="/dashboard">Accéder au dashboard</Link>
    </main>
  );
}
