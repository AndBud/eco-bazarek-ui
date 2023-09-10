import { Content } from "../components";
import { Map } from "../components/Map/Map";
import { TextField } from "../components";

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
      <div className="flex flex-col">
        <TextField
          label="Imię i nazwisko"
          className="w-[690px] mt-[50px] ml-[161px]"
          required={true}
        />
        <div className="flex flex-row">
          <TextField
            label="Email"
            className="w-[337px] mt-[51px] ml-[162px]"
            required={true}
          />
          <TextField
            label="Telefon"
            className="w-[337px] mt-[51px] ml-[15px]"
          />
        </div>
        <TextField
          label="Temat"
          className="w-[690px] mt-[51px] ml-[161px]"
          required={true}
        />
        <TextField
          label="Wiadomość"
          className="w-[690px] h-[123px] mt-[41px] ml-[161px]"
        />
      </div>
      <div className="flex flex-row mt-[41px] mb-[113px] justify-center">
        {/* reset and add buttons */}
      </div>
    </Content>
  );
};
