import React from "react";

interface IProps {
  text: string;
}

const NoResults = ({ text }: IProps) => {
  return (
    <div className="flex items-center justify-center h-[80vh] text-[22px] text-[#29465b] font-bold">
      {text}
    </div>
  );
};

export default NoResults;
