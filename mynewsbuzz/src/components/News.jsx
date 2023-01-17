import React, { Component } from 'react'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


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
            totalResults: "",
            
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
    fetchMoreData = async () => {  
      this.setState({page: this.state.page + 1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          totalResults: parsedData.totalResults
      })
    };
    
  render() {
    return (
      <>
                <h1 className="text-center" style={{ margin: '35px 0px' }}> NewsBuzz - Top {this.props.category} Headlines </h1>
                
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    
                > 
                    <div className="container">
                         
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} urlToImage={element.urlToImage} newsUrl={element.url}   />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>

            </>
           )
          }
      } 

export default News


