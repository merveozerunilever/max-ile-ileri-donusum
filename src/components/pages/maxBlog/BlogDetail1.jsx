import "./BlogStyle.css";
import {
  blogContentText1,
  blogContentText11,
  blogContentText12,
  blogContentText121,
} from "../../../constants";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function BlogDetail() {
  return (
    <>
      <Card className="guncelBlog">
        <Card.Img
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/70ff0055166d45cf898371cb8f3c838f?v=3360007d"
          alt=" Dünyadan Yaratıcı İleri Dönüşüm Örnekleri
          "
        />
      </Card>
      <h1 className="blogTitleText">
        Dünyadan Yaratıcı İleri Dönüşüm Örnekleri
      </h1>
      <div className="blogBanner">
        <div className="blogContentText">{blogContentText1}</div>
        <ul className="listArticle">
          <li>Katarzyna Karolczyk – Karolchick</li>
          <div className="blogContentTexts">{blogContentText11}</div>
          <div className="katarzynaGroup">
          <div className="katarzyna">
          <img
          className="cokluAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/2d903d066e4f4467909f834cddcb2e92?v=c03dd18e"
          alt="Katarzyna-1"
        />
          <img
          className="cokluAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/0e1d50ab959a47109791c429b676a0cf?v=5365cb42"
          alt="Katarzyna-2"
        />

        </div>
        <div className="katarzyna">
        <img
          className="cokluAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/24def4fc07714f5ebfcc751315bbd538?v=1d0a48c3"
          alt="Katarzyna-3"
        />
          <img
          className="cokluAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/6681fb9803334d2197fe8d2fcd248ad9?v=c3f7fa4e"
          alt="Katarzyna-4"
        />
        </div>
        </div>

          <li>ASTA</li>
          <div className="blogContentTexts">{blogContentText12}</div>
          <div id="asta">
          <img
          className="cokluAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/aaf45b162e60431c831a1891a67816b5?v=b323c7b4"
          alt="ASTA-1"
        />
          <img
          className="cokluAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/16407b451dba423eae1082391e44d71e?v=45e7ea67"
          alt="ASTA-2"
        />
          <img
          className="cokluAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/37c8aa930e4242fab4344d11d604b51b?v=e27eab04"
          alt="ASTA-3"
        />
        </div>
          <li>HILA</li>
          <div className="blogContentTexts">{blogContentText121}</div>
          <div className="hilaGroup">
          <div className="hila">
          <img
          className="cokluAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/bb3bca02ccf94f88aa3a1ae78eba7038?v=85e36fcf"
          alt="HILA-1"
        />
          <img
          className="cokluAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/59acf1f2dae04ff3b8c8499d56d10fb9?v=80e8c09f"
          alt="HILA-2"
        />

        </div>
        <div className="hila">
        <img
          className="cokluAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/577409bfa707494db5a486a11bd55d3c?v=fa2f1a5b"
          alt="HILA-3"
        />
          <img
          className="cokluAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/1e204bd629e04647bb683e7d74cb4221?v=82686a6b"
          alt="HILA-4"
        />
        </div>
        </div>
        </ul>
      </div>
      <ul className="kaynakca">
        Kaynakça
        <ul>
          <a href={"https://hila.com.au/ "}>
            {" "}
            <li>https://hila.com.au/ </li>
          </a>
          <a href={"https://www.instagram.com/hilaupcycle"}>
            {" "}
            <li>https://www.instagram.com/hilaupcycle/</li>{" "}
          </a>
          <a href={"https://www.redeasta.com.br/cases/en-netza"}>
            {" "}
            <li>https://www.redeasta.com.br/cases/en-netza/</li>{" "}
          </a>
          <a href={"https://www.redeasta.com.br/en/what-we-do"}>
            {" "}
            <li>https://www.redeasta.com.br/en/what-we-do/</li>{" "}
          </a>
          <a
            href={
              "https://www.deutschland.de/en/topic/environment/upcycling-creative-examples-from-germany"
            }
          >
            {" "}
            <li>
              https://www.deutschland.de/en/topic/environment/upcycling-creative-examples-from-germany/
            </li>{" "}
          </a>
          <a href={"https://karolchicks.com/fussball-ucycling"}>
            {" "}
            <li>https://karolchicks.com/fussball-ucycling/</li>{" "}
          </a>
          <a href={"https://www.kulturwest.de/inhalt/neue-leben/"}>
            {" "}
            <li>https://www.kulturwest.de/inhalt/neue-leben//</li>{" "}
          </a>
          <a href={"https://karolchicks.com/fussball-ucycling/"}>
            {" "}
            <li>https://karolchicks.com/fussball-ucycling//</li>{" "}
          </a>
        </ul>
      </ul>
    </>
  );
}
export default BlogDetail;
