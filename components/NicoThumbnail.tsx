
"use client"

import { useEffect, useState } from "react"

type Props = {
  videoId: string
  width?: number
}

export default function NicoThumbnail({ videoId, width = 250 }: Props) {

  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    setSrc(`/api/getthumbinfo=/${videoId}`)
  }, [videoId])

  if (!src) {
    return <div style={{ width, height: width * 0.56, background: "#ff0000" }} />
  }

  return (
    <img
      src={src}
      width={width}
      height={width * 0.56}
      alt="video thumbnail"
      style={{ width: "100%", height: "auto", display: "block" }}
    />
  )
}
