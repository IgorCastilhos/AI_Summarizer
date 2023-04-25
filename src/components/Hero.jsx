import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumarrize_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/IgorCastilhos", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Resuma Artigos com <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI ChatGPT</span>
      </h1>
      <h2 className="desc">
        Simplifique sua leitura com o Summarizer, um projeto open-source que
        transforma artigos longos em resumos claros e concisos
      </h2>
    </header>
  );
};

export default Hero;
