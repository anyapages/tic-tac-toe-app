import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";
import { Card, Accordion, Container, Button, Row, Col, Image } from "react-bootstrap";

// simulate getting products from DataBase
const products = [
  { name: "Apples:", country: "Italy", cost: 3, instock: 10, image: "images/01.png"},
  { name: "Oranges:", country: "Spain", cost: 4, instock: 3, image: "images/02.png" },
  { name: "Beans:", country: "USA", cost: 2, instock: 5, image: "images/03.png"},
  { name: "Cabbage:", country: "USA", cost: 1, instock: 8, image: "images/04.png"},
];

const Products = (props) => {
  const [items, setItems] = React.useState(products);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

const useDataApi = (initialUrl, initialData) => {

  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  console.log(`useDataApi called`);
  useEffect(() => {
    console.log("useEffect Called");
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
        console.log("FETCH FROM URl");
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);
  return [state, setUrl];
};


const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

  //  Fetch Data
  const { Fragment, useState, useEffect, useReducer } = React;
  const [query, setQuery] = useState("http://localhost:1337/products");
  const [{ data }, doFetch] = useDataApi(
    "http://localhost:1337/products",
    {
      data: [],
    }
  );
  console.log(`Rendering Products ${JSON.stringify(data)}`);

  const addToCart = (e) => {
    let name = e.target.name;
    let item = items.filter((item) => item.name === name);
    console.log(`add to Cart ${JSON.stringify(item)}`);

    let instock;
    const newItems = [];
    for (const item of items) {
      if (item.name === name) {
        item.instock = item.instock - 1;
        instock = item.instock;
      }
      newItems.push(item);
    }

    if (instock >= 0) {
      setItems(newItems);
      setCart([...cart, ...item]);
    }
  };

  const deleteCartItem = (index) => {
    let itemToReturn = cart.filter((item,i) => index === i);
    console.log(itemToReturn);
    for (const item of items) {
      if(item.name === itemToReturn[0].name){
        item.instock = item.instock + 1;
      }
    }
    let newCart = cart.filter((item, i) => index !== i);
    setCart(newCart);
  };

  let list = items.map((item, index) => {
    
    return (
      <li key={index.id}>
        <Image src={item.image} width={120} ></Image>
        <p><Button variant="light" size="large">
          {item.name}  {item.country}  | Stock = {item.instock} | $ {item.cost}.00
        </Button></p>
        <p style={{marginTop: 20}}><input variant="success" name={item.name} type="submit" onClick={addToCart}></input></p>
      </li>
    );
  });

  let cartList = cart.map((item, index) => {
    return (
      <Card key={index}>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={1 + index}>
            {item.name} {item.image}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse onClick={() => deleteCartItem(index)} eventKey={1 + index} >
          <Card.Body>
            $ {item.cost} from {item.country}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  })

  let finalList = () => {
    let total = checkOut();
    let final = cart.map((item, index) => {
      return (
        <div key={index} index={index}>
          {item.name} 
        </div>
      );
    });
    return { final, total };
  };

  const checkOut = () => {
    let costs = cart.map((item) => item.cost);
    const reducer = (accum, current) => accum + current;
    let newTotal = costs.reduce(reducer, 0);
    console.log(`total updated to ${newTotal}`);
    cart.map((item, index) => deleteCartItem(index));
    return newTotal;
  };

  const restockProducts = (url) => {
    doFetch(url);
    let newItems = data.map((item) => {
      let { name, country, cost, instock } = item;
      return { name, country, cost, instock};
    });
    setItems([...items, ...newItems]);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Products</h1>
          <ul style={{ listStyleType: "none" }}>{list}</ul>
        </Col>
        <Col>
          <h1>Order Summary</h1>
          <Accordion>{cartList}</Accordion>
        </Col>
        <Col>
          <h1>Check Out</h1>
          <Button variant="info" onClick={checkOut}>Total: $ {finalList().total}</Button>
          <div> {finalList().total > 0 && finalList().final} </div>
        </Col>
      </Row>
      <Row>
      <form onSubmit={(event) => {
          restockProducts(`http://localhost:1337/${query}`);
          console.log(`Restock called on ${query}`);
          event.preventDefault(); }} >
          <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
          <button type="submit">Restock</button>
        </form>
      </Row>
    </Container>
  );
};

// ========================================
ReactDOM.render(<Products />, document.getElementById("root"));
