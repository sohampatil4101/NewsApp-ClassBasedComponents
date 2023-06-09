import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './components/News';

export default class App extends Component {
  apikey = process.env.REACT_APP_API_KEY
  

  render() {
    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/> }>
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