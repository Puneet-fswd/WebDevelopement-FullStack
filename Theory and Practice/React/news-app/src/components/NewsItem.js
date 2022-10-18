import React, { Component } from 'react'

export class NewsItem extends Component 
{
    render() 
    {
        let{title, description, imageURL, newsURL} = this.props;
        return (
        <div>
            <div className="container my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageURL?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVmrsTxtfbsldae2K_iYSIq2a5im1WL9Ang&usqp=CAU":imageURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsURL} target="_blank" className="btn btn-lg btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        </div>
        );
  }
}

export default NewsItem
