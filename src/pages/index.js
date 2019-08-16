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

function IndexPage () {

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
    <SEO title="Home" />
    <Grid calendar={data.calender} articles={data.article}/>
  </>
  )
}
export default IndexPage
// <Header data={data.article} matches={data.matches} />
