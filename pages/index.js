import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Adding header section */}
      <Header />

      {/* Adding banner section */}
      <Banner />

      {/* Creating main section and adding files */}
      <main className="max-w-5xl xl:max-w-8xl m-auto px-5 sm:px-12">
        <section className="pt-6">
          <h2 className="text-3xl sm:text-4xl font-semibold pb-5 italic">Explore Nearby</h2>

          {/* Pulling some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {exploreData?.map((item) => (
              // Passing value as props to small card container
              <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl sm:text-4xl font-semibold py-8 italic">Live Anywhere</h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="Wishlists curated in Airbnb." buttonText="Get Inspired" />
      </main>

      {/* Adding footer of front page */}
      <div className="bg-gray-300">
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then((res) => res.json());
  const cardData = await fetch("https://links.papareact.com/zp1").then((res) => res.json());
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
