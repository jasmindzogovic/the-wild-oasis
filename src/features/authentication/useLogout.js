import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: logout,
    mutationKey: ["user"],
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("login", { replace: true });
    },
  });

  return { isLoading, mutate };
}
