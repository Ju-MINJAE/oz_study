import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <nav className="bg-white shadow-md p-4">
          <ul className="flex space-x-4 justify-center">
            <li>
              <Link
                href="/"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                홈
              </Link>
            </li>
            <li>
              <Link
                href="/dog"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                강아지
              </Link>
            </li>
            <li>
              <Link
                href="/cat"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                고양이
              </Link>
            </li>
            <li>
              <Link
                href="/rabbit"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                토끼
              </Link>
            </li>
          </ul>
        </nav>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
