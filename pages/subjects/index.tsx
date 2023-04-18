import React, { useEffect, useState } from "react";
import { Subject } from "../../types";
import axios from "axios";
import SubjectCard from "../../components/SubjectCard";
import { CiSearch } from "react-icons/ci";
import NoResults from "../../components/NoResults";

const index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const { data } = await axios.get(
        `https://afrilearn-interview-api.onrender.com/api/v1/subjects${
          searchQuery ? `?name=${searchQuery}` : ""
        }`
      );
      setSubjects(data.subjects);
    };
    fetchSubjects();
  }, [searchQuery]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="mt-6 lg:p-0 md:p-5 p-3">
      <div className=" flex md:flex-row md:justify-between flex-col items-center justify-center gap-4 mb-6 ">
        <h3 className="font-bold text-[#29465b] text-[20px]">
          Find your perfect subjects and on-the-go
        </h3>
        <div className="flex flex-row max-w-[400px] w-full  p-3 items-center justify-between rounded-lg  border ">
          <input
            type="text"
            placeholder="Search Subjects..."
            className="outline-none border-none text-[#29465b]"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button type="submit">
            <CiSearch color="#29465b" size={30} />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-10 videos h-full">
        {subjects.length ? (
          subjects.map((subject: Subject) => (
            <SubjectCard subject={subject} key={subject._id} />
          ))
        ) : (
          <NoResults text="No Subject...🥺 " />
        )}
      </div>
    </div>
  );
};

export default index;
