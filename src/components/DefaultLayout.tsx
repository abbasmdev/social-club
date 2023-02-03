import { Menu } from "@headlessui/react";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import clx from "classnames";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { type FC } from "react";

const DefaultLayout: FC<{
  children: React.ReactNode;
  headerExtra?: React.ReactNode;
  fullMain?: boolean;
}> = ({ children, headerExtra, fullMain = false }) => {
  const { data: session } = useSession();
  const userName = session?.user?.name;
  const userImage = session?.user?.image;

  return (
    <div className="flex h-screen flex-col gap-6">
      <header className="flex flex-col gap-6 px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            👋 <span className="text-lg font-semibold">SocialClub</span>
          </Link>
          <Menu as="div" className={"relative inline-block"}>
            <Menu.Button className="flex items-center gap-3">
              <span className="font-semibold">{userName}</span>
              {userImage && (
                <div className="relative h-10 w-10 ">
                  <Image
                    src={userImage}
                    fill
                    className="rounded-full"
                    alt="profile picture"
                  />
                </div>
              )}
            </Menu.Button>
            <Menu.Items
              className={
                "absolute right-0 z-20   w-44  rounded-sm bg-white p-2 shadow-sm"
              }
            >
              <Menu.Item>
                <button
                  onClick={() => signOut()}
                  className="flex w-full items-center gap-2 "
                >
                  <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                  Logout
                </button>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        {headerExtra ? <div>{headerExtra}</div> : null}
      </header>
      <main className={clx({ "px-4": !fullMain }, "h-full overflow-hidden")}>
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
