import { Content } from "../components";
import { Map } from "../components/Map/Map";

export const ContactPage = () => {
  return (
    <Content title="Contact page">
      <h1 className="mt-[72px] ml-[161px] text-5xl text-bazarek-brown-dark font-black uppercase">
        Kontakt
      </h1>
      <div className="mt-[34px] h-[432px]">
        <Map />
      </div>
      <h2 className="mt-[42px] ml-[161px] text-xl font-sans text-bazarek-brown-dark font-black uppercase">
        Napisz wiadomość
      </h2>
    </Content>
  );
};
