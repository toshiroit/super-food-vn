import { useRef, useState } from "react";

const BackgroundFixed = () => {
  const [valueBackground] = useState({ type: "video", image: "" });
  const refBackground = useRef<HTMLDivElement>(null);
  return (
    <div className="background showBackgroundOpacity">
      <div ref={refBackground} className="background__inner">
        <div className="image">
          {valueBackground && valueBackground.type === "image" ? (
            <picture>
              <img src={valueBackground && valueBackground.image} alt="" />
            </picture>
          ) : valueBackground.type === "video" ? (
            <iframe
              src="https://www.youtube.com/embed/liGYXSvIv_s?list=RDwCIiCH8kqeA"
              title="ROCK-mode -LiVE is Smile Always～PiNK BLACK～ in 日本武道館「ちょこドーナツ」-"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={false}
            ></iframe>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default BackgroundFixed;
