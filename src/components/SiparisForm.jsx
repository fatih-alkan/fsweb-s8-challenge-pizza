import React from "react";
import { Link } from "react-router-dom";
import './SiparisForm.css';
import Header from "./Header";
import { useHistory } from "react-router-dom";
import { useState } from "react";
export default function SiparisForm(){
    const malzemeler = [
  "Pepperoni",
  "Domates",
  "Biber",
  "Sosis",
  "Mısır",
  "Sucuk",
  "Kanada Jambonu",
  "Sucuk",
  "Ananas",
  "Tavuk Izgara",
  "Jalepeno",
  "Kabak",
  "Soğan",
  "Sarımsak"
];
    const [adet, setAdet] = useState(1);
    const history = useHistory();
    function handleClick(){
        history.push("./SiparisOnay")
    }
    return (
      <>
      <div className="headerWrapper">
        <Header />
      </div>
      <div className="formBanner">
        <div className="icerikKapsayici">
            <div className="resim">
                
            </div>
            
            <nav className="container">
            <Link to="/" style={{ marginRight: "10px" }}>Ana Sayfa -</Link>
            <Link to="/SiparisForm"><span>Sipariş Oluştur</span></Link>
            </nav>
            <h1 className="baslik">Position Absolute Acı Pizza</h1>
            <div className="fiyatBar">
            <div className="fiyat"><h2>85.50₺</h2></div>
            <div className="degerlendirme">
                <div className="puan">4.9</div>
                <div>(200)</div>
            </div>
            </div>
            <div className="yazi">
            <p>
                Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
            </p>
            </div>
        </div>
        </div>

        <div className="container2">
            
                
            
        
        <div className="boyut">
            <form action="büyüklük" className="size">
                <h3>Boyut Seç <span style={{ color: "#CE2829" }}>*</span></h3>
                <div className="radio-group">
                    <label className="radio-label">
                        <input type="radio" id="kücük" name="size" />
                        <span className="custom-radio">S</span>
                    </label>
                    <label className="radio-label">
                        <input type="radio" id="orta" name="size" />
                        <span className="custom-radio">M</span>
                    </label>
                    <label className="radio-label">
                        <input type="radio" id="büyük" name="size" />
                        <span className="custom-radio">L</span>
                    </label>
                </div>
            </form>
            <form action="hamur" className="kalinlik">
                <h3>Hamur Seç <span style={{ color: "#CE2829" }}>*</span></h3>
                <select name="hamur" id="hamur" className="select-box">
                    <option value="nokta">— Hamur Kalınlığı Seç —</option>
                    <option value="ince">İnce</option>
                    <option value="normal">Normal</option>
                    <option value="kalin">Kalın</option>
                </select>
            </form>

        </div>
        <div className="malzeme-container">
        <h3 className="baslik3">Ek Malzemeler</h3>
        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        <div className="malzeme-listesi">
            {malzemeler.map((malzeme, index) => {
            const id = `malzeme-${index}`;
            return (
                <label key={id} htmlFor={id} className="malzeme-item" style={{fontWeight:"500"}}>
                <input type="checkbox" id={id} name={malzeme} />
                {malzeme}
                </label>
            );
            })}
        </div>
        </div>
        <div className="not">
            <h3 className="baslik3">Sipariş Notu</h3>
            <textarea className="textNot" name="not" id="not" placeholder="Sipraişinize eklemek istediğiniz birşey var mı?"></textarea>
            <hr />
        </div>   
        <div className="onay">
            <div className="sayac">
                <button onClick={() => setAdet(adet > 1 ? adet - 1 : 1)}>-</button>
                <p>{adet}</p>
                <button onClick={() => setAdet(adet + 1)}>+</button>

            </div>
            <div className="siparisDetay">
            <h3 className="baslik3" style={{marginTop:"1.5rem", marginLeft:"1.5rem"}}>Sipariş Toplamı</h3>
            
            <div className="detaySatiri">
              <span>Seçimler</span>
              <span>25.00₺</span>
            </div>
            
            <div className="detaySatiri toplam">
              <span className="kirmiziYazi">Toplam</span>
              <span className="kirmiziYazi">110.50₺</span>
            </div>

            <button className="siparisButon" onClick={handleClick}>SİPARİŞ VER</button>
          </div>
        </div>
        </div>
       </> 
    )
}