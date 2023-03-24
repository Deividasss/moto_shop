import mainImage from "../../assets/img/mainImage.png"
import MotoCategoriesList from "../../components/MotoShop/MotoCategoriesList";
import MotoProductsList from "../../components/MotoShop/MotoProductsList";
import "../HomeScreen/HomeScreen.scss"

const HomeScreen = () => {

    const categories = [
        {
            name: 'SuperMoto',
            image: 'https://i.pinimg.com/originals/11/6d/d0/116dd000613206ef8d4c711844405791.jpg'
        },
        {
            name: 'SuperBike',
            image: 'https://i.pinimg.com/originals/11/6d/d0/116dd000613206ef8d4c711844405791.jpg'
        },
        {
            name: 'MotoCross',
            image: 'https://i.pinimg.com/originals/11/6d/d0/116dd000613206ef8d4c711844405791.jpg'
        },
        {
            name: 'StreetBike',
            image: 'https://i.pinimg.com/originals/11/6d/d0/116dd000613206ef8d4c711844405791.jpg'
        },
    ];

    return (
        <div>
            <div className="mainSection">
                <div className="mainSectionContainer">
                    <div className="imagesContainer">
                        <div className="headingTitle">
                            <h1 className="title">Moto Dash <br></br> <span>Becau se We Ride</span></h1>
                            <button>About Us</button>
                        </div>
                        <img className="mainImage" src="https://img1.fonwall.ru/o/gw/wallpaper-triumph-thruxton-tfc-black-motorcycle-side-view-motorcycles.jpeg" />
                        <img className="additionalImageOne" src="https://w0.peakpx.com/wallpaper/219/196/HD-wallpaper-triumph-thruxton-tfc-side-view-2019-bikes-tuning-superbikes-2019-triumph-thruxton-tfc-black-motorcyle-british-motorcyles-triumph-thumbnail.jpg" />
                        <img className="additionalImageTwo" src="https://wallpapercave.com/wp/wp4449711.jpg" />
                    </div>
                </div>
            </div>
            <section className="secondSection">
                <div className="secondSectionTitleContainer">
                    <h2 className="secondSectionTitle">Its all about power</h2>
                    <p className="secondSectionParagraph">Contact us and try the model you like</p>
                </div>
                <div className="container">
                    <MotoCategoriesList categories={categories} />
                </div>
            </section>
            <section>
            </section>
        </div>
    )
}
export default HomeScreen