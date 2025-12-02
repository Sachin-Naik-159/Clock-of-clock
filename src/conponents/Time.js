import { useEffect, useState } from "react";
import Digit from "./Digit";

function Time() {

    let now = new Date();
    const [time, setTime] = useState(String(now).slice(16, 24));

    useEffect(() => {
        const interval = setInterval(() => {
            let now = new Date();
            setTime(String(now).slice(16, 24))
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="face">
            <div className="time">
                <Digit dig={time[0]} />
                <Digit dig={time[1]} />
            </div>

            <div className="time">
                <Digit dig={time[3]} />
                <Digit dig={time[4]} />
            </div>

            <div className="time">
                <Digit dig={time[6]} />
                <Digit dig={time[7]} />
            </div>
        </div>
    );
}

export default Time;