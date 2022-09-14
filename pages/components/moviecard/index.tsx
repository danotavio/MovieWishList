import { FC } from "react";
import { AiFillStar, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { Props } from "./types";

export const MovieCard: FC<Props> = ({
  title,
  sinapse,
  image,
  rating,
  ...rest
}) => {
  return (
    <div className="w-80 h-96 border-2 border-slate-300 bg-white flex flex-col m-10 rounded-lg">
      <div className="w-full h-52 flex justify-center items-center overflow-clip">
        <img src={title} alt="Movie Image" className="w-full h-full"></img>
      </div>
      <main className="flex flex-row w-full justify-between text-black p-4">
        <h6>{title}</h6>
        <div className="flex justify-center items-center gap-2">
          <AiFillStar className="text-yellow-500" />
          {rating}
        </div>
      </main>
      <div className="flex flex-row w-full justify-between text-black p-4">
        <p>{sinapse}</p>
      </div>
      <footer className="flex justify-center">
        <div className="flex">
          <button className="m-2 p-2 text-black hover:bg-blue-200 hover:rounded-sm hover:text-blue-900 flex items-center gap-3 ">
            See More
            <AiOutlineEye />
          </button>
        </div>
        <div className="flex">
          <button className="m-2 p-2 text-black hover:bg-red-200 hover:rounded-sm hover:text-red-900 gap-2 flex items-center">
            Add to WishList
            <AiOutlineHeart />
          </button>
        </div>
      </footer>
    </div>
  );
};
