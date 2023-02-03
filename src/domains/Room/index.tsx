import Button from "components/Button";
import { useRouter } from "next/router";
import React from "react";
import {
  HandRaisedIcon,
  MicrophoneIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import Speaker from "./Speaker";
const Room = () => {
  const { query } = useRouter();
  const roomId = query.roomId;

  return (
    <div className="flex h-full flex-col rounded-xl border bg-white">
      <div className="flex flex-col items-start justify-between  gap-2 p-6 sm:flex-row">
        <h2 className="text-xl font-semibold">Room name here</h2>
        <div className="flex gap-2">
          <Button className="bg-slate-200 ">
            <HandRaisedIcon className="h-6 text-black" />
          </Button>
          <Button className=" bg-slate-200">
            <MicrophoneIcon className="h-6 text-black" />
          </Button>
          <Button className="bg-slate-200 font-semibold text-red-500">
            Leave quietly
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-7 overflow-y-auto">
        {/* Speakers */}
        <div className="flex flex-wrap gap-2">
          <Speaker />
          <Speaker />
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
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Others in the room</h3>
          <div className="flex flex-wrap gap-2">
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
            <Speaker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
