import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRefreshTokenMutation } from "../services/apis/authApi";
import { updateToken, logout } from "../services/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../services/store";

const useRefreshToken = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshToken] = useRefreshTokenMutation();

  const refreshAndUpdateToken = async () => {
    const data = await refreshToken().unwrap();
    dispatch(updateToken(data));
  };

  useEffect(() => {
    const refresh = async () => {
      try {
        await refreshAndUpdateToken();
      } catch (err) {
        dispatch(logout());
        navigate('/')
      } finally {
        setIsLoading((prev) => !prev);
      }
    };

    !token ? refresh() : setIsLoading((prev) => !prev);
  }, []);

  return isLoading;
};

export default useRefreshToken;
