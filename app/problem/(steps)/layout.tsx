export default function ProblemStepLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4 min-h-[calc(100vh-8rem)]">
        {/* 左側：問題文エリア */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="prose max-w-none">
            {children}
          </div>
        </div>

        {/* 右側：操作エリア */}
        <div className="relative">
          {/* 操作エリアのコンテンツ */}
          <div className="bg-white p-4 rounded-lg shadow h-full">
            {/* ここに各ステップ固有の操作UIが入ります */}
          </div>

          {/* FAB（右下の固定ボタン） */}
          <div className="absolute bottom-4 right-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg">
              答え合わせ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 