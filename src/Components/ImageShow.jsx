import './Styles/ImageShow.css';
import React from 'react';

function ImageShow({image}) {
	return (
		<div className="imageS"><h1>{image.id}</h1></div>
	);
}

export default ImageShow;