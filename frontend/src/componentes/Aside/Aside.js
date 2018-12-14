import React from 'react'
import facebook from './img/facebook.png'
import instagram from './img/instagram.png'
import twitter from './img/twitter.png'
import github from './img/github.png'
import behance from './img/behance.png'
import './Aside.css'

function Aside (){
    return(
        <aside className="aside">
        <a><img src={facebook}/></a>
        <a><img src={instagram}/></a>
        <a><img src={twitter}/></a>
        <a><img src={github}/></a>
        <a><img src={behance}/></a>
        </aside>
    )
}

export default Aside