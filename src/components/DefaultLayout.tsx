import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { type FC } from "react";

const DefaultLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data: session } = useSession();
  const userName = session?.user?.name;
  const userImage = session?.user?.image;
  return (
    <div className="px-4 py-2">
      <header className="flex items-center justify-between">
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
      </header>
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
