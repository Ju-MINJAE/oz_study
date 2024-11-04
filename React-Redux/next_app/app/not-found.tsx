import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        404 - 페이지를 찾을 수 없습니다
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        죄송합니다, 요청하신 페이지는 존재하지 않습니다.
      </p>
      <Link href="/" className="text-blue-500 hover:text-blue-700 font-medium">
        ← 홈으로 돌아가기
      </Link>
    </div>
  );
}
