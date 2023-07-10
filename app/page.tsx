import Image from "next/image";
import Link from "next/link";

const SEARCHES = [
  {
    id: 1,
    term: "Monitors over $500",
    url: "search/monitors?sort_by=r&min_price=500",
    color: "bg-blue-500",
  },
  {
    id: 2,
    term: "Laptops under $1000",
    url: "search/laptops?sort_by=r&max_price=1000",
    color: "bg-green-500",
  },
  {
    id: 3,
    term: "Smartphones with 5G",
    url: "search/smartphones",
    color: "bg-yellow-500",
  },
  {
    id: 4,
    term: "Wireless headphones",
    url: "search/headphones",
    color: "bg-purple-500",
  },
  {
    id: 5,
    term: "Gaming keyboards",
    url: "search/keyboards",
    color: "bg-red-500",
  },
  {
    id: 6,
    term: "Fitness trackers",
    url: "search/trackers",
    color: "bg-orange-500",
  },
  {
    id: 7,
    term: "Portable speakers",
    url: "search/speakers",
    color: "bg-indigo-500",
  },
  {
    id: 8,
    term: "External hard drives",
    url: "search/hard-drives",
    color: "bg-pink-500",
  },
  {
    id: 9,
    term: "Cameras with 4K video",
    url: "search/cameras",
    color: "bg-teal-500",
  },
  {
    id: 10,
    term: "Printers with Wi-Fi",
    url: "search/printers",
    color: "bg-cyan-500",
  },
  {
    id: 11,
    term: "Wireless routers",
    url: "search/routers",
    color: "bg-blue-500",
  },
  {
    id: 12,
    term: "Smartwatches for fitness",
    url: "search/smartwatches",
    color: "bg-green-500",
  },
  {
    id: 13,
    term: "Bluetooth earphones",
    url: "search/earphones",
    color: "bg-yellow-500",
  },
  {
    id: 14,
    term: "Tablets with pen support",
    url: "search/tablets",
    color: "bg-purple-500",
  },
  {
    id: 15,
    term: "Desktop computers",
    url: "search/computers",
    color: "bg-red-500",
  },
  // Add more search objects if needed
];

export default function Home() {
  return (
    <div className="p-10 pt-0 text-center md:text-left">
      <h1 className="text-3xl font-extralight mb-5">
        Welcome to Google Shopping
      </h1>
      <h2 className="mb-5">
        Get start by clicking the example or type in the search box
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  justify-center items-center gap-5 mt-5">
        {SEARCHES.map((search) => (
          <Link
            href={search.url}
            prefetch={false}
            key={search.id}
            className={`${search.color} w-full h-36 hover:opacity-50 text-white font-bold py-5 px-4 rounded`}
          >
            {search.term}
          </Link>
        ))}
      </div>
    </div>
  );
}
