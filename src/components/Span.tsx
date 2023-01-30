import React from "react";

interface CoolProps {
  children: React.ReactNode;
  foo: number;
  bar: string;
}

const Span: React.FC<CoolProps> = (props) => {
  return (
    <span
      className="text-red-700 cursor-pointer font-extrabold italic"
      onClick={() => alert("Hey, don't move, or I'll shoot!")}
    >
      {props.children}
    </span>
  );
};

export default Span;
