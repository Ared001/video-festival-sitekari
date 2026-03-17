import VideoCard from "@/components/VideoCard"

export default function VideosPage() {

  const videos = [
    {
      title: "【東方MV】Help me, ERINNNNNN!!【ビートまりお】",
      author: "ビートまりお",
      videoId: "sm43751325"
    },
    {
      title: "【東方】Bad Apple!!　ＰＶ【影絵】",
      author: "あにら",
      videoId: "sm8628149"
    },
    {
      title: "DECO*27 - テレパシ feat. 初音ミク",
      author: "DECO*27",
      videoId: "sm44661043"
    },
     {
      title: "新・豪血寺一族 -煩悩解放 - レッツゴー！陰陽師",
      author: "中の",
      videoId: "sm9"
    },
    {
      title: "DECO*27 - 愛言葉V feat. 初音ミク",
      author: "DECO*27",
      videoId: "sm45938997"
    },

  ]

  return (
    <main>

      <h1>投稿作品一覧</h1>

      <div
      style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))",
      gap: "24px"
       }}
       >
        
        {videos.map(video => (
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>

    </main>
  )
}
