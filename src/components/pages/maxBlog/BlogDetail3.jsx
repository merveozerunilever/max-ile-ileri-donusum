import "./BlogStyle.css";
import {
  blogContentText3,
  blogContentText31,
  blogContentText32,
  blogContentText33,
} from "../../../constants";
import { Card } from "react-bootstrap";
function BlogDetail() {
  return (
    <>
      <Card className="guncelBlog">
        <Card.Img
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/5af075c45ce647d2b8906daa012b8287?v=ca615880"
          alt="Döngüsel Hareket ile İleri Dönüşüm"
        />
      </Card>
      <h1 className="blogTitleText">Döngüsel Hareket İle İlerİ Dönüşüm </h1>
      <div className="blogBanner">
        <div className="blogContentText">{blogContentText3}</div>
        <ul className="listArticle">
          <li>
            İşlenmemiş malzemeler, yenilenebileceklerinden daha hızlı bir
            şekilde kaynaklarından çıkarılıyor. Bu durum değerli ve kıt
            kaynakların kaybına yol açıyor.
          </li>
          <li>
            Kullanılan malzemeler bir kez atıldığında, atık olarak kabul
            ediliyor. Atık ürünler genellikle yakılıyor veya akıbeti belli olana
            kadar çöp sahalarına bırakılıyor. Burada bulunan tehlikeli maddeler
            toprağa, suya ve havaya karışarak canlılığı tehlikeye atıyor.
          </li>
          <li>
            Ürünlerin hem üretimi hem de nakliyesi kapsamlı enerji kullanımı ve
            kirliliğini beraberinde getiriyor.{" "}
          </li>
        </ul>
        <div className="blogContentText">{blogContentText31}</div>

        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/af2ed8186de54f358761d57142a499a3?v=0deb9fe3"
          alt="Card image"
        />
        <div className="blog4">{blogContentText33}</div>
        <div className="blogContentText">{blogContentText32}</div>
      </div>
      <ul className="kaynakca">
        Kaynakça
        <ul>
          <a
            href={
              "https://tcocertified.com/circular-economy/?utm_term=upcycling&utm_campaign=Circular+-+spring2020&utm_source=adwords&utm_medium=ppc&hsa_acc=6451387163&hsa_cam=9512205992&hsa_grp=97392443259&hsa_ad=421501608879&hsa_src=g&hsa_tgt=kwd-299156101615&hsa_kw=upcycling&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw7IeUBhBbEiwADhiEMVALw-G7ei8Oi8Bv-mm1IY4DwF_dA6WUtE5Fo2vTCw1LJaWQC-3LMBoCyjcQAvD_BwE "
            }
          >
            {" "}
            <li>
              https://tcocertified.com/circular-economy/?utm_term=upcycling&utm_campaign=Circular+-+spring2020&utm_source=adwords&utm_medium=ppc&hsa_acc=6451387163&hsa_cam=9512205992&hsa_grp=97392443259&hsa_ad=421501608879&hsa_src=g&hsa_tgt=kwd-299156101615&hsa_kw=upcycling&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw7IeUBhBbEiwADhiEMVALw-G7ei8Oi8Bv-mm1IY4DwF_dA6WUtE5Fo2vTCw1LJaWQC-3LMBoCyjcQAvD_BwE{" "}
            </li>
          </a>
          <a href={"https://www.habitat.org/stories/what-is-upcycling"}>
            {" "}
            <li>https://www.habitat.org/stories/what-is-upcycling/</li>{" "}
          </a>
        </ul>
      </ul>
    </>
  );
}
export default BlogDetail;
