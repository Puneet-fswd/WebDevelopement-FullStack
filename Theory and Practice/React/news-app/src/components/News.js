import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            articles: [],
            loading: false
        }
    }

    async componentDidMount()
    {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f156249793a94b5a8280cab909cc5c40&page=1";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState(
            {
                articles: parsedData.articles()
            },
            {
                totalResults: parsedData.totalResults
            }
        )
    }

    handlePrevClick = async () =>
    {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f156249793a94b5a8280cab909cc5c40&page=${this.state.page-1}&pageSize=15`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState(
            {
                articles: parsedData.articles(),
                page: this.state.page+1
            }
        )
    }

    handleNextClick = async () =>
    {
        if(this.state.page+1 > Math.ceil(this.state.totalResults/15))
        {

        }
        else
        {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f156249793a94b5a8280cab909cc5c40&page=${this.state.page+1}&pageSize=15`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState(
                {
                    articles: parsedData.articles(),
                    page: this.state.page+1
                }
            )
        }
    }
    render() 
    {
        return (
            <div className="container my-3">
                <h1 className="text-center">Top Headlines by NewsMonkey</h1>
                <div className="row">
                    {
                        this.state.map = ((element) =>
                        {
                            return <div className="col-md-4" key= {element.url} >
                            <NewsItem title={element.title?element.title.slice(0, 43):''} description={element.description?element.description.slice(0, 86):''} imageURL={element.imageURL} newsURL={element.url}></NewsItem>
                            </div>
                        })
                    }
                </div>
                <div className="conatiner d-flex justify-content-between">
                    <button disabled={this.stage.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News