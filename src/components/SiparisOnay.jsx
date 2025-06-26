import logo from '../../images/iteration-1-images/logo.svg';
import './SiparisOnay.css'
import { useLocation } from "react-router-dom";
export default function SiparisOnay() {
    const location = useLocation();
    const { boyut, hamur, malzemeler, malzemeFiyat, malzemeSayisi, toplamFiyat, adet } = location.state ;

    return (
        <>
        <div className="sipOnay">
            <img src={logo} alt="" />
            <div style={{marginTop:"70px"}}>
                <span className="elyazi" style={{color:"#FDC913"}}>lezzetin yolda</span>
                <h3>SİPARİŞ ALINDI</h3>
                <hr style={{ width:"400px", opacity: 1, marginTop:"40px" }} />
            </div>
            <div className='bilgi'>
                <h2>Position Absolute Acı Pizza</h2>
                <ul>
                    <li>Boyut: <span style={{fontWeight:"500"}}>{boyut}</span></li>
                    <li>Hamur: <span style={{fontWeight:"500"}}>{hamur}</span></li>
                    <li>Ek Malzemeler: <span style={{fontWeight:"500"}}>{malzemeler.join(", ")}</span></li>
                </ul>
                <div className="siparisDetay2">
                        <h3 className="baslik3" style={{ marginTop: "1.5rem", marginLeft: "1rem", fontSize:"20px", fontWeight:"bold" }}>Sipariş Toplamı</h3>

                        <div className="detaySatiri">
                            <span>Seçimler</span>
                            <span>{(malzemeSayisi * malzemeFiyat).toFixed(2)}₺</span>
                        </div>

                        <div className="detaySatiri toplam">
                            <span >Toplam</span>
                            <span >{(toplamFiyat * adet).toFixed(2)}₺</span>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}
