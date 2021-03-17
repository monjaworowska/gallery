const PhotoTemplate = (props) => {
  const { photo, user = null, album = null } = props;
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
            {photo.title ? photo.title.slice(0, 1).toUpperCase() : null}
            {photo.title ? photo.title.slice(1, photo.title.length) : null}
          </p>
        </div>
      </div>
    </>
  );
};

export default PhotoTemplate;
