import { type QueryResult } from "@/types/search-results"

import Item from "@/components/Item"

type Props = {
  results: Promise<QueryResult>
}

export default async function SearchItems(props: Props) {
  const results = await props.results

  const searchResults = results?.query?.pages

  return (
    <section>
      {searchResults ? (
        <>
          {Object.values(searchResults).map((page) => (
            <Item key={page.index} details={page} />
          ))}
        </>
      ) : (
        <section className="flex justify-center">
          <h1>Not found</h1>
        </section>
      )}
    </section>
  )
}
