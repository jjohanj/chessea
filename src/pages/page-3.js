import React, { useState, useEffect } from "react"
import { Link, Router } from "gatsby"
import "../components/layout.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Grid from "../components/grid"
import Nav from "../components/Nav"
import axios from "axios"
import { navigate } from 'gatsby';
import Articles from "../components/articles"


function Page3 () {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://www.chessea.nl/data.php',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

    return (
      <>
      <Nav />
      <div className="gc gc-articles container">
    <Articles articles={data.article}/>
    </div>
    </>
)
}

export default Page3
