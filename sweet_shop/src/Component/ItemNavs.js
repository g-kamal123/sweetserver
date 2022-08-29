import React, { useContext } from "react";
import { Storage } from "./Storage";
import classes from "./styles/ItemNavs.module.css";

function ItemNavs() {
  const detail = useContext(Storage)
  const itemarray = [
    {
      image:
        "https://mirchi.com/os/cdn/content/images/bada%20boondi%20laddu%20mm%20mithaiwala_medium_0628527.webp",
      name: "Laddoo",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0592/0342/0346/products/1.Mysorepak.jpg?v=1629656003",
      name: "Barfi",
    },
    {
      image:
        "https://www.sharmispassions.com/wp-content/uploads/2018/10/GulabJamun1.jpg",
      name: "Jamun",
    },
    {
      image:
        "https://thumbs.dreamstime.com/b/stock-photo-rasgulla-sponge-ras-gulla-made-ball-shaped-dumplings-chhena-semolina-dough-cooked-light-100438159.jpg",
      name: "Chhena",
    },
    {
      image:
        "https://cdn3.foodviva.com/static-content/food-images/desserts-sweets-recipes/moong-dal-halwa/moong-dal-halwa.jpg",
      name: "Halwa",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/realistic-soft-american-ice-cream-waffle-cone_8071-5377.jpg?w=2000",
      name: "Kulfi",
    },
    {
      image:
        "https://www.cakezone.com/themes/organie1/img/general-img/category/CZ-CATEGORY-CIRCLE_PREMIUM%20MINI_1.webp",
      name: "Cake",
    },
    {
      image:
        "https://www.cookwithkushi.com/wp-content/uploads/2021/08/IMG_9418m.jpg",
      name: "Salted",
    },
  ];
  return (
    <div className={classes.itemnavs}>
      {itemarray.map((item) => (
        <div className={classes.item}>
          <img src={item.image} alt="" onClick={()=>detail.itemnav(item.name)}/>
            <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default ItemNavs;
