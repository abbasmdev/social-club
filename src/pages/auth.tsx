import { type GetServerSideProps, type NextPage } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Auth from "../domains/Auth";
import { getServerAuthSession } from "../server/common/get-server-auth-session";

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Auth />
    </>
  );
};

export default AuthPage;