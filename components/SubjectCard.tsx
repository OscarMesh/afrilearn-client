import React from "react";
import { Subject } from "../types";
import { NextPage } from "next";
import Link from "next/link";
import { MdSubject } from "react-icons/md";
interface IProps {
  subject: Subject;
}
const SubjectCard: NextPage<IProps> = ({ subject }) => {
  return (
    <Link href={`/subjects/detail/${subject._id}`}>
      <div className="bg-[#fefefe] border rounded-md shadow-sm p-5 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <MdSubject size={30} />
          <h3 className="text-[#83bb2b] font-semibold text-[20px]">
            {subject.name}
          </h3>
        </div>
        <p className="text-[#ffceac] font-bold">
          {subject.topics.length} topics
        </p>
      </div>
    </Link>
  );
};

export default SubjectCard;
