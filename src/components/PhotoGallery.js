import React from 'react';

function PhotoGallery() {
  return (
    <div className="photoGallery">
      <h1>Photo Gallery</h1>
      <div className="container">
        <img className="standard-photo pic1" src={require("../images/boolean-asleep.jpeg")} />
        <img className="standard-photo pic2" src={require("../images/boolean-chewing-ball.jpeg")} />
        <img className="standard-photo pic4" src={require("../images/boolean-under-bed.jpeg")} />
        <img className="standard-photo pic5" src={require("../images/boolean-winking.jpeg")} />
        <img className="standard-photo pic3" src={require("../images/boolean-chewing-rabbit.jpeg")} />
      </div>
    </div>
  );
}

export default PhotoGallery;