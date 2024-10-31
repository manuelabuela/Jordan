import jordan from "./assets/jordan.svg";
import logo from "./assets/logo.svg";
import Cards from "./Cards";
import imagem1 from "./assets/imagem1.svg";
import imagem2 from "./assets/imagem2.svg"
import imagem3 from "./assets/imagem3.svg"
import imagem4 from "./assets/imagem4.svg"
import imagem5 from "./assets/imagem5.svg"
import imagem6 from "./assets/imagem6.svg"

export default function App() {
  return (
    <body className=" w-full h-full font-Archivo">
      <div className=" bg-[#F3F7FF] flex justify-center items-center h-[48px] font-semibold text-lg">
        <p>Frete gratis para todo o Brasil</p>
      </div>
      <div className=" mb-16">
        <img src={jordan} className="" />
        <div className=" absolute inset-0 bg-cover bg-center mt-24 ml-[280px] text-white">
          <img src={logo} />
          <p className=" mt-5 text-xl font-semibold">A melhor loja de Jordan</p>
          <p className=" mt-4">
            O tênis Jordan é fruto de uma velha e forte <br />
            parceria entre a Nike e o jogador Michael Jordan
          </p>
        </div>
      </div>
      <div className=" mb-26">
        <p className=" font-bold text-xl flex justify-center items-center mt-1 mb-3">
          Os melhores em um só lugar
        </p>
        <p className=" flex justify-center items-center text-lg font-medium">
          A marca Jordan na JordanShoes é a escolha certa para
          <br /> os amantes de sneakers que buscam estilo e conforto
        </p>
      </div>
      <div className=" flex flex-col items-start justify-center  px-44 py-24">
        <div className=" grid grid-cols-3 gap-24">
          <Cards
            image={imagem1}
            title={"Air Jordan 1 Mid Dutch Green"}
            description={"Tênis Air Jordan"}
            price={"R$ 1.585,00"}
          />
          <Cards
            image={imagem2}
            title={"Air Jordan 1 High Zoom CMFT Tropical Twist"}
            description={"Tênis Air Jordan"}
            price={"R$ 1.049,00"}
          />
          <Cards
            image={imagem3}
            title={"Air Jordan 1 Mid Dutch Green"}
            description={"Tênis Air Jordan"}
            price={"R$ 1.350,00"}
          />
          <Cards
            image={imagem4}
            title={"Air Jordan 1 Mid GS Light Smoke Grey"}
            description={"Tênis Air Jordan"}
            price={"R$ 1.585,00"}
          />
          <Cards
            image={imagem5}
            title={"Air Jordan 1 Mid SE Bright Citrus"}
            description={"Tênis Air Jordan"}
            price={"R$ 949,99"}
          />
          <Cards
            image={imagem6}
            title={"Air Jordan 1 Mid Grey Camo"}
            description={"Tênis Air Jordan"}
            price={"R$ 999,99"}
          />
        </div>
      </div>
    </body>
  );
}
