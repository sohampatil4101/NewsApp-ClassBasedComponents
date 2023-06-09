import React, { Component } from 'react';
import Newsitems from './Newsitems';
import Spinner from './Spinner';
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

    
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f540fbdbad6f4dda90b31f1c3b6c39f3&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
    this.setState({page: this.state.page + 1}) 
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
      </div>


    )
  }
}














