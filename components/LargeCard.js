import Image from "next/image";
function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className=" relative py-10 cursor-pointer">
      <div className="relative h-80 min-w-[300px]">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>

      <div className="absolute top-24 left-10">
        <h3 className="text-4xl  mb-3 w-64 font-semibold ">{title}</h3>
        <p>{description}</p>

        <button className="text-sm text-white bg-gray-900 px-3 py-2 rounded-lg mt-4">{buttonText}</button>
      </div>
    </section>
  );
}

export default LargeCard;
