import { useSelector } from "react-redux";


const SideBar = () => {

const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
if (!isMenuOpen) return null;


    return (
        <div className="p-5 shadow-lg w-48" >
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