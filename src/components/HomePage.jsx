import { useHistory } from "react-router-dom";
import logo from '../../images/iteration-1-images/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './HomePage.css';
import icon1 from '../../images/iteration-2-images/icons/1.svg';
import icon2 from '../../images/iteration-2-images/icons/2.svg';
import icon3 from '../../images/iteration-2-images/icons/3.svg';
import icon4 from '../../images/iteration-2-images/icons/4.svg';
import icon5 from '../../images/iteration-2-images/icons/5.svg';
import icon6 from '../../images/iteration-2-images/icons/6.svg';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Footer from "./Footer";
export default function HomePage(){
    const history = useHistory();
    function handleClick(){
        history.push("./SiparisForm")
    }
    const navItems = [
    { name: 'YENİ! Kore', href: '#home', icon: icon1 },
    { name: 'Pizza', href: '#features', icon: icon2 },
    { name: 'Burger', href: '#pricing', icon: icon3 },
    { name: 'Kızartmalar', href: '#about', icon: icon4 },
    { name: 'Fast Food', href: '#contact', icon: icon5 },
    { name: 'Gazlı İçecek', href: '#help', icon: icon6 },
    ];
    const navItems2 = [
    { name: 'Ramen', href: '#home', icon: icon1 },
    { name: 'Pizza', href: '#features', icon: icon2 },
    { name: 'Burger', href: '#pricing', icon: icon3 },
    { name: 'French fries', href: '#about', icon: icon4 },
    { name: 'Fast Food', href: '#contact', icon: icon5 },
    { name: 'Soft drinks', href: '#help', icon: icon6 },
    ];
    const products = [
    {
        name: 'Terminal Pizza',
        image: '../../images/iteration-2-images/pictures/food-1.png', 
        rating: 4.9,
        reviews: 200,
        price: 60,
    },
    {
        name: 'Position Absolute Acı Pizza',
        image: '../../images/iteration-2-images/pictures/food-2.png', 
        rating: 4.9,
        reviews: 928,
        price: 85,
    },
    {
        name: 'useEffect Tavuklu Burger',
        image: '../../images/iteration-2-images/pictures/food-3.png', 
        rating: 4.9,
        reviews: 462,
        price: 75,
    },
];
    return (
        <>
            
            <div className="home">
                <img src={logo} alt="" />
                <span className="elyazi">fırsatı kaçırma</span>
                <h3>KOD ACIKTIRIR</h3>
                <h3>PİZZA, DOYURUR</h3>
                <button className="aciktim" onClick={handleClick}>ACIKTIM</button>
            </div>
            <div className="genel">
                <div>
                <Navbar bg="white" data-bs-theme="light" className="navbar1">
                    <Container>
                        <Nav className="me-auto container1">
                            {navItems.map((item, index) => (
                                <Nav.Link href={item.href} key={index}>
                                    <img src={item.icon} alt={item.name} width="20" height="20" style={{ marginRight: '8px' }} />
                                    {item.name}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Container>
                </Navbar>
                </div>
            <div className="container1 kartlar">
                <Container className="">
                <Card className="p-4 custom-card kart-1" style={{ width: '30rem', borderRadius: '20px' }}>
                    <Row>
                    <Col md={7} className="kart-1-yazi-col">
                        <h1 className="mb-3 fw-bold">Özel Lezzetus</h1>
                        <p className="mb-4" style={{color:"white"}}>Position: Absolute Acı Burger</p>
                        <Button variant="light" className="fw-bold custom-btn card-button" onClick={handleClick}>SİPARİŞ VER</Button>
                    </Col>
                    
                    </Row>
                </Card>
                </Container>
                <div className="right-cards">
                    <Container className="">
                <Card className="p-4 custom-card kart-2" style={{ width: '30rem', borderRadius: '20px' }}>
                    <Row>
                    <Col md={7} className="kart-2-yazi-col">
                        <h2 className="mb-3 fw-bold">Hackathlon Burger Menü</h2>
                        <Button variant="light" className="fw-bold custom-btn card-button" onClick={handleClick}>SİPARİŞ VER</Button>
                    </Col>
                    
                    </Row>
                </Card>
                </Container>
                <Container className="">
                <Card className="p-4 custom-card kart-3" style={{ width: '30rem', borderRadius: '20px' }}>
                    <Row>
                    <Col md={7} className="kart-3-yazi-col">
                        <h2 className="mb-3 fw-bold"><span>Çoooook</span> hızlı npm gibi kurye</h2>
                        <Button variant="light" className="fw-bold custom-btn card-button" onClick={handleClick}>SİPARİŞ VER</Button>
                    </Col>
                    
                    </Row>
                </Card>
                </Container>
                </div>
            </div>
            <div className="container1 tata" style={{textAlign:"center", marginTop:"100px"}}>
                <span className="elyazi">en çok paketlenen menüler</span>
                <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
            </div>
            <div>
                <Navbar bg="#FAF7F2" data-bs-theme="light" className="navbar2">
                    <Container>
                        <Nav className="me-auto container1">
                            {navItems.map((item, index) => (
                                <Nav.Link href={item.href} key={index} style={
                        item.name === 'Pizza'
                            ? {
                                  color: 'white',
                                  backgroundColor: 'black',
                              }
                            : {}
                    }>
                                    <img src={item.icon} alt={item.name} width="20" height="20" style={{ marginRight: '8px' }} />
                                    {item.name}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Container>
                </Navbar>
                </div>
                <div className="container1">
                    <Container className="my-5">
                        <Row className="g-4">
                            {products.map((product, index) => (
                                <Col key={index} xs={12} md={4}>
                                    <Card className="h-100 shadow-sm border-0 p-3 rounded-4">
                                        <Card.Img
                                            variant="top"
                                            src={product.image}
                                            style={{ width: '80%', margin: '0 auto' }}
                                        />
                                        <Card.Body>
                                            <Card.Title className="">{product.name}</Card.Title>
                                            <div className="d-flex justify-content-between gap-2 mt-2">
                                                <span>{product.rating}</span>
                                                <span>({product.reviews})</span>
                                                <span className="fw-bold">{product.price}₺</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
                 <Footer/>           
            </div>
            
        </>
    );
}
