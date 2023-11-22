import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import Spinner from "../../ui/Spinner";

function Logout() {
  const { isLoading, mutate } = useLogout();

  if (isLoading) return <Spinner />;

  return (
    <ButtonIcon onClick={mutate} disabled={isLoading}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default Logout;
