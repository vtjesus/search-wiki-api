import Search from "./Search"

export default function Menu() {
  return (
    <nav className="h-16 bg-slate-600 flex items-center justify-between  px-4">
      <h3 className="font-medium text-lg">Wiki</h3>
      <Search />
    </nav>
  )
}
