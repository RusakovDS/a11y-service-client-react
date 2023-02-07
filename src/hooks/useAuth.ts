import { useAppSelector } from "../services/store";

const useAuth = () => {
  const { user, token } = useAppSelector((state) => state.auth);

  return { user, token };
};

export default useAuth;
