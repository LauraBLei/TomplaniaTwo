import Link from "next/link";

const Intro = () => {
  return (
    <div>
      <h1>Intro Page</h1>
      <p>Intro text here...</p>
      <Link href="/base">Continue</Link>
    </div>
  );
};

export default Intro;
