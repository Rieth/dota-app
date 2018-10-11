import React, { Component } from 'react';

class HeroCard extends Component {
    render() {
        const cardStyle = {
            width: '128px',
            height: '73px',
            border: '0px'
        }
        const cardImgStyle = {
            width: '128px',
            height: '73px'
        }
        const cardTextStyle = {
            padding: '0px',
            top: '50px',
            left: '5px',
            color: 'white',
            height: '20px'
        }
        return (
            <div className="card" style={cardStyle} onClick={this.props.selectHero}>
                <img className="card-img-top" style={cardImgStyle} src={this.props.hero.image}></img>
                <div className="card-img-overlay" style={cardTextStyle}>
                    <div className="card-title">{this.props.hero.name}</div>
                </div>
            </div>
        );
    }
}

export default HeroCard;