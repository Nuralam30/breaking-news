import React, { useEffect } from 'react';
import './Headline.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import News from './../News/News';

const Headlne = () => {
    const [articles, setArticles] = useState([]);

    useEffect( () =>{
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2022-07-12&sortBy=publishedAt&apiKey=4c317c75abbb4ac1b63ed56cee2cd793';
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles));
    }, [])
    const articles20 = articles.slice(0, 20)
    
    return (
        <div>
            {
                articles20.map( (article, ind) => <News key={ind} article={article}></News>)
            }
            <Button variant="primary">Primary</Button>{' '}
        </div>
    );
};

export default Headlne;