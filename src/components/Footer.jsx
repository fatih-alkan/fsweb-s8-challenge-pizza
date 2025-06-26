import './Footer.css'
export default function Footer(){
    return (
        <>
        <div className="footer">
            <div className="rowA">
                <div className="rowB">
                    <div className="column">
                    <img src="../../images/iteration-2-images/footer/logo-footer.svg" alt="" className='resim'/>
                    <div className="row1">
                      <img src="../../images/iteration-2-images/footer/icons/icon-1.png" alt="" />
                       <p> 341 Londonderry Road,Istanbul Türkiye</p>
                    </div>
                    <div className="row1">
                      <img src="../../images/iteration-2-images/footer/icons/icon-2.png" alt="" />
                       <p> aciktim@teknolojikYemekler.com</p>
                    </div>
                    <div className="row1">
                      <img src="../../images/iteration-2-images/footer/icons/icon-3.png" alt="" />
                       <p>+90 216 123 45 67</p>
                    </div>
                </div>
                <div className="column1">
                    <h4>Hot Menu</h4>
                    <p>Terminal Pizza</p>
                    <p>5 Kişilik Hackathlon Pizza</p>
                    <p>useEffect Tavuklu Pizza</p>
                    <p>Beyaz Console Frosty</p>
                    <p>Testler Geçti Mutlu Burger</p>
                    <p>Position Absolute Acı Burger</p>
                </div>
                </div>
                
                <div className="column2">
                    <h4>Instagram</h4>
                    <div className="row2">
                        <div className="column">
                            <img src="../../images/iteration-2-images/footer/insta/li-0.png" alt="" />
                            <img src="../../images/iteration-2-images/footer/insta/li-1.png" alt="" />
                        </div>
                        <div className="column">
                            <img src="../../images/iteration-2-images/footer/insta/li-2.png" alt="" />
                            <img src="../../images/iteration-2-images/footer/insta/li-3.png" alt="" />
                        </div>
                        <div className="column">
                            <img src="../../images/iteration-2-images/footer/insta/li-4.png" alt="" />
                            <img src="../../images/iteration-2-images/footer/insta/li-5.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="rowC">
                <div className="column">
                    <p>© 2023 Teknolojik Yemekler.</p>
                </div>
                <div className="column">
                    <i class="fab fa-twitter"></i>
                </div>
            </div>
        </div>
        </>
    )
}