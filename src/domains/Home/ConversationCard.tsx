import React, { type FC } from "react";
import clx from "classnames";
import {
  UserIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/solid";

type Props = { className?: string };

const ConversationCard: FC<Props> = ({ className }) => {
  return (
    <div className={clx("rounded-md bg-white p-4", className)}>
      <h2>This is room 1 talking about 1</h2>
      <div></div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 text-gray-400">
          <span>87</span>
          <UserIcon className="w-4" />
        </div>
        <div className="flex items-center gap-1 text-gray-400">
          <span>3</span>
          <ChatBubbleOvalLeftEllipsisIcon className="w-4" />
        </div>
      </div>
    </div>
  );
};

export default ConversationCard;
