import React, { useEffect, useState } from 'react'
import Header from './Header'
import Cardsdata from './CardData'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DLT, ADD,DEC } from '../redux/actions/action'
const CardsDetails = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const [data, setData] = useState(Cardsdata)
    const [idData, setidData] = useState([])
    const { id } = useParams()

    const getData = useSelector((state) => { return (state.cartreducer.carts) })

    const compare = () => {
        let comparedata = getData.filter((item) => {
            return (
                item.id == id
            )
        })
        setidData(comparedata);
    }

    useEffect(() => {
        compare()
    }, [id])

    // Delete

    const dlt = (id) => {
        dispatch(DLT(id))
        navigate("/card")
    }
// add data 

const send = (item)=>{
    dispatch(ADD(item))
}

// decriment add data
const drimnt = (item)=>{
    dispatch(DEC(item))
} 
    return (
        <div>
            <Header />
            <h1 className='container mt-4 text-center'>Item Details</h1>
            <section className='container mt-4'>
                <div className='iteamsdetails'>
                    {
                        idData.map((item, index) => {
                            return (
                                <>
                                    <div className='item_img'>
                                        <img src={item.imgdata} alt="" style={{ height: "15rem" }} />
                                    </div>
                                    <div className="details">
                                        <table>
                                            <tr>
                                                <td key={index}>
                                                    <p> <strong>Restaurant</strong> : {item.rname}</p>
                                                    <p> <strong>Price</strong> : ₹ {item.price}</p>
                                                    <p> <strong>Dishes</strong> : {item.address}</p>
                                                    <p> <strong>Total</strong> : ₹ 350 </p>
                                                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:70, cursor:"pointer",background:"#ddd",color:"#111",fontSize:24}}>
                                                        <span style={{fontSize:25}} onClick={()=>send(item)}>+</span>
                                                        <span style={{fontSize:22}}>{item.qnty}</span>
                                                        <span style={{fontSize:25}} onClick={item.qnty <=1?()=>dlt(item):()=>drimnt(item)}>-</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p><strong>Remove :</strong> <span><i className='fas fa-trash' style={{ color: "red", cursor: "pointer" }} onClick={() => dlt(item.id)}></i></span></p>
                                                </td>
                                            </tr>

                                        </table>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
export default CardsDetails
