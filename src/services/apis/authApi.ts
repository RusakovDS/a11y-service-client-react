
import { SignInFormData } from '../../pages/SignIn/types/SignInFormData'
import { SignUpFormData } from '../../pages/SignUp/types/SignUpFormData'
import { UserState } from '../types'
import { apiSlice } from './baseApi'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<UserState, SignInFormData>({
      query: (credentials) => ({
        url: 'auth/signin',
        method: 'POST',
        body: credentials
      }),
    }),
    signUp: builder.mutation<UserState, SignUpFormData>({
      query: (credentials) => ({
        url: 'auth/signup',
        method: 'POST',
        body: credentials
      })
    }),
    logOut: builder.mutation<boolean, void>({
      query: () => ({
        url: 'auth/logout',
        method: 'POST'
      })
    }),
    refreshToken: builder.mutation<{token: string}, void>({
      query: () => ({
        url: 'auth/refresh',
        method: 'POST'
      })
    })
  })
})

export const { useSignInMutation, useSignUpMutation, useLogOutMutation, useRefreshTokenMutation } = authApi