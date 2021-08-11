import React from "react";
import { Link } from "react-router-dom";
import '../components/global.css'
import './Entrance.css'

function Entracne(){
    return (
    <div className="entrance_wrapper">
        <div className="main_box">
            <div className="entrance_main">
                <h2>PLendar</h2>
                <p>플린더를 통해 EPL 경기 일정을 한 눈에 확인하세요</p>
            </div>
            <div className="button_box">
                <Link className="link" to="/home">Enter</Link>
            </div>

        </div>
    </div>
    )
}

export default Entracne