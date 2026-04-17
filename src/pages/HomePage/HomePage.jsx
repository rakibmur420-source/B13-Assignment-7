import { HashLoader } from "react-spinners";
import Banner from "../../components/homepage/Banner";
import FriendsSection from "../../components/homepage/FriendsSection";
import useFriends from "../../hooks/useFriends";

const HomePage = () => {
  const { friends, loading } = useFriends();

  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        <HashLoader color="#059669" />
      </div>
    );
  }

  return (
    <>
      <Banner friends={friends} />
      <FriendsSection friends={friends} />
    </>
  );
};

export default HomePage;

