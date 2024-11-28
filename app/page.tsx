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
        <h3 className="mb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
          Welcome to My Portfolio
        </h3>
        <h3 className="mb-8 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">
          Thanakrit Suphamongkhon
        </h3>
        
        {/* Button */}
        <button
          onClick={handleClick}
          className="px-10 py-4 text-lg font-medium text-gray-100 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full shadow-md hover:from-gray-500 hover:to-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          View My Portfolio
        </button>
      </div>
    </div>
  );
}
