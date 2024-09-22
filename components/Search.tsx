"use client"
import { FormEvent, useState } from "react"

import { useRouter } from "next/navigation"

export default function Search() {
  const [q, setQ] = useState("")

  const router = useRouter()

  function onQuerySubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    router.push(`/${q}`)
  }

  return (
    <form onSubmit={onQuerySubmit}>
      <input
        type="text"
        name="query"
        className="h-8 rounded-sm px-2 mx-2 text-slate-800"
        placeholder="Search..."
        onChange={(event) => setQ(event.target.value)}
      />
      <button
        type="submit"
        className="h-8 border px-2 rounded-sm hover:bg-slate-700"
      >
        Enter
      </button>
    </form>
  )
}
