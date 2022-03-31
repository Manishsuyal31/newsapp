import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Jonah E. Bromwich",
            "title": "Ex-Party Producer Charged in $2.7 Million Bitcoin-Laundering Scheme",
            "description": "Thomas Spieker’s clients included dark-web drug dealers and a cellphone-hacking identity thief, prosecutors said.",
            "url": "https://www.nytimes.com/2022/03/24/nyregion/thomas-spieker-bitcoin-scheme.html",
            "urlToImage": "https://static01.nyt.com/images/2022/03/24/nyregion/24ny-bitcoin1/24ny-bitcoin1-facebookJumbo.jpg",
            "publishedAt": "2022-03-24T22:50:30Z",
            "content": "Mr. Spiekers most prominent customer, whom he described as his whale client, was the Eastern European organized crime member, prosecutors said. Mr. Spieker laundered $620,000 for the client, they sai… [+2755 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Tara Siegel Bernard",
            "title": "Everyone Has Crypto FOMO, but Does It Belong in Your Portfolio?",
            "description": "A growing array of investment options make it easier to put digital tokens alongside traditional investments. Here’s what to know.",
            "url": "https://www.nytimes.com/2022/03/24/your-money/bitcoin-investing-cryptocurrency.html",
            "urlToImage": "https://static01.nyt.com/images/2022/03/24/business/00cryto-invest/00cryto-invest-facebookJumbo.jpg",
            "publishedAt": "2022-03-24T07:00:10Z",
            "content": "Other fund vehicles hold crypto directly, but theyre grappling with different structural problems and carry higher fees, which are a drag on returns.\r\nGrayscale Bitcoin Trust, the largest Bitcoin veh… [+2273 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Elizabeth Lopatto",
            "title": "If you’re a Russian YouTuber, how do you get paid now?",
            "description": "Russian creators are shut off from the global financial system. Some of them are turning to cryptocurrency.",
            "url": "https://www.theverge.com/2022/3/17/22982122/russia-youtube-crypto-creators-pay-ruble",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/MG_NhB7wSIBIl3S_LG-y-r7iPmg=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/9442221/cryptocurrency_0004__00000_.jpg",
            "publishedAt": "2022-03-17T13:33:43Z",
            "content": "When Russia invaded Ukraine, Niki Proshin was already a year into making a living as a vlogger — he had a YouTube channel, a TikTok channel, and an Instagram. He also ran an online Russian club for a… [+5883 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "El Salvador turns to Binance for help on bitcoin adoption - Reuters.com",
            "description": "El Salvador is seeking support from cryptocurrency exchange Binance for its implementation of bitcoin as legal tender and the issuance of bitcoin bonds, the Central American country's ambassador to the United States said on Wednesday.",
            "url": "https://www.reuters.com/world/americas/el-salvador-turns-binance-help-bitcoin-adoption-2022-03-23/",
            "urlToImage": "https://www.reuters.com/resizer/hQUFyg89hsElzlhGfkPIvaoHxbY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IB36Y4ZKDRLJNA3LRDQAHS7UGM.jpg",
            "publishedAt": "2022-03-23T20:40:00Z",
            "content": "SAN SALVADOR, March 23 (Reuters) - El Salvador is seeking support from cryptocurrency exchange Binance for its implementation of bitcoin as legal tender and the issuance of bitcoin bonds, the Central… [+1109 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Bitcoin rises 4.4 percent to $46499 - Reuters",
            "description": "Bitcoin surged 4.41% to $46,499.29 at 22:07 GMT on Sunday, adding $1,963.64 to its previous close.",
            "url": "https://www.reuters.com/technology/bitcoin-rises-44-percent-46499-2022-03-27/",
            "urlToImage": "https://www.reuters.com/resizer/nhskA06ML_hR0afSXa80ssu5NBY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/P7RD6UHCKZPGZAOSQQZ2ZICBJQ.jpg",
            "publishedAt": "2022-03-27T22:34:00Z",
            "content": "March 27 (Reuters) - Bitcoin surged 4.41% to $46,499.29 at 22:07 GMT on Sunday, adding $1,963.64 to its previous close.\r\nBitcoin, the world's biggest and best-known cryptocurrency, is up 41.1% from t… [+353 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Cryptoverse: Bitcoin gains conflict currency credentials - Reuters",
            "description": "Bitcoin has leapt since Russia's invasion of Ukraine, bolstered by people in those countries looking to store and move money in anonymous and decentralised crypto.",
            "url": "https://www.reuters.com/markets/europe/cryptoverse-bitcoin-gains-conflict-currency-credentials-2022-03-01/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=75",
            "publishedAt": "2022-03-01T06:10:00Z",
            "content": "March 1 (Reuters) - Bitcoin has leapt since Russia's invasion of Ukraine, bolstered by people in those countries looking to store and move money in anonymous and decentralised crypto.\r\nBitcoin tradin… [+3955 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Cryptoverse: Remember when bitcoin was 'anonymous'? - Reuters",
            "description": "Bitcoin just isn't anonymous enough for a growing cohort of crypto users who are seeking greater seclusion.",
            "url": "https://www.reuters.com/technology/cryptoverse-remember-when-bitcoin-was-anonymous-2022-03-22/",
            "urlToImage": "https://www.reuters.com/resizer/c8lOZeoWLIRW0T_RNTBsFOF2F6w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/T3V4ZRYO6BPIJKJVNY7C6YYUJQ.jpg",
            "publishedAt": "2022-03-22T06:15:00Z",
            "content": "March 22 (Reuters) - Bitcoin just isn't anonymous enough for a growing cohort of crypto users who are seeking greater seclusion.\r\nA volatile class of crypto known as privacy coins, created with the p… [+4776 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Gian M. Volpicelli",
            "title": "War Is Calling Crypto’s ‘Neutrality’ Into Question",
            "description": "War in Ukraine and Western sanctions against Russia have made cryptocurrency a hot potato for international politics.",
            "url": "https://www.wired.com/story/crypto-russia-ukraine-sanctions/",
            "urlToImage": "https://media.wired.com/photos/6226a83bd53a49d05c483fa6/191:100/w_1280,c_limit/business-crypto-war-1130490519.jpg",
            "publishedAt": "2022-03-08T12:00:00Z",
            "content": "Whose side is cryptocurrency on? If you had asked Satoshi Nakamoto, the pseudonymous person (or persons) who created the Bitcoin platform in 2008, he/they likely would have rejected the question. The… [+3643 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Julian Dossett",
            "title": "Cryptocurrency Donations Pour Into Ukraine. This Week in Bitcoin and Crypto News - CNET",
            "description": "Nonfungible Tidbits: All the bitcoin, cryptocurrency and NFT news for the week ending March 6.",
            "url": "https://www.cnet.com/personal-finance/crypto/cryptocurrency-donations-pour-into-ukraine-this-week-in-bitcoin-and-crypto-news/",
            "urlToImage": "https://www.cnet.com/a/img/ZqMWuhVOxJ8FqLi8Vs9ihQDJzPc=/1200x630/2022/03/04/c8f8f15b-e257-4dfd-9f64-a53be254530b/gettyimages-1320502852.jpg",
            "publishedAt": "2022-03-05T14:45:07Z",
            "content": "Getty\r\nWelcome to Nonfungible Tidbits. Our focus this week: Russia's war in Ukraine. \r\nIn addition to uprooting the lives of Ukrainians and throwing the international order into chaos, the Russian in… [+3275 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Julian Dossett",
            "title": "Is the US Developing a Digital Dollar? This Week's Top Bitcoin & Crypto News - CNET",
            "description": "Nonfungible Tidbits: All the bitcoin, cryptocurrency and NFT news for the week ending March 18.",
            "url": "https://www.cnet.com/personal-finance/crypto/is-the-us-developing-a-digital-dollar-this-weeks-top-bitcoin-crypto-news/",
            "urlToImage": "https://www.cnet.com/a/img/resize/e4de87a14a5ecf108a98c5c482fbcfc2c36906c6/2022/02/04/c5b1979c-a2d6-412c-9866-e1545badf003/gettyimages-1305088166.jpg?auto=webp&fit=crop&height=630&width=1200",
            "publishedAt": "2022-03-19T13:15:02Z",
            "content": "Here's what happened this week in the crypto world.\r\nGetty\r\nWelcome to Nonfungible Tidbits, a weekly roundup of news in crypto, NFTs and their related realms.\r\nOur lead story this week is the possibi… [+2860 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Daniel Van Boom",
            "title": "Bitcoin and Ether Are Helping Fund Ukraine's Resistance - CNET",
            "description": "Nearly $20 million has been raised in cryptocurrencies like bitcoin and ether since Russian forces invaded Ukraine last week.",
            "url": "https://www.cnet.com/personal-finance/crypto/bitcoin-and-ether-are-helping-fund-ukraines-resistance/",
            "urlToImage": "https://www.cnet.com/a/img/BH4MgY2j-pnCGoz05WyRZ0BIJkw=/1200x630/2022/02/28/042f54db-c4aa-4894-a501-e01666835ed9/gettyimages-1234061349.jpg",
            "publishedAt": "2022-02-28T12:45:00Z",
            "content": "Nurphoto/Getty\r\nAs Russia launched an invasion into his home country last Thursday, Ukranian photographer Vitaliy Raskalov found himself a world away in Mexico City. When I spoke with him over Telegr… [+7815 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Cryptocurrencies in a time of war - Reuters.com",
            "description": "Cryptocurrencies have been close to the headlines since Russia invaded Ukraine, with the ever-volatile bitcoin in demand in Russia and beyond.",
            "url": "https://www.reuters.com/technology/cryptocurrencies-time-war-2022-03-04/",
            "urlToImage": "https://www.reuters.com/resizer/o-neidYH62soGCDm3MOwoSkkRqc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AOEOU7DFBRN5ZA32VLFEUPFGKY.jpg",
            "publishedAt": "2022-03-04T15:01:00Z",
            "content": "LONDON, March 4 (Reuters) - Cryptocurrencies have been close to the headlines since Russia invaded Ukraine, with the ever-volatile bitcoin in demand in Russia and beyond.\r\nHere are some charts that l… [+3634 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "El Salvador postpones bitcoin bond issue, expects better conditions - Reuters.com",
            "description": "El Salvador postponed an unprecedented issue of a bitcoin-backed bond planned for last week, as the government decided to wait for favorable conditions in the financial market, Finance Minister Alejandro Zelaya said on Tuesday.",
            "url": "https://www.reuters.com/technology/el-salvador-postpones-bitcoin-bond-issue-expects-better-conditions-2022-03-22/",
            "urlToImage": "https://www.reuters.com/resizer/NOfvIS0_hFVHsF3O_jlbdys4UNQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OABKIIR7I5P7XMGT4Z3TGNQILM.jpg",
            "publishedAt": "2022-03-22T22:18:00Z",
            "content": "SAN SALVADOR, March 22 (Reuters) - El Salvador postponed an unprecedented issue of a bitcoin-backed bond planned for last week, as the government decided to wait for favorable conditions in the finan… [+1425 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Cryptoverse: Buoyant bitcoin helps market cruise past $2 trillion - Reuters",
            "description": "As a bleak first quarter draws to a close, crypto seems to have the wind in its sails. It has pushed through the $2 trillion barrier and is proving surprisingly resilient amid global chaos.",
            "url": "https://www.reuters.com/technology/cryptoverse-buoyant-bitcoin-helps-market-cruise-past-2-trillion-2022-03-29/",
            "urlToImage": "https://www.reuters.com/resizer/hQUFyg89hsElzlhGfkPIvaoHxbY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IB36Y4ZKDRLJNA3LRDQAHS7UGM.jpg",
            "publishedAt": "2022-03-29T05:12:00Z",
            "content": "March 29 (Reuters) - As a bleak first quarter draws to a close, crypto seems to have the wind in its sails. It has pushed through the $2 trillion barrier and is proving surprisingly resilient amid gl… [+4359 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Cryptoverse: Bitcoin's scared of commitment, Mr Biden - Reuters.com",
            "description": "Bitcoin loves flirting with the mainstream. But now, as the U.S. president says he wants to get serious, it may be getting cold crypto feet.",
            "url": "https://www.reuters.com/business/finance/cryptoverse-bitcoins-scared-commitment-mr-biden-2022-03-15/",
            "urlToImage": "https://www.reuters.com/resizer/i10edZVPsxREr8RdI0IEqVA7_Wk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Q6ZG6GESYJO5BMD7TONXPMFZEE.jpg",
            "publishedAt": "2022-03-15T06:15:00Z",
            "content": "March 15 (Reuters) - Bitcoin loves flirting with the mainstream. But now, as the U.S. president says he wants to get serious, it may be getting cold crypto feet.\r\nWhen Joe Biden ordered officials to … [+4501 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "U.S. company devises method to use coal waste to power crypto - Reuters",
            "description": "The vast amounts of electricity needed to mine bitcoin has ignited a debate about whether the energy behind the operation is worth the potential environmental costs.",
            "url": "https://www.reuters.com/business/environment/us-company-devises-method-use-coal-waste-power-crypto-2022-03-21/",
            "urlToImage": "https://www.reuters.com/resizer/syff3xa3wMiQLouWsDKTtcRLZU8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5GEZARI3NRNM3LPHTNDVSTELGI.jpg",
            "publishedAt": "2022-03-21T19:46:00Z",
            "content": "KENNERDELL, Pa., March 21 (Reuters) - The vast amounts of electricity needed to mine bitcoin has ignited a debate about whether the energy behind the operation is worth the potential environmental co… [+1781 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Bitcoin climbs to highest in almost three weeks - Reuters.com",
            "description": "Bitcoin climbed on Tuesday to its highest in almost three weeks, adding to its gains since Russia's invasion of Ukraine, pulling up smaller digital coins such as ether.",
            "url": "https://www.reuters.com/technology/bitcoin-climbs-highest-almost-three-weeks-2022-03-22/",
            "urlToImage": "https://www.reuters.com/resizer/c8lOZeoWLIRW0T_RNTBsFOF2F6w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/T3V4ZRYO6BPIJKJVNY7C6YYUJQ.jpg",
            "publishedAt": "2022-03-22T09:53:00Z",
            "content": "LONDON, March 22 (Reuters) - Bitcoin climbed on Tuesday to its highest in almost three weeks, adding to its gains since Russia's invasion of Ukraine, pulling up smaller digital coins such as ether.\r\n… [+865 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Bitcoin holds ground after touching highest this year - Reuters",
            "description": "Bitcoin on Tuesday held ground just below its highest this year, touched a day earlier, with gains for the original cryptocurrency topping 27% since Russia's invasion of Ukraine.",
            "url": "https://www.reuters.com/technology/bitcoin-holds-ground-after-touching-highest-this-year-2022-03-29/",
            "urlToImage": "https://www.reuters.com/resizer/aZbDTblfA7PvYaZb68U0gy-DZRk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CVNYPY5GUFPSXFBBXXBK6YLC4U.jpg",
            "publishedAt": "2022-03-29T09:06:00Z",
            "content": "LONDON, March 29 (Reuters) - Bitcoin on Tuesday held ground just below its highest this year, touched a day earlier, with gains for the original cryptocurrency topping 27% since Russia's invasion of … [+1516 chars]"
        },
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: "fasle"
        }
    }z
    render() {
        return (
            <div className='container my-3'>
                <h2>News monkey top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div key={element.url} className="col-md-4">
                            <NewsItem title={element.title.slice(0, 42)} description={element.description.slice(0, 87)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
