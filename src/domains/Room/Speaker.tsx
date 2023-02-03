import Image from "next/image";
import React from "react";

const Speaker = () => {
  return (
    <div className="flex w-fit flex-col items-center">
      <div className="relative h-20 w-20">
        <Image
          src={`https://cdn.discordapp.com/embed/avatars/${Math.floor(
            Math.random() * 6
          )}.png`}
          fill
          className="rounded-xl"
          alt=""
        />
      </div>

      <h2 className="text-sm font-semibold">Name</h2>
    </div>
  );
};

export default Speaker;
