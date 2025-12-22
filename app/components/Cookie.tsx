import { CSSProperties, useEffect, useState } from "react";
import ImgModal from "./ImgModal";

const Coockie = ({style}:{style?:CSSProperties}) => {
    const [status, setStatus] = useState(false);
    const [selected, setSelected] = useState<number>(1);
    const [opened, setOpened] = useState<boolean>(false);

    const DAY_MS = 24 * 60 * 60 * 1000;

    function isDayPassed(): boolean {
    const saved = localStorage.getItem('lastSelectedDate');
    if (!saved) return true;

    return Date.now() - Number(saved) >= DAY_MS;
    }

    
    const openCookie = () => {
    setStatus(true);
    
    // если день НЕ прошёл — просто показываем сохранённую
    if (!isDayPassed()) {
        const savedToday = localStorage.getItem('todayCookie');
        if (savedToday) {
        setSelected(Number(savedToday));
        setOpened(true);
        return;
        }
    }
    
    // если день прошёл — выбираем новую
    const selectedCookies = JSON.parse(
        localStorage.getItem('selectedCookie') || '[]'
    );
    
    let random = Math.floor(Math.random() * 15) + 1;
    if (selectedCookies.length) {
        while (selectedCookies.includes(random)) {
        random = Math.floor(Math.random() * 15) + 1;
        }
    }
    
    setSelected(random);
    setOpened(true);
    
    localStorage.setItem('todayCookie', random.toString());
    localStorage.setItem('lastSelectedDate', Date.now().toString());
    localStorage.setItem(
        'selectedCookie',
        JSON.stringify([...selectedCookies, random])
    );
    };
      

    

    const closeCookie = () => {
        setOpened(false);
    }
    useEffect(() => {
        if (!isDayPassed()) {
          const savedToday = localStorage.getItem('todayCookie');
          if (savedToday) {
            setSelected(Number(savedToday));
            setStatus(true); // печенька сразу открытая
          }
        }
      }, []);
      
    return (
        <div className="">
            <div style={style} className="absolute bottom-10 left-[30px] cursor-pointer z-12" >
                {!status ? (
                    <img onClick={openCookie} className="w-48" src="/cookie/closed.png" alt="" />
                ): (
                    <img onClick={openCookie} className="w-48" src="/cookie/opened.png" alt="" />
                )}
            </div>
            <div>
                {opened && (
                    <ImgModal imgSrc={`/cookie/text/${selected}.webp`} closeModal={closeCookie} />
                )}
            </div>
        </div>
    )
}

export default Coockie;