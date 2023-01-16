import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   
    constructor() {
        super();
        this.state = {
            articles : [],
            loading : false
        }
    }
    

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=35cb7732fed34e719c13106477f35e8e";
        let data = await fetch(url);
        let parsedData = await data.json();
       
        this.setState({articles : parsedData.articles})
       
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsBuzz Top Headlines</h2>
       
        <div className='row'>
            {this.state.articles.map((element) => {
              return <div className='col-md-4' key = {element.url}>
              <NewsItem title = {element.title ? element.title : ""} description = {element.description ? element.description : ""} urlToImage = {!element.urlToImage ?  "https://thumbs.dreamstime.com/b/news-header-background-title-abstract-colorful-global-map-text-hightech-design-blue-colorful-template-90494676.jpg" : element.urlToImage}/>
          </div>  
            })}
            
           
            
           
        </div>
       
        
      </div>
    )
  }
}

export default News
