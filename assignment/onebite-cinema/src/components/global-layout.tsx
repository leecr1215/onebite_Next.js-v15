import Header from "@/components/header-layout";
import { ReactNode } from "react";
import style from "./global-layout.module.css";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
