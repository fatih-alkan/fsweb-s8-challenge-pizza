import React from "react";
import './SiparisForm.css';
import Header from "./Header";
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
    let adet = 1;
    return (
      <>
      <div className="headerWrapper">
        <Header />
      </div>
        <div className="container">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eos rerum. Dolorem, vitae sequi magnam eum quidem fuga id dignissimos dolor eius repellendus est aut similique quis dolore maiores commodi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eligendi aspernatur dolorem sequi temporibus neque adipisci et blanditiis, maxime illum corrupti magni quae asperiores nihil praesentium, quos ipsum quisquam nisi!
            </p>
        </div>
        <div className="boyut">
            <form action="büyüklük" className="size">
                <div>
                    <h3>Boyut Seç <span style={{color:"#CE2829"}}>*</span></h3>
                <input type="radio" id="kücük" name="size"/>
                <label htmlFor="kücük"> Küçük</label>  
                </div>
                <div>
                <input type="radio" id="orta" name="size"/>
                <label htmlFor="orta"> Orta</label>
                </div>
                <div>
                <input type="radio" id="büyük" name="size"/>
                <label htmlFor="büyük"> Büyük</label>
                </div>     
            </form>
            <form action="hamur" className="kalinlik">
                <h3>Hamur Seç <span style={{color:"#CE2829"}}>*</span></h3>
                <select name="hamur" id="hamur">
                    <option value="nokta">Hamur Kalınlığı</option>
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
                <button>-</button>
                <p>{adet}</p>
                <button>+</button>
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

            <button className="siparisButon">SİPARİŞ VER</button>
          </div>
        </div>
        </div>
       </> 
    )
}