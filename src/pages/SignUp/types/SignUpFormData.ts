import { SignInFormData } from "../../SignIn/types/SignInFormData";

export interface SignUpFormData extends SignInFormData {
  firstName?: string;
  lastName?: string;
  confirmPassword: string;
}