import { useState, useEffect } from "react";
const CustomHook = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const Online = () => {
      setIsOnline(true)
    };
    const Offline = () => {
      setIsOnline(false)
    };

    window.addEventListener("online", Online)
    window.addEventListener("offline", Offline)
    return (() =>{
        window.removeEventListener("online", Online)
        window.removeEventListener("offline", Offline)
    })
  }, []);
  return isOnline;

};

export {CustomHook}
