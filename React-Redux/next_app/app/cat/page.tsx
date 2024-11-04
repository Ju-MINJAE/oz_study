import Link from 'next/link';

export default async function CatPage() {
  try {
    const res = await fetch('http://localhost:3000/api/cat');
    const data = await res.json();

    console.log('API 데이터:', data);

    return (
      <div className="mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-4">고양이</h1>

        <div className="api text-center bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">API 데이터:</h2>
          <img
            src={data.image}
            alt="고양이 이미지"
            className="mx-auto rounded-lg mb-4"
          />
          <p className="text-lg">{data.message}</p>
        </div>

        <Link
          href="/"
          className="inline-block mt-6 text-blue-500 hover:text-blue-700 font-medium"
        >
          ← 홈으로 돌아가기
        </Link>
      </div>
    );
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생:', error);
    return (
      <div className="mx-auto p-6 text-center">
        <p className="text-red-500 text-lg font-semibold">
          오류가 발생했습니다.
        </p>
      </div>
    );
  }
}
