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
  ipucu,
  RuhunuArayanYapılar,
} from "../../../constants";
import { Card, CardGroup } from "react-bootstrap";

function BlogDetail() {
  return (
    <>
      <Card.Img
        src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/9b1185b21d4242cb97483cf2d2d30787?v=0407e75f"
        alt="Mimari Reenkarnasyon ve İlerİ Dönüşüm"
      />
      <h1 className="blogTitleText">Mimari Reenkarnasyon ve İlerİ Dönüşüm</h1>
      <div className="blogBanner">
        <div className="blogContentText">{blogContentText4}</div>
        <div className="blogContentText">{blogContentText41}</div>
        <div className="blog4">{RuhunuArayanYapılar}</div>
        <div className="blogContentText">{blogContentText42}</div>
        <div className="blogContentText">{blogContentText44}</div>
        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/5cead34266e3426dbb5eb718c88370d2?v=b415c4db"
          alt="Mimari Reenkarnasyon1"
        />
        <Card.Text className="gorselAciklama">
          Estetik ileri dönüşüm örneklerinden Danimarka Ulusal Denizcilik Müzesi{" "}
        </Card.Text>
        <div className="blogContentText">{blogContentText43}</div>

        <div className="blogContentText">{ipucu}</div>
        <div className="blog4">{blogBaslik1}</div>
        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/2e61c64209fe435291ac27a247710369?v=5f982a13"
          alt="Mimari Reenkarnasyon2"
        />
        <div className="blogContentText">{blogContentText45}</div>
        <div className="blog4">{blogBaslik2}</div>
        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/d1f3954177044d21b5f1622f14c35a4f?v=615b0981"
          alt="Mimari Reenkarnasyon3"
        />
        <div className="blogContentText">{blogContentText46}</div>
        <div className="blog4">{blogBaslik4}</div>
        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/999f485caf4645ac8ee4fe43967f1465?v=31f52526"
          alt="Mimari Reenkarnasyon5"
        />
        <div className="blogContentText">{blogContentText48}</div>
        <div className="blog4">{blogBaslik5}</div>
        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/e7556f2fad3a4343acd69ae00b82cd7d?v=6fbc4818"
          alt="Mimari Reenkarnasyon5"
        />
        <div className="blogContentText">{blogContentText49}</div>
        <div className="blog4">{blogBaslik6}</div>
        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/87c8c6049536494e9e26a8bb7a531a01?v=5a20752a"
          alt="Mimari Reenkarnasyon6"
        />
        <div className="blogContentText">{blogContentText50}</div>
      </div>
      <ul className="kaynakca">
        Kaynakça
        <ul>
          <a
            href={
              "https://www.re-thinkingthefuture.com/architects-lounge/a318-10-most-creative-adaptive-reuse-projects/"
            }
          >
            {" "}
            <li>
              https://www.re-thinkingthefuture.com/architects-lounge/a318-10-most-creative-adaptive-reuse-projects/
            </li>
          </a>
          <a href={"https://redshift.autodesk.com/architectural-upcycling/"}>
            {" "}
            <li>
              https://redshift.autodesk.com/architectural-upcycling//
            </li>{" "}
          </a>
          <a href={""}>
            {" "}
            <li>
              https://miniwiz.medium.com/5-examples-of-upcycling-in-architecture-and-how-theyre-changing-the-business-ff90729105d8/
            </li>{" "}
          </a>
        </ul>
      </ul>
    </>
  );
}
export default BlogDetail;
