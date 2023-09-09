import wretch from "wretch";

export const subscribe = (email: string) =>
  wretch("https://api-eko-bazarek.azurewebsites.net/api/subscribe").post({
    email,
  });
