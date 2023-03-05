import mainImage from "../../assets/img/mainImage.png"
import "../HomeScreen/HomeScreen.scss"

const HomeScreen = () => {
    return (
        <div>
            <div className="mainSection">
                <div className="container">
                    <div className="imagesContainer">
                        <div className="headingTitle">
                            <h1 className="title">Moto Dash <br></br> <span>Becouse We Ride</span></h1>
                            <button>About Us</button>
                        </div>
                        <img className="mainImage" src="https://img1.fonwall.ru/o/gw/wallpaper-triumph-thruxton-tfc-black-motorcycle-side-view-motorcycles.jpeg" />
                        <img className="additionalImageOne" src="https://w0.peakpx.com/wallpaper/219/196/HD-wallpaper-triumph-thruxton-tfc-side-view-2019-bikes-tuning-superbikes-2019-triumph-thruxton-tfc-black-motorcyle-british-motorcyles-triumph-thumbnail.jpg" />
                        <img className="additionalImageTwo" src="https://wallpapercave.com/wp/wp4449711.jpg" />
                    </div>
                </div>
            </div>
            <section className="secondSection">
                <div class="wrapperr">
                    <div class="box">
                        <div class="front-face">
                            <img src="https://www.bikesrepublic.com/wp-content/uploads/2017/04/BMW-HP4-RaceP90254389_highRes.jpg" />
                            <h3>SuperBike</h3>
                        </div>
                        <div class="back-face">
                            <span>Web Design</span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in deleniti vitae beatae veritatis aliquid porro perspiciatis dolores impedit ad.
                            </p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="front-face">
                            <img src="http://cdn.shopify.com/s/files/1/0012/8647/1793/articles/16.jpg?v=1645534830" />
                            <h3>Dirtbikes</h3>
                        </div>
                        <div class="back-face">
                            <span>Web Design</span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in deleniti vitae beatae veritatis aliquid porro perspiciatis dolores impedit ad.
                            </p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="front-face">
                            <img src="https://s7g10.scene7.com/is/image/ktm/79-DUKE-Hero-Image:Medium?wid=1607&hei=1200&dpr=off" />
                            <h3>Naked Bikes</h3>
                        </div>
                        <div class="back-face">
                            <span>Web Design</span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in deleniti vitae beatae veritatis aliquid porro perspiciatis dolores impedit ad.
                            </p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="front-face">
                            <img src="https://t3.ftcdn.net/jpg/05/07/95/20/360_F_507952092_Ar4DHhUkuPLugIFJdUIfs6kWpo9jTf74.jpg" />
                            <h3>Advertising</h3>
                        </div>
                        <div class="back-face">
                            <span>Advertising</span>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in deleniti vitae beatae veritatis aliquid porro perspiciatis dolores impedit ad.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HomeScreen