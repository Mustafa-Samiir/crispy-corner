import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";

// En gemensam hook som både listan och detaljsidan använder.
// Samma queryKey betyder att datan delas via cachen – detaljsidan gör alltså inga extra anrop.
export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
}
