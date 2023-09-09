import "./Header.style.css";
import { IconButtons } from "./IconButtons";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="Header-root">
      <Logo />
      <Navigation />
      <IconButtons />
    </header>
  );
};
