import React from "react";
import { NavLink } from "react-router-dom";
import PhotoTemplate from "./PhotoTemplate";

const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos/";
const USER_URL = "https://jsonplaceholder.typicode.com/users/";
const ALBUM_URL = "http://jsonplaceholder.typicode.com/albums/";

class Photo extends React.Component {
  state = {
    id: this.props.id,
    details: this.props.details,
    photo: [],
    user: [],
    album: [],
  };
  componentDidMount() {
    fetch(PHOTOS_URL + this.state.id).then((response) =>
      response.json().then((data) => {
        this.setState({ photo: data });
        fetch(ALBUM_URL + this.state.photo.albumId).then((response) =>
          response.json().then((data) => {
            this.setState({ album: data });
            fetch(USER_URL + this.state.album.userId).then((response) =>
              response.json().then((data) => this.setState({ user: data }))
            );
          })
        );
      })
    );
  }
  render() {
    const { photo, user, album, details } = this.state;
    return (
      <>
        {details ? (
          <div className="container mt-3">
            <PhotoTemplate photo={photo} user={user} album={album} />
          </div>
        ) : (
          <NavLink to={"/photo/" + photo.id} className="column is-one-third">
            <PhotoTemplate photo={photo} />
          </NavLink>
        )}
      </>
    );
  }
}

export default Photo;
