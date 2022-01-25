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
import { TodoList } from "../pages/todo-list";
import { XOGame } from "../pages/xo-game";
import { Calculator } from "../pages/calculator";
import { Footer } from "../footer";
import { Slider } from "../pages/slider";


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
            <Route path="/todo-list" element={ <TodoList />} />
            <Route path="/xo-game" element={ <XOGame />} />
            <Route path="/calculator" element={ <Calculator />} />
            <Route path="/slider" element={ <Slider />} />
            <Route path="*" element={ <NotFoundPage />} />

          </Switch>
          <Footer />
        </Router>

        {/* <Counter /> */}
        
    </div>
  );
}
export default App;