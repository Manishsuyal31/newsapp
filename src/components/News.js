import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 12,
        category: 'general'
    }
    static propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - newsapp`
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57f2716ebf7b435fbadac102656686ba&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    async componentDidMount() {

        this.updateNews()
    }

    handleNextClick = async () => {

        this.setState({
            page: this.state.page + 1
        })
        this.updateNews();
    }

    handlePrevClick = async () => {

        this.setState({
            page: this.state.page - 1
        })
        this.updateNews();
    }
    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1
        })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=57f2716ebf7b435fbadac102656686ba&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()

        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false
        })
    };

    render() {
        return (
            <>
                <h1 className='text-center' style={{ margin: '30px' }}>Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='container'>
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div key={element.url} className="col-md-4">
                                    <NewsItem title={element.title ? element.title.slice(0, 80) : ""} description={element.description ? element.description.slice(0, 130) : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit natus tempore incidunt"} imageUrl={element.urlToImage ? element.urlToImage : "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2022/03/31/251357-hubble-space-telescope.jpg"} newsUrl={element.url} author={!element.author ? "Unknown" : element.author} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
