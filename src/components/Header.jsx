import './Header.css'
import logo from '../../images/iteration-1-images/logo.svg';
export default function Header(){
    return (
        <header style={{ width: "100%" }}>
            <img src={logo} alt="" style={{marginTop:"30px"}}/>
            
        </header>
    );
}
