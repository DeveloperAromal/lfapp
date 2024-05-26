import Image from "next/image";

interface LevelProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

export default function Levels() {
  return (
    <section className="py-20">
      <div>
        <h1 className="text-3xl font-bold text-orange text-center pb-20 text-shadow-orange">
          Our Levels
        </h1>
        <div className="hidden lg:block md:block sm:block">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Level
              src="/images/kg.png"
              alt="image"
              width={200}
              height={200}
              title="kg"
            />
            <Level
              src="/images/kg.png"
              alt="image"
              width={200}
              height={200}
              title="kg"
            />
            <Level
              src="/images/kg.png"
              alt="image"
              width={200}
              height={200}
              title="kg"
            />
            <Level
              src="/images/kg.png"
              alt="image"
              width={200}
              height={200}
              title="kg"
            />
            <Level
              src="/images/kg.png"
              alt="image"
              width={200}
              height={200}
              title="kg"
            />
          </div>
        </div>
        <div className="block lg:hidden md:hidden sm:hidden">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Level
              src="/images/kg.png"
              alt="image"
              width={150}
              height={150}
              title="kg"
            />
            <Level
              src="/images/kg.png"
              alt="image"
              width={150}
              height={150}
              title="kg"
            />
            <Level
              src="/images/kg.png"
              alt="image"
              width={150}
              height={150}
              title="kg"
            />
            <Level
              src="/images/kg.png"
              alt="image"
              width={150}
              height={150}
              title="kg"
            />
            <Level
              src="/images/kg.png"
              alt="image"
              width={150}
              height={150}
              title="kg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Level({ src, alt, width, height, title }: LevelProps) {
  return (
    <div className="">
      <Image src={src} alt={alt} width={width} height={height} />
      <div className="w-44 bg-neutral-600 h-8 relative -top-4">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
