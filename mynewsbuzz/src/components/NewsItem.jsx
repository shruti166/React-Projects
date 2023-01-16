import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props
    return (
    
    <div className="card" style={{width: "18rem"}}>
        <img src="..." class="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 class="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" class="btn btn-primary">View more</a>
        </div>
    </div>
    
    )
  }
}

export default NewsItem
