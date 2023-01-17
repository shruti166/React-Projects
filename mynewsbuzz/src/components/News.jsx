import React, { Component } from 'react'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 8, 
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number, 
    category: PropTypes.string,
  }
   
    constructor() {
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1,
            totalResults: ""
        }
    }
    
    

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
       
        this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults})
       
    }
    handlePrev = async() => {

        let url = `https://newsapi.org/v2/top-headlines??country=${this.props.country}&apiKey=35cb7732fed34e719c13106477f35e8e&page=${this.state.page-1}&pageize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
       
        this.setState({articles : parsedData.articles, page : this.state.page-1})
        
    }

    handleNext = async() => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=35cb7732fed34e719c13106477f35e8e&page=${this.state.page+1}&pageize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
           
            this.setState({articles : parsedData.articles, page : this.state.page+1})
        }
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
            <div className='container d-flex justify-content-between'>
                <button disabled = {this.state.page <= 1} type="button" className="btn btn-secondary btn-lg" onClick={this.handlePrev}>Prev</button>
                <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-secondary btn-lg" onClick={this.handleNext}>Next</button>
            </div>
            
           
            
           
        </div>
       
        
      </div>
    )
  }
}

export default News


