import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-stone-500 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/pic1.jpg"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-pink-100">STOCKHOLM</h1>
        <p className="text-base font-bold text-pink-100">KIDNAPPER</p>
      </div>

      <div className="py-10 text-center text-yellow-100">" May Nai Fi Rang Ferr "</div>
      <div className="p-6 mx-1 xl:mx-6 bg-stone-300 rounded-md">
        <p>
          <b>Age:</b> 21
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> Koh Tao
        </p>
      </div>
    </div>
  );
};

export default Profile;
