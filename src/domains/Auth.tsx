import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const Auth = () => {
  const router = useRouter();
  async function signInWithDiscord() {
    console.log("router.query.callbackUrl>>", router.query.callbackUrl);

    signIn("discord", {
      callbackUrl: (router.query.callbackUrl as string) || "/",
    });
  }
  return (
    <div>
      <h1>Auth</h1>
      <button onClick={signInWithDiscord}>SigIn with discord</button>
    </div>
  );
};

export default Auth;
