import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import ShoppingItem from "./ShoppingItem";

function ShoppingCard() {
  let [items, setItems] = useState([
    {
      name: "Clio",
      price: "12.400 EUR",
      photoUrl:
        "https://www.renault.ro/agg/vn/unique/ONE_DACIA_PP_MEDIUM_DENSITY1/ONE_CF_DACIA_RECAP_VIEW1.png?uri=https%3A%2F%2Fro.co.rplug.renault.com%2Fproduct%2Fmodel%2FCL5%2Fnoul-clio%2Fc%2FA-TEEQB",
    },
    {
      name: "Megane",
      price: "16.300 EUR",
      photoUrl:
        "https://www.renault.ro/agg/vn/unique/ONE_DACIA_PP_MEDIUM_DENSITY1/ONE_CF_DACIA_RECAP_VIEW1.png?uri=https%3A%2F%2Fro.co.rplug.renault.com%2Fproduct%2Fmodel%2FMB4%3Bmtc%3DENS_MDL2P1%2CENS_MDL2PSL1%2CENS_MDL2PSP1%2CENS_MDL3P1%2Fnoul-megane%2Fc%2FA-TECNY",
    },
    {
      name: "Captur",
      price: "16.400 EUR",
      photoUrl:
        "https://www.renault.ro/agg/vn/unique/ONE_DACIA_PP_MEDIUM_DENSITY1/ONE_CF_DACIA_RECAP_VIEW1.png?uri=https%3A%2F%2Fro.co.rplug.renault.com%2Fproduct%2Fmodel%2FCP1%2Fnoul-captur%2Fc%2FA-ENS_0MDL2P1_-TEEPY",
    },
    {
      name: "Kadjar",
      price: "19.550 EUR",
      photoUrl:
        "https://www.renault.ro/agg/vn/unique/ONE_DACIA_PP_MEDIUM_DENSITY1/ONE_CF_DACIA_RECAP_VIEW1.png?uri=https%3A%2F%2Fro.co.rplug.renault.com%2Fproduct%2Fmodel%2FFEH%2Fkadjar%2Fc%2FA-TERQH",
    },
  ]);

  let [cartItems, setCartItems] = useState([]);

  const addToCart = (name) => {
    console.log(name);
    console.log(cartItems);
    items.forEach((element) => {
      if (element.name === name) {
        setCartItems(cartItems.concat(element));
      }
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <div className="container">
            <div className="row">
              {items.map((item) => (
                <ShoppingItem
                  name={item.name}
                  price={item.price}
                  photoUrl={item.photoUrl}
                  addToCardClick={addToCart}
                />
              ))}
            </div>{" "}
          </div>
        </div>
        <div class="card col-2" style={{ width: "18rem" }}>
          <div class="card-header">
            Cart
            <ul class="list-group list-group-flush">
              {cartItems.map((item) => (
                <li className="list-group-item">{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCard;
