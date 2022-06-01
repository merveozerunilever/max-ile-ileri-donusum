import { Card, CardGroup, Carousel } from "react-bootstrap";
import "./KesfetStyle.css";
import {
  ArtistsText,
  yours,
  manifestoTag,
  manifestoText,
} from "../../constants";
import { AiFillInstagram } from "react-icons/ai";

function Kesfet() {
  return (
    <>
      <div className="manifestoKesfet">
        <div id="manifestoTagPage">{manifestoTag}</div>
        <div id="manifestoKesfet">{manifestoText}</div>
      </div>
      <div className="kesfet">
        <h2 id="titleText">{ArtistsText}</h2>
        <div className="gonulluArtist">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-flex w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/29e449ef81f5475d89f2b95e6257c7e8?v=9fe9568e"
                alt="Simay Bahçıvan-1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/4e1d9eb0a44746ac9b360758639d10c1?v=b659216e"
                alt="Simay Bahçıvan-2"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-flex w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/ccc453e8a79244faa4713f0446a120e0?v=fbcc1c6e"
                alt="Simay Bahçıvan-3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/cfe7f45b9e0c4473abe234846b2e090d?v=712e5b74"
                alt="Simay Bahçıvan-4"
              />
            </Carousel.Item>
          </Carousel>
          <Card>
            <Card.Body>
              <Card.Title>
                {" "}
                Simay Bahçıvan
                <div className="meslekler"> / İllüstratör</div>
              </Card.Title>
              <div className="projectName"> Kuş Yuvası</div>

              <Card.Text id="simaybahcivan">
                "Dönüşümün küçük bir parçası olmak aslında büyük parçayı
                oluşturuyor. Yaratıcı olarak bu adıma dahil olmak ve çok küçük
                katkılarla bir etki yaratmak çok mutluluk verici."
              </Card.Text>
              <Card.Link href="https://www.instagram.com/simaybahcivan/">
                <AiFillInstagram id="instaLogo" /> simaybahcivan
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="gonulluArtist">
          <Card>
            <Card.Body>
              <Card.Title>
                Elİf Atmaca
                <div className="meslekler">
                  {" "}
                  / Endüstrİyel Tasarımcı, Sosyal GİRİŞİMCİ
                </div>
              </Card.Title>
              <div className="projectName"> Dondurma Canavarı PO</div>
              <Card.Text id="elifatmaca">
                Dondurma Canavarı PO Dondurması yendikten sonra bir kenara
                atılan dondurma çubukları tekrar dondurma aramak amacıyla bir
                araya gelerek dondurma canavarı PO’yu hayata getirmişlerdir.
                PO’nun en sevdiği yiyecek orman meyveli dondurmadır (renginden
                de anlaşıldığı gibi). Dondurmalarını yedikten sonra çubuklarını
                atmaz ve daha hızlı, daha çok dondurma bulabilmek için kendisine
                yeni ayaklar yapar. İleri Dönüşüm Hareketi İleri dönüşüm yapmak
                atıklara farklı bir açıdan nasıl bakabilirizin en yaratıcı ve
                eğlenceli yolu diye düşünüyorum. (kayıt dışı: Bu nedenle Toyi’yi
                hayata geçirmiş olabilirim :) ‘Tüketmeden üretme’
                alışkanlığımızı pekiştirmek ve kalıcı hale getirmek için
                gündelik hayatımızda yapabileceğimiz eğlenceli dönüşümler
                zamanla bu alışkanlıkları pekiştirmek için önemli bir adım.
                ‘İleri Dönüşüm Hareketi’ ile bunun bir parçası olduğum için çok
                mutluyum ve gelecek diğer tasarımları heyecanla bekliyorum.
              </Card.Text>
              <Card.Link href="https://www.instagram.com/elipatmaca/">
                <AiFillInstagram id="instaLogo" /> elipatmaca
              </Card.Link>{" "}
            </Card.Body>
          </Card>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/ec20ea7502414189a9e6b948929a7393?v=47dbf5a4"
                alt="Elif Atmaca-1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/a8c2251b6f3f481d9ba5b837b2f271aa?v=2dec10be"
                alt="Elif Atmaca-2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/a60d0c07d2e24f44b94bee9e00041561?v=217aba2a"
                alt="Elif Atmaca-3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/2f0ab8c845fb478ca7921b03c97d9ea3?v=c738eda6"
                alt="Elif Atmaca-4"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="gonulluArtist">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/eb749a1e43194bbdb0d8d6014ba462e6?v=c4ede026"
                alt="Burak Beceren-1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/bc437089740e45cb95f599862ae59c19?v=68d424ed"
                alt="Burak Beceren-2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/1723b1f39f134124b49aff3bc343f363?v=5042d91a"
                alt="Burak Beceren-3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/24cde3ca1d4f49288a5112819ab83054?v=3b6b2c7b"
                alt="Burak Beceren-4"
              />
            </Carousel.Item>
          </Carousel>
          <Card>
            <Card.Body>
              <Card.Title>
                Burak Beceren
                <div className="meslekler">/ İllüstrasyon Sanatçısı</div>
              </Card.Title>
              <div className="projectName"> Woody the Rabbit</div>
              <Card.Text id="burakbeceren">
                Öncelikle bu projede yer aldığım için çok mutluyum, çok eğlendim
                gerçekten. İleri dönüşüm hareketinin sürdürülebilirlik adına
                öneminin dışında, ben biraz daha çocuk gözleriyle bakan bir
                yerden yaklaşıyorum. Nasıl ki çocukken bir tabak bizim için uçan
                daire olabiliyorduysa, aynen bu mantıkla her şeyi
                dönüştürebileceğimizi düşünüyorum. Kanıtı da bu karakter : )
              </Card.Text>
              <Card.Link href="https://www.instagram.com/burb.works/">
                <AiFillInstagram id="instaLogo" /> burb.works
              </Card.Link>{" "}
            </Card.Body>
          </Card>
        </div>
        <div className="gonulluArtist">
          <Card>
            <Card.Body>
              <Card.Title>
                Uğur Acİl
                <div className="meslekler">/ İllüstratör</div>
              </Card.Title>
              <div className="projectName"> Hi-mel</div>
              <Card.Text id="uguracil">
                "Sürdürülebilir gelecek için şehir atıklarının aslında çöp
                olmadığına dair bir farkındalığın çok değerli olduğu bir
                dönemdeyiz. Dondurma çubukları ile ürettiğim karakter, şehrin
                ileri dönüşüm atıklarını gözlemliyor.
                <br></br>#atmaonarpaylaş"
              </Card.Text>
              <Card.Link href="https://www.instagram.com/ugur.acil/">
                <AiFillInstagram id="instaLogo" /> ugur.acil
              </Card.Link>{" "}
            </Card.Body>
          </Card>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/7558329811ea491ba433e0f77a7bbb23?v=1b3d9f45"
                alt="Uğur Acil-1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/c2b6ece587e441eda50e9233ee00bb65?v=cccfd884"
                alt="Uğur Acil-2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/d755f6056f184b02a1b8a0102afa8093?v=07b55ef5"
                alt="Uğur Acil-3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/95f627a3b7f643e0897410c5dd0a372b?v=0dbcb255"
                alt="Uğur Acil-4"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="gonulluArtist">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/dbf22ee9d6c74f9b9032e8c6bd236c5b?v=d8e22cf7"
                alt="Salih Küçüktuna-1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/8daea689c3d541509178b0600a682126?v=f79e1470"
                alt="Salih Küçüktuna-2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/9cc4edf771c940dd8a6c9abdd13b79e4?v=1ba1ff7d"
                alt="Salih Küçüktuna-3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/a0a7745430b14921bafa3683c769b3ea?v=f119f91f"
                alt="Salih Küçüktuna-4"
              />
            </Carousel.Item>
          </Carousel>
          <Card>
            <Card.Body>
              <Card.Title>
                Salİh Küçüktuna
                <div className="meslekler">/ Mimari Tasarım</div>
              </Card.Title>
              <div className="projectName"> Flexigon</div>
              <Card.Text id="salihkucuktuna" >
                "İleri dönüşüm hareketinin temel bileşeni olan yeniden
                değerlendirilebilir atıklar ile günümüz teknolojileri, maker ve
                kendin-yap hareketlerinin, tasarım kültürü, araçları,
                yöntemleri, üretim araçları ve enstrümanlarının
                sentezlenebileceği pek çok alan oluştu.STEM de bu potansiyeli
                değerlendirme amacıyla eğitim sistemine eklemlendi. Flexigon 3
                yaş ve üstü için soyut düşünmeyi ve tasarlamayı geliştiren bir
                çeşit oyun. Flexigon, dondurma çubukları ve çocukların zeka
                gelişiminde etkili olan brain flakes oyununun parçalarından
                esinlenerek ortaya çıkan ve 3 boyutlu yazıcılarda biyoplastik
                filament ile üretilen birleşim parçalarından oluşuyor. Parçalar
                3-6 ve 8 adet çubuk birleşimine 3 boyutta izin veren 2,5 mm
                kalınlığında ve 3 cm çapında 3 temel şekilden oluşuyor. Çubuklar
                ve birleşim parçalarının kombinasyonundan soyut geometrik
                şekillerden pek çok figüre kadar çok geniş yelpazede tasarım
                üretmek mümkün. Tasarımından parçaların üretimine ve
                prototiplemeye kadar olan süreç PIN Architects'in tüm ekibinin
                kolektif çalışması ile gerçekleşmiştir."
              </Card.Text>
              <Card.Link href="https://www.instagram.com/salihkucuktuna/">
                <AiFillInstagram id="instaLogo" /> salihkucuktuna
              </Card.Link>{" "}
            </Card.Body>
          </Card>
        </div>
        <div className="gonulluArtist">
          <Card>
            <Card.Body>
              <Card.Title>
                Gökçe İrten Girgin{" "}
                <div className="meslekler">/ Sanatçı, İllüstratör, Yazar</div>
              </Card.Title>
              <div className="projectName"> Heykel İnsanlar</div>
              <Card.Text id="gokcegirgin">
                "Yeni bir ürün üretirken eskiden faydalanmak bana kendimi iyi
                hissettiriyor. Üretilene başka bir misyon katıyor. Eskinin
                anısını ve kimliğini geleceğe taşıyor."
              </Card.Text>
              <Card.Link href="https://www.instagram.com/gokceirten/">
                <AiFillInstagram id="instaLogo" /> gokceirten
              </Card.Link>{" "}
            </Card.Body>
          </Card>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/cfce6cfc834743c19d4284bf93d64c8b?v=c958c1b6"
                alt="Gökçe İrten Girgin-1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/08edb5f1004948179953a8f275cf3e73?v=abddddf3"
                alt="Gökçe İrten Girgin-2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/ead09a9d049b41fd9f246c1993f433e8?v=185d71ab"
                alt="Gökçe İrten Girgin-3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/911ff83f95fb4a9083181c1b7eb6c0a5?v=b663d63a"
                alt="Gökçe İrten Girgin-4"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="gonulluArtist">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/e71110ce01c949b49dae095b7b88d6bc?v=395b11cc"
                alt="Artemis Günebakanlı-1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/00b897cad3484eceb6b5917497ac4606?v=fea83197"
                alt="Artemis Günebakanlı-2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/872c909d6c1a4dae9ae2d4e8e5e0820c?v=96d185c7"
                alt="Artemis Günebakanlı-3"
              />
            </Carousel.Item>
          </Carousel>
          <Card>
            <Card.Body>
              <Card.Title>
                Artemis Günebakanlı{" "}
                <div className="meslekler">/ Radyocu ve Fotoğrafçı</div>
              </Card.Title>
              <div className="projectName"> Gece Lambası</div>
              <Card.Text id="artemisgunebakanli">
                Evimde küçük ve lokal aydınlatmalar kullanmak bana
                anlamlandıramadığım bir huzur veriyor, bu yüzden her malzemeye
                “Acaba bundan lamba olur mu?” diye bakıyorum. Dondurma
                çubuklarının doğal rengini seviyorum; elimdeki bir kutuyu
                çubuklarla kaplayıp, küçük bir ampul ve abajur şapkası ekleyince
                çalışma masamda kullanabileceğim tatlı bir lamba ortaya çıktı.
                Sürekli annesinin eskilerini aşırıp kullanan, “bununla bir şey
                yapılır” diye tuhaf eşyalar biriktiren biri olarak ileri dönüşüm
                hareketinin yorulmaz neferiyim :)
              </Card.Text>
              <Card.Link href="https://www.instagram.com/manyetikbant/">
                <AiFillInstagram id="instaLogo" /> manyetikbant
              </Card.Link>{" "}
            </Card.Body>
          </Card>
        </div>
        <div className="gonulluArtist">
          <Card>
            <Card.Body>
              <Card.Title>
                Mert Dolapçıoğlu{" "}
                <div className="meslekler">/ Karikatürist </div>
              </Card.Title>
              <div className="projectName"> kedi sevgisi</div>
              <Card.Text id="mertdolapcioglu">
                "Bu tasarımda kalp tutan sevimli bir kedi yaptım. Sokakta
                yaşayan dostlarımızı asla unutmamak görevlerimiz arasında
                olmalı."
              </Card.Text>
              <Card.Link href="https://www.instagram.com/mertdolapciogluu/">
                <AiFillInstagram id="instaLogo" /> mertdolapciogluu
              </Card.Link>{" "}
            </Card.Body>
          </Card>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/ebd8fe17335e4ef49fdda5968075ad18?v=cca7832f"
                alt="Mert Dolapçıoğlu-1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/e29f96b686e444a881a7f58e5e3ca974?v=f89e5f06"
                alt="Mert Dolapçıoğlu-2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/9938c0da90a74d6d81f5959149d20c4e?v=01b96c8d"
                alt="Mert Dolapçıoğlu-3"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="gonulluArtist">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/1429db5d269045e396b6d0e8b4e3d136?v=712fd279"
                alt="Ece Ağırtmış-1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/e231aa8335ba4f57893f094262e5db1e?v=3f507cf3"
                alt="Ece Ağırtmış-2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/4791b3ea12904353b35c7a068e967e15?v=6f271deb"
                alt="Ece Ağırtmış-3"
              />
            </Carousel.Item>
          </Carousel>
          <Card>
            <Card.Body>
              <Card.Title>
                Ece Ağırtmış{" "}
                <div className="meslekler">
                  / İllüstratör, Oyuncak Tasarımcısı{" "}
                </div>
              </Card.Title>
              <div className="projectName"> Mini Dragon</div>
              <Card.Text id="eceagirtmis">
                Mini dragon: Daha önce yaptığım en büyük ölçülü işlerden olan
                ejderhadan sonra benzerinin küçük ölçekte nasıl olacağını merak
                ederek bu işe başladım. İlk kez kullandığım algida çubuklarıyla
                birlikte malzemeyi tanımaya başladım. Ardından bunları bir mini
                dragona dönüştürdüm. Renklerin verdiği heyecanı yine burada da
                kullanarak ahşabın kendi rengiyle olan uyumunu beraber kullanmak
                istedim.
              </Card.Text>
              <Card.Link href="https://www.instagram.com/eceagirtmis/">
                <AiFillInstagram id="instaLogo" /> eceagirtmis
              </Card.Link>{" "}
            </Card.Body>
          </Card>
        </div>
        <div className="gonulluArtist">
          <Card>
            <Card.Body>
              <Card.Title>
                Dilara Akbal <div className="meslekler">/ İllüstratör</div>
              </Card.Title>
              <div className="projectName"> jaja</div>
              <Card.Text id="dilaraakbal">
                Dünya artık bize yorulduğuna dair sinyaller verirken,
                tükettiğimiz şeyleri yenilemeye ve gelecekte kullanabilir bir
                alan açmaya dair adımları biraz daha büyütmemi sağlayan bir
                karakter yarattım. Artık çevresel farkındalığımı bana hatırlatan
                bir karakterim var :)
              </Card.Text>
              <Card.Link href="https://www.instagram.com/dilaarakbal/">
                <AiFillInstagram id="instaLogo" /> dilaarakbal
              </Card.Link>{" "}
            </Card.Body>
          </Card>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/0a495843015243e88d672d8ae61d13f9?v=2afa7d8a"
                alt="Dilara Akbal-1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/15bf36cf535440d68b4a4d97a37b14a1?v=7537f167"
                alt="Dilara Akbal-2"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/9d7d67fb733f4dea9d5fc14cd03e08c4?v=39000cba"
                alt="Dilara Akbal-3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/4efc7387674849e7a1a616ed500f13ab?v=f7a2c9b9"
                alt="Dilara Akbal-4"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="gonulluArtist">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/85d6b9b875644757b2b574da1362ddd8?v=260837c4"
                alt="Fırat Neziroğlu-1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/fd07fcf836e24a6097d648bdf04133fa?v=11a39946"
                alt="Fırat Neziroğlu-2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/0d3a44792b754499879fff9cc3895693?v=23d99002"
                alt="Fırat Neziroğlu-3"
              />
            </Carousel.Item>
          </Carousel>
          <Card>
            <Card.Body>
              <Card.Title>
                Fırat Nezİroğlu{" "}
                <div className="meslekler">/ Dokuma Sanatçısı</div>
              </Card.Title>
              <div className="projectName"> Dokuma tezgahı (İplikli)</div>
              <Card.Text id="firatneziroglu">
                Dondurma bir dokuma tezgahı yapmak için mükemmel. Çubukları
                birbirine bağlayıp harika çerçeveler yapabiliriz. Bu çerçevelere
                iplikler gerip içlerini yine çubuklarla dokuyup yeni desenler
                yaratabiliriz. Bir kuklanın iplere bağlanması gibi desenleri iz
                de iplikler arasında dans edebilir.
              </Card.Text>
              <Card.Link href="https://www.instagram.com/firatneziroglu/">
                <AiFillInstagram id="instaLogo" /> firatneziroglu
              </Card.Link>{" "}
            </Card.Body>
          </Card>
        </div>
        <div className="gonulluArtist">
          <Card>
            <Card.Body>
              <Card.Title>
                Bülent Gültek{" "}
                <div className="meslekler">
                  / İllüstratör, Oyuncak Tasarımcısı
                </div>
              </Card.Title>
              <div className="projectName">Masa lambası</div>
              <Card.Text id="bulentgultek">
                "İleri dönüşüm fikrinin, özellikle çocuklar için yaratıcılık
                motivasyonu ve çevre duyarlılığı açısından önemli olduğunu
                düşünüyorum. Benim tasarımım çubuklardan gece lambasına dönüştü.
                Onaranlar Kulübü ve Algida Max’a şahane hareketleri için
                teşekkürler.”
              </Card.Text>
              <Card.Link href="https://www.instagram.com/bulentgultek/">
                <AiFillInstagram id="instaLogo" /> bulentgultek
              </Card.Link>{" "}
            </Card.Body>
          </Card>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/7028dc1eb6f343d4bd4b9501a0aaee14?v=5c468363"
                alt="Bülent Gültek-1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/e5b5fc73d27747c2a1914aa5cf9746dd?v=9c0bee5f"
                alt="Bülent Gültek-2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/1a9672532946440999db11270f6cda1e?v=3e34b85d"
                alt="Bülent Gültek-3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/de641d69f7c6474190868a99e138ee00?v=2334d57b"
                alt="Bülent Gültek-4"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="peopleWorks">
          <h2 id="titleText">{yours}</h2>
          <CardGroup className="kesfetGroup">
            <Card className="kesfetCard">
              <img
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/2b436a5176874dc392fc6313ecaa2089?v=5343528a"
                alt="sizden gelen kv"
              />
            </Card>
            <Card className="kesfetCard">
              <img
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/e145d9f4a42e4950ad6f2a89e5882ffb?v=f7bba092"
                alt="sizden gelen kv"
              />
            </Card>
            <Card className="kesfetCard">
              <img
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/ab02b41d20d043a682a7154762df23a3?v=377fd515"
                alt="sizden gelen kv"
              />
            </Card>
          </CardGroup>
          <CardGroup className="kesfetGroup">
            <Card className="kesfetCard">
              <img
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/0f9bbc77b5a54207bd9ead942919e4b2?v=47b1f92f"
                alt="sizden gelen kv"
              />
            </Card>
            <Card className="kesfetCard">
              <img
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/b05428100ff04cb98d2fe9ae63e6fdda?v=2e380b59"
                alt="sizden gelen kv"
              />
            </Card>
            <Card className="kesfetCard">
              <img
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/b38470f928ee4d21819510a58105a405?v=233171b5"
                alt="sizden gelen kv"
              />
            </Card>
          </CardGroup>
          <CardGroup className="kesfetGroup" id="lastGroup">
            <Card className="kesfetCard">
              <img
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/163cae5f939e43759517fab0338d290f?v=885225eb"
                alt="sizden gelen kv"
              />
            </Card>
            <Card className="kesfetCard">
              <img
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/91e4a04926f14361863478390f5c0b48?v=63879f98"
                alt="sizden gelen kv"
              />
            </Card>
            <Card className="kesfetCard">
              <img
                src="https://unlv-p-001-delivery.sitecorecontenthub.cloud/api/public/content/5ca95fc563d64b21b0c83312c547b530?v=3824713b"
                alt="sizden gelen kv"
              />
            </Card>
          </CardGroup>
        </div>
      </div>
    </>
  );
}

export default Kesfet;
