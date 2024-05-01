"use client";

import MovieCard from "@/components/movie-card";
import { HomeIcon, StarIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, DragEventHandler, useState } from "react";
import clsx from "clsx";

export type MovieType = { poster?: string; title?: string; name?: string };

export default function Home() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [movieToAdd, setMovieToAdd] = useState<MovieType | boolean>(false);

  const handleMovieUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const newMovies = [...movies];
    if (files) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].type === "video/mp4") {
          newMovies.push({
            poster: files[i].name,
            title: files[i].name,
            name: files[i].name,
          });
        }
      }
    }
    setMovies(newMovies);
  };

  const addMovie = (movieName?: string) => {
    movieName ? setMovieToAdd({ name: movieName }) : setMovieToAdd(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-bg bg-[radial-gradient(#333e4f66_1px,#10151d_1px)] bg-[size:48px_64px] text-text">
      <div className="flex w-full">
        <nav className="w-20 h-screen border-r border-grey-accent flex flex-col items-center justify-start py-24 gap-6 text-[10px] font-thin bg-light-bg text-light-grey-accent">
          <a
            href="/"
            className="flex flex-col items-center justify-center gap-1 hover:text-white duration-500"
          >
            <HomeIcon strokeWidth={1.4} className="w-5 h-5" />
            <span>Home</span>
          </a>
          <a
            href="/favorites"
            className="flex flex-col items-center justify-center gap-1 hover:text-white duration-500"
          >
            <StarIcon strokeWidth={1.4} className="w-5 h-5" />
            <span>Favorites</span>
          </a>
          <a
            href="/settings"
            className="flex flex-col items-center justify-center gap-1 hover:text-white duration-500"
          >
            <Cog6ToothIcon strokeWidth={1.4} className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </nav>
        <div className="w-full flex flex-col items-center">
          <div className="absolute top-0 w-1/3 h-0 shadow-[0_0px_600px_30px_rgba(255,255,255,1.0)] shadow-violet-accent z-20" />
          <div className="w-2/3 h-screen overflow-y-scroll p-8 lg:p-24 flex flex-col items-start justify-start gap-4">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col gap-4">
                <h1 className="font-plex text-xl">Media Collection</h1>
                <div className="rounded border border-grey-accent p-2 px-4 text-amber-accent text-xs inline-block">
                  This app is still under development.{" "}
                  <a
                    className="underline text-violet-accent"
                    target="_blank"
                    href="https://github.com/kurtschambach/localhost-media-collection/issues"
                  >
                    Report an issue
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <div
                  className="rounded-lg w-96 h-32 bg-dark-bg/60 border-2 border-violet-accent/80 border-dashed duration-150 hover:border-violet-accent p-4 px-6 text-xs text-light-grey-accent flex items-center justify-center gap-2"
                  onDrop={(e) => addMovie(e.currentTarget.title)}
                  onDragOver={() => null}
                >
                  <span>Drop your files here or </span>
                  <label
                    className="bg-bg text-violet-accent cursor-pointer hover:underline"
                    htmlFor="fileUpload"
                  >
                    <input
                      type="file"
                      className="hidden"
                      id="fileUpload"
                      onChange={handleMovieUpload}
                      multiple
                      accept=".mp4"
                    />
                    Browse
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-6">
              {movies.map((movie) => (
                <MovieCard key={movie.name} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
