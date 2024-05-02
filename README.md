# Localhost Movie DB

This is a Next application you can run on your localhost to organize your (legally of course ;)) downloaded movies.

It was archived, because it is very hard to implement the behaviour I wanted, and the useability would be terrible.

## Getting Started

First, install the dependencies:

```bash
pnpm i
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To get autocompletions when adding a movie, or fetch movie posters from TMDB, you need to
add an .env in the root of the project.  
You can copy the .env.example, and add your own api keys.

## About

Localhost Media Collection by [a3chron](https://a3chron.vercel.app/)

Built with NextJS and TailwindCSS.

Thanks to [TMDB](https://www.themoviedb.org/) for the movie poster API.
