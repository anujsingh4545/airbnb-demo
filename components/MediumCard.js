import Image from "next/image";
function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-60 w-60 2xl:w-80 2xl:h-80">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-xl mt-2 italic">{title}</h3>
    </div>
  );
}

export default MediumCard;
