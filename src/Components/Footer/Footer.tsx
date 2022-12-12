import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import tamuIcon from '../../images/tamu-no-bg.png'

function Footer(): JSX.Element {
    return (
        <div className="Footer">
            <a href="https://www.instagram.com/tamu_pants/">
                <InstagramIcon fontSize="large" />
            </a>
            <a href="https://Tamu_pants.com/">
                <img src={tamuIcon} alt="" />
            </a>
            <a href="https://www.facebook.com/tamubytami/">
                <FacebookIcon fontSize="large" />
            </a>
        </div>
    );
}

export default Footer;
