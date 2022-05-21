import React from "react";
import { useState } from "react";
import Card from "./card";

function CardApp() {
  // const [text, setText] = useState("");
  // const [textArr, setTextArr] = useState([]);
  const [arr, setArray] = useState([
    {
      title: "ABC",
      price: 987,
      category: " fafiahfahf",
      size: "xl",
      id: 2,
      imageURl: "https://picsum.photos/200",
    },
    {
      title: "ABC",
      price: 987,
      category: " fafiahfahf",
      size: "xl",
      id: 2,
      imageURl: "https://picsum.photos/200",
    },
    {
      title: "ABC",
      price: 987,
      category: " fafiahfahf",
      size: "xl",
      id: 2,
      imageURl: "https://picsum.photos/200",
    },
    {
      title: "ABC",
      price: 987,
      category: " fafiahfahf",
      size: "xl",
      id: 2,
      imageURl: "https://picsum.photos/200",
    },
    {
      title: "ABC",
      price: 987,
      category: " fafiahfahf",
      size: "xl",
      id: 2,
      imageURl: "https://picsum.photos/200",
    },
    {
      title: "ABC",
      price: 987,
      category: " fafiahfahf",
      size: "xl",
      id: 2,
      imageURl: "https://picsum.photos/200",
    },
    {
      title: "ABC",
      price: 987,
      category: " fafiahfahf",
      size: "xl",
      id: 2,
      imageURl: "https://picsum.photos/200",
    },
    {
      title: "ABC",
      price: 987,
      category: " fafiahfahf",
      size: "xl",
      id: 2,
      imageURl: "https://picsum.photos/200",
    },
  ]);
  // const addTodo = () => {
  //   setTextArr([...textArr, text]);
  //   setText("");
  // };
  let adToCart = () => {
    console.log("Add To Cart");
  };
  return (
    <div className="App">
        <div>
            <h1 className="justify-content">Card</h1>
            </div>
      <header className="App-header">
        

          {arr.map((e) => (
              <Card
              title={e.title}
              price={e.price}
              category={e.category}
              size={e.size}
              id={e.id}
              click={() => adToCart()}
              image={e.imageURl}
            />
            ))}
            
        
      </header>
    </div>
  );
}

export default CardApp;
