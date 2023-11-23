import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUp,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created. Please verify the new account from the users email address."
      );
    },
  });

  return { signup, isLoading };
}
