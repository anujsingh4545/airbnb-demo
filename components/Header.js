import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UserIcon } from "@heroicons/react/solid";
function header() {
  return (
    <header className=" sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-2 md:px-7">
      {/* Left section */}
      <div className="relative flex items-center h-6 md:h-10  my-auto ">
        <Image src={"https://links.papareact.com/qd3"} layout="fill" objectFit="contain" objectPosition="left" />
      </div>

      {/* Center section */}
      <div className=" flex items-center md:border-2 rounded-full py-1.5 md:shadow-sm">
        <input type="text" className="flex-grow md:pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" placeholder="Start your search" />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1.5 cursor-pointer mr-2 md:mx-2" />
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-2 justify-end text-gray-500 ">
        <p className="text-sm hidden md:inline cursor-pointer">Become a host </p>
        <GlobeAltIcon className="h-5 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-5 cursor-pointer" />
          <UserCircleIcon className="h-5 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default header;
