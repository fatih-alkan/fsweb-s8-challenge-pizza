    import React, { useState, useEffect } from "react";
    import { Link, useHistory } from "react-router-dom";
    import './SiparisForm.css';
    import Header from "./Header";
    import axios from "axios";
import Footer from "./Footer";

    export default function SiparisForm() {
        const malzemeler = [
            "Pepperoni", "Domates", "Biber", "Sosis", "Mısır",
            "Sucuk", "Kanada Jambonu", "Ananas", "Tavuk Izgara",
            "Jalepeno", "Kabak", "Soğan", "Sarımsak"
        ];

        const history = useHistory();

        const [formData, setFormData] = useState({
            boyut: "",
            hamur: "",
            malzemeler: [],
            not: "",
            adet: 1,
        });
        const [isFormValid, setIsFormValid] = useState(false);
        const malzemeFiyat = 5;
        const maxMalzeme = 10;

        useEffect(() => {
        if (formData.boyut && formData.hamur) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
        }, [formData]);
        const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            if (type === "radio") {
                setFormData({ ...formData, boyut: value });
            } else if (type === "select-one") {
                setFormData({ ...formData, hamur: value });
            } else if (type === "checkbox") {
                if (checked) {
                    if (formData.malzemeler.length < maxMalzeme) {
                        setFormData({ ...formData, malzemeler: [...formData.malzemeler, name] });
                    } else {
                        alert("En fazla 10 malzeme seçebilirsiniz.");
                    }
                } else {
                    setFormData({
                        ...formData,
                        malzemeler: formData.malzemeler.filter(item => item !== name)
                    });
                }
            } else {
                setFormData({ ...formData, [name]: value });
            }
        };

        const handleAdetChange = (type) => {
            if (type === "azalt" && formData.adet > 1) {
                setFormData({ ...formData, adet: formData.adet - 1 });
            } else if (type === "arttir") {
                setFormData({ ...formData, adet: formData.adet + 1 });
            }
        };

        

        const handleSubmit = (e) => {
            e.preventDefault();

            axios.post('https://reqres.in/api/pizza', formData, {
                headers: { 'x-api-key': 'reqres-free-v1' }
            })
            .then(res => {
                history.push({
                    pathname: "/SiparisOnay",
                    state: { 
                        boyut: formData.boyut,
                        hamur: formData.hamur,
                        malzemeler: formData.malzemeler,
                        malzemeFiyat: malzemeFiyat,
                        malzemeSayisi: formData.malzemeler.length,
                        toplamFiyat: toplamFiyat,
                        adet: formData.adet
                    }
                });
            })
            .catch(err => {
                console.error("Sipariş başarısız:", err);
            });
        };


        const toplamFiyat = 85.5 + (formData.malzemeler.length * malzemeFiyat);

        return (
            <>
                <div className="headerWrapper">
                    <Header />
                </div>
                <div className="formBanner " style={{ paddingTop: "60px" }}>
                    
                    <div className="icerikKapsayici">
                        <img src="../../images/iteration-2-images/pictures/form-banner.png" alt="" />
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
                                Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
                            </p>
                        </div>
                    </div>
                </div>

                <form className="container2" onSubmit={handleSubmit}>
                    <div className="boyut">
                        <div className="size">
                            <h3>Boyut Seç <span style={{ color: "#CE2829" }}>*</span></h3>
                            <div className="radio-group">
                                {["S", "M", "L"].map((boyut, index) => (
                                    <label key={index} className="radio-label">
                                        <input
                                            type="radio"
                                            name="boyut"
                                            value={boyut}
                                            checked={formData.boyut === boyut}
                                            onChange={handleChange}
                                        />
                                        <span className="custom-radio">{boyut}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="kalinlik">
                            <h3>Hamur Seç <span style={{ color: "#CE2829" }}>*</span></h3>
                            <select
                                name="hamur"
                                id="hamur"
                                className="select-box"
                                value={formData.hamur}
                                onChange={handleChange}
                            >
                                <option value="">— Hamur Kalınlığı Seç —</option>
                                <option value="ince">İnce</option>
                                <option value="normal">Normal</option>
                                <option value="kalin">Kalın</option>
                            </select>
                        </div>
                    </div>

                    <div className="malzeme-container">
                    <h3 className="baslik3">Ek Malzemeler</h3>
                    <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div className="malzeme-listesi">
                        {malzemeler.map((malzeme, index) => {
                        const id = `malzeme-${index}`;
                        return (
                            <label key={id} htmlFor={id} className={`malzeme-item ${formData.malzemeler.includes(malzeme) ? 'secili' : ''}`} style={{ fontWeight: "500" }}>
                            <input
                                type="checkbox"
                                id={id}
                                name={malzeme}
                                checked={formData.malzemeler.includes(malzeme)}
                                onChange={handleChange}
                            />
                            <span className="custom-checkbox"></span>
                            {malzeme}
                            </label>
                        );
                        })}
                    </div>
                    </div>


                    <div className="not">
                        <h3 className="baslik3">Sipariş Notu</h3>
                        <textarea
                            className="textNot"
                            name="not"
                            id="not"
                            placeholder="Siparişinize eklemek istediğiniz bir şey var mı?"
                            value={formData.not}
                            onChange={handleChange}
                        ></textarea>
                        <hr />
                    </div>

                    <div className="onay">
                        <div className="sayac">
                            <button type="button" onClick={() => handleAdetChange("azalt")}>-</button>
                            <p>{formData.adet}</p>
                            <button type="button" onClick={() => handleAdetChange("arttir")}>+</button>
                        </div>

                        <div className="siparisDetay">
                            <h3 className="baslik3" style={{ marginTop: "1.5rem", marginLeft: "1.5rem" }}>Sipariş Toplamı</h3>

                            <div className="detaySatiri">
                                <span>Seçimler</span>
                                <span>{(formData.malzemeler.length * malzemeFiyat).toFixed(2)}₺</span>
                            </div>

                            <div className="detaySatiri toplam">
                                <span className="kirmiziYazi">Toplam</span>
                                <span className="kirmiziYazi">{(toplamFiyat * formData.adet).toFixed(2)}₺</span>
                            </div>

                            
                        </div>
                        <button className="siparisButon" type="submit" disabled={!isFormValid}>
                                SİPARİŞ VER
                            </button>
                    </div>
                </form>
                <Footer />
            </>
        );
    }
