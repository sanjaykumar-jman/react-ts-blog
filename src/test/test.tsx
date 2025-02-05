import React, { useState } from 'react'
import BlogCard from '../components/BlogCard/BlogCard'
import { useBlogContext } from '../context/BlogContext'
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