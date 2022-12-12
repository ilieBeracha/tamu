import "./Description.css"
import tamu from '../../images/tamuicon.jpg';
import tamuNoBg from '../../images/tamu-no-bg.png';

import tamuImage from '../../images/tamuImage.png'
import sapirImg from '../../images/sapir.png'

function Description(): JSX.Element {
    return (
        <div className="Description">
            <div className="overlay"></div>
            <img id="logo" src={tamuNoBg} alt="" />
            <div className="eventDetailsDivAll">
                <div className="eventDetailsDiv">
                    <h1><span id="TamuSpan">TAMU</span></h1>
                    <h2>  Christmas and Hanukkah Event </h2>
                    <p>".Be fashionable and comfortable in our clothes"</p>
                </div>
                <div className="imagesDiv">
                    {/* <img id="ilieImg" src={ilieimg} alt="" /> */}
                    {/* <img id="sapirImg" src={tamuImage} alt="" /> */}
                </div>
                <button onClick={() => window.scrollTo({
                    top: 2000,
                    behavior: 'smooth'
                })}>הרשם לאירוע</button>
            </div>
        </div>
    );
}

export default Description;
