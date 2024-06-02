import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
const useRestmenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
    fetchMenu();
        }, [])
    const fetchMenu = async() => {
        const info = await fetch(MENU_URL + resId);
        const jsonInfo = await info.json();
        setResInfo(jsonInfo);
    }
    return resInfo;
}
export default useRestmenu;