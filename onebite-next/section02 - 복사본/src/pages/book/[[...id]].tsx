import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const { id } = router.query;
  console.log(router.query);

  return <h1>Book {id}</h1>;
}
