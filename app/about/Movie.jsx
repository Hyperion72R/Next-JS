import Link from "next/link";

export default function Movie({ title, id, poster_path, release_date }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/test`}>
        <img src="" alt="" />
      </Link>
    </div>
  );
}
