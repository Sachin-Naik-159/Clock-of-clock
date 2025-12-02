import "./Clock.css"
import { digits } from "../utilities/digitData.js"
import BaseClock from "./BaseClock.js"

function Digit(dig) {
    let posns = digits[dig.dig]

    return (
        <div className="digit">
            {
                posns.map((pos, no) => (<><BaseClock key={no + "s1" + pos} pos={pos} /></>))
            }
        </div>
    );
}

export default Digit;