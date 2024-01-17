"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

const NewGroupPage = () => {
  const [groupName, setGroupName] = useState("");
  const [groupUrl, setGroupUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [canCreate, setCanCreate] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (groupUrl.startsWith("https://chat.whatsapp.com/")) {
      try {
        const response = await axios.get(
          `https://groups.ahmedghaleb.com/api/fetch-url?url=${groupUrl}`
        );
        const data = response.data;
        //console.log(data)
        if (data) {
          setImageUrl(data);
        }
        setCanCreate(true);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    } else {
      console.log("Invalid URL");
    }
  };

  const handleCreateGroup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://groups.ahmedghaleb.com/api/add-group",
        {
          name: groupName,
          link: groupUrl,
          imageUrl,
        }
      );
      console.log(response.data);
      router.push("/");
    } catch (error) {
      console.error("Error Creating Group:", error);
    }
  };

  const handleGroupUrlChange = (e) => {
    setGroupUrl(e.target.value);
  };

  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value);
  };

  return (
    <div className="flex justify-center items-center py-10 max-h-screen max-w-lg mx-auto">
      <div className="border border-gray-300 bg-white p-10 rounded-lg shadow-2xl">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4 items-center"
        >
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Fetched"
              width={200}
              height={200}
              className="rounded-full mb-3 shadow-xl"
            />
          )}
          <input
            type="text"
            value={groupName}
            onChange={handleGroupNameChange}
            maxLength="40"
            placeholder="Enter the group name"
            className=" border border-gray-900 p-2 rounded-lg "
          />
          <br />
          <input
            type="text"
            value={groupUrl}
            onChange={handleGroupUrlChange}
            placeholder=" Enter the group Link ..."
            className="border border-gray-900 p-2 rounded-lg"
          />
          <br />
          {canCreate ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-all duration-300"
              onClick={handleCreateGroup}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-all duration-300"
              onClick={handleSubmit}
            >
              Confirm
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default NewGroupPage;
