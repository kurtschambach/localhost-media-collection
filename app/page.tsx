"use client";

import MovieCard from "@/components/movie-card";
import { HomeIcon, StarIcon, Cog6ToothIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useState } from "react";
import clsx from "clsx";

export type MovieType = { poster?: string; src?: string; name?: string };

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
            src: files[i].name,
            name: files[i].name,
          });
        }
      }
    }
    setMovies(newMovies);
  };

  const handleAddSrc = (movieSrc: string) => {
    const newMovieToAdd = {
      src: movieSrc,
      name: (movieToAdd as MovieType)?.name ?? undefined,
      poster: (movieToAdd as MovieType)?.poster ?? undefined,
    };
    setMovieToAdd(newMovieToAdd)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-bg bg-[radial-gradient(#333e4f66_1px,#10151d_1px)] bg-[size:48px_64px] text-text">
      <div className="flex w-full">
        <nav className="w-20 h-screen border-r border-grey-accent flex flex-col items-center justify-start py-24 gap-6 text-[10px] font-thin bg-light-bg text-light-grey-accent z-30">
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
          <div className="absolute top-0 w-1/3 h-0 shadow-[0_0px_600px_30px_rgba(255,255,255,1.0)] shadow-violet-accent" />
          {movieToAdd && (
            <>
              <div onClick={() => setMovieToAdd(false)} className="absolute w-screen h-screen top-0 left-0 backdrop-blur z-20" />
              <div className="absolute top-1/3 w-96 h-fit p-12 rounded-2xl border-2 border-grey-accent bg-bg z-20 shadow-[0_0_600px_30px_rgba(255,255,255,1.0)] shadow-violet-accent/20 flex flex-col items-start justify-center gap-4">
                <div className="flex flex-row items-center justify-between w-full text-light-grey-accent mb-4">
                  <h2 className="text-lg font-bold">Add a Movie</h2>
                  <XMarkIcon onClick={() => setMovieToAdd(false)} className="w-6 h-6 cursor-pointer" />
                </div>
                <input placeholder="Movie Name" className="p-3 px-4 w-full rounded-lg bg-dark-bg border border-grey-accent caret-violet-accent focus:outline-none focus:border-violet-accent " value={movieToAdd !== true ? (movieToAdd.name ?? "") : ""} />
                <input placeholder="Poster" className="p-3 px-4 w-full rounded-lg bg-dark-bg border border-grey-accent caret-violet-accent focus:outline-none focus:border-violet-accent " value={movieToAdd !== true ? (movieToAdd.poster ?? "") : ""} />
                <label htmlFor="fileUpload2" className="p-3 px-4 cursor-pointer w-full rounded-lg bg-dark-bg border border-grey-accent caret-violet-accent focus:outline-none focus:border-violet-accent ">
                  <input type="file" id="fileUpload2" onChange={(e) => handleAddSrc(e.target.dir)} className="hidden" accept=".mp4" />
                  <span className="text-light-grey-accent">{movieToAdd !== true ? (movieToAdd.src ?? "Src") : "Src"}</span>
                </label>
              </div>
            </>
          )}
          <div className="w-2/3 h-screen overflow-y-scroll p-8 lg:p-24 flex flex-col items-start justify-start gap-4">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col gap-4">
                <h1 className="font-plex text-2xl font-bold">Media Collection</h1>
                <div className="z-10 rounded border border-grey-accent p-2 px-4 text-amber-accent text-xs inline-block shadow shadow-dark-bg">
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
              <div className="flex flex-row items-start justify-center gap-4">
                <div
                  className="z-10 rounded-lg w-96 h-32 bg-dark-bg border-2 border-violet-accent/80 border-dashed duration-300 hover:border-violet-accent p-4 px-6 text-xs text-light-grey-accent flex items-center justify-center gap-2"
                  onDrop={(e) => {e.preventDefault(); handleAddSrc(e.currentTarget.dir)}}
                  onDragOver={(e) => e.preventDefault()}
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
                      onChange={(e) => handleAddSrc(e.target.dir)}
                      accept=".mp4"
                    />
                    Browse
                  </label>
                </div>
                <button onClick={() => setMovieToAdd(true)} className="flex flex-col items-center justify-center bg-dark-bg rounded-lg h-full w-12 border-2 border-violet-accent/80 hover:border-violet-accent duration-300 text-violet-accent/80 hover:text-violet-accent">
                  <PlusIcon className="w-6 h-6" strokeWidth={2} />
                </button>
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
