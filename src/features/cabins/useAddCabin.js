import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useAddCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isAdding, mutate: addCabin } = useMutation({
    mutationFn: addEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully added");

      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isAdding, addCabin };
}
