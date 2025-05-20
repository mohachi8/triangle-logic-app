import { Button } from "@/components/ui/button";
import Link from "next/link";
import ArgumentCard from "@/components/problem/ArgumentCard";

export default function ProblemStep1Page() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">演習 ステップ1</h1>
      <div className="space-y-4">
        <p>以下の論証を読んで下さい。</p>
        <ArgumentCard />
        <Link href="/problem/step2">
          <Button className="mt-4">
            次へ
          </Button>
        </Link>
      </div>
    </>
  )
} 