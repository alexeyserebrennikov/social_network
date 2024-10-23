'use client';

import { useEffect, useState } from 'react';

interface User {
  id: number;        
  name: string; 
  email: string;   
}

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} {user.email}</li>
        ))}
      </ul>
    </div>
  );
}