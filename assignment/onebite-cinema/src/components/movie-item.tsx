import { MovieData } from "@/types";
import Link from "next/link";

export default function MovieItem({ posterImgUrl, id }: MovieData) {
  return (
    <Link href={`/movie/${id}`}>
      <img src={posterImgUrl} style={{ width: "100%" }} />
    </Link>
  );
}
