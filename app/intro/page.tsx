"use client";

import { usePlayerStore } from "@/states/player";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";

const Intro = () => {
  const { name } = usePlayerStore();
  return (
    <div className="page flex flex-col">
      <div className="h-full w-full overflow-hidden relative flex-2">
        <Image
          src="/locations/portal.jpg"
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-xl text-center  p-5">
          The swirling portal beckons once more. A new world calls for a hero's
          courage. Legends whisper of distant lands in peril, and only you,
          {name}, can answer the summons. Step forward—your adventure is about
          to begin, and another realm awaits your help.
        </p>
        <div className="w-full flex justify-end px-10">
          <Link href="/base" className="flex text-2xl items-center gap-5">
            Continue <ArrowRightCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
