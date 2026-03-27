const HeroVideoLayout = ({ data }) => {
  console.log(data)
  return (
    <div className="layout-container w-full bg-[#121212] text-white">
      <section className="video-player w-full h-[500px]">
        <iframe width='100%' height='100%' src={`https://www.youtube.com/embed/${data.video_url}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </section>


      <main className="main-content w-full pt-4">
        <h1 className="text-2xl font-semibold tracking-tight">{data.headline}</h1>
        <p className="meta-info font-medium text-[20px] pt-3">By {data.metadata.author} | {data.metadata.date}</p>
        <p className="description text-[17px] tracking-normal pt-6">{data.description}</p>
      </main>

      <div>
        {
          data.content_blocks.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p dangerouslySetInnerHTML={{__html: block.text}} />
                )
            
              default:
                break;
            }
          })
        }
      </div>

    </div>
  );
};


export default HeroVideoLayout