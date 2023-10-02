import { useContext, useState } from "react";
import { Button, Content, TextField } from "../components";
import { UserContext } from "../contexts/UserContext";
import { NavLink } from "react-router-dom";

export const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLogin, logining, login } = useContext(UserContext);
  return (
    <Content title="Profil uzytkownika" loading={logining}>
      {isLogin ? (
        <h1>Jesteś zalogowany</h1>
      ) : (
        <>
          Zaloguj się
          <TextField
            className="mt-4"
            inputProps={{
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
            }}
          />
          <TextField
            className="mt-4"
            inputProps={{
              type: "password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
            }}
          />
          <div className="mt-4 ml-4">
            <NavLink className="mr-4" to={"/registration"}>
              Zarejestruj się
            </NavLink>
            <Button onClick={async () => await login(email, password)}>
              Zaloguj się
            </Button>
          </div>
        </>
      )}
    </Content>
  );
};
