/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import './grid.css'
import './article.css'
import Image from "./image"
import Calendar from "./calendar"
import { Link } from "gatsby"
import SecondPage from "../pages/article"
import Parser from 'html-react-parser'


function Grid(props) {

  if (props.articles) {
  var article = props.articles.slice(0, 2).map((item, i) => {
    var img = item.image == "null" ? "butterfly.jpg" : item.image;

    return (
      <div key={i}  className="grid-item intro">
      <Link to="/article"
      state={{ title: item.title,
        article: item.item,
        author: item.author,
        img: item.image}}>
        <Image imgName={img} />
      <div className="box">
        <h3>{item.title}</h3>
        <div className="date-sm-a">{item.date}</div>
        <div>{Parser(item.item.substring(0,100))}...</div>
      </div>
      </Link>
    </div>
    )
  });
  var article2 = props.articles.slice(2, 5).map((item, i) => {
    return (
      <React.Fragment key={i}>
      <div className="grid-item">
      <Link to="/article"
            state={{ title: item.title,
              article: item.item,
              author: item.author,
              img: item.image}}> <Image imgName={item.image} />
              <div className="date-sm">{item.date}</div>
      </Link>
      </div>
      <div className="grid-item">
      <Link to="/article"
      state={{ title: item.title,
        article: item.item,
        author: item.author,
        img: item.image}}>

        <div className="grid-text">
          <h3>{item.title}</h3>
            <div className="date-b">{item.date}</div>
          <div>  {Parser(item.item.substring(0,100))}...</div>
          </div>
      </Link>
      </div>
      </React.Fragment>
    )});
}

  return (
    <>
    <section>
        <div className="gc gc-home-a">
          {article}
          <Calendar calendar={props.calendar}/>
        </div>
    </section>

    <section className="container">
        <div className="gc gc-home-b">
          {article2}
        </div>
    </section>
    </>
  )
}

export default Grid
