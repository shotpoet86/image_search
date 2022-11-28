import './Styles/ImageShow.css';
import React from 'react';

function ImageShow({image}) {
	return (
		<div className="imageS"><h3>{image.id}</h3></div>
	);
}

export default ImageShow;