import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navabar = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center p-5">
        <div className="flex items-start max-w-[200px]">
          <Link href="/">
            <Image
              src="https://myafrilearn.com/_next/image?url=%2Fassets%2Fimg%2Flogonew.png&w=256&q=75"
              alt="logo"
              loading="lazy"
              width={100}
              height={100}
              className="object-cover"
            />
          </Link>
        </div>

        <ul className="flex flex-row gap-6">
          <li className="text-[16px] font-medium hover:text-[#29465b]">
            <Link href="/subjects">Subjects</Link>
          </li>
          <li className="text-[16px] font-medium hover:text-[#29465b]">
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navabar;
