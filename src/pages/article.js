import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Nav from "../components/Nav"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useEffect } from 'react';
import { navigate } from 'gatsby';
import Parser from 'html-react-parser';

function SecondPage ({ location }) {
if (location.state) {
  var img = location.state.img == "null" ? "butterfly.jpg" : location.state.img;
  }
  if ( !location.state) {
    useEffect(() => {
   navigate('/page-3');
 }, []);
 return null;
  }
return (
  <>
  <Nav />
<div className="container tpl-a">
    <SEO title="Page two" />
    <div className="gc gc-article">
    <div  className="grid-item">
      <h3>{location.state.title}</h3>
      <div className="date-sm-a">Geschreven door: {location.state.author}</div>
      <p>{Parser(location.state.article)}</p>
    </div>
    <div  className="grid-item"><Image imgName={img} /></div>
    </div>
</div>
</>
)
}

export default SecondPage
