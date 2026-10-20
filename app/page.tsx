import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Trang chủ</h1>
      <Link href="/users">Xem danh sách người dùng</Link>
    </div>
  );
}