import { useState } from 'react'
import Popup from '../components/Popup/Popup'
import FadeComponent from '../components/Popup/FadeComponent'

function Testing() {
    let [s, set]= useState(true)
    setTimeout(() => {
        set(false)
    }, 3000);
    return<>
        <FadeComponent isVisible={s}>
            <Popup title="Hello" content="World"/>
            </ FadeComponent>
    </>
}

export default Testing