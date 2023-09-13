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
