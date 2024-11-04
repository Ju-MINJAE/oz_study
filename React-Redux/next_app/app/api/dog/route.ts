import { NextResponse } from 'next/server';

export async function GET() {
  const dog_data = {
    message: '저는 귀여운 강아지입니다.',
    image:
      'https://i.pinimg.com/564x/97/9a/4f/979a4f45799cd1f20da97048c27b6339.jpg',
  };

  return NextResponse.json(dog_data);
}
