import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteCabin } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      toast.success("Cabin succesfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isLoading, mutate };
}
