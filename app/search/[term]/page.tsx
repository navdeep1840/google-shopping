import ResultList from "@/components/ResultList";
import { PageResult, SearchParams } from "@/typing";
import { getFetchUrl } from "@/utils/getFetchUrl";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  searchParams: SearchParams;
  params: {
    term: string;
  };
};

const SearchPage = async ({ searchParams, params: { term } }: Props) => {
  if (!term) {
    redirect("/");
  }

  const response = await fetch(getFetchUrl("api/search"), {
    method: "POST",
    body: JSON.stringify({
      search: term,
      ...searchParams,
    }),
  });

  const results = (await response.json()) as PageResult[];
  // console.log("🚀 ~ file: page.tsx:27 ~ SearchPage ~ results:", results);

  return (
    <div>
      <ResultList results={results} term={term} />
    </div>
  );
};

export default SearchPage;
