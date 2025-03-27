import style from "./header-layout.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.header}>
      <Link href={"/"}>ONE BITE CINEMA</Link>
    </header>
  );
}
