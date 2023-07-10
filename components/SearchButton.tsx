"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type Props = {};

const SearchButton = (props: Props) => {
  const { pending } = useFormStatus();

  return (
    <button className="bg-blue-500 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-4 rounded-full">
      {pending && "Search..."}
      {!pending && <MagnifyingGlassIcon className="h-5 w-5" />}
    </button>
  );
};

export default SearchButton;
