import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Subscribe } from "./Subscribe";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex flex-row items-end justify-center w-full h-min-[514px] bg-bazarek-brown-dark text-white p-4">
      <section className="flex flex-col items-center w-[1045px]">
        <EnvelopeIcon className="w-[80px] stroke-[1px]" />
        <div className="mt-6 text-2xl uppercase"> Subskrybuj</div>
        <div className="mt-4">
          Bądź pierwszym, który dowie się o naszych nowych produktach
        </div>
        <Subscribe />
        <nav className="flex flex-row items-center h-[42px] mt-6">
          <ul className="flex flex-row">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <img
                  className="w-[36px] h-[36px] mx-3 object-cover"
                  style={{ objectPosition: 0 }}
                  src="./src/assets/fb.svg"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <img
                  className="w-[36px] h-[36px] mx-3 object-cover"
                  style={{ objectPosition: 0 }}
                  src="./src/assets/instagram.svg"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank">
                <img
                  className="w-[36px] h-[36px] mx-3 object-cover"
                  style={{ objectPosition: 0 }}
                  src="./src/assets/linkedin.svg"
                />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/" target="_blank">
                <img
                  className="w-[36px] h-[36px] mx-3 object-cover"
                  style={{ objectPosition: 0 }}
                  src="./src/assets/twitter.svg"
                />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                <img
                  className="w-[36px] h-[36px] mx-3 object-cover"
                  style={{ objectPosition: 0 }}
                  src="./src/assets/youtube.svg"
                />
              </a>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-row items-center justify-center w-full h-[64px] mt-2 border-t-[1px] border-b-[1px] border-t-bazarek-grey-main border-b-bazarek-grey-main">
          <ul className="flex flex-row">
            <li>
              <Link to="about-us" className="px-5 hover:text-gray-400">
                O nas
              </Link>
            </li>
            <li>
              <Link to="products" className="px-5 hover:text-gray-400">
                Produkty
              </Link>
            </li>
            <li>
              <Link to="contact" className="px-5 hover:text-gray-400">
                Kontakt
              </Link>
            </li>
            <li>
              <Link to="terms-of-use" className="px-5 hover:text-gray-400">
                Warunki użytkowania
              </Link>
            </li>
            <li>
              <Link to="privacy-policy" className="px-5 hover:text-gray-400">
                Polityka prywatności
              </Link>
            </li>
          </ul>
        </nav>
        <p className="mt-4">
          © 2023, EcoBazarek Store Powered By Domino, App icons by{" "}
          <a
            className="underline"
            href="https://icons8.com/icon/set/food/color"
            target="_blank"
            rel="noopener noreferer"
          >
            icons8
          </a>
        </p>
      </section>
    </footer>
  );
};
