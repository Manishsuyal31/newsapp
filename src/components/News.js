import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=57f2716ebf7b435fbadac102656686ba"
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles })
    }

    render() {
        return (
            <div className='container my-3'>
                <h1>News monkey top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div key={element.url} className="col-md-4">
                            <NewsItem title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 100) : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit natus tempore incidunt"} imageUrl={element.urlToImage ? element.urlToImage : "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2022/03/31/251357-hubble-space-telescope.jpg"} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
