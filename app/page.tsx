import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">三角ロジック組立演習システム</h1>
      <Link href="/problem">
        <Button className="mt-32">演習スタート</Button>
      </Link>
      <Link href="/problem-creation">
        <Button className="mt-4">作問スタート</Button>
      </Link>
      <Link href="/login">
        <Button variant="secondary" className="mt-10">ログイン</Button>
      </Link>
    </main>
  );
}
