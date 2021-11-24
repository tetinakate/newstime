import React from "react";
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import "./App.css";
import { Header } from "../header";

import { Posts } from "../pages/posts";
import { Post } from "../pages/post";
import { About } from "../pages/about";
import { Main } from "../pages/main";
import { Authors } from "../pages/authors";
import { Author } from "../pages/author";
import { NotFoundPage } from "../pages/404";


const App = () => {
  return(
    <div className='App'>
        <Router>
          <Header />
          <Switch>
            <Route path="/" element={ <Main />} />
            <Route path="/about" element={ <About />} />
            <Route path="/posts" element={ <Posts />} />
            <Route path="/posts/:id" element={ <Post />} />
            <Route path="/authors" exact element={ <Authors />} />
            <Route path="/authors/:id" element={ <Author />} />
            <Route path="*" element={ <NotFoundPage />} />

          </Switch>
        </Router>

        {/* <Counter /> */}
        
    </div>
  );
}
export default App;