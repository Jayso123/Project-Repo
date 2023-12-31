import React, { Component } from 'react'

// const handleClick = () =>{
  
// }

<link rel="stylesheet" href="index.css" />
export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div className='my-3'>
        <div className="card"  style={{width: "18rem "}}>
        <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/06/19/600x338/Mahatma_Gandhi_1687104548464_1687167984857.jpeg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='-blank' className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem