import { PageResult, SearchParams } from "@/typing";
import { headers } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { search, pages, ...params } = await request.json();

  const searchParams: SearchParams = params;

  if (!search) {
    return NextResponse.next(
      new Response("Missing Search Term", {
        status: 400,
      })
    );
  }

  const filters: any = [];

  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) {
      if ((key = "max_price")) {
        if ((value = "1000+")) return;
      }

      filters.push({
        key,
        value: key === "sort_by" ? value : Number(value),
      });
    }
  });

  const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.OXY_USERNAME}:${process.env.OXY_PASS}`
        ).toString("base64"),
    },
    cache: "no-store",
    body: JSON.stringify({
      source: "google_shopping_search",
      domain: "com",
      query: search,
      pages: Number(pages) | 1,
      parse: true,
      context: filters,
    }),
  });

  const data = await response.json();

  const pageResult: PageResult = data.results;

  return NextResponse.json(pageResult);
}
