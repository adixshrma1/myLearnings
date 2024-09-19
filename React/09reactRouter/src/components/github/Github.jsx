import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const Github = () => {
    const data = useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/adixshrma1")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
  return (
    <>
      <div className="text-center bg-gray-700 text-white text-3xl p-4 ">
        Github followers: {data.followers}
        <div className="flex justify-center">
          <img
            className="w-60  my-3 rounded-full"
            src={data.avatar_url}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/adixshrma1');
    return response.json();
}
