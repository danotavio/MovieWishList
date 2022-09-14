import { Button } from "../button";

export const Header = () => {
  return (
    <header className="h-24 w-screen bg-slate-800 flex items-center justify-center p-10 space-x-10">
      <Button>Home</Button>
      <Button>My List</Button>
      <Button>Already watched</Button>
    </header>
  );
};
