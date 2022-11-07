import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import GoogleIcon from "assets/svgs/btn_google.svg";
import React from "react";

const Auth = () => {
  const router = useRouter();
  async function signInWithDiscord() {
    signIn("google", {
      callbackUrl: (router.query.callbackUrl as string) || "/",
    });
  }
  return (
    <main className="flex h-screen  w-full items-center justify-center">
      <div className="mx-2 flex min-h-[300px] w-full max-w-md flex-col items-center justify-between rounded-md bg-white px-2 py-8 shadow-md">
        <h1 className="text-lg font-bold">🎉 Welcome to SocialClub!</h1>

        <button
          onClick={signInWithDiscord}
          className="mx-1 flex items-center gap-1 rounded-md p-1 px-2 shadow-md  active:shadow-sm"
        >
          <GoogleIcon />
          Sign in with Google
        </button>
      </div>
    </main>
  );
};

export default Auth;
