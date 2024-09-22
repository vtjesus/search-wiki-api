import { type Page } from "@/types/search-results"
import Image from "next/image"

type Props = {
  details: Page
}

export default function Item(props: Props) {
  const src =
    "https://api.dicebear.com/6.x/icons/svg?seed=Pepper&icon=emojiSmile"
  return (
    <section className="flex mb-4">
      <section className="flex justify-center items-center  min-w-fit mr-2">
        {props.details.thumbnail ? (
          <Image
            src={props.details.thumbnail.source}
            alt={props.details.title}
            width={props.details.thumbnail.width}
            height={props.details.thumbnail.height}
            className="border object-cover rounded-sm w-12 h-12"
          />
        ) : (
          <>
            <Image
              src={src}
              alt={props.details.title}
              width={100}
              height={100}
              className="border object-cover rounded-sm w-12 h-12"
            />
          </>
        )}
      </section>
      <section>
        <h1 className="text-slate-800 text-xl capitalize font-semibold underline">
          {props.details.title}
        </h1>
        <p className="text-slate-600">{props.details.extract}</p>
      </section>
    </section>
  )
}
