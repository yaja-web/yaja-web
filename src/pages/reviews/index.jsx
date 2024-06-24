import ReviewsScreen from "@/components/screens/reviews/reviews";
import supabase from "@/utils/db";
import React from "react";

const ReviewsPage = ({reviews}) => {
  // console.log(reviews);
  return <ReviewsScreen reviews={reviews} />;
};

export default ReviewsPage;

export async function getServerSideProps() {
  // Call the fetch method and passing
  // the pokeAPI link
  const res = await supabase.from("reviews").select();


  // Finally we return the result
  // inside props as allPokemons
  return {
    props: { reviews: res?.data || [] },
  };
}
