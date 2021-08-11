import React from 'react';
import PropTypes from 'prop-types';
import './global.css';
import './Matches.css';

function Match({id, awayTeam, homeTeam, score, utcDate}){
    utcDate = new Date(utcDate);
    const month = utcDate.getMonth();
    const date = utcDate.getDate();
    const minute = utcDate.getMinutes();
    const hour = utcDate.getHours();
    const homteam_logo_url = String("img/"+homeTeam.name+".png")
    const awayteam_logo_url = String("img/"+awayTeam.name+".png")
    return (
        <li className="match__li">
            <div className="date"><span className="month_date">{month}/{date}</span>  {hour <10 ? "0"+hour : hour}:{minute<10 ? "0"+minute : minute}</div>
            <div className="homeTeam_box">
                <img className = "homTeam_logo" src={homteam_logo_url} alt="homeTeam_logo"/>
                <div className="homeTeam_name">{homeTeam.name.replace(" FC","")}</div>
            </div>
            <span>VS</span>
            <div className="awayTeam_box">
                <img className = "awayTeam_logo" src={awayteam_logo_url} alt="awayTeam_logo"/>
                <div className="awayTeam_name">{awayTeam.name.replace(" FC","")}</div>
            </div>
        </li>
    )
}

Match.propTypes = {
    id: PropTypes.number.isRequired,
    awayTeam : PropTypes.object.isRequired,
    homeTeam : PropTypes.object.isRequired,
    utcDate : PropTypes.string
    // score : PropTypes.object,isRequired,
}

export default Match;