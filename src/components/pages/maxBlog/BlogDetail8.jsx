import "./BlogStyle.css";
import {
  blogContentText81,
  blogContentText82,
  blogContentText83,
  blogContentText84,
  blogContentText86,
  blogContentText87,
  blogContentText88,
  blogContentText89,
  blogContentText891,
  blogContentText892,
  blogContentText893,
} from "../../../constants";
import { Card, CardGroup, Breadcrumb } from "react-bootstrap";

import DocumentMeta from "react-document-meta";


function BlogDetail() {
  const meta = {
    title: 'İleri Dönüşümde Aktiflik - Spor x İleri Dönüşüm | Max ile İleri Dönüşüm',
    description: 'İleri dönüşüm ile ilgi blog yazılarımıza bu ekrandan ulaşabilirsiniz!',
    canonical: "Self-Canonical",
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }
  }
  return (
    <>
<DocumentMeta {...meta} />
      {/* <Card.Img
        src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/9b1185b21d4242cb97483cf2d2d30787?v=0407e75f"
        alt="Anlatmanın 50 Yolu: İçerik İleri Dönüşümü"
      /> */}
                      <div className="yapi">
<Breadcrumb className="firstItem">
  <Breadcrumb.Item href="/">Manifesto</Breadcrumb.Item>
  <Breadcrumb.Item href="/max-blog">MaxBlog</Breadcrumb.Item>
  <Breadcrumb.Item active>İleri Dönüşümde Aktiflik - Spor x İleri Dönüşüm</Breadcrumb.Item>
</Breadcrumb>
</div>
      <h1 className="blogTitleText">İlerİ Dönüşümde Aktiflİk - Spor x İlerİ Dönüşüm</h1>
      <div className="blogBanner">

        <div className="blogContentText">{blogContentText81}</div>
        <div className="blogContentText">{blogContentText82}</div>
        <div className="blogContentText">{blogContentText83}</div>
        <div className="blogContentText">{blogContentText84}</div>

        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/aa4c31d3f80547ad8b523528756dea5c?v=e7005221"
          alt="Chicago"
        />
                <div className="blogContentText">{blogContentText86}</div>
        <div className="blogContentText">{blogContentText87}</div>
        <div className="blogContentText">{blogContentText88}</div>
      

        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/b4ce09e9db0e4733a6f0d8336432a6ef?v=2d4aea3a"
          alt="Jersey"
        />
                      <div className="blogContentText">{blogContentText89}</div>
                      <div className="blogContentText">{blogContentText891}</div>
                      <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/e47fdc6ccec44f84a87d1895ad05fa83?v=4df8dc4b"
          alt="Biking Gears"
        />
           
           <div className="blogContentText">{blogContentText892}</div>
           <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/6192987da93c4e55ac90d7029026d538?v=0b3cd42c"
          alt="Water Ski Chair"
        />
           <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/38ea14584eb74dd883f66c2d79ee9eb5?v=01c2149b"
          alt="Upcycled Ski Bench"
        />
                   <div className="blogContentText">{blogContentText893}</div>
                   <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/8ee36e672deb4dbba25ac14b4708843d?v=1dbfa92d"
          alt="Zippered Basketball Bag"
        />

        
      
      </div>
      <ul className="kaynakca">
        Kaynakça
        <ul>
          <a
            href={
              "https://www.diys.com/ways-to-reuse-old-sports-equipment/"
            } target="_blank"
          >
            {" "}
            <li>
            https://www.diys.com/ways-to-reuse-old-sports-equipment/
            </li>
          </a>
          <a href={"https://www.looptworks.com/blogs/looptworks-blog/reduck-upcycling-uniforms-from-university-of-oregon-athletics"} target="_blank">
            {" "}
            <li>
            https://www.looptworks.com/blogs/looptworks-blog/reduck-upcycling-uniforms-from-university-of-oregon-athletics
            </li>{" "}
          </a>
          <a href={"https://www.looptworks.com/blogs/looptworks-blog/the-green-games-portland-trail-blazers-looptworks-collaboration"} target="_blank">
            {" "}
            <li>
              https://www.looptworks.com/blogs/looptworks-blog/the-green-games-portland-trail-blazers-looptworks-collaboration
            </li>{" "}
          </a>
          <a href={"https://www.bbc.com/news/business-51484893"} target="_blank">
            {" "}
            <li>
              https://www.bbc.com/news/business-51484893
            </li>{" "}
          </a>
          <a href={"https://www.trendhunter.com/trends/rejersey"} target="_blank">
            {" "}
            <li>
              https://www.trendhunter.com/trends/rejersey
            </li>{" "}
          </a>
          <a href={"https://about.puma.com/en/newsroom/corporate-news/2022/03-23-2022-rejersey"} target="_blank">
            {" "}
            <li>
              https://about.puma.com/en/newsroom/corporate-news/2022/03-23-2022-rejersey
            </li>{" "}
          </a>
          
        </ul>
      </ul>
    </>
  );
}
export default BlogDetail;
