import getWikiResults from "@/lib/getWikiResults"
import SearchItems from "@/components/SearchItems"
import { Metadata } from "next"

type Props = {
  params: {
    query: string
  }
}

// new comment

export async function generateMetadata(props: Props): Promise<Metadata> {
  const searchResults = await getWikiResults(props.params.query)

  console.log("hello")

  if (!searchResults?.query?.pages)
    return {
      title: "Not Found",
      description: "Not found",
    }

  return {
    title: decodeURIComponent(props.params.query),
    description: decodeURIComponent(props.params.query),
  }
}

export default function Query(props: Props) {
  const searchResults = getWikiResults(props.params.query)

  return (
    <div className="flex justify-center">
      <section className="bg-slate-300 text-slate-800 w-1/2 p-4 h-[calc(100vh-64px)] overflow-y-scroll ">
        <SearchItems results={searchResults} />
      </section>
    </div>
  )
}
