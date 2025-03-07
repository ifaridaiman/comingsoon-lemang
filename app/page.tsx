import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 justify-center items-center ">
        <Image
          className="dark:invert"
          src="/assets/Logo/lemangtul_logo.svg"
          alt="Lemangtul logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-9xl font-bold text-center text-white">
          COMING SOON
        </h1>
        <p className="text-4xl font-light text-center text-white">
          100% buatan Saujana Utama
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-center">
        <p className="text-xs text-gray-50">Develop by Naisu Technologies</p>
      </footer>
    </div>
  );
}
