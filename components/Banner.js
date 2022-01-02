import Image from "next/image";

function Banner() {
  return (
    <div className="relative  h-[225px] sm:h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] ">
      <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" objectPosition="bottom" />

      <div className="absolute top-1/2 w-full text-center">
        <p className=" text-sm sm:text-lg italic">Not sure where to go? Perfect</p>
        <button className="text-sm sm:text-lg text-purple-500 italic bg-white px-6 py-2 shadow-sm rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition delay-150 ">I'am flexible</button>
      </div>
    </div>
  );
}

export default Banner;
