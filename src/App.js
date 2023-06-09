import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './components/News';
// import Soham from './components/Soham';

export default class App extends Component {
  apikey = process.env.REACT_APP_API_KEY
  

  render() {
    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/> }>
          {/* <Route exact index element={<Textform alert={alert} title="Soham is great" mode={mode} style={mystyle} onclickfun2={onclickfun2} />} /> */}
          <Route exact path="" element={<News apikey ={this.apikey} key='' pagesize = {6} country = {'in'} category = {"general"}/>} />
          <Route exact path="business" element={<News apikey ={this.apikey} key='business' pagesize = {6} country = {'in'} category = {"business"}/>} />
          <Route exact path="entertainment" element={<News apikey ={this.apikey} key='entertainment' pagesize = {6} country = {'in'} category = {"entertainment"}/>} />
          <Route exact path="health" element={<News apikey ={this.apikey} key='health' pagesize = {6} country = {'in'} category = {"health"}/>} />
          <Route exact path="science" element={<News apikey ={this.apikey} key='science' pagesize = {6} country = {'in'} category = {"science"}/>} />
          <Route exact path="sports" element={<News apikey ={this.apikey} key='sports' pagesize = {6} country = {'in'} category = {"sports"}/>} />
          <Route exact path="technology" element={<News apikey ={this.apikey} key='technology'  pagesize = {6} country = {'in'} category = {"technology"}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    )
  }
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// export default App;




// f540fbdbad6f4dda90b31f1c3b6c39f3
// 00955dc54af34773bfb30008b3d468de
