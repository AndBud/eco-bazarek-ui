import { toast } from "react-toastify";
import { Content, Home } from "../components";

export const HomePage = () => {
  const notify = () => toast("Wow so easy!", { type: "error" });
  return (
    <Content title="Home page">
      <Home />
    </Content>
  );
};
