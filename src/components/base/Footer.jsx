import { Link } from "react-router-dom";
import "./style.css";
import {
  algidaXonaranlar,
  manifestoTitle,
  aboutProjectTitle,
  sssTitle,
  contactUs,
  legal,
  privacyPolicy,
  aboutCookies,
  kvkk,
  unileverLegal,
  manifestoNav,
} from "../../constants";

function Footer() {
  return (
    <>
      <section className="footer">
        <footer className="text-white text-center text-md-start">
          <div className="container p-4">
            <div className="row" id="footerRow">
              <div className="col-lg-5 col-md-6 mb-4 mb-md-0 my-3">
                <a href="https://www.onaranlarkulubu.com/biz-kimiz/">
                  <img
                    className="onaranlar"
                    src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/755d59b17c504e5fb6de5e9a61120d1a?v=49e161ff"
                    alt="Onaranlar Kulübü Logo"
                  />
                </a>
                <a href="https://www.algida.com.tr/markalar/max.html">
                  <img
                    className="max"
                    src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/874a08d4d9864933957872fd8b001e7e?v=0de89482"
                    alt="Algida Max Logo"
                  />
                </a>
                <p id="algidaxOnaranlar">{algidaXonaranlar} </p>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <a href={"/"}>
                  <img
                    src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/3367e295cc904de8ba6812feabde627d?v=e4900890"
                    alt="Max ile İleri Donusum Logo"
                    className="footerLogo"
                  />
                </a>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0" id="links">
                <div className="footerLink">
                  <ul className="list-unstyled">
                    <li>
                      <a href="/" className="text-white">
                        {manifestoNav}
                      </a>
                    </li>
                    <li>
                      <a href={"/sikca-sorulan-sorular"} className="text-white">
                        {aboutProjectTitle}
                      </a>
                    </li>

                    <li>
                      <a href={"/sikca-sorulan-sorular"} className="text-white">
                        {sssTitle}
                      </a>
                    </li>
                    <li>
                      <a
                        href={"https://www.algida.com.tr/bize-ulasin.html"}
                        className="text-white"
                      >
                        {contactUs}
                      </a>
                    </li>
                    <li>
                      <a
                        href={
                          "https://www.unilevernotices.com/privacy-notices/turkey-turkish.html"
                        }
                        className="text-white"
                      >
                        {privacyPolicy}
                      </a>
                    </li>
                    <li>
                      <a
                        href={"https://www.unilever.com.tr/legal/"}
                        className="text-white"
                      >
                        {legal}
                      </a>
                    </li>
                    <li>
                      <a
                        href={
                          "https://www.unilevernotices.com/cookie-notices/turkey-turkish.html"
                        }
                        className="text-white"
                      >
                        {aboutCookies}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.unilever.com.tr/kisisel-verilerin-korunmasi/"
                        className="text-white"
                      >
                        {kvkk}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="unilever text-center">{unileverLegal} </div>
        </footer>
      </section>
    </>
  );
}
export default Footer;
