import React from "react";
import "./SongItem.css";

export default function SongItem(props) {
  const items = props.item;
  const result = items.map((item, index) => {
    return (
      <div className="mv-hot" key={index}>
        <a href="#" />
        <div className="overlay">
          <a href="#">
            <div className="play-button">
              <i className="far fa-play-circle fa-4x" />
            </div>
          </a>
          <div className="info">
            <a href="#" />
            <div className="title">
              <a href="#" />
              <a href="#">{item.title}</a>
            </div>
            <div className="singer">
              <a href="#">{item.singer}</a>
            </div>
          </div>
          <div className="count">
            <div className="view-count">
              <div className="overlay-count">
                <i className="far fa-eye fa-sm" /> {item.view}
              </div>
            </div>
            <div className="time-count">
              <div className="overlay-count">
                <i className="far fa-clock fa-sm" /> {item.time}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return result;
}
