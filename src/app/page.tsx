import HomePage from "@/Container/HomePage";
import getAllMemberCard from "../Utils/contentful";

export default async function Home() {
  const getMemberDetalis = await getAllMemberCard();

  return (
    <>
      <HomePage data={getMemberDetalis} />
    </>
  );
}
