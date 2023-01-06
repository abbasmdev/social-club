import { useSession } from "next-auth/react";
import React from "react";

const Home = () => {
  const { data: session } = useSession();
  return (
    <div className="mt-10">
      <h1 className="text-2xl">Hi {session?.user?.email}👋</h1>
    </div>
  );
};

export default Home;
