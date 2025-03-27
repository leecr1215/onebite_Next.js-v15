import style from "./header-layout.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.header}>
      <Link href={"/"}>ONEBITE CINEMA</Link>
    </header>
  );
}
