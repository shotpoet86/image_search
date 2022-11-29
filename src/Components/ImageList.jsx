import './Styles/ImageList.css';
import ImageShow from './ImageShow';

function ImageList({appImageResults}) {

	const renderedImages = appImageResults.map(image => {
		return (<ImageShow key={image.id} image={image}/>);
	});
	return (
		<div className="image-list">{renderedImages}</div>
	);
}

export default ImageList;