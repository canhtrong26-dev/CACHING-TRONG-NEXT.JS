'use client';

import { useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export default function UsersList() {
 const { data, error, isLoading } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
});

  if (isLoading) return <div>Đang tải dữ liệu...</div>;
  if (error) return <div>Có lỗi xảy ra: {error.message}</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}