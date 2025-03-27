import Searchbar from "@/components/searchbar-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import movies from "@/mock/movies.json";
import MovieItem from "@/components/movie-item";
import style from "./index.module.css";

export default function Page() {
  const router = useRouter();

  const q = router.query.q as string;

  return (
    <div className={style.container}>
      {movies
        .filter((movie) => movie.title.includes(q))
        .map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <Searchbar>{page}</Searchbar>;
};
