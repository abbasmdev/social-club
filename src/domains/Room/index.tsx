import Button from "components/Button";
import { useRouter } from "next/router";
import React from "react";
import { HandRaisedIcon } from "@heroicons/react/24/outline";
import Speaker from "./Speaker";
const Room = () => {
  const { query } = useRouter();
  const roomId = query.roomId;

  return (
    <div className="h-full overflow-y-auto rounded-xl border bg-white">
      <div className="flex items-center justify-between p-6">
        <h2 className="text-xl font-semibold">Room name here</h2>
        <div className="flex gap-2">
          <Button className="bg-slate-200 ">
            <HandRaisedIcon className="h-6 text-black" />
          </Button>
          <Button className="bg-slate-200 font-semibold text-red-500">
            Leave quietly
          </Button>
        </div>
      </div>
      {/* Speakers */}
      <div>
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
      </div>
      {/* Others */}
      <div>
        <h3>Others in the room</h3>
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
        <Speaker />
      </div>
    </div>
  );
};

export default Room;
