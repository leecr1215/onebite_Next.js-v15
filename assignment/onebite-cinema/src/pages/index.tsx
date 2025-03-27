import Searchbar from "@/components/searchbar-layout";
import { ReactNode } from "react";

export default function Home() {
  return <div></div>;
}

Home.getLayout = (page: ReactNode) => {
  return <Searchbar>{page}</Searchbar>;
};
