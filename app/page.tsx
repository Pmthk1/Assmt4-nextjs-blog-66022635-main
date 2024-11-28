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
        <h3 className="mb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Welcome to My Portfolio
        </h3>
        <h3 className="mb-8 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Thanakrit Suphamongkhon
        </h3>
        
        {/* Button */}
        <button
          onClick={handleClick}
          className="px-10 py-4 text-lg font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          View My Portfolio
        </button>
      </div>
    </div>
  );
}
