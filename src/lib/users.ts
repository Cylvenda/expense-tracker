type UserRole = "Admin" | "Developer" | "User";

interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

export const users: User[] = [
  {
    id: 1,
    name: "Alex Morgan",
    email: "alex@example.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Sam Wilson",
    email: "sam@example.com",
    role: "Developer",
  },
  {
    id: 3,
    name: "Jordan Lee",
    email: "jordan@example.com",
    role: "User",
  },
];
