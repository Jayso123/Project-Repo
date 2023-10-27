import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d672e6ec6f314124a5e4acd4b6c9d24b&pagae=1&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePreviousClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d672e6ec6f314124a5e4acd4b6c9d24b&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    this.setState({
      page: this.state.page - 1,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    if (
      this.state.page + 1 >
      Math.ceil(this.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d672e6ec6f314124a5e4acd4b6c9d24b&page=${
        this.state.page + 1
      }&pagesize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.articles });
      this.setState({
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Pervious
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
