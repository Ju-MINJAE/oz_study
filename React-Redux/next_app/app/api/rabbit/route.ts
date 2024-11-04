import { NextResponse } from 'next/server';

export async function GET() {
  const rabbit_data = {
    message: '저는 귀여운 토끼입니다.',
    image:
      'https://i.pinimg.com/564x/27/d0/ce/27d0ce39cbe42aa70c60c8bb31accf85.jpg',
  };

  return NextResponse.json(rabbit_data);
}
