import React from 'react';
import Cards from './../../assets/cards.jpg';
import Other from './../../assets/other.jpg';
import './styles.scss';

const Directory = props => {
    return (
      <div className="directory">
        <div className="wrap">
          <div
            className="item"
            style={{
              backgroundImage: `url(${Cards})`
            }}
          >
            <a >
              ShopCards
            </a>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url(${Other})`
            }}
          >
            <a>
              Shop Other
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Directory;