import React, { useState } from "react";
import { Topic } from "../types";
import { NextPage } from "next";
import { MdOutlineTopic } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";

interface IProps {
  topic: Topic;
}
const TopicCard: NextPage<IProps> = ({ topic }) => {
  const [isopen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="bg-[#fefefe] border rounded-md shadow-sm p-5 flex flex-row justify-between md:items-center hover:shadow-md cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MdOutlineTopic size={30} />
        <h3 className="text-[#83bb2b] font-semibold text-[20px]">
          {topic.title}
        </h3>
      </div>
      {isopen && (
        <div className="bg-[#fefefe] w-full justify-center gap-10 items-center flex-col border rounded-sm shadow-sm p-5 flex">
          <div>
            <iframe
              src={topic.videoUrl}
              title="Youtube 
                "
              className="w-full h-[200px] md:h-[400px]"
            ></iframe>

            <p className="text-[#29465b] font-semibold">{topic.description}</p>
            <div className="flex items-center gap-3 md:justify-center">
              <IoLogoYoutube size={30} color="red" />
              <a
                href={topic.videoUrl}
                target="_blank"
                className="text-gray-500 hover:underline"
              >
                Click to watch tutorial video on YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicCard;
