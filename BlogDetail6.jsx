import "./BlogStyle.css";
import {
  blogBaslik1,
  blogBaslik2,
  blogBaslik4,
  blogBaslik5,
  blogBaslik6,
  blogContentText4,
  blogContentText41,
  blogContentText42,
  blogContentText43,
  blogContentText44,
  blogContentText45,
  blogContentText46,
  blogContentText47,
  blogContentText48,
  blogContentText49,
  blogContentText50,
  blogContentText51,
  blogContentText52,
  blogContentText53,
  blogContentText54,
  blogContentText55,
  blogContentText56,
  blogContentText57,
  blogContentText58,
  blogContentText59,
  blogContentText591,
  blogContentText60,
  blogContentText61,
  blogContentText62,
  blogContentText63,
  blogContentText64,
  blogContentText65,
  blogContentText66,
  daimaGelisim,
  eTrash2Cash,
  ipucu,
  madde1,
  madde11,
  madde2,
  madde21,
  madde3,
  madde31,
  madde4,
  madde41,
  RuhunuArayanYapılar,
  tekIcerik,
  upcycleAfrica,
  yaraticiIcerik,
  zamansizIcerik,
  zenginIcgoru,
} from "../../../constants";
import { Card, CardGroup, Breadcrumb } from "react-bootstrap";

import DocumentMeta from "react-document-meta";


function BlogDetail() {
  const meta = {
    title: 'İleri Dönüşüm Hayatın Kıyısında Kalmışlara Nasıl Işık Oluyor| Max ile İleri Dönüşüm',
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
  <Breadcrumb.Item active>İleri Dönüşüm Hayatın Kıyısında Kalmışlara Nasıl Işık Oluyor</Breadcrumb.Item>
</Breadcrumb>
</div>
      <h1 className="blogTitleText">İlerİ Dönüşüm Hayatın Kıyısında Kalmışlara Nasıl ışık Oluyor</h1>
      <div className="blogBanner">

        <div className="blogContentText">{blogContentText60}</div>
        <div className="blog4">{upcycleAfrica}</div>
        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/e8aa52fb70254fea9daea057243d480a?v=4e7183b1"
          alt="Upcycle Africa"
        />
        <div className="blogContentText">{blogContentText61}</div>
        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/9018d52b6bc74a26b6a45aa9b22649b4?v=3ee91f97"
          alt="Upcycle Africa"
        />
        <div className="blogContentText">{blogContentText62}</div>
        <div className="blogContentText">{blogContentText63}</div>
     
        <div className="blog4">{eTrash2Cash}</div>
        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/8c9ad56945764e3ab27d010c1bc6b384?v=6e630831"
          alt="eTrash2Cash"
        />
        <div className="blogContentText">{blogContentText64}</div>
        <div className="blogContentText">{blogContentText65}</div>
        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/d693697b0bf44c259615c5c748c0bf4d?v=82ac5b32"
          alt="eTrash2Cash"
        />

                <div className="blogContentText">{blogContentText66}</div>

      
      </div>
      <ul className="kaynakca">
        Kaynakça
        <ul>
          <a
            href={
              "https://etrash2cash.com/"
            } target="_blank"
          >
            {" "}
            <li>
            https://etrash2cash.com/
            </li>
          </a>
          <a href={"https://iki-small-grants.de/project/women-re-and-upcycling-plastic-trash/"} target="_blank">
            {" "}
            <li>
            https://iki-small-grants.de/project/women-re-and-upcycling-plastic-trash/
            </li>{" "}
          </a>
          <a href={"http://upcycleafrica.org/"} target="_blank">
            {" "}
            <li>
              http://upcycleafrica.org/
            </li>{" "}
          </a>
          
        </ul>
      </ul>
    </>
  );
}
export default BlogDetail;
