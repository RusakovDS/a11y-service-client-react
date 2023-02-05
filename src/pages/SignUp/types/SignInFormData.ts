export interface SignInFormData {
  email: string;
  password: string;
}

export interface SignUpFormData extends SignInFormData {
  firstName?: string;
  lastName?: string;
  confirmPassword: string;
}