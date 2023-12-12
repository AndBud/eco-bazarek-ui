import { BASE_URL } from "./consts";
import wretch from "wretch";
import {
  Category,
  CreateUserProfile,
  LoginUserResponse,
  ResouceBase,
  UserProfile,
} from "./types";
import axios, { AxiosResponse } from "axios";

export const subscribe = (email: string) =>
  wretch(BASE_URL + "/subscribe").post({ email });

export const contact = (
  name: string,
  email: string,
  subject: string,
  phone?: string,
  message?: string
) =>
  wretch(BASE_URL + "/contact").post({
    name,
    email,
    phone,
    subject,
    message,
  });

export const loginUser = (email: string, password: string) =>
  wretch(BASE_URL + "/users/login").post({ email, password });

export const createUserAxios = (
  newUser: CreateUserProfile
): Promise<AxiosResponse<LoginUserResponse, unknown>> =>
  axios.post(BASE_URL + "/users", newUser);

export const updateUserAxios = (
  user: UserProfile,
  token: string
): Promise<AxiosResponse<LoginUserResponse, unknown>> =>
  axios.put(BASE_URL + "/users", user, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getUserByToken = (
  token: string
): Promise<AxiosResponse<UserProfile, unknown>> =>
  axios.get(BASE_URL + "/users/me", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const changePassowrd = (
  token: string,
  oldPassword: string,
  newPassword: string
): Promise<AxiosResponse<unknown, unknown>> =>
  axios.post(
    BASE_URL + "/users/change-password",
    { oldPassword, newPassword },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

export const categoriesTop = () =>
  wretch(BASE_URL + "/products/categories/top")
    .get()
    .json((json) => {
      return json;
    });

export const productsList = () =>
  wretch(BASE_URL + "/products")
    .get()
    .json((json) => {
      return json;
    });

export const getTypes = (): Promise<AxiosResponse<ResouceBase[], unknown>> =>
  axios.get(BASE_URL + "/products/types", {});

export const getUnits = (): Promise<AxiosResponse<ResouceBase[], unknown>> =>
  axios.get(BASE_URL + "/products/units", {});

export const getCategories = (): Promise<AxiosResponse<Category[], unknown>> =>
  axios.get(BASE_URL + "/products/categories", {});
