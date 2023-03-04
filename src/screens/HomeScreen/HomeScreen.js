import mainImage from "../../assets/img/mainImage.png"
import "../HomeScreen/HomeScreen.scss"

const HomeScreen = () => {
    return (
        <div>
            <div className="mainSection">
                <div className="container">
                    <div className="imagesContainer">
                        <h1 className="title">Exploring the boundaries</h1>
                        <img className="mainImage" src="https://img1.fonwall.ru/o/gw/wallpaper-triumph-thruxton-tfc-black-motorcycle-side-view-motorcycles.jpeg" />
                        <img className="additionalImageOne" src="https://w0.peakpx.com/wallpaper/219/196/HD-wallpaper-triumph-thruxton-tfc-side-view-2019-bikes-tuning-superbikes-2019-triumph-thruxton-tfc-black-motorcyle-british-motorcyles-triumph-thumbnail.jpg" />
                        <img className="additionalImageTwo" src="https://cdn.fansshare.com/photo/pcwallpapers/black-motorcycle-kawasaki-wallpaper-pc-497664090.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeScreen