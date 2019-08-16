import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Header from "../components/header"
import './matches.css'
import SEO from "../components/seo"
import { useEffect } from 'react';
import { navigate } from 'gatsby';
import Parser from 'html-react-parser';

function Matches (props) {

  if ( props.matches) {

  var matches = props.matches.map((item, i) => {

    return (
      <div key={i} className="grid-item i-wrapper">
      <h3> {item.matchup} </h3>

            <iframe  title={item.matchup} src={"https://lichess.org/" + item.url} frameBorder="0"/>

      </div>
    )
  });
}

  return (
<>
{matches}
</>
)
}

export default Matches
