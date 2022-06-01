import "./BlogStyle.css";
import {
  blogContentText2,
  blogContentText21,
  blogContentText22,
  blogContentText23,
  blogContentText24,
  blogContentText25,
  blogContentText26,
} from "../../../constants";
import { Card } from "react-bootstrap";
function BlogDetail() {
  return (
    <>
      <Card className="guncelBlog">
        <Card.Img
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/a3d0358361924f7588a56b36fa14d1ae?v=12ad425d"
          alt="Oynamanın Geleceği"
        />
      </Card>
      <h1 className="blogTitleText">Oynamanın Geleceğİ</h1>
      <div className="blogBanner">
        <div className="blogContentText">{blogContentText2}</div>
        <img
          className="blogAsset"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/62ab0fe0b29a4447962af1b4ef31eb87?v=717c5266"
          alt="Card image"
        />
        <div className="blogContentText">{blogContentText21}</div>
        <div className="blogContentText">{blogContentText22}</div>
        <div className="blogContentText">{blogContentText23}</div>
        <div className="blogContentText">{blogContentText24}</div>
        <div className="blogContentText">{blogContentText25}</div>
        <div className="blogContentText">{blogContentText26}</div>

        <ul className="kaynakca">
          Kaynakça
          <ul>
            <a
              href={
                "https://www.livemint.com/industry/manufacturing/the-growing-lure-of-upcycled-products-11649955773521.html "
              }
            >
              {" "}
              <li>
                https://www.livemint.com/industry/manufacturing/the-growing-lure-of-upcycled-products-11649955773521.html{" "}
              </li>
            </a>
            <a
              href={
                "https://playgroundideas.org/gpabuilders/anthill-creations/"
              }
            >
              {" "}
              <li>
                https://playgroundideas.org/gpabuilders/anthill-creations//
              </li>{" "}
            </a>
            <a href={"https://anthillcreations.org/"}>
              {" "}
              <li>https://anthillcreations.org//</li>{" "}
            </a>
          </ul>
        </ul>
      </div>
    </>
  );
}
export default BlogDetail;
