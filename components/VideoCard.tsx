import NicoThumbnail from "@/components/NicoThumbnail"

type Video = {
  title: string
  author: string
  videoId: string
}

export default function VideoCard({ video }: { video: Video }) {
  return (
    <a
      href={`https://www.nicovideo.jp/watch/${video.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          width: "250px"
        }}
      >
        <NicoThumbnail videoId={video.videoId} />

        <div style={{ padding: "10px" }}>
          <h3>{video.title}</h3>
          <p>{video.author}</p>
        </div>
      </div>
    </a>
  )
}
