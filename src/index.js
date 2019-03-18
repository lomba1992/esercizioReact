import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./main.css";
import "./noscript.css";
import "./font-awesome.min.css";
class Hero extends React.Component {
  render() {
    return (
      <div id="intro">
        <h1>
          This is
          <br />
          Massively
        </h1>
        <p>
          A free, fully responsive HTML5 + CSS3 site template designed by{" "}
          <a href="https://twitter.com/ajlkn">@ajlkn</a> for{" "}
          <a href="https://html5up.net">HTML5 UP</a>
          <br />
          and released for free under the{" "}
          <a href="https://html5up.net/license">Creative Commons license</a>.
        </p>
        <ul className="actions">
          <li>
            <a
              href="#header"
              className="button icon solo fa-arrow-down scrolly"
            >
              Continue
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
class Tab extends React.Component {
  render() {
    return (
      <Router>
        <>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/generic">Generic </Link>
            </li>
          </ul>
          <Route path="/" component={Home} />
          <Route path="/generic" component={generic} />
        </>
      </Router>
    );
  }
}
class Social extends React.Component {
  render() {
    return (
      <ul className="icons">
        <li>
          <a href="#" className="icon fa-twitter">
            <span class="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-facebook">
            <span class="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-instagram">
            <span class="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-github">
            <span class="label">GitHub</span>
          </a>
        </li>
      </ul>
    );
  }
}
class Button extends React.Component {
  render() {
    return (
      <ul class="actions special">
        <li>
          <a href="#" class="button">
            {this.props.text}
          </a>
        </li>
      </ul>
    );
  }
}
class Article extends React.Component {
  render() {
    return (
      <article>
        <header>
          <span class="date">April 24, 2017</span>
          <h2>
            <a href="#">
              Sed magna
              <br />
              ipsum faucibus
            </a>
          </h2>
        </header>
        <a href="#" class="image fit">
          <img src="images/pic02.jpg" alt="" />
        </a>
        <p>
          Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis
          sagittis magna etiam.
        </p>
        <Button text="Prova" />
      </article>
    );
  }
}
class FormContact extends React.Component {
  render() {
    return (
      <section>
        <form method="post" action="#">
          <div class="fields">
            <div class="field">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div class="field">
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="3" />
            </div>
          </div>
          <ul class="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>
      </section>
    );
  }
}
class Dati extends React.Component {
  render() {
    return (
      <section class="alt">
        <h3>{this.props.title}</h3>
        {this.props.children}
      </section>
    );
  }
}
class Contact extends React.Component {
  render() {
    return (
      <section class="split contact">
        <Dati title="Addres">
          <p>
            1234 Somewhere Road #87257
            <br />
            Nashville, TN 00000-0000
          </p>
        </Dati>
        <Dati title="Phone">
          <p>(000) 000-0000</p>
        </Dati>
        <Dati title="E-Mail">
          <p>
            <a href="#">info@untitled.tld</a>
          </p>
        </Dati>
        <Dati title="Social">
          <Social />
        </Dati>
      </section>
    );
  }
}
class MainArticle extends React.Component {
  render() {
    return (
      <article class="post featured">
        <header class="major">
          <span class="date">April 25, 2017</span>
          <h2>
            <a href="#">
              And this is a<br />
              massive headline
            </a>
          </h2>
          <p>
            Aenean ornare velit lacus varius enim ullamcorper proin aliquam
            <br />
            facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
            <br />
            amet nullam sed etiam veroeros.
          </p>
        </header>
        <a href="#" class="image main">
          <img src="images/pic01.jpg" alt="" />
        </a>
        <Button text="Prova" />
      </article>
    );
  }
}

class generic extends React.Component {
  render() {
    return (
      <div id="main">
        <MainArticle />
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div className="fade-in" id="wrapper">
        <Hero />
        <nav id="nav">
          <Tab />
          <Social />
        </nav>

        <div id="main">
          <MainArticle />
          <section class="posts">
            <Article />
            <Article />
            <Article />
            <Article />
          </section>
        </div>
        <footer id="footer">
          <FormContact />
          <Contact />
        </footer>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);
