import "./MaxBlogStyle.css";
import { Carousel, Card, CardGroup, Button, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import DocumentMeta from "react-document-meta";


function MaxBlog() {
  const meta = {
    title: 'Max Blog | Max ile İleri Dönüşüm',
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
      <Carousel className="guncelBlog">
           <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/2233615823d2475bafa38ac4ff56283a?v=c46fcdab"
              alt="İleri Dönüşümde Aktiflik - Spor x İleri Dönüşüm"
            />
        
            <Carousel.Caption>
              <Card.Title className="guncelTitle">
                {" "}
                İlerİ Dönüşümde Aktiflİk - Spor x İlerİ Dönüşüm              </Card.Title>
        
              <Card.Text className="guncelText">
                  İnsanlığın ortak bilgi birikiminin tarihi çok eskilere dayansa da, bilgiye erişimimin hiçbir dönemde bulunduğumuz çağdaki kadar sınırsız olmadığı konusunda hemfikiriz.
              </Card.Text>
              <a
                href={"/icerik-ileri-donusumu"}
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
            src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/be47246c1dd442ad8df1727946c6dd7c?v=7a9668b3"
            alt="Mutfaktaki Yemek Artıklarının İleri Dönüşümü"
          />
          <Carousel.Caption>
            <Card.Title className="guncelTitle">
            Mutfaktaki Yemek Artıklarının İlerİ Dönüşümü                        </Card.Title>
            <Card.Text className="guncelText">
            Yemek öğünleri günlük yaşamımızın büyük bir kısmı oluşturuyor. Kimilerimizin sabah, öğle, akşam rutinleri varken kimilerimiz minik ara öğünlerle kendini ödüllendirebiliyor. 
            </Card.Text>
            <a
              href={"/mutfaktaki-yemek-artiklarinin-ileri-donusumu"}
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
            src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/6051b3cd55004617b349c996c1455d15?v=d4153eaf"
            alt="Ruhunu Arayan Kıyafetler: Modada İlerİ Dönüşüm"
          />

          <Carousel.Caption>
            <Card.Title className="guncelTitle">Ruhunu Arayan Kıyafetler: Modada İlerİ Dönüşüm </Card.Title>
            <Card.Text className="guncelText">
            2000’lere damga vuran düşük bel modasının geri dönüş sinyalleri vermesi bir endişe dalgası yaratsa da, yaratıcı alanların kendini tekrar ettiğinin de bir göstergesi. 
            </Card.Text>
            <a
              href={"/ruhunu-arayan-kiyafetler"}
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
            src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/6952ff36c4394946a76cde6946464610?v=36fd9196"
            alt="Blog-3"
          />

          <Carousel.Caption>
            <Card.Title className="guncelTitle">
              {" "}
              Yine Yenİ Yeniden: İleri Dönüşüm Kavramları
            </Card.Title>
            <Card.Text className="guncelText">
            İleri dönüşüm pratikleriyle atık maddelerin veya istenmeyen malzemelerin kullanılabilir bir ürüne dönüştürülerek değer elde edilmesi dünya çapında bir kazanım haline geldi. 
            </Card.Text>
            <a
              href={"/ileri-donusum-kavramlari"}
              className="devaminiOkuGuncel"
            >
              {" "}
              devamını oku
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="yapi">
        <Breadcrumb className="firstItem">
          <Breadcrumb.Item href="/">Manifesto</Breadcrumb.Item>
          <Breadcrumb.Item active>MaxBlog</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="maxBloglar">
      <div className="bloglar">
          <Card className="maxblogCard">
            <img
              className="blogGorsel"
              variant="top"
              src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/a633faa52852456a8f2a06e207405911?v=6ecf9b6f"
              alt=" İleri Dönüşümde Aktiflik - Spor x İleri Dönüşüm"
            />{" "}
          </Card>
          <Card>
            <Card.Body className="maxBody">
              <Card.Title className="guncelBlogTitle">
                {" "}
               
İlerİ Dönüşümde Aktiflİk - Spor x İlerİ Dönüşüm
              </Card.Title>
              <Card.Text className="guncelBlogText">
              İleri dönüşüm olgusu, bugün birçok farklı disiplin ile iş birliği yapabilen bir noktada bulunuyor. Bu disiplinler arasında dijital içeriklerden tutun da müzik, moda, sanat gibi birçok farklı dal yer almakta. 
              </Card.Text>
              <a
                href={"/ileri-donusumde-aktiflik"}
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
                Mutfaktaki Yemek Artıklarının İlerİ Dönüşümü              </Card.Title>
              <Card.Text className="guncelBlogText">
              Yemek öğünleri günlük yaşamımızın büyük bir kısmı oluşturuyor. Kimilerimizin sabah, öğle, akşam rutinleri varken kimilerimiz minik ara öğünlerle kendini ödüllendirebiliyor. 
              </Card.Text>
              <a
                href={"/mutfaktaki-yemek-artiklarinin-ileri-donusumu"}
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
              src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/c7ce9f611a594ab989b368e6391ac2b6?v=00ad16ec"
              alt="Yine Yeni Yeniden: İleri Dönüşüm Kavramları "
            />{" "}
          </Card>
        </div>
        <div className="bloglar">
          <Card>

            <img
              variant="top"
              className="blogGorsel"
              src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/31a9cc7a310e441f94b2208e04a3c9a4?v=dcf0b1aa"
              alt="   Ruhunu Arayan Kıyafetler: Modada İleri Dönüşüm    "
            />{" "}

          </Card>
          <Card className="maxblogCard">
            <Card.Body className="maxBody">
              <Card.Title className="guncelBlogTitle">
                {" "}
                Ruhunu Arayan Kıyafetler: Modada İleri Dönüşüm              </Card.Title>

              <Card.Text className="guncelBlogText">
              2000’lere damga vuran düşük bel modasının geri dönüş sinyalleri vermesi bir endişe dalgası yaratsa da, yaratıcı alanların kendini tekrar ettiğinin de bir göstergesi. 
              </Card.Text>
              <a
                href={"/ruhunu-arayan-kiyafetler"}
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
                Anlatmanın 50 Yolu: İçerİk İleri Dönüşümü
              </Card.Title>

              <Card.Text className="guncelBlogText">
              
                İnsanlığın ortak bilgi birikiminin tarihi çok eskilere dayansa da, bilgiye erişimimin hiçbir dönemde bulunduğumuz çağdaki kadar sınırsız olmadığı konusunda hemfikiriz. İnternetin icadından başlayarak tüm teknolojik gelişmeler ile bugüne kadar uzanan bu besleyici süreç, içerik tüketim alışkanlıklarımızın sık sık şekil değiştirmesine yol açıyor.
              </Card.Text>
              <a href={"/icerik-ileri-donusumu"} className="devaminiOku">
                {" "}
                devamını oku
              </a>
            </Card.Body>
          </Card>
          <Card>
            <img
              variant="top"
              className="blogGorsel"
              src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/ccaea3237f554f41ac3a21c8e9293e12?v=e6e94108"
              alt="Anlatmanın 50 Yolu: İçerik İleri Dönüşümü"
            />{" "}
          </Card>
        </div>
        <div className="bloglar">
          <Card className="maxblogCard">
            <img
              className="blogGorsel"
              variant="top"
              src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/cdc2af009cda4b069d8fbf700b24abae?v=d35d4ef7"
              alt="İleri Dönüşüm Hayatın Kıyısında Kalmışlara Nasıl Işık Oluyor"
            />{" "}
          </Card>
          <Card>
            <Card.Body className="maxBody">
              <Card.Title className="guncelBlogTitle">
                {" "}
                İlerİ Dönüşüm Hayatın Kıyısında Kalmışlara Nasıl ışık Oluyor
              </Card.Title>
              <Card.Text className="guncelBlogText">
                Hayatımızda profesyonel kariyerlerimizin haricinde ihtiyaç sahibi insanlara daha yakın olabilmek, onların potansiyellerini açığa çıkarmak için çalışmak ve toplumsal döngüde daha belirgin bir rol almalarını sağlamak için çoğumuz bir şekilde gönüllülük esasıyla çalışan sivil toplum kuruluşlarına dahil oluyoruz. 
              </Card.Text>
              <a
                href={"/ileri-donusum-hayatin-kiyisinda-kalmislara-nasil-isik-oluyor"}
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
                Yine Yenİ Yeniden: İleri Dönüşüm Kavramları
              </Card.Title>
              <Card.Text className="guncelBlogText">
              İleri dönüşüm pratikleriyle atık maddelerin veya istenmeyen malzemelerin kullanılabilir bir ürüne dönüştürülerek değer elde edilmesi dünya çapında bir kazanım haline geldi. 
              </Card.Text>
              <a
                href={"/ileri-donusum-kavramlari"}
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
              src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/db865f1bf38a41aea14fe02d6d66dd63?v=d7e1e8a1"
              alt="Yine Yeni Yeniden: İleri Dönüşüm Kavramları "
            />{" "}
          </Card>
        </div>
        <div className="bloglar">
          <Card>

            <img
              variant="top"
              className="blogGorsel"
              src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/bcac9dccd1fd4050af93ceaf9d0fedb9?v=d8087cf4"
              alt="Dünyadan Yaratıcı İleri Dönüşüm Örnekleri"
            />{" "}

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
