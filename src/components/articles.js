import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Header from "../components/header"
import './grid.css'
import SEO from "../components/seo"
import { useEffect } from 'react';
import { navigate } from 'gatsby';
import Parser from 'html-react-parser';

function Articles (props) {

  if ( props.articles) {

  var article = props.articles.map((item, i) => {
    var img = item.image == "null" ? "butterfly.jpg" : item.image;

    return (
      <Link key={i} to="/article"
        state={{ title: item.title,
        article: item.item,
        author: item.author,
        img: item.image}} className="grid-item gc gc-article-s">
        <div className="grid-item">
        <Image imgName={img} />
        </div>
        <div className="grid-item">
          <div className="item-left">
            <h3>{item.title}</h3>
            <div className="date-sm-a">{item.date}</div>
            {Parser(item.item.substring(0,70))} ...
          </div>
        </div>
      </Link>
    )
  });
}

  return (
<>
{article}
</>
)
}

export default Articles
