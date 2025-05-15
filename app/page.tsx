import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">三角ロジック組立演習システム</h1>
      <Button className="mt-40">学習スタート</Button>
      <Button className="mt-10">ログイン</Button>
    </main>
  );
}
