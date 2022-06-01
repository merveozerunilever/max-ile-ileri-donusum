import { Card, CardGroup } from "react-bootstrap";
import "./FikirKutuphanesi.css";
import {
  downloadText,
  comingSoonText,
  FikirKutuphanesiText2,
  FikirKutuphanesiText,
} from "../../constants";
import CubuktanKus from "./docs/CubuktanKus.pdf";
import CubuktanKalemlik from "./docs/CubuktanKalemlik.pdf";
import CubuktanMama from "./docs/CubuktanMama.pdf";
import { FikirKutuphanesiTitle } from "../../constants";
function FikirKutuphanesi() {
  return (
    <>
      <div className="fikirHeader">
        <h2 id="fikirKutuphanesiTabTitle">{FikirKutuphanesiTitle}</h2>
        <div className="fikirKutuphanesiTabText"> {FikirKutuphanesiText} </div>
        <br></br>
        <br></br>
        <div className="fikirKutuphanesiTabText"> {FikirKutuphanesiText2} </div>
      </div>

      <CardGroup className="fikirTabGroup">
        <Card className="fikirCard">
          <Card.Img
            id="fikirDownload"
            variant="top"
            src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/dd031c69d9cc4ce582b45deb330b723c?v=362b1314"
            alt="fikir kv"
          />
          <Card.Body>
            <Card.Title className="fikirTabTitleText">
              Çubukla Kuş Yuvası Yapım Kılavuzu
            </Card.Title>
          </Card.Body>
          <a
            href={CubuktanKus}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button className="downloadButton">{downloadText}</button>
          </a>
        </Card>
        <Card className="fikirCard">
          <Card.Img
            variant="top"
            src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/8d16c6602def4074b7d925b405ffd344?v=d64fa527"
            alt="fikir kv"
          />
          <Card.Body>
            <Card.Title className="fikirTabTitleText">
              Çubukla MAMA KABı YAPıM Kılavuzu
            </Card.Title>
          </Card.Body>
          <a
            href={CubuktanMama}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button className="downloadButton">{downloadText}</button>
          </a>
        </Card>
        <Card className="fikirCard">
          <Card.Img
            variant="top"
            src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/239b6faa85574db2aa8c5ad117092fa4?v=9fa29394"
            alt="fikir kv"
          />
          <Card.Body>
            <Card.Title className="fikirTabTitleText">
              Çubukla KALEMLİK YAPıM Kılavuzu
            </Card.Title>
          </Card.Body>
          <a
            href={CubuktanKalemlik}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <button className="downloadButton">{downloadText}</button>
          </a>
        </Card>
      </CardGroup>
      <CardGroup></CardGroup>
      <div id="fikirKutuphanesiTabTitle">VİDEOLAR</div>
      <h2 id="comingSoonText">{comingSoonText}</h2>
    </>
  );
}

export default FikirKutuphanesi;
