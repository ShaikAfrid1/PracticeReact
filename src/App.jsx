import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import { nanoid } from "nanoid";

const App = () => {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        setusers(data);
      } catch (err) {
        seterror(err.message);
      } finally {
        setloading(false);
      }
    }

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return <div className="text-[#ECDFCC] text-3xl">Loading Users...</div>;

  if (error) return <div className="text-red-500 text-3xl">{error}</div>;

  return (
    <div className="min-h-screen min-w-full bg-black text-white p-4 flex flex-col">
      <h1 className="font-bold text-3xl mb-4">User List</h1>
      <input
        id={nanoid()}
        type="text"
        placeholder="Search users by name"
        className="mb-4 p-2 rounded bg-[#181C14] focus:outline-none focus:ring-2 focus:ring-[#697565]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="gap-4  flex flex-col">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            isActive={user.name.startsWith("E")}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
