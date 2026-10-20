import Link from 'next/link';
import UsersList from './UsersList';

export default function UsersPage() {
  return (
    <div>
      <h1>Danh sách người dùng</h1>
      <Link href="/">Về trang chủ</Link>
      <UsersList />
    </div>
  );
}