import React from 'react';
import axios from 'axios';
import Match from '../components/Matches'
import '../components/global.css';
import './Home.css';

class Home extends React.Component{
  state = {
    isLoading : true,
    matches : []
  };
  getData = async ()=>{
    const {data:{matches}} = await axios({
        method: 'get',
        headers: { 'X-Auth-Token': '715a3c1ec18f4986b0617c528ffd7898' },
        dataType: 'json',
        url: 'https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED'
        });
    this.setState({ matches, isLoading:false })
  }
  componentDidMount(){
    this.getData();
  };
  render() {
    const { isLoading, matches } = this.state;
    return (
      <div className="wrapper">
        <header>2021/2022 EPL</header>
        <img className="EPL_logo" src="img/PL_Logo.svg" alt="EPL_logo"/>
        <div className="container">
          {isLoading ?
          <div className="setting__container">
            <span className="setting_text">is Loading...</span>
          </div> : matches.map(match => {
          return <ul className="match__container"><Match key={match.id} id={match.id} homeTeam={match.homeTeam} awayTeam={match.awayTeam} utcDate={match.utcDate} /></ul>
        })}</div>
      </div>
    );
  }
}

export default Home;
