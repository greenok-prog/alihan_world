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
      
        // если день НЕ прошёл — показываем сохранённую
        if (!isDayPassed()) {
          const savedToday = localStorage.getItem('todayCookie');
          if (savedToday) {
            setSelected(Number(savedToday));
            setOpened(true);
            return;
          }
        }
      
        const MAX = 15;
        const selectedCookies = JSON.parse(
          localStorage.getItem('selectedCookie') || '[]'
        ) as number[];
      
        const available = Array.from({ length: MAX }, (_, i) => i + 1)
          .filter(n => !selectedCookies.includes(n));
      
        // если всё использовано — начинаем заново
        const pool = available.length
          ? available
          : Array.from({ length: MAX }, (_, i) => i + 1);
      
        const random = pool[Math.floor(Math.random() * pool.length)];
      
        setSelected(random);
        setOpened(true);
      
        localStorage.setItem('todayCookie', random.toString());
        localStorage.setItem('lastSelectedDate', Date.now().toString());
      
        // если был сброс — начинаем новый список
        const newSelected = available.length
          ? [...selectedCookies, random]
          : [random];
      
        localStorage.setItem('selectedCookie', JSON.stringify(newSelected));
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