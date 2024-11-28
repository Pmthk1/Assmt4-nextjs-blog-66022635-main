"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/data");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/image/background 1.jpg')",
      }}
    >
      <div className="text-center">
        {/* Welcome Message */}
        <h3
          className="mb-4 text-5xl font-extrabold text-gray-100 bg-gradient-to-r from-yellow-300 to-orange-600 drop-shadow-lg bg-black bg-opacity-70 rounded-xl px-6 py-4"
        >
          Welcome to My Portfolio
        </h3>
        <h3
          className="mb-8 text-3xl font-semibold text-gray-100 bg-gradient-to-r from-teal-400 to-green-500 drop-shadow-md bg-black bg-opacity-70 rounded-xl px-6 py-4"
        >
          Thanakrit Suphamongkhon
        </h3>

        {/* Button */}
        <button
          onClick={handleClick}
          className="px-10 py-4 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg hover:from-blue-400 hover:to-blue-600 hover:scale-105 transform transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          View My Portfolio
        </button>
      </div>
    </div>
  );
}
