import React, { useState } from "react";
import {phones} from "./Productdata";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Products = () => {

   const [items,setItems]=useState(phones)

   const decQty=(id)=>{

  const sa=  items.map((item)=>

     item.id === id && item.qty>1 ?{...item, qty:item.qty-1}:item

    )
    
     setItems(sa)
  

   }
   const incQty=(id)=>{

  const sb=  items.map((item)=>

     item.id === id?{...item, qty:item.qty+1}:item

    )
    
     setItems(sb)
  

   }

  return (
    <div>
      <h1 className="bg-info text-white">Products</h1>
      {items.map((item)=>{
        return(
            <div className="d-inline-flex" key={item.id}>

                <Card className="shadow p-3 m-2 bg-body-tertiary rounded" style={{ width: "13rem" }}>
                  <Card.Img   style={{ height: "15rem" }} className="p-2" variant="top" src={item.image}/>
                
                  <Card.Body>
                    <Card.Title>{item.model}</Card.Title>
                    <Card.Text>
                      {item.desc}
                    </Card.Text>
                    <h5>Price: ₹ {item.price}</h5>
                    <div>
                       <p>Qty:
                       <Button onClick={()=>decQty(item.id)} className="m-1">-</Button>
                       {item.qty}
                       <Button onClick={()=>incQty(item.id)} className="m-1"> +</Button></p>
                    </div>
                    <Button variant="primary">Add to cart</Button>
                  </Card.Body>
                </Card>

            </div>          



        )
      })}

    </div>
  );
};

export default Products;
