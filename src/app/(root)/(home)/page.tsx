import Hero from "@/components/home/hero";
import Grid from "@/components/home/grid";
import Trending from "@/components/home/trending";
import ShopBy from "@/components/home/shopBy";
import SeenIn from "@/components/home/seenIn";
import Review from "@/components/home/review";
import Collection from "@/components/home/collection";
import Newsletter from "@/components/home/newsletter";
export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Grid></Grid>
      <Trending></Trending>
      <Collection></Collection>
      <ShopBy></ShopBy>
      <SeenIn></SeenIn>
      <Review></Review>
      <Newsletter></Newsletter>
    </>
  );
}
