import React from 'react';

import { FaBars, FaWindowClose } from 'react-icons/fa';
import './header.css'
import { Link } from "gatsby"

class Nav extends React.Component {

  state = {
        active: "nav-closed",
        activeClass: "top",
        scrollClass: ""
     }

    componentDidMount(){

      var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", (event) => {
    var st = window.pageYOffset;
    if (st > lastScrollTop){
      this.setState({scrollClass: "scrolling-down"})
    } else {
      this.setState({scrollClass: "scrolling-up"})
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }, false);

      window.addEventListener('scroll', (event) => {

        if(window.pageYOffset > "200"){
            this.setState({activeClass: "scrolled"})
        }else {
            this.setState({activeClass: "top"})
        }
      });
      window.addEventListener('keyup', (event) => {
        if (event.keyCode == 27) {
          this.setState({active: "nav-closed"})
        }
      });
 }
     toggle(e){
       if (window.innerWidth >= 768) {
         this.setState({active: "nav-closed"})
       }
       else if (this.state.active === "nav-open") {
         this.setState({active: "nav-closed"})
       }
        else {this.setState({active: "nav-open"})
      }
     }
  render () {
    return (
      <header>
      <nav className={this.state.scrollClass + " " + this.state.activeClass + " " + this.state.active }>
      <div>
        <div className="container">
        <div className="hamburger" id="first" onClick={e => this.toggle(e)}><Link to="/#menu"></Link> <span className="bars"><FaBars /></span><span className="cross"><FaWindowClose /></span>  </div>
          <ul className="list-inline">
          <li className="navbar-brand" onClick={e => this.toggle(e)}> <Link to="/"><h1>Chessea</h1> </Link></li>
            <li className="list-inline-item" onClick={e => this.toggle(e)}><Link activeStyle={{ color: "#087F8C" }} to="/">Home</Link></li>
            <li className="list-inline-item" onClick={e => this.toggle(e)}><Link activeStyle={{ color: "#087F8C" }} state={{ data: this.props.data }}to="/page-3">Artikelen</Link></li>
            <li className="list-inline-item" onClick={e => this.toggle(e)}><Link activeStyle={{ color: "#087F8C" }} to="/page-4">Partijen</Link></li>
          </ul>
        </div>
        </div>
      </nav>
      </header>

  )
  }
}
export default Nav;
