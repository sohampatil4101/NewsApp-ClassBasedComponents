import React, { Component } from 'react';
import Newsitems from './Newsitems';
import Spinner from './Spinner';
// import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  // static defaultProps = {
  //   country:'in',
  //   pagesize: 8,
  //   category: "general"

  // };
  
  // static PropTypes = {
  //   country: PropTypes.string,
  //   pagesize: PropTypes.number,
  //   category: PropTypes.string
  // }


  constructor(props){
    super(props);
    document.title = `Newsapp-${this.props.category}`
    this.state = {
      articles: [],
      // articles: this.articles,
      loading: true,
      page:1,
      totalResults:0
    } }
  

    //  componentDidMount run after running of render()
    async componentDidMount(){
      this.setState({loading:true})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
      let data = await fetch(url);
      let parseData = await data.json()
      console.log(this.state.articles.length)
      this.setState({articles:parseData.articles,
        loading:false,
        totalResults: parseData.totalResults
      })
  }

  //   onclickprevious = async ()=>{
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=00955dc54af34773bfb30008b3d468de&page-${this.state.page - 1}&pageSize=${this.props.pagesize}`;
  //   this.setState({loading:true})
  //   let data = await fetch(url);
  //   let parseData = await data.json()
  //   this.setState({page: this.state.page - 1,
  //   articles:parseData.articles,
  //     loading:false
  //   })
  // }


    // onclicknext = async ()=>{
    //   if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)) {
      
    //   }

    //   else{

    //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=00955dc54af34773bfb30008b3d468de&page-${this.state.page + 1}&pageSize=${this.props.pagesize}`;
    //     this.setState({loading:true})
    //     let data = await fetch(url);
    //     let parseData = await data.json()
    //     this.setState({page: this.state.page + 1,
    //       articles:parseData.articles,
    //       loading:false
    //     })
    //   }
    //   }


    
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f540fbdbad6f4dda90b31f1c3b6c39f3&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
    this.setState({page: this.state.page + 1}) 
    // this.setState({loading: true})
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(this.state.articles.length)
    this.setState({articles:this.state.articles.concat(parseData.articles),
      loading:false,
      totalResults: parseData.totalResults
    })
  };
      
      render() {
        return (
          <div className='container my-3' >
        <h2 className='text-center' >Top-Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row md-4 ">



          {/* {!this.state.Spinner && this.state.articles.map((element)=>{ */}
          {/* // whenever u use .map every element need to have a unique key in this case it is key = {element.url} */}
          {this.state.articles.map((element)=>{
            return  <div className="col md-4 mx-3 my-3 mb-4 " key={element.url}  >
        <Newsitems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,45):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
            </div>
            })
          }   
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}>
          </InfiniteScroll>





        </div>
            {/* <div className="d-flex justify-content-between" >  
              <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.onclickprevious()}> &larr; Previous</button>
              <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.onclicknext()}> Next &rarr; </button>
            </div> */}
      </div>


    )
  }
}



















// let articles = [

