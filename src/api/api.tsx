import wretch from "wretch";

export const subscribe = (email: string) =>
  wretch("https://api-eko-bazarek.azurewebsites.net/api/subscribe").post({
    email,
  });

export const contact = (
  name: string,
  email: string,
  subject: string,
  phone?: string,
  message?: string
) =>
  wretch("https://api-eko-bazarek.azurewebsites.net/api/contact").post({
    name,
    email,
    phone,
    subject,
    message,
  });

export const loginUser = (email: string, password: string) =>
  wretch("https://api-eko-bazarek.azurewebsites.net/api/users/login").post({
    email,
    password,
  });

export const categoriesTop = () =>
  wretch(
    "https://api-eko-bazarek.azurewebsites.net/api/products/categories/top"
  )
    .get()
    .json((json) => {
      return json;
    });

export const productsList = () =>
  wretch("https://api-eko-bazarek.azurewebsites.net/api/products")
    .get()
    .json((json) => {
      return json;
    });
