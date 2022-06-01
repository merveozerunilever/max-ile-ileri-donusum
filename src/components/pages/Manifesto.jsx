import {
  Carousel,
  Button,
  Row,
  Col,
  Container,
  Card,
  CardGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import CubuktanKus from "./docs/CubuktanKus.pdf";
import CubuktanKalemlik from "./docs/CubuktanKalemlik.pdf";
import CubuktanMama from "./docs/CubuktanMama.pdf";
import {
  manifestoTitle,
  manifestoText,
  manifestoText2,
  volunteerArtistText,
  discoverAll,
  discoverMore,
  discover,
  discoverHomeText,
  FikirKutuphanesiText,
  FikirKutuphanesiText2,
  FikirKutuphanesiTitle,
  GonulluSanatcilarTitle,
  volunteerArtistHeader,
  FikirKutuphanesiHeader,
  manifestoTag,
  manifestoText3,
  downloadText,
} from "../../constants";

function Manifesto() {
  return (
    <>
      <div className="banner">
        <img
          id="banner"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/73f6b2c6730a48878d43ba514a526635?v=1d54842e"
          alt="Anasayfa banner"
        />
      </div>

      <div className="manifesto">
        <h2 id="manifestoTitle">{manifestoTitle}</h2>
        <div id="manifestoTag">{manifestoTag}</div>
        <div id="manifesto">{manifestoText}</div>
        <div className="kv">
          <img
            id="manifestoKV"
            src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/9cb40378f44e4a0693b936cb2f73bab7?v=2c914717"
            alt="Manifesto"
          />
        </div>
        <div id="manifesto">{manifestoText2} </div>
        <br></br>
        <div id="manifesto2">{manifestoText3} </div>
      </div>

      <img
        id="doodle2"
        src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/d7a413d018be4536b92c1039d4534720?v=fef81242"
        alt="home doodle2"
      />
      <Container id="gonulluArtist">
        <h2 id="gonulluSanatciTitle">{GonulluSanatcilarTitle}</h2>
        <Row id="gonulluColumn">
          <Col>
            <img
              id="artistsKV"
              src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/c36e5720428a4fdb9d68a72020fb8653?v=d5299dfc"
              alt="Gonullu Sanatcilar"
            />
          </Col>

          <Col>
            <div id="volunteerArtistHeader">{volunteerArtistHeader}</div>
            <div id="volunteerArtistText">{volunteerArtistText}</div>
            <a href={"/kesfet"}>
              <button className="discoverMoreButton">{discoverMore}</button>
            </a>
          </Col>
        </Row>
      </Container>
      <img
        id="doodle1"
        src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/3d19e0ce5cfa43df99353fa229b11e52?v=963ee12a"
        alt="home doodle1"
      />
      <div className="fikirHeader">
        <h2 id="fikirKutuphanesiTitle">{FikirKutuphanesiTitle}</h2>
        <div className="fikirKutuphanesiText"> {FikirKutuphanesiText} </div>
        <br></br>
        <br></br>
        <div className="fikirKutuphanesiText"> {FikirKutuphanesiText2} </div>
      </div>
      <img
        id="doodle3"
        src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/dc1042a37cd640f59de7dbabb5b06f5c?v=1cff17de"
        alt="home doodle3"
      />
      <CardGroup className="fikirGroup">
        <Card className="fikirCard">
          <Card.Img
            id="firstDownload"
            variant="top"
            src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/dd031c69d9cc4ce582b45deb330b723c?v=362b1314"
            alt="fikir kv"
          />
          <Card.Body>
            <Card.Title id="fikirTitleText">
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
            <Card.Title id="fikirTitleText">
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
            <Card.Title id="fikirTitleText">
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
    </>
  );
}
export default Manifesto;
