import Head from "next/head";
import Menu from "../../components/Menu";

export default function MovieDetail({ movie }) {
  return (
    <div>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <header className="relative z-50 lg:overflow-hidden h-screen">
        <Menu />
        <div className="container mx-auto mt-0 md:mt-24 lg:px-16 px-4 py-4">
          <div className="absolute inset-0 -z-50  opacity-100 flex justify-end">
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              className="object-cover h-full lg:object-center opacity-40"
              alt="poster"
            />
          </div>

          <div className="pl-8 border-l border-white">
            <p className="text-white font-bold tracking-wide text-base text-right sm:text-left leading-none">
              {movie.release_date}
            </p>
            <h1 className=" text-white inline-block max-w-2xl p-4 bg-black bg-opacity-50 rounded-lg md:text-6xl shadow-2xl text-3xl text-right sm:text-left font-bold font-sans m-0 leading-none">
              {movie.title}
            </h1>
            <p className="text-white  font-bold p-4 bg-black bg-opacity-50 rounded-lg shadow-2xl lg:block md:text-lg text-md md:max-w-lg w-full my-4">
              {movie.overview.length > 0
                ? movie.overview
                : "Gösterilecek açıklama eklenmemiştir."}
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieid}?api_key=06d452763ff3255d50542e9e95b2634b&language=tr-TR&page=1`
  );
  const movie = await request.json();
  return {
    props: {
      movie,
    },
  };
}
