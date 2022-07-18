import "./BlogStyle.css";
import {
    asagiDonusum,
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
  blogContentText70,
  blogContentText71,
  blogContentText72,
  blogContentText73,
  blogContentText74,
  daimaGelisim,
  donguselEkonomi,
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
  ucR,
  upcycleAfrica,
  yaraticiIcerik,
  zamansizIcerik,
  zenginIcgoru,
} from "../../../constants";
import { Card, CardGroup, Breadcrumb } from "react-bootstrap";

import DocumentMeta from "react-document-meta";


function BlogDetail() {
  const meta = {
    title: 'Yine Yeni Yeniden: İleri Dönüşüm Kavramları | Max ile İleri Dönüşüm',
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
  <Breadcrumb.Item active>Yine Yeni Yeniden: İleri Dönüşüm Kavramları </Breadcrumb.Item>
</Breadcrumb>
</div>
      <h1 className="blogTitleText">Yine Yenİ Yeniden: İleri Dönüşüm Kavramları </h1>
      <div className="blogBanner">

        <div className="blogContentText">{blogContentText70}</div>
        <div className="blog4">{asagiDonusum}</div>
        <div className="blogContentText">{blogContentText71}</div>

        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/5ddd53989e4c4650b52ce67339afc84a?v=b2d9a85e"
          alt="Hamur Kağıt Aşağı Dönüşüm"
        />
        <Card.Text className="gorselAciklama">
        Hamur Kağıt Örneği{" "}
        </Card.Text>
        <div className="blog4">{donguselEkonomi}</div>

        <div className="blogContentText">{blogContentText72}</div>
        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/fb281c776af141d286645b039f7a09dd?v=bcb73c94"
          alt="Döngüsel Ekonomi"
        />
                <Card.Text className="gorselAciklama">
                Döngüsel modelde ileri dönüşüm örneği{" "}
        </Card.Text>
     
        <div className="blog4">{ucR}</div>
    
        <div className="blogContentText">{blogContentText73}</div>
        <div className="blogContentText">{blogContentText74}</div>
      
      </div>
      <ul className="kaynakca">
        Kaynakça
        <ul>
          <a
            href={
              "https://www.techtarget.com/whatis/definition/upcycling"
            } target="_blank"
          >
            {" "}
            <li>
            https://www.techtarget.com/whatis/definition/upcycling
            </li>
          </a>
          <a href={"https://www.allthingsnature.org/what-is-downcycling.html"} target="_blank">
            {" "}
            <li>
            https://www.allthingsnature.org/what-is-downcycling.html
            </li>{" "}
          </a>
          <a href={"https://www.europarl.europa.eu/RegData/etudes/BRIE/2016/573899/EPRS_BRI%282016%29573899_EN.pdf"} target="_blank">
            {" "}
            <li>
              https://www.europarl.europa.eu/RegData/etudes/BRIE/2016/573899/EPRS_BRI%282016%29573899_EN.pdf
            </li>{" "}
          </a>
          <a href={"https://www.solarschools.net/knowledge-bank/sustainability/reduce-reuse-recycle"} target="_blank">
            {" "}
            <li>
              https://www.solarschools.net/knowledge-bank/sustainability/reduce-reuse-recycle
            </li>{" "}
          </a>
          
        </ul>
      </ul>
    </>
  );
}
export default BlogDetail;
