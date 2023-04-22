import Movie from "../Movie";

import Image from "next/image";
export default function MovieDetail({ title, id, poster_path, release_date }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <h1>Movie detail</h1>

      <Image
        src={imagePath + poster_path}
        width={600}
        height={600}
        alt={title}
        quality={100}
        unoptimized={true}
        priority
      />
    </div>
  );
}
