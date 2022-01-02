import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-1 space-x-4 rounded-xl hover:bg-gray-200 p-1 hover:scale-105 transition transform duration-200 ease-out cursor-pointer">
      {/* Left side section */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* Right side section */}
      <div>
        <h2 className="font-semibold italic">{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
