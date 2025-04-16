import { useDispatch, useSelector } from "react-redux";
import { selectLightMode, setColorMode } from "../redux/colorSlice";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

export default function SetColorMode(){
    const lightMode=useSelector(selectLightMode);
    const dispatch =useDispatch();

    const toggleColor=()=>{
        dispatch(setColorMode(!lightMode))
        if(lightMode){
            document.documentElement.setAttribute('data-theme','dim');
        }
        else{
            document.documentElement.setAttribute('data-theme','Pale Aqua');
        }
    }

    return(
        <div onClick={toggleColor} className="cursor-pointer absolute right-5 top-[5.5rem] md:right-[8rem] md:top-2">
            {
                lightMode?(
                    <SunIcon />
                ):(
                    <MoonIcon />
                )
            }
        </div>
    )
}