import { Content, Submit } from "../components";
import { Map } from "../components/Map/Map";

export const ContactPage = () => {
  return (
    <Content title="Contact page">
      <div
        className="absolute mt-[142px] ml-[20%] h-[202px] w-[514px] bg-white
       border-[1px] border-solid border-bazarek-border-light border-r-[4px] z-10
        uppercase text-[20px] font-black text-bazarek-brown-dark
        py-5 px-6"
      >
        Przyjedź do nas
      </div>
      <h1 className="mt-[72px] ml-[161px] text-5xl text-bazarek-brown-dark font-black uppercase">
        Kontakt
      </h1>
      <div className="mt-[34px] h-[432px]">
        <Map />
      </div>
      <h2 className="mt-[42px] ml-[161px] text-xl font-sans text-bazarek-brown-dark font-black uppercase">
        Napisz wiadomość
      </h2>
      <Submit />
    </Content>
  );
};
