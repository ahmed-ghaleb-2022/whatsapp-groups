import Link from "next/link";
const Navbar = () => {
  return (
    <nav className=" w-full px-7 sm:px-16 py-4 flex flex-col justify-between sm:flex-row gap-4 items-center  bg-[#053966]">
      <Link href="/">
        <h1 className="text-3xl font-semibold text-white">Whatsapp Groups</h1>
      </Link>
      <Link
        href="/new"
        className="bg-green-500 hover:bg-green-700 text-white text-2xl font-bold py-2 px-4 rounded transition-all duration-300"
      >
        Add New Group
      </Link>
    </nav>
  );
};

export default Navbar;
