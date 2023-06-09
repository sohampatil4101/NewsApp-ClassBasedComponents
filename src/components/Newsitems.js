import React, { Component } from 'react'

export default class Newsitems extends Component {
  render() {
    let {title, description, imageurl, newsurl, author, date} = this.props
    return (
      <div>
        <div className="card" style={{'width': "18rem"}}>
  <img src={imageurl?imageurl:"https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_3310,w_5884,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1678909789/2019-04-04T180309Z_573508632_RC1102E86320_RTRMADP_3_TESLA-MUSK-SEC_j3xsah"} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title"> {title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className='text-muted'>By {author?author:"unknown" } on {date} </small> </p>
    <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Read more</a>
  </div>
</div>
      </div>
    )
  }
}
