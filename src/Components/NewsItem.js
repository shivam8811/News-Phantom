import React from 'react'
import news from './news.jpg';

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl ? imageUrl : news} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <span className="badge rounded-pill text-bg-secondary">{source}</span>
            <p className="card-text">
              <small className="text-muted">Author: {author ? author : "Unknown"} <br />{new Date(date).toUTCString()}</small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more...</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
