import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const videoId = searchParams.get("videoId")

  if (!videoId) {
    return NextResponse.json({ error: "videoId required" }, { status: 400 })
  }

  const res = await fetch(
    `https://ext.nicovideo.jp/api/getthumbinfo/${videoId}`
  )

  const xml = await res.text()

  // thumbnail_url を抽出
  const match = xml.match(/<thumbnail_url>(.*?)<\/thumbnail_url>/)

  const thumbnailUrl = match ? match[1] : null

  return NextResponse.json({ thumbnailUrl })
}