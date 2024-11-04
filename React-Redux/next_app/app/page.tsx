import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">골라보세요</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center shadow-md hover:bg-blue-600">
          <Link href="/dog" className="text-lg font-semibold">
            강아지
          </Link>
        </div>
        <div className="bg-pink-500 text-white p-4 rounded-lg text-center shadow-md hover:bg-pink-600">
          <Link href="/cat" className="text-lg font-semibold">
            고양이
          </Link>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg text-center shadow-md hover:bg-yellow-600">
          <Link href="/rabbit" className="text-lg font-semibold">
            토끼
          </Link>
        </div>
      </div>
    </div>
  );
}
