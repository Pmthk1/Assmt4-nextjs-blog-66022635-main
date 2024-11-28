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
        <h3 className="mb-6 text-2xl font-bold text-white bg-black bg-opacity-50 rounded-md px-4 py-2">
          Welcome to My Portfolio
        </h3>
        <h3 className="mb-6 text-2xl font-bold text-white bg-black bg-opacity-50 rounded-md px-4 py-2">
          Thanakrit Suphamongkhon
        </h3>
        <button
          onClick={handleClick}
           className="px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          View My Portfolio
        </button>
      </div>
    </div>
  );
}
