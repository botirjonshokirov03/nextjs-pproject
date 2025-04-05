"use client";

import { useUsers } from "../hooks/useUsers";
import { useFilterStore } from "../store/filterStore";

export default function HomePage() {
  const { data: users, isLoading } = useUsers();
  const { nameFilter, setNameFilter } = useFilterStore();

  const filteredUsers = users?.filter((user) =>
    user.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <input
        type="text"
        value={nameFilter}
        onChange={(e) => setNameFilter(e.target.value)}
        placeholder="Filter by name..."
        className="w-full p-2 border rounded mb-4"
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {filteredUsers?.map((user) => (
            <li key={user.id} className="p-4 border rounded shadow">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
