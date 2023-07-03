 import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
     
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: true
        }
    }

    async componentDidMount(){
      console.log('cdm');
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=d672e6ec6f314124a5e4acd4b6c9d24b";
      let data = await fetch(url);
      console.log(data);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({ articles: parsedData.articles });
    }

    handlePreviousClick = ()=>{
      console.log("previous");
    }

    handleNextClick = ()=>{
      console.log("Next");
    }
    

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">   
        {this.state.articles.map((element)=>{        
          return <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title?element.title.slice(0, 45):""}
              description={element.description?element.description.slice(0, 88):""}
              imageUrl={element.urlToImage}
              newsUrl={element.url}/>
          </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button"  class="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Pervious</button>
        <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
