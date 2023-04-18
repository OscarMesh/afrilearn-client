import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import image from "../public/images/Learning-cuate.png";
export default function Home() {
  return (
    <>
      <Head>
        <title>Afrilearn Project Demo</title>
        <meta name="description" content="An Afrilearn interview demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-[100%]: flex flex-col gap-5 p-5 md:p-auto items-center md:flex-row md:justify-between">
        <div className="flex flex-col gap-5 max-w-[600px]">
          <h1 className="font-bold text-[#29465b] text-5xl md:text-6xl">
            Get ahead with <br />
            Afrilearn
          </h1>
          <p className="text-[#29465b] text-[16px]">
            The personal teacher for secondary school children to learn anytime,
            pass exams in one sitting and succeed academically.
          </p>
          <Link href="/subjects">
            <button className="p-3 border border-[#29465b] mt-7 text-[#29465b] font-bold hover:bg-[#29465b] hover:text-white">
              View Subjects
            </button>
          </Link>
        </div>
        <div>
          <Image
            alt="image"
            src={image}
            className="object-cover max-w-[400px] mt-7 md:max-w-[600px] w-full"
          />
        </div>
      </main>
    </>
  );
}
