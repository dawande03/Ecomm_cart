import React, { useState } from 'react'
import Header from './Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CardData';
import { border } from '@mui/system';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {

  const [data, setdata] = useState(Cardsdata)

  const dispatch = useDispatch();

  const send = (item)=>{
    dispatch(ADD(item))
    console.log(item);
  }
  return (
    <div>
      <Header />
      <h1 className="text-center mt-3 ">Add to cart ptoject</h1>
      <div className='row d-flex juustify-content-center align-items-center'>
        {
          data.map((item, index) => {
            return (
              <Card key={index} style={{ width: '22rem',border:"none",}} className="container card_style">
                <Card.Img variant="top" src={item.imgdata} style={{height:'15rem'}} className="mt-3"/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary" onClick={()=>send(item)}>Go somewhere</Button>
                </Card.Body>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cards
