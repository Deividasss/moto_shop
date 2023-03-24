import "../Navigation/Navigation.scss"
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div>
            <input type="checkbox" id="active" />
            <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
            <div class="wrapper">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Navigation