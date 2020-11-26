import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router-dom";

export default function LandingPage(props) {
  const { title, desc, magaza, satici, email, kvk, kvkdesc, btn } = {
    ...props.changeLang,
  };

  let history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    kod: "",
    magaza: "",
    email: "",
    check: "",
  });

  const handleChange = (e) => {
    e.persist();
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    Object.values(state).every((x) => x !== null && x !== "")
      ? history.push("/room")
      : null;
  
    console.log("Submitting..");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="content-div">
        <div className="title-desc">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>

        <form>
          <label htmlFor="magaza">{magaza}</label>
          <br />
          <input
            //   onInvalid={(e)=>e.target.value===""?e.target.setCustomValidity('Lütfen mağaza adını yazınız'):true}

            type="text"
            id="magaza"
            required="required"
            pattern="[A-Za-z0-9]{1,20}"
            name="magaza"
            onChange={handleChange}
            value={state.magaza}
            title="Lütfen satıcı mağaza adınızı giriniz."
          />
          <br />
          <label htmlFor="kod">{satici}</label>

          <br />
          <input
            //   onInvalid={(e)=>e.target.value===""?e.target.setCustomValidity('Lütfen kodu yazınız'):null}

            type="text"
            required="required"
            pattern="[A-Za-z0-9]{1,20}"
            id="kod"
            name="kod"
            onChange={handleChange}
            value={state.kod}
            title=" Lütfen satıcı kodunuzu giriniz."
          />
          <p>
            Satıcı kodunuza{" "}
            <a href="https://sellercentral.amazon.com.tr/ap/signin?clientContext=259-7622838-9846150&openid.return_to=https%3A%2F%2Fsellercentral.amazon.com.tr%2Fsw%2FAccountInfo%2FMerchantToken%2Fstep%2FMerchantToken%3Fref_%3Dmacs_aimertok_cont_acinfohm&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=sc_tr_amazon_v2&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&ssoResponse=eyJ6aXAiOiJERUYiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiQTI1NktXIn0.LULm3ya1k9G1vRRsl5_p_jwVLCe6xnzqehXcIp07A4rixMd0J5RrxA.zvuYad7dfJfWJR_K.ds-hxFeZVLOBUVokoeO211zxthV4RKW8IpukdyAd5qabT0ck7ArLnbXeer8fqSCiFoPPJPO9brCeGDA0adHQJ82JN7L-tv2EE1bHT1nOua8beCN2zxfP6jfFbroFYafgZWYAQ2HQ4BBB_BrKuPPxRt-Py9Qvm16mNDeYniZAxhD64ulNRhBC-S9r0GvAGCEhZrX91hHEiG6xhQYsbS3kr6AyXPG9mgREtXEx9xpn_W1xflS9DF5jLOCPKptjILa1p1_Z3Q.TZKqgdVhO23b5V9d5-NVow">
              buradan
            </a>{" "}
            ulaşabilirsiniz.
          </p>
          <br />
          <label htmlFor="email">{email}</label>
          <br />
          <input
            //   onInvalid={(e)=>e.target.value===""?e.target.setCustomValidity('Lütfen doğru bir email yazınız yazınız'):null}

            type="email"
            id="email"
            name="email"
            required="required"
            onChange={handleChange}
            value={state.email}
            title="Lütfen doğru e-mail adresi giriniz."
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
          />
          <p>
            Bu etkinlik Delano Event & Content Management tarafından
            düzenlenmektedir.
            <span onClick={handleClickOpen}>Burayı tıklayarak</span> Delano
            Event & Content Management şirketinin Veri Koruma Bilgilendirmesini
            okuyabilirsiniz.
          </p>
          {/* <br /> */}
          <h4>{kvk}</h4>
          <br />
          <input
            type="checkbox"
            id="agree"
            required="required"
            name="check"
            onChange={handleChange}
            title="KVKK Sözleşmesini kabul etmelisiniz."
          />
          <label htmlFor="vehicle1">{kvkdesc}</label>
          <br></br>

          <input
            id="submit"
            type="submit"
            // disabled
            onClick={handleSubmit}
            value={btn}
          />
        </form>
        <div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
              {"DELANO KİŞİSEL VERİLERİN KORUNMASI POLİTİKASI"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”)
                uyarınca, Şirketimiz tarafından, Veri Sorumlusu sıfatıyla,
                kişisel verileriniz, iş amaçlarıyla bağlı olarak, aşağıda
                açıklandığı çerçevede kullanılmak, kaydedilmek, saklanmak,
                güncellenmek, aktarılmak ve/veya sınıflandırılmak suretiyle
                işlenecektir. Bu kapsamda Şirketimiz tarafından başta özel
                hayatın gizliliği olmak üzere, kişilerin temel hak ve
                özgürlüklerini korumak ve kişisel verilerin korunması amacıyla
                düzenlenen Kanun ve Yönetmelikler gereğince Şirketimiz, kişisel
                verilerinizin hukuka aykırı olarak işlenmesini önleme, hukuka
                aykırı olarak erişilmesini önleme ve muhafazasını sağlama
                amacıyla, uygun güvenlik düzeyini temin etmeye yönelik tüm
                teknik ve idari tedbirleri almaktadır. Bu metnin hedef kitlesi,
                Şirketimiz çalışanları veya Şirketimize iş başvurusu yapmış olan
                çalışan adayları dışındaki, Şirketimiz tarafından kişisel
                verileri işlenen tüm gerçek kişilerdir. Veri sorumlusu sıfatıyla
                işlenen kişisel verilere, burada belirtilenlerle sınırlı sayıda
                olmamak üzere aşağıda yer verilmektedir; İsim, soy isim, T.C.
                kimlik numarası, adres, telefon numarası, e-posta adresi, imza,
                fiziksel mekan/güvenlik görüntü kaydı, çağrı merkezi/hizmet
                kalitesi ses kaydı, banka hesap numarası, cookie kayıtları
                Kişisel verilerin işlenme amaçları ve hukuki sebepleri;
                Tarafınızca paylaşılan kişisel verileriniz; Şirketimiz
                tarafından sunulan ürün ve hizmetlerden sizleri ve/veya temsil
                ettiğiniz kurum ve kuruluşları faydalandırmak için, Şirketimizin
                ticari ve iş stratejilerinin belirlenmesi ve uygulanması,
                pazarlama faaliyetlerinin yapılması, iş geliştirme ve planlama
                faaliyetlerinin gerçekleştirilmesi dahil ve fakat bunlarla
                sınırlı olmamak üzere gerekli çalışmaların yürütülmesi,
                Şirketimiz tarafından yürütülen iletişime yönelik idari
                operasyonların yürütülmesi, Şirketimizin kullanımda olan
                lokasyonların fiziksel güvenliğinin ve denetiminin sağlanması,
                İş ortağı/müşteri/tedarikçi (yetkili veya çalışanları)
                ilişkilerinin kurulması, İş ortaklarımız, tedarikçilerimiz veya
                sair üçüncü kişilerle birlikte sunulan ürün ve hizmetlere
                ilişkin sözleşme gereklerinin ve finansal mutabakatın
                sağlanması, Şirketimizin insan kaynakları politikalarının
                yürütülmesi, Şirketimizin çağrı merkezinin aranması veya
                internet sayfasının kullanılması ve/veya Şirketimizin
                düzenlediği eğitim, seminer veya organizasyonlara katılım
                sağlanması amacıyla işlenecektir. Kişisel verilerin toplanma ve
                saklanma yöntemi; Şirketimizle paylaştığınız kişisel
                verileriniz, otomatik ya da otomatik olmayan yöntemlerle,
                ofisler, şubeler, çağrı merkezi, internet sitesi, sosyal medya
                mecraları, mobil uygulamalar ve benzeri vasıtalarla sözlü,
                yazılı ya da elektronik olarak toplanabilir. Kişisel verileriniz
                elektronik ve/veya fiziksel ortamlarda saklanacaktır. Şirketimiz
                tarafından temin edilen ve saklanan kişisel verilerinizin
                saklandıkları ortamlarda yetkisiz erişime maruz kalmamaları,
                manipülasyona uğramamaları, kaybolmamaları ve zarar görmemeleri
                amacıyla gereken iş süreçlerinin tasarımı ile teknik güvenlik
                altyapı geliştirmeleri uygulanmaktadır. Kişisel verileriniz,
                size bildirilen amaçlar ve kapsam dışında kullanılmamak kaydı
                ile gerekli tüm bilgi güvenliği tedbirleri de alınarak işlenecek
                ve yasal saklama süresince veya böyle bir süre öngörülmemişse
                işleme amacının gerekli kıldığı süre boyunca saklanacak ve
                işlenecektir. Bu süre sona erdiğinde, kişisel verileriniz
                silinme, yok edilme ya da anonimleştirme yöntemleri ile
                Şirketimizin veri akışlarından çıkarılacaktır. Kişisel Verilerin
                aktarılması; Kişisel verileriniz, Kanunlar ve sair mevzuat
                kapsamında ve açıklanan amaçlarla; Türk Telekomünikasyon A.Ş. ve
                Türk Telekomünikasyon grup şirketlerine, Yetki vermiş olduğumuz,
                Şirketimiz nam ve hesabına faaliyette bulunan şirketler,
                temsilcilerimize, Düzenleyici ve denetleyici kurumlara, kişisel
                verilerinizi tabi olduğu kanunlarında açıkça talep etmeye
                yetkili olan kamu kurum veya kuruluşlara, Belirtilen amaçlar
                kapsamında iş ortaklıkları, tedarikçi ve yüklenici şirketler,
                bankalar, kredi risk ve finans kuruluşları ve sair gerçek veya
                tüzel kişilere, Vergi ve benzeri danışmanlara, yasal takip
                süreçleri ile ilgili zorunlu kişilere, kurum ve kuruluşlara ve
                denetimciler de dâhil olmak üzere danışmanlık aldığımız üçüncü
                kişilere ve bunlarla sınırlı olmaksızın, yurt içinde ve yurt
                dışında, yukarıda belirtilen amaçlarla iş ortakları, hizmet
                alınan üçüncü kişi, yetkilendirilen kişi ve kuruluşlara
                aktarılabilecektir. KVKK’nın 11. maddesi gereği haklarınız;
                Şirketimize başvurarak, kişisel verilerinizin; İşlenip
                işlenmediğini öğrenme, İşlenmişse bilgi talep etme, İşlenme
                amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,
                Yurt içinde / yurt dışında aktarıldığı 3. kişileri bilme, Eksik
                / yanlış işlenmişse düzeltilmesini isteme, KVKK’nın 7.
                maddesinde öngörülen şartlar çerçevesinde silinmesini / yok
                edilmesini isteme, Aktarıldığı 3. kişilere yukarıda sayılan (e)
                ve (f) bentleri uyarınca yapılan işlemlerin bildirilmesini
                isteme, Münhasıran otomatik sistemler ile analiz edilmesi
                nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,
                Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız
                hâlinde zararın giderilmesini talep etme haklarına sahipsiniz.
                KVK Kanunu’nun 13. maddesinin 1. fıkrası gereğince, yukarıda
                belirtilen haklarınızı kullanmak ile ilgili talebinizi, yazılı
                olarak veya Kişisel Verileri Koruma Kurulu’nun belirlediği diğer
                yöntemlerle Şirketimize iletebilirsiniz. Yukarıda belirtilen
                haklarınızı kullanmak için kimliğinizi tespit edici gerekli
                bilgiler ile talep dilekçenizi bizzat elden teslim edebilir,
                noter kanalıyla veya Kişisel Verileri Koruma Kurulu tarafından
                belirlenen diğer yöntemler ile gönderebilir veya
                delano@delano.com.tr adresine güvenli elektronik imzalı olarak
                iletebilirsiniz.
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
