import { useQuery } from "@tanstack/react-query";
import api from "../../api";

type User = {
  id: string;
  created_at: string;
  updated_at: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
  avatar_url: string | null;
};
async function getCurrentUser() {
  const { data, error } = await api<{ data: User }>("/api/@me");
  if (error) throw error;
  return data.data;
}

export default function useCurrentUser() {
  const {
    data: currentUser,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["@me"],
    queryFn: async () => getCurrentUser(),
  });
  return { currentUser, isLoading, isError, error };
}
