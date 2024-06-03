import HeroSection from "@/components/home/HeroSection";
import LatestBlog from "@/components/home/LatestBlog";
import MostPopular from "@/components/home/MostPopular";
import TabSection from "@/components/home/TabSection";

const HomePage = () => {
  return (
    <>
      <HeroSection isType={false} />
      <TabSection />
      <LatestBlog />
      <MostPopular />
    </>
  );
};
export default HomePage;
