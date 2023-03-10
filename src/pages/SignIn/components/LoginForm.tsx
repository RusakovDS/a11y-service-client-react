import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import FormValidationError from "../../../components/FormValidationError";
import HorizontalLine from "../../../components/HorizontalLine";
import Spinner from "../../../components/Spinner";
import { SignInFormData } from "../types/SignInFormData";

interface Props {
  isLoading: boolean;
  // smells
  serverError?: FetchBaseQueryError | SerializedError;
  onSignIn: (data: SignInFormData) => Promise<void>;
}

const LoginForm: React.FC<Props> = ({ isLoading, serverError, onSignIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    onSignIn(data);
  };
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-center font-headings text-3xl font-bold">
        Log in to A11y Checker
      </h1>
      <form className="w-96" onSubmit={handleSubmit(onSubmit)}>
        <div className="h-[86px]">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            className={`w-full rounded-md border p-3 outline-none transition-colors hover:border-blue-600 focus:border-blue-600 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            id="email"
            placeholder="Email"
            type="text"
            {...register("email", { required: "Email is required." })}
          />
          <FormValidationError
            isShowing={errors.email?.type === "required"}
            message={errors.email?.message}
          />
        </div>
        <div className="h-[86px]">
          <label className="sr-only" htmlFor="email">
            Password
          </label>
          <input
            className={`w-full rounded-md border p-3 outline-none transition-colors hover:border-blue-600 focus:border-blue-600 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            id="password"
            placeholder="Password"
            type="password"
            {...register("password", { required: "Password is required." })}
          />
          <FormValidationError
            isShowing={errors.password?.type === "required"}
            message={errors.password?.message}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="flex w-1/2 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-center text-white transition hover:bg-blue-600 disabled:bg-blue-300"
            disabled={isLoading}
          >
            {isLoading && <Spinner />}
            <span>Login</span>
          </button>
          <a href="#">Forgot your password?</a>
        </div>
      </form>
      <FormValidationError
        isShowing={typeof serverError !== "undefined" && "data" in serverError}
        message={typeof serverError !== "undefined" ? serverError.data.message : ''}
      />
      <HorizontalLine />
      <div>
        Don't have an account yet?  
        <Link
          to="/signup"
          className="text-blue-600 font-semibold hover:underline dark:text-blue-500"

        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
