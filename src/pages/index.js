import HomePage from "@/components/screens/home/home";
import supabase from "@/utils/db";

const Home = ({ reviews }) => {
  console.log(reviews);

  return <HomePage reviews={reviews} />;
};

export default Home;

export async function getStaticProps() {
  const res = await supabase.from("reviews").select().limit(10);

  console.log(res);

  return {
    props: { reviews: res?.data || [] },
  };
}
