import axios from "axios";
import type { NextPage } from "next";
import { Header } from "./components/header";
import { MovieCard } from "./components/moviecard";

const Home: NextPage = () => {
  const data = axios.get("");

  return (
    <div className="h-screen w-screen bg-slate-500">
      <Header />
      <MovieCard
        image=""
        rating="Rating"
        sinapse="Lorem Ipsum"
        title="Movie Title"
      />
    </div>
  );
};

export default Home;
