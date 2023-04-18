import React, { useState } from "react";
import { Subject } from "../../types";
import axios from "axios";
import SubjectCard from "../../components/SubjectCard";
import { CiSearch } from "react-icons/ci";

interface IProps {
  subjects: Subject[];
}

const index = ({ subjects }: IProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allSubjects, setSubjects] = useState(subjects);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = `http://localhost:5000/api/v1/subjects${
      searchQuery ? `?q=${searchQuery}` : ""
    }`;
    const { data } = await axios.get(url);
    setSubjects(data.subjects);
  };

  return (
    <div className="mt-6 lg:p-0 md:p-5 p-3">
      <div className=" flex md:flex-row md:justify-between flex-col items-center justify-center gap-4 mb-6 ">
        <h3 className="font-bold text-[#29465b] text-[20px]">
          Find your perfect subjects and on-the-go
        </h3>
        <form
          onSubmit={handleSearch}
          className="flex flex-row max-w-[400px] w-full  p-3 items-center justify-between rounded-lg  border "
        >
          <input
            type="text"
            placeholder="Search Subjects..."
            className="outline-none border-none text-[#29465b]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <CiSearch color="#29465b" size={30} />
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-10 videos h-full">
        {allSubjects.length &&
          allSubjects.map((subject: Subject) => (
            <SubjectCard subject={subject} key={subject._id} />
          ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const { q } = context.query;
  const searchQuery = q ? `?q=${q}` : "";
  const { data } = await axios.get(
    `http://localhost:5000/api/v1/subjects${searchQuery}`
  );
  const subjects = data.subjects;
  return {
    props: {
      subjects: subjects,
    },
  };
};
export default index;
