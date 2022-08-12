import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './News.css';

const News = (props) => {

    const { title, description, urlToImage, url } = props.article;
    console.log(props.article)
    return (
        <div className='news'>
            <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src={urlToImage} height="200px" />
                <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    <Card.Text> {description} </Card.Text>
                    <Button variant="primary"><a className='btn btn-sm' href= {url} > See More </a></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;