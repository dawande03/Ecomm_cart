import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../redux/actions/action';

const Header = () => {
  const [price, setPrice] = useState(0)
  console.log(price);
  const dispatch = useDispatch();
  const getdata = useSelector((state) => { return (state.cartreducer.carts) }) //get Data from reducer
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // dlt function

  const dlt = (id) => {
    dispatch(DLT(id))
  }

  // total price

  const total = () => {
    let price = 0;
    getdata.map((item, index) => {
      price = item.price + price
    })
    setPrice(price)
  }
  useEffect(() => {
    total()
  }, [total])

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>

        <Container>
          <NavLink to="/" className="mx-2 text-decoration-none text-light">Add to card</NavLink>
          <Nav className="me-auto">
            <NavLink to="/card" className="text-decoration-none text-light mx-2">Home</NavLink>
            { /* <NavLink to="/cardetails" className="text-decoration-none text-light m-auto mx-2">Card Details</NavLink>*/}
          </Nav>

          {/**Badge icon */}

          <Badge badgeContent={getdata.length} color="secondary" id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
          </Badge>

        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
            getdata.length ?
              <div className='card_details' style={{ width: '24rem', padding: 10 }}>
                <table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Restaurant Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      getdata.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <NavLink to={`/cardetails/${item.id}`} onClick={handleClose}>
                                <img src={item.imgdata} alt="img loading fail" style={{ width: "5rem", height: "5rem" }} />
                              </NavLink>
                            </td>
                            <td className='tdata'>
                              <p>Dish : {item.rname}</p>
                              <p>Price : ₹ {item.price}</p>
                              <p>Quantity : {item.qnty}</p>
                              <p style={{ color: "red", fontSize: 20, cursor: "pointer" }}>
                                <i className='fas fa-trash smalltrash'></i>
                              </p>
                            </td>
                            <td style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => dlt(item.id)}>
                              <i className='fas fa-trash largetrash'></i>
                            </td>
                          </tr>
                        )
                      })
                    }
                    <p className='text-center'>Total : {price}</p>
                  </tbody>
                </table>
              </div> : <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                <i className='fas fa-close smallclose'
                  onClick={handleClose}
                  style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
              </div>
          }

          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
      </Navbar>
    </div>
  )
}

export default Header
