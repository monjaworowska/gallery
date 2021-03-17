import React from "react";
import cx from "classnames";
import PhotoTemplate from "./PhotoTemplate";

class List extends React.Component {
  state = {
    data: [],
    site: 0,
    sites: 0,
    url: this.props.url,
    type: this.props.type,
  };
  componentDidMount() {
    fetch(this.props.url).then((response) =>
      response
        .json()
        .then((data) => this.setState({ data: data, sites: data.length / 10 }))
    );
  }
  render() {
    const { site, sites } = this.state;
    const data = this.state.data.slice(site * 10, site * 10 + 10);
    return (
      <>
        <div className="pagination is-centered is-small">
          <ul className="pagination-list"></ul>
          {Array(sites)
            .fill(1)
            .map((el, i) => (
              <li
                className={cx(
                  "pagination-link",
                  site === i ? "is-current" : null
                )}
                key={i}
                onClick={() => this.setState({ site: i })}
              >
                {i + 1}
              </li>
            ))}
        </div>
        <div className="columns is-multiline mt-1">
          {data.map((photo) => (
            <div className="column is-one-third">
              <PhotoTemplate photo={photo} />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default List;
