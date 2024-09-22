export type QueryResult = {
  batchcomplete: string
  continue: Continue
  query: Query
  limits: Limits
}

export type Continue = {
  gsroffset: number
  continue: string
}

export type Limits = {
  extracts: number
}

export type Query = {
  pages: { [key: string]: Page }
}

export type Page = {
  pageid: number
  ns: number
  title: string
  index: number
  thumbnail?: Thumbnail
  pageimage?: string
  extract: string
}

export type Thumbnail = {
  source: string
  width: number
  height: number
}
