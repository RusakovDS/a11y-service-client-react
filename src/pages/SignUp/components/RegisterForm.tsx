import { Transition } from "@headlessui/react";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormValidationError from "../../../components/FormValidationError";
import HorizontalLine from "../../../components/HorizontalLine";
import Spinner from "../../../components/Spinner";
import { SignUpFormData } from "../types/SignUpFormData";

interface Props {
  isLoading: boolean;
  // smells
  serverError?: FetchBaseQueryError | SerializedError;
  onSignUp: (data: SignUpFormData) => Promise<void>;
}

const RegisterForm: React.FC<Props> = ({
  isLoading,
  serverError,
  onSignUp,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    onSignUp(data);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-center font-headings text-3xl font-bold">
        Join to get our world more accessible!
      </h1>
      <form className="max-w-[480px]" onSubmit={handleSubmit(onSubmit)}>
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
        <div className="flex items-center gap-2">
          <div className="h-[86px]">
            <label className="sr-only" htmlFor="firstName">
              First name
            </label>
            <input
              className={`w-full rounded-md border  p-3 outline-none transition-colors hover:border-blue-600 focus:border-blue-600 ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
              id="firstName"
              placeholder="First name"
              type="text"
              {...register("firstName", {
                required: "First name is required.",
              })}
            />
            <FormValidationError
              isShowing={errors.firstName?.type === "required"}
              message={errors.firstName?.message}
            />
          </div>
          <div className="h-[86px]">
            <label className="sr-only" htmlFor="lastName">
              Last name
            </label>
            <input
              className={`w-full rounded-md border  p-3 outline-none transition-colors hover:border-blue-600 focus:border-blue-600 ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
              id="firstName"
              placeholder="Last name"
              type="text"
              {...register("lastName", {
                required: "Last name is required.",
              })}
            />
            <FormValidationError
              isShowing={errors.lastName?.type === "required"}
              message={errors.lastName?.message}
            />
          </div>
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
        <div className="flex">
          <button
            type="submit"
            className="inline-flex flex-1 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-center text-white transition hover:bg-blue-600 disabled:bg-blue-300"
            disabled={isLoading}
          >
            {isLoading && <Spinner />}
            <span>Continue</span>
          </button>
        </div>
      </form>
      <FormValidationError
        isShowing={typeof serverError !== "undefined" && "data" in serverError}
        message={typeof serverError !== "undefined" ? serverError.data.message : ''}
      />
      <HorizontalLine />
      <p>
        Already have an account?
        <Link
          to="/signin"
          className="font-semibold text-blue-600 hover:underline dark:text-blue-500"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
