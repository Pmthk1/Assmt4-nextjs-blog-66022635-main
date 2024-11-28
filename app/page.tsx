"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/data"); 
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/image/background 1.jpg')",
      }}
    >
      <div className="flex items-center justify-center">
        <h3 className=" text-xl font-semibold bg-slate-50">
          Welcome to Portfolio Thanakrit Suphamongkhon
        </h3>
      </div>
      <div className="flex items-center justify-center h-full">
        <button
          onClick={handleClick}
          className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Go to Another Page
        </button>
      </div>
    </div>
  );
}
