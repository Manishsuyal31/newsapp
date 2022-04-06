import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    // document.title = `${capitalizeFirstLetter(props.category)} - newsapp`

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=57f2716ebf7b435fbadac102656686ba&page=${page}&pageSize=${props.pageSize}`
        setLoading({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }
    useEffect(() => {
        updateNews()
    }, [])

    const handleNextClick = async () => {

        setPage({
            page: page + 1
        })
        updateNews();
    }

    const handlePrevClick = async () => {

        setPage({
            page: page - 1
        })
        updateNews();
    }
    const fetchMoreData = async () => {
        setPage({
            page: page + 1
        })
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=57f2716ebf7b435fbadac102656686ba&page=${page}&pageSize=${props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()

        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)

    };

    return (
        <>
            <h1 className='text-center' style={{ margin: '30px' }}>Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='container'>
                    <div className="row">
                        {articles.map((element) => {
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

News.defaultProps = {
    country: 'in',
    pageSize: 12,
    category: 'general'
}
News.propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string
}
