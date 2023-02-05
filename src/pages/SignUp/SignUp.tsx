import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSignUpMutation } from "../../services/apis/authApi";
import { setCredentials } from "../../services/slices/authSlice";
import { useAppDispatch } from "../../services/store";
import RegisterForm from "./components/RegisterForm";
import { SignUpFormData } from "./types/SignUpFormData";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const [signup, { isLoading, error }] = useSignUpMutation();

  async function onSignUp(data: SignUpFormData) {
    const response = await signup(data).unwrap();
    if (response) {
      dispatch(setCredentials(response));
    }
  }

  return (
    <div className="m-auto flex h-screen justify-center">
      <div className="flex w-full items-center justify-end border-r border-gray-200 bg-gray-100 pr-10">
        <div className="flex max-w-[680px] flex-col gap-6">
          <h1 className="self-start font-headings text-5xl font-bold">
            Lorem ipsum dolor sit amet
          </h1>
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faCheckCircle} size="2x" className=" text-sky-500"/>
            <div>
              <h2 className="font-headings text-3xl font-bold">
                Lorem ipsum dolor sit amet consectetur
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                tempore ratione voluptatem sequi deserunt repellat veniam
                commodi qui! Dolor perspiciatis exercitationem, totam error
                minima incidunt facilis excepturi animi eaque repellat.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faCheckCircle} size="2x" />
            <div>
              <h2 className="font-headings text-3xl font-bold">
                Lorem ipsum dolor sit amet consectetur
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                tempore ratione voluptatem sequi deserunt repellat veniam
                commodi qui! Dolor perspiciatis exercitationem, totam error
                minima incidunt facilis excepturi animi eaque repellat.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faCheckCircle} size="2x" />
            <div>
              <h2 className="font-headings text-3xl font-bold">
                Lorem ipsum dolor sit amet consectetur
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                tempore ratione voluptatem sequi deserunt repellat veniam
                commodi qui! Dolor perspiciatis exercitationem, totam error
                minima incidunt facilis excepturi animi eaque repellat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-start pl-10">
        <RegisterForm
          isLoading={isLoading}
          serverError={error}
          onSignUp={onSignUp}
        />
      </div>
    </div>
  );
};

export default SignUp;
