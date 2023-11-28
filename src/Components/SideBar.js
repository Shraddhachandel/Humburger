import { useSelector } from "react-redux";
import store from "../Utils/store";

const SideBar = () => {

const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
if (!isMenuOpen) return null;


    return (
        <div className="p-5 shadow-lg" >
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            <h1 className="font=bold pt-5">Subscribe</h1>
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
            <h1 className="font=bold pt-5">Subscribe</h1>
            <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>
        </div>
    )
}

export default SideBar;