import "./BlogStyle.css";
import {
  blogContentText90,
  blogContentText91,
  blogContentText92,
  blogContentText93,
  blogContentText94,
  blogContentText95,
  blogContentText96,
  blogContentText97,
  blogContentText98,
  blogContentText99,
  blogContentText991,
  blogContentText992,
  blogContentText993,
  blogContentText994,
} from "../../../constants";
import { Card, CardGroup, Breadcrumb } from "react-bootstrap";

import DocumentMeta from "react-document-meta";


function BlogDetail() {
  const meta = {
    title: 'Mutfaktaki Yemek Artıklarının İleri Dönüşümü  | Max ile İleri Dönüşüm',
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
  <Breadcrumb.Item active>Mutfaktaki Yemek Artıklarının İleri Dönüşümü </Breadcrumb.Item>
</Breadcrumb>
</div>
      <h1 className="blogTitleText">Mutfaktaki Yemek Artıklarının İlerİ Dönüşümü </h1>
      <div className="blogBanner">

        <div className="blogContentText">{blogContentText90}</div>
        <div className="blogContentText">{blogContentText91}</div>
        <div className="blogContentText">{blogContentText92}</div>

        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/e85e5e8b48a64f8799bddd39c6534dc4?v=ed45b599"
          alt="Yeşil Soğan"
        />
                <div className="blogContentText">{blogContentText93}</div>
        <div className="blogContentText">{blogContentText94}</div>
      

        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/140e1878b8e24bf2967341d8fdd2651a?v=582b82b2"
          alt="Kavanoz Suyu"
        />
                      <div className="blogContentText">{blogContentText95}</div>
                      <div className="blogContentText">{blogContentText96}</div>
                      <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/c1a61553132d42efb6ce6eaa22ca07bc?v=c781fca1"
          alt="Portakal Kabuğu"
        />
           
           <div className="blogContentText">{blogContentText97}</div>
           <div className="blogContentText">{blogContentText98}</div>
           <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/866d65d1a82949b29ab369d759e81170?v=00a39419"
          alt="Bird Suet"
        />
     
                   <div className="blogContentText">{blogContentText99}</div>
                   <div className="blogContentText">{blogContentText991}</div>
                   <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/3e25221b013349f78144c1d3148c66cc?v=45170ced"
          alt="Temizlik Suyu"
        />
                   <div className="blogContentText">{blogContentText992}</div>
                   <div className="blogContentText">{blogContentText993}</div>
                   <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/cda573342f424f228edfaff6f364fe6b?v=0c03654a"
          alt="Pic-1"
        />

<div className="blogContentText">{blogContentText994}</div>

      
      </div>
      <ul className="kaynakca">
        Kaynakça
        <ul>
          <a
            href={
              "https://www.realtor.com/advice/home-improvement/ways-to-upcycle-food-scraps/"
            } target="_blank"
          >
            {" "}
            <li>
            https://www.realtor.com/advice/home-improvement/ways-to-upcycle-food-scraps/
            </li>
          </a>
         
          
        </ul>
      </ul>
    </>
  );
}
export default BlogDetail;
