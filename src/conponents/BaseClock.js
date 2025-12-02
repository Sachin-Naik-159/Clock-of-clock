import "./Clock.css"
import { rotation } from "../utilities/digitData.js"

function BaseClock(pos) {
    const hand1 = {
        rotate: `${rotation[String(pos.pos)][0]}deg`
    }
    const hand2 = {
        rotate: `${rotation[String(pos.pos)][1]}deg`
    }

    return (<>
        <div className="clock">
            <div className="hand" style={hand2}></div>
            <div className="hand" style={hand1}></div>
        </div>
    </>
    );
}

export default BaseClock;