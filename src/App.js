import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import News from './Components/News/News';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-30&sortBy=publishedAt&apiKey=4550e270fcb04b25a554cdf0dd6dd77a';
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  }, [])
  return (
    <div>
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article = {article}></News>)
      }
    </div>
  );
}

export default App;
