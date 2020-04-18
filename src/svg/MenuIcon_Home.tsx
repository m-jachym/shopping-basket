import * as React from "react"
import Svg, {G, Rect, Circle, Path} from "react-native-svg"

function MenuIcon_Home({SIZE = 26, active}) {
    return (
        <Svg data-name="Warstwa 1" viewBox="0 0 57.79 59" width={SIZE} height={SIZE}>
            <Path
                d="M49.4 59H36.56a2 2 0 01-2-2V38.21H23.32L23.2 57a2 2 0 01-2 2H8.39a4 4 0 01-4-4V29.9h-.2a4.18 4.18 0 01-3-7.14l.12-.11L27.66.47a2 2 0 012.58 0l26.2 22.18.12.11a4.18 4.18 0 01-3 7.14h-.23v5.58a2 2 0 01-4 0V27.9a2 2 0 012-2h2.27a.16.16 0 00.17-.11v-.16L29 4.62 4 25.63a.17.17 0 000 .16.15.15 0 00.17.11h2.25a2 2 0 012 2V55h10.8l.11-18.81a2 2 0 012-2h15.23a2 2 0 012 2V55H49.4v-3.54a2 2 0 014 0V55a4 4 0 01-4 4z"
                fill={active ? 'white' : '#191c63'}
            />
            <Circle cx={51.28} cy={43.77} r={2.28} fill="#0ce9c3" />
        </Svg>
    )
}

export default MenuIcon_Home
