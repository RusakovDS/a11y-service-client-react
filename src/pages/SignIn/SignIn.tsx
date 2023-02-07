import { useLocation, useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../services/apis/authApi";
import { setCredentials } from "../../services/slices/authSlice";
import { useAppDispatch } from "../../services/store";
import LoginForm from "./components/LoginForm";
import { SignInFormData } from "./types/SignInFormData";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const [signin, { isLoading, error }] = useSignInMutation();

  const fromPage = location?.state?.from?.pathname || '/dashboard'

  async function onSignIn(data: SignInFormData) {
    const response = await signin(data).unwrap();
    if (response) {
      dispatch(setCredentials(response));
      navigate(fromPage)
    }
  }

  return (
    <div className="flex h-[50vh] items-center justify-center">
      <div className="w-1/3">
        <LoginForm
          isLoading={isLoading}
          serverError={error}
          onSignIn={onSignIn}
        />
      </div>
    </div>
  );
};

export default SignIn;
