import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="overflow-hidden w-full h-full absolute z-0">
        <Image
          src="/bg-images/outsideTavern.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col text-white items-center justify-center w-full h-full z-10 gap-10 bg-black/30 ">
        <h1 className="text-6xl md:text-9xl">Tomplania</h1>
        <a className="text-4xl md:text-6xl cursor-pointer">Start</a>
      </div>
    </div>
  );
}
