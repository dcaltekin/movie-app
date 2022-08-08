import Menu from "./Menu";

function Navbar() {
  return (
    <div className="">
      <header className="relative z-50 lg:overflow-hidden h-screen">
        <Menu />{" "}
        <div className="container mx-auto mt-48 lg:mt-52 lg:px-16 px-4 py-4">
          <div className="absolute inset-0 -z-50  opacity-70">
            <img
              src="doctorstrange.jpg"
              className="object-cover object-right-top lg:object-center w-full h-screen "
              alt="poster"
            />
          </div>

          <div className="pl-8 border-l border-white ">
            <p className="text-white font-bold tracking-wide text-base hidden lg:block leading-none">
              2022-05-04
            </p>
            <h1 className=" text-white inline-block  p-4 bg-black bg-opacity-50 rounded-lg md:text-6xl shadow-2xl text-3xl text-right sm:text-left font-bold font-sans m-0 leading-none">
              Doctor Strange
            </h1>
            <p className="text-white  font-bold p-4 bg-black bg-opacity-50 rounded-lg shadow-2xl lg:block text-lg md:max-w-lg w-full my-4">
              Hem eski hem de yeni mistik yol arkadaşlarının yardımıyla, gizemli
              yeni bir düşmanla yüzleşmek için Çoklu Evrenin akıllara durgunluk
              veren ve tehlikeli alternatif gerçekliklerini kat eden Doktor
              Strange ile bilinmeyene yolculuk başlıyor.
            </p>
          </div>
        </div>{" "}
      </header>
    </div>
  );
}

export default Navbar;