//     {
//     "source": {
//     "id": null,
//     "name": "Biztoc.com"
//     },
//     "author": "nytimes.com",
//     "title": "Jury Rules for Elon Musk and Tesla in Investor Lawsuit Over Tweets",
//     "description": "Elon Musk, center, outside federal court in San Francisco on Friday. Jurors deliberated for about an hour before finding him not liable for losses by Tesla investors who sued him. The case centered on whether investors lost money because they believed Mr. Mus…",
//     "url": "https://biztoc.com/x/a0bd5cca1ff4193b",
//     "urlToImage": "https://c.biztoc.com/p/a0bd5cca1ff4193b/og.webp",
//     "publishedAt": "2023-02-04T06:00:10Z",
//     "content": "Elon Musk, center, outside federal court in San Francisco on Friday. Jurors deliberated for about an hour before finding him not liable for losses by Tesla investors who sued him.\r\nThe case centered … [+322 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "Slashdot.org"
//     },
//     "author": "feedfeeder",
//     "title": "Tesla's Elon Musk found not liable in trial over 2018 'funding secured' tweets - Reuters",
//     "description": "Tesla's Elon Musk found not liable in trial over 2018 'funding secured' tweetsReuters Elon Musk cleared of wrongdoing in trial over 2018 Tesla tweetsKTVU FOX 2 San Francisco Elon Musk not liable in lawsuit over tweets pledging to take Tesla private, jury rule…",
//     "url": "https://slashdot.org/firehose.pl?op=view&amp;id=170264181",
//     "urlToImage": null,
//     "publishedAt": "2023-02-04T05:53:00Z",
//     "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
//     },
//     {
//     "source": {
//     "id": "rt",
//     "name": "RT"
//     },
//     "author": "RT",
//     "title": "Bill Gates lectures Musk on spending money",
//     "description": "Microsoft co-founder Bill Gates believes the SpaceX CEO Elon Musk’s fortune would be better spent on vaccines than Mars missions Read Full Article at RT.com",
//     "url": "https://www.rt.com/news/570939-bill-gates-musk-mars-vaccines/",
//     "urlToImage": "https://mf.b37mrtl.ru/files/2023.02/article/63dde93720302712d92d7f32.jpg",
//     "publishedAt": "2023-02-04T05:45:30Z",
//     "content": "Microsoft co-founder Bill Gates believes the SpaceX CEO’s self-declared mission to save humanity from extinction by colonizing Mars is not a good use of Elon Musk's fortune, which would be better spe… [+1800 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "Slashdot.org"
//     },
//     "author": "feedfeeder",
//     "title": "‘Teflon’ Elon Musk wins again as jury rejects Tesla tweet fraud claims - Indiatimes.com",
//     "description": "‘Teflon’ Elon Musk wins again as jury rejects Tesla tweet fraud claimsIndiatimes.com Elon Musk not liable in lawsuit over tweets pledging to take Tesla private, jury rulesFox Business Elon Musk cleared of wrongdoing in trial over 2018 Tesla tweetsKTVU FOX 2 S…",
//     "url": "https://slashdot.org/firehose.pl?op=view&amp;id=170264101",
//     "urlToImage": null,
//     "publishedAt": "2023-02-04T05:32:16Z",
//     "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "VOA News"
//     },
//     "author": "webdesk@voanews.com (Agence France-Presse)",
//     "title": "Musk Found Not Liable in Tesla Tweet Trial",
//     "description": "Jurors on Friday cleared Elon Musk of liability for investors' losses in a fraud trial over his 2018 tweets falsely claiming that he had funding in place to take Tesla private.\n\n\nThe tweets sent the Tesla share price on a rollercoaster ride, and Musk was sued…",
//     "url": "https://www.voanews.com/a/musk-found-not-liable-in-tesla-tweet-trial-/6947710.html",
//     "urlToImage": "https://gdb.voanews.com/09320000-0a00-0242-7896-08db066f9f72_w1200_r1.jpg",
//     "publishedAt": "2023-02-04T05:22:12Z",
//     "content": "SAN FRANCISCO  Jurors on Friday cleared Elon Musk of liability for investors' losses in a fraud trial over his 2018 tweets falsely claiming that he had funding in place to take Tesla private.\r\nThe tw… [+3378 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "Biztoc.com"
//     },
//     "author": "marketwatch.com",
//     "title": "Tesla, GM to see more EVs eligible for tax credits under new U.S. rules",
//     "description": "More electric vehicles made by Tesla Inc., General Motors Co. and other auto makers will be eligible for tax credits under a revamp announced by the Biden administration on Friday. The Treasury Department said that it is adjusting its definition of an SUV, th…",
//     "url": "https://biztoc.com/x/a8b4ce4ec35a1a52",
//     "urlToImage": "https://c.biztoc.com/p/a8b4ce4ec35a1a52/og.webp",
//     "publishedAt": "2023-02-04T05:12:05Z",
//     "content": "More electric vehicles made by Tesla Inc., General Motors Co. and other auto makers will be eligible for tax credits under a revamp announced by the Biden administration on Friday.The Treasury Depart… [+265 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "Gadgets360.com"
//     },
//     "author": "Associated Press",
//     "title": "Elon Musk Found Not Liable in 2018 Tweets Regarding Tesla's Share Price",
//     "description": "Elon Musk was found free of all charges against him after a jury on Friday decided that the billionaire didn’t defraud investors with his 2018 tweets about electric automaker Tesla in a proposed deal. The nine-member jury reached its verdict after less than t…",
//     "url": "https://www.gadgets360.com/transportation/news/elon-musk-not-liable-2018-tweet-tesla-share-price-3752189",
//     "urlToImage": "https://i.gadgets360cdn.com/large/elon_musk_met_gala_reuters_1652103806246.jpg",
//     "publishedAt": "2023-02-04T05:09:12Z",
//     "content": "A jury on Friday decided Elon Musk didn't defraud investors with his 2018 tweets about electric automaker Tesla in a proposed deal that quickly unravelled and raised questions about whether the billi… [+5903 chars]"
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "Fark.com"
//     },
//     "author": null,
//     "title": "Elon Musk cleared in Tesla tweet-fraud trial, can now get back to burning the company to the ground using his self-igniting cars [Interesting]",
//     "description": "Elon Musk cleared in Tesla tweet-fraud trial, can now get back to burning the company to the ground using his self-igniting cars",
//     "url": "https://www.fark.com/comments/12741232/Elon-Musk-cleared-in-Tesla-tweet-fraud-trial-can-now-get-back-to-burning-company-to-ground-using-his-self-igniting-cars",
//     "urlToImage": "https://usrimg-full.fark.net/8/8W/fark_8WcTvF9wmsy55kvSB6kCbngaBbc.png?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1675659600&Signature=ITwaNExILrQ8IUDHWcI5S8KMi4w%3D",
//     "publishedAt": "2023-02-04T04:47:35Z",
//     "content": "Well, OK! We saw nobody get punished for the great recession of 2008, we see Trump and Santos able to say whatever they want whether it degrades the system, kills a million people, etc. And now the C… [+463 chars]"
//     },
//     {
//     "source": {
//     "id": "bloomberg",
//     "name": "Bloomberg"
//     },
//     "author": null,
//     "title": "Tesla Raises Prices of Its Model Y SUV in the US",
//     "description": null,
//     "url": "https://www.bloomberg.com/news/articles/2023-02-04/tesla-raises-prices-of-its-model-y-suv-in-the-us",
//     "urlToImage": null,
//     "publishedAt": "2023-02-04T04:34:05Z",
//     "content": "Warning\r\nThis website has been reported for potential phishing.Phishing is when a site attempts to steal sensitive information by falsely presenting as a safe source."
//     },
//     {
//     "source": {
//     "id": null,
//     "name": "Slashdot.org"
//     },
//     "author": "feedfeeder",
//     "title": "Jury: Musk didn't defraud investors with 2018 Tesla tweets - The Associated Press",
//     "description": "Jury: Musk didn't defraud investors with 2018 Tesla tweetsThe Associated Press Verdict Reached in Trial of Elon Musk's Tesla TweetNBC Bay Area Elon Musk not liable in lawsuit over tweets pledging to take Tesla private, jury rulesFox Business Elon Musk cleared…",
//     "url": "https://slashdot.org/firehose.pl?op=view&amp;id=170263875",
//     "urlToImage": null,
//     "publishedAt": "2023-02-04T04:33:08Z",
//     "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
//     },
//   ]







