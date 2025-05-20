import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

export default function ProblemStepLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="container mx-auto p-4 h-screen">
        {children}
      </div>
  )
} 