"use client";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import SearchButton from "./SearchButton";
import {
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from "@tremor/react";
import Avatar from "react-avatar";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const SORT_BY_MAP = {
  r: "Default",
  rv: "By Review",
  p: "By Price (low to high)",
  pd: "By Price (high to low)",
};

const Header = (props: Props) => {
  const [pages, setPages] = useState("");

  const [sortBy, setSortBy] = useState("r");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");

  const router = useRouter();

  return (
    <header className="flex flex-col items-center md:flex-row md:items-start md:space-x-6 px-2 pt-10 pb-5 md:p-10 md:pb-5">
      <Link href={"/"}>
        <Image
          src="https://links.papareact.com/208"
          alt="logo"
          width={150}
          height={150}
          className="object-contain mr-10"
        />
      </Link>

      <div className="w-full md:max-w-2xl">
        <form
          action={(formData) => {
            const search = formData.get("search");

            if (!formData.get("search")) return;
            const params = new URLSearchParams();

            if (pages) params.set("pages", pages.toString());
            if (sortBy) params.set("sort_by", sortBy.toString());
            if (min) params.set("min_price", min.toString());
            if (max) params.set("max_price", max.toString());

            router.push(`/search/${search}?${params.toString()}`);
          }}
        >
          <div className="flex items-center gap-2 w-full px-4 ">
            <div className="flex space-x-2 items-center shadow-xl rounded-full border-0 px-6 py-4 flex-1 max-w-md">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                name="search"
                className="outline-none flex-1"
              />
            </div>
            <SearchButton />
          </div>
          <div className="grid grid-cols-2 gap-2 p-4  max-w-lg md:grid-cols-4 md:max-w-lg mx-auto item-start ">
            <SearchSelect
              className="min-w-4"
              placeholder="# of-pages"
              onChange={(value: any) => setPages(value)}
            >
              {[...Array(100)].map((_, i) => {
                return (
                  <SearchSelectItem value={(i + 1).toString()} key={i}>
                    {(i + 1).toString()} pages
                  </SearchSelectItem>
                );
              })}
            </SearchSelect>
            <Select
              className="min-w-4"
              placeholder="Sort"
              onChange={(value: any) => setSortBy(value)}
            >
              {Object.entries(SORT_BY_MAP).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
            </Select>

            <SearchSelect
              className="min-w-4"
              placeholder="Min Price"
              onChange={(value: any) => setMin(value)}
            >
              {["", "100", "200", "300"].map((_, i) => {
                return (
                  <SearchSelectItem key={i} value={_.toString()}>
                    {i === 0 ? "No Minimum" : `$${_.toString()}`}
                  </SearchSelectItem>
                );
              })}
            </SearchSelect>
            <SearchSelect
              className="min-w-4"
              placeholder="Max Price"
              onChange={(value: any) => setMax(value)}
            >
              {["", "100", "200", "300"].map((_, i) => {
                return (
                  <SearchSelectItem key={i} value={_.toString()}>
                    {i === 0 ? "No Max" : `$${_.toString()}`}
                  </SearchSelectItem>
                );
              })}
            </SearchSelect>
          </div>
        </form>
      </div>

      {/* avator */}
      <div className="hidden lg:flex  flex-1 justify-end">
        <Avatar name="Nav" round size="50" />
      </div>
    </header>
  );
};

export default Header;
