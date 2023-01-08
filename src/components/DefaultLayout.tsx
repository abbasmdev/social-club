import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { type FC } from "react";
import clx from "classnames";
const DefaultLayout: FC<{
  children: React.ReactNode;
  headerExtra?: React.ReactNode;
  fullMain?: boolean;
}> = ({ children, headerExtra, fullMain = false }) => {
  const { data: session } = useSession();
  const userName = session?.user?.name;
  const userImage = session?.user?.image;
  console.log("a>", userImage);

  return (
    <div className="flex h-screen flex-col gap-6">
      <header className="flex flex-col gap-6 px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            👋 <span className="text-lg font-semibold">SocialClub</span>
          </Link>
          <div className="flex items-center gap-3" onClick={() => signOut()}>
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
          </div>
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
