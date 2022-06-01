import "./MaxBlogStyle.css";
import { Carousel, Card, CardGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MaxBlog() {
  return (
    <>
      <Carousel className="guncelBlog">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/70ff0055166d45cf898371cb8f3c838f?v=3360007d"
            alt="Blog-1"
          />
          <Carousel.Caption>
            <Card.Title className="guncelTitle">
              DÜNYADAN İLERİ DÖNÜŞÜM ÖRNEKLERİ
            </Card.Title>
            <Card.Text className="guncelText">
              Nüfusu giderek fazlalaşan ve bunun doğal bir sonucu olarak
              kaynakların yetersiz gelmeye başladığı küresel dünyamızın
              sürdürülebilirliği fazlasıyla önemli bir hal kazandı.
            </Card.Text>
            <a
              href={"/max-blog-dunyadan-yaratici-ileri-donusum-ornekleri"}
              className="devaminiOkuGuncel"
            >
              {" "}
              devamını oku
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/a3d0358361924f7588a56b36fa14d1ae?v=12ad425d"
            alt="Blog-2"
          />

          <Carousel.Caption>
            <Card.Title className="guncelTitle">Oynamanın Geleceğİ</Card.Title>
            <Card.Text className="guncelText">
              Jenerasyon X’ten Y’ye, Y’den Z’ye geçerken hayatlarımızda birçok
              değişiklik gerçekleşti.
            </Card.Text>
            <a
              href={"/max-blog-oynamanin-gelecegi"}
              className="devaminiOkuGuncel"
            >
              {" "}
              devamını oku
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/5af075c45ce647d2b8906daa012b8287?v=ca615880"
            alt="Blog-3"
          />

          <Carousel.Caption>
            <Card.Title className="guncelTitle">
              {" "}
              Döngüsel Hareket İle İlerİ Dönüşüm
            </Card.Title>
            <Card.Text className="guncelText">
              Gezegen nüfusu artıkça ve ekonomik refah insanlar arasında
              paylaştırıldıkça doğal kaynak rezervleri bir noktadan sonra
              tehlike altına giriyor.
            </Card.Text>
            <a
              href={"/max-blog-dongusel-hareket-ile-ileri-donusum"}
              className="devaminiOkuGuncel"
            >
              {" "}
              devamını oku
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/9b1185b21d4242cb97483cf2d2d30787?v=0407e75f"
            alt="Blog-4"
          />

          <Carousel.Caption>
            <Card.Title className="guncelTitle">
              {" "}
              Mimari Reenkarnasyon ve İlerİ Dönüşüm
            </Card.Title>

            <Card.Text className="guncelText">
              Çevremizde gördüğümüz cansız nesnelerin nefes almıyor oluşu,
              onların birer ruha sahip olmadığını göstermiyor.
            </Card.Text>
            <a
              href={"/max-blog-dongusel-hareket-ile-ileri-donusum"}
              className="devaminiOkuGuncel"
            >
              {" "}
              devamını oku
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="maxBloglar">
        <div className="bloglar">
          <Card>
            <a href={"/max-blog-dunyadan-yaratici-ileri-donusum-ornekleri"}>
              <img
                variant="top"
                className="blogGorsel"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/bcac9dccd1fd4050af93ceaf9d0fedb9?v=d8087cf4"
                alt="Dünyadan Yaratıcı İleri Dönüşüm Örnekleri"
              />{" "}
            </a>
          </Card>
          <Card className="maxblogCard">
            <Card.Body className="maxBody">
              <Card.Title className="guncelBlogTitle">
                {" "}
                Dünyadan Yaratıcı İleri Dönüşüm Örneklerİ
              </Card.Title>

              <Card.Text className="guncelBlogText">
                Nüfusu giderek fazlalaşan ve bunun doğal bir sonucu olarak
                kaynakların yetersiz gelmeye başladığı küresel dünyamızın
                sürdürülebilirliği fazlasıyla önemli bir hal kazandı. Bugünkü
                şartlarda sürdürülebilirlik hareketinin yaygınlaştırılması için
                bireysel anlamda hayatımıza ekleyebileceğimiz birçok metot var.
              </Card.Text>
              <a
                href={"/max-blog-dunyadan-yaratici-ileri-donusum-ornekleri"}
                className="devaminiOku"
              >
                {" "}
                devamını oku
              </a>
            </Card.Body>
          </Card>
        </div>

        <div className="bloglar">
          <Card className="maxblogCard">
            <Card.Body className="maxBody">
              <Card.Title className="guncelBlogTitle">
                Oynamanın Geleceğİ
              </Card.Title>

              <Card.Text className="guncelBlogText">
                Jenerasyon X’ten Y’ye, Y’den Z’ye geçerken hayatlarımızda birçok
                değişiklik gerçekleşti. Teknolojiye erişim arttı, sosyal
                etkileşim biçimi değişti, genç neslin hayata bakış açısı ve
                değerleri bambaşka bir hal aldı.
              </Card.Text>
              <a href={"/max-blog-oynamanin-gelecegi"} className="devaminiOku">
                {" "}
                devamını oku
              </a>
            </Card.Body>
          </Card>
          <Card>
              <img
                variant="top"
                className="blogGorsel"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/a3ecddffb78d4dfe814363e776e4f43b?v=e89da5c3"
                alt="Oynamanın Geleceği"
              />{" "}
          </Card>
        </div>
        <div className="bloglar">
          <Card className="maxblogCard">
              <img
                className="blogGorsel"
                variant="top"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/e27307599b8348e3aae0acfecc097444?v=9146334e"
                alt="Döngüsel Hareket ile İleri Dönüşüm"
              />{" "}
          </Card>
          <Card>
            <Card.Body className="maxBody">
              <Card.Title className="guncelBlogTitle">
                {" "}
                Döngüsel Hareket İle İlerİ Dönüşüm
              </Card.Title>
              <Card.Text className="guncelBlogText">
                Gezegen nüfusu artıkça ve ekonomik refah insanlar arasında
                paylaştırıldıkça doğal kaynak rezervleri bir noktadan sonra
                tehlike altına giriyor. Günümüzün hâkim ekonomik modeli doğrusal
                ürün üretme ve tüketme yöntemimiz, kırılgan ekosistemleri
                zedeleyerek değerli doğal kaynakların kaybına neden oluyor.
              </Card.Text>
              <a
                href={"/max-blog-dongusel-hareket-ile-ileri-donusum"}
                className="devaminiOku"
              >
                {" "}
                devamını oku
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="bloglar">
          <Card className="maxblogCard">
            <Card.Body className="maxBody">
              <Card.Title className="guncelBlogTitle">
                {" "}
                Mimari Reenkarnasyon ve İlerİ Dönüşüm
              </Card.Title>
              <Card.Text className="guncelBlogText">
                Çevremizde gördüğümüz cansız nesnelerin nefes almıyor oluşu,
                onların birer ruha sahip olmadığını göstermiyor. Nasıl biz
                insanlar olarak varoluşumuzun başından beri amaçlarımızın
                peşinde koşuyorsak, yarattığımız beşeri unsurlar da bizden
                bağımsız bir şekilde çeşitli amaçlara hitap ediyor.
              </Card.Text>
              <a
                href={"/max-blog-mimari-reenkarnasyon-ve-ileri-donusum"}
                className="devaminiOku"
              >
                {" "}
                devamını oku
              </a>{" "}
            </Card.Body>
          </Card>
          <Card>
              <img
                variant="top"
                className="blogGorsel"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/3b1a770ef7b3438cbf153f46c5cbfb88?v=20f7f2ba"
                alt="Mimari Reenkarnasyon"
              />{" "}
          </Card>
        </div>

        <img
          id="manifestoBlog"
          src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/9cb40378f44e4a0693b936cb2f73bab7?v=2c914717"
          alt="Manifesto"
        />
      </div>
    </>
  );
}

export default MaxBlog;
