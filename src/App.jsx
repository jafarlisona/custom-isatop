import React, { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setFilteredCards(data);
      });
  }, []);

  function handleClick(category) {
    if (category === "All") {
      setFilteredCards(cards);
    } else {
      setFilteredCards(cards.filter((x) => x.category === category));
    }
  }

  return (
    <section>
      <div className="buttons">
        <button onClick={() => handleClick("All")}>All</button>
        <button onClick={() => handleClick("men's clothing")}>Men</button>
        <button onClick={() => handleClick("jewelery")}>Jewelery</button>
        <button onClick={() => handleClick("electronics")}>Electronics</button>
        <button onClick={() => handleClick("women's clothing")}>Women</button>
      </div>
      <div className="cards">
        {filteredCards.map((x) => (
          <div className="card" key={x.id}>
            <div className="image">
              <img src={x.image} alt="" />
            </div>
            <div className="text">
              <p>
                <span>Title:</span> {x.title}
              </p>
              <p>
                <span>Price:</span> {x.price}
              </p>
              <p style={{ height: "55px", overflow: "hidden" }}>
                {" "}
                <span>Description:</span> {x.description}
              </p>
              <p style={{ textAlign: "center" }}>
                {" "}
                <span style={{ textTransform: "uppercase", color: "#0746bd" }}>
                  {x.category}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
