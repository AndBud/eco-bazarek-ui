import { Content } from "../components";
import aboutUsImage from "../assets/about-us-hero.png";
import aboutUsVideo from "../assets/drone_-_121951 (720p).mp4";

export const AboutUsPage = () => {
  return (
    <Content title="AboutUs page">
      <div className="flex flex-col items-center">
        <img src={aboutUsImage} className="h-[530px] w-[1044px]" />
      </div>
      <h1 className="mt-[40px] ml-[161px] text-5xl text-bazarek-brown-dark font-black uppercase">
        O nas
      </h1>
      {/* why is text recolor not working? */}
      <p className="mt-[35px] mx-[161px] text-[16px] font-normal text-left text-bazarek-grey-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel est
        eget diam laoreet mattis. Integer metus eros, tempor ut finibus id,
        malesuada at ligula. Vivamus sodales iaculis porta. Maecenas lectus
        lectus, aliquam a risus non, viverra placerat nibh. Fusce sed consequat
        purus. In eleifend ligula sit amet euismod efficitur. Morbi dapibus id
        sem ultricies vehicula. Proin pellentesque pharetra nibh, ac aliquam
        justo vehicula vitae. Curabitur porta dictum euismod. Nullam at risus a
        risus bibendum mollis. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Cras porttitor libero odio,
        pretium egestas elit tempor sed. Cras placerat urna est, sit amet
        porttitor diam iaculis at. Nulla odio orci, ullamcorper ut neque nec,
        molestie tempor purus. Suspendisse tincidunt elit vitae ex eleifend
        efficitur. Nam ultricies velit sit amet tortor eleifend venenatis. Proin
        vitae tortor a libero tincidunt bibendum. Quisque ultricies varius
        lacus, quis commodo eros tempor vel. Suspendisse in ligula congue,
        condimentum sem vel, imperdiet erat. Integer metus leo, varius eget
        imperdiet nec, iaculis eget magna. Suspendisse lacinia pellentesque
        nibh, eget mollis nunc dapibus at. Fusce eget sagittis velit. Ut aliquam
        mattis sodales. Nunc ullamcorper pulvinar varius. Curabitur massa ipsum,
        auctor non eros non, consectetur faucibus nibh.
      </p>
      <h1 className="mt-[16px] ml-[161px] text-5xl text-bazarek-brown-dark font-black uppercase">
        Nasze uprawy z lotu ptaka
      </h1>
      <div className="flex flex-col items-center mt-[35px] mb-[492px]">
        <video
          src={aboutUsVideo}
          autoPlay
          muted
          className="h-[587px] w-[1044px]"
        />
      </div>
    </Content>
  );
};
