import { useQuery } from "@tanstack/react-query";

export interface User {
  id: number;
  name: string;
  email: string;
}

export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      return res.json();
    },
  });
};
