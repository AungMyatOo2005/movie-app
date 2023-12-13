import axios from "axios";
import React, { useEffect, useState } from "react";
import { HomeIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
const LinkButton = ({ apiUrl, id, api_key, movie }) => {
  const [trailerLoading, setTrailerLoading] = useState(true);
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const getVideo = async () => {
      try {
        const res = await axios.get(
          ` ${apiUrl}movie/${id}/videos?api_key=${api_key}`
        );
        setVideo(await res.data);
        setTrailerLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getVideo();
  }, []);
  const trailer = video.results && video.results[0];
  return (
    <div className="flex items-center gap-5 ml-auto w-fit px-10 py-10 flex-wrap">
      <a
        href={`https://themoviedb.org/movie/${movie.id}/cast`}
        target="_blank"
        className=" py-2 px-4 font-Poppins rounded-sm cursor-pointer bg-yellow-500 shadow-[5px_2px_15px_rgba(0,0,0)] uppercase hover:scale-105 active:scale-100 active:translate-y-0 transition-transform"
      >
        Full Cast
      </a>
      {movie.homepage && (
        <a
          href={movie.homepage}
          target="_blank"
          className=" py-2 px-4 font-Poppins rounded-sm cursor-pointer bg-yellow-500 shadow-[5px_2px_15px_rgba(0,0,0)] uppercase hover:scale-105 active:scale-100 active:translate-y-0 transition-transform flex items-center gap-2"
        >
          Check Home Page <HomeIcon className="w-[25px]" />
        </a>
      )}
      {trailer && !trailerLoading && (
        <a
          href={`https://www.youtube.com/watch?v=${trailer.key}`}
          target="_blank"
          className=" py-2 px-4 font-Poppins rounded-sm cursor-pointer bg-yellow-500 shadow-[5px_2px_15px_rgba(0,0,0)] uppercase hover:scale-105 active:scale-100 active:translate-y-0 transition-transform flex items-center gap-2"
        >
          Watch Trailer <ArrowLongRightIcon className="w-[25px]" />
        </a>
      )}
    </div>
  );
};

export default LinkButton;
