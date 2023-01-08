import Button from "components/Button";
import ConversationCard from "./ConversationCard";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex items-center gap-3 md:flex-row">
        <h1 className="text-xl font-bold md:text-2xl">All Rooms</h1>
        <Button className="fixed bottom-4 right-4 " disabled>
          + Start a room
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {/* <p>There is no room yet!</p> */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((roomId) => (
          <Link href={`/${roomId}`} key={roomId}>
            <ConversationCard className="duration-150 ease-in-out hover:scale-105" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
