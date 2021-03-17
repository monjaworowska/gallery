const PhotoTemplate = (props) => {
  const { photo, user, album } = props;
  return (
    <>
      <div className="card">
        <div className="card-image">
          <figure className="image image is-square">
            <img src={photo.thumbnailUrl} alt=" " />
          </figure>
        </div>
        <div className="card-footer">
          <p className="card-footer-item">
            {photo.title.slice(0, 1).toUpperCase()}
            {photo.title.slice(1, photo.title.length)}
          </p>
        </div>
      </div>
    </>
  );
};

export default PhotoTemplate;
