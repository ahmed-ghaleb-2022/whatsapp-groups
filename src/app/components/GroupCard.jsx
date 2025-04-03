"use client";

import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
const GroupCard = ({ id, name, link, imageUrl }) => {
  const router = useRouter();

  const removeGroup = async (id) => {
    await axios
      .delete(`https://groups.ahmedghaleb.com/api/delete-group/${id}`)
      .then((response) => {
        console.log(response.data);
        router.refresh();
      });
  };

  return (
    <div className="flex flex-col gap-2 px-1 sm:px-4 py-4 border items-center  bg-white rounded-xl shadow-lg w-44 sm:w-64">
      <img
        src={imageUrl}
        alt="random image"
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-2xl shadow-slate-700"
      />
      <h2 className="text-lg sm:text-xl font-bold mt-5 text-center">{name}</h2>
      <Link
        href={link}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 sm:px-4 rounded transition-all duration-300"
      >
        Join
      </Link>
      <button
        onClick={() => removeGroup(id)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 sm:px-5 rounded transition-all duration-300"
      >
        Delete
      </button>
    </div>
  );
};

export default GroupCard;
