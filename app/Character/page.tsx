import { Classes } from "@/data/classes";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CharacterCreation = () => {
  return (
    <div className="h-full w-full bg-black text-white p-10">
      <Link href="/">
        <ArrowLeftCircle />
      </Link>
      <div className="flex">
        <div id="ClassChoices" className="flex gap-10 my-10 flex-1">
          {Classes.map((classItem) => {
            return (
              <div
                key={classItem.name}
                className="p-5 w-40 h-40 border flex items-center justify-center border-white cursor-pointer hover:bg-white/20 transition-colors duration-300"
              >
                <p>{classItem.name}</p>
              </div>
            );
          })}
        </div>
        <div id="avatars" className="flex flex-col gap-5 flex-1">
          <h2 className="text-2xl">Choose your avatar</h2>
          <div className="flex gap-5">
            <div className="w-50 h-50 overflow-hidden relative">
              <Image
                src="/bg-images/outsideTavern.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="w-50 h-50 overflow-hidden relative">
              <Image
                src="/bg-images/outsideTavern.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="w-50 h-50 overflow-hidden relative">
              <Image
                src="/bg-images/outsideTavern.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-5">
        <label htmlFor="name" className="block mb-2 text-2xl">
          Character Name
        </label>
        <input
          type="text"
          id="name"
          className="px-4 py-2 bg-transparent border border-white rounded w-64 text-white focus:outline-none focus:border-blue-500"
          placeholder="Enter name"
        />
      </div>
      <div className="w-full flex justify-center text-4xl">
        <button className="border border-white px-10 py-2 hover:bg-white/20 cursor-pointer">
          Start Game
        </button>
      </div>
    </div>
  );
};

export default CharacterCreation;
