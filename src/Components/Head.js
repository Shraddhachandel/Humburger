import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Head = () => {
    const dispatch = useDispatch ();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };
    return(
        <div className=" grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="h-6 flex col-span-1">

            <img onClick={()=> toggleMenuHandler()}
            
            className="h-8 cursor-pointer" src="Humburger.png" alt="Humburger"/>
            <img className=" h-8" src="youtube.png" alt=" youtube"/>
        </div>
        <div className=" col-span-10">
            <input type="text"/>
        </div>
        <button>Search</button>
    </div>
    )
}
export default Head;