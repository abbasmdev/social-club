import DefaultLayout from "components/DefaultLayout";
import Room from "domains/Room";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { type GetServerSideProps, type NextPage } from "next";
import Head from "next/head";
import { getServerAuthSession } from "server/common/get-server-auth-session";
import Link from "next/link";

const RoomPage: NextPage = () => {
  return (
    <DefaultLayout
      fullMain
      headerExtra={
        <Link href={"/"} className="flex w-fit gap-2 font-semibold">
          <ArrowLeftIcon className="w-6" />
          <span>All Rooms</span>
        </Link>
      }
    >
      <Head>
        <title>SocialClub - Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Room />
    </DefaultLayout>
  );
};

export default RoomPage;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerAuthSession({ req, res });
  return {
    props: { session },
  };
};