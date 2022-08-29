import React from "react";
import { Carousel } from "react-responsive-carousel";
import classes from "./styles/CustomerSay.module.css";

function CustomerSay() {
  return (
    <>
    <h1 className={classes.rev}>Some reviews from our customers</h1>
    <Carousel autoPlay={true} showThumbs={false} showIndicators={false} infiniteLoop={true}>
      <div className={classes.customersay}>
        <div className={classes.review}>
          <p>
            Excellent Sweet shop, i every seen in any state including Mumbai
            from were i am belongs to.... variety of Sweet are traditionally
            North Indian ...Chandigarh ...Must visit like any other site seen.
            Food also service is Excellent.....Excellent home made type......
          </p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfoOMAkQP27q-rLhHnA7looA_9_z63OBNq6HPX58&s"
            alt=""
          />
          <h4>Kamal</h4>
        </div>
        <div className={classes.review}>
          <p>
            Ideal menu for family gone out for shopping to Sector 17. Can try a
            range of Indian dishes like Paranthas, Amritsari Kulchas, kulfis,
            gulab jamun, chole Bhature, Chat
          </p>
          <img
            src="https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg"
            alt=""
          />
          <h4>Charu</h4>
        </div>
        <div className={classes.review}>
          <p>
            Sindhi Sweets is nice option for fast food as well as sweets.
            Different variety of sweets available. Good taste and fresh
          </p>
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
          />
          <h4>Robin</h4>
        </div>
      </div>
      <div className={classes.customersay}>
        <div className={classes.review}>
          <p>
            The place is famous for various kind of sweets. It is available in
            sector 7. The rate of the sweets are fairly reasonable.
          </p>
          <img
            src="https://st.depositphotos.com/1269204/1219/i/450/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg"
            alt=""
          />
          <h4>CNJ97</h4>
        </div>
        <div className={classes.review}>
          <p>
            Mysore Pak is a sweet dish from the state of Karnataka, prepared
            especially during diwali. Besan, ghee, sugar and water mixed
            together to form soft pieces.
          </p>
          <img
            src="https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_640.jpg"
            alt=""
          />
          <h4>Kamal</h4>
        </div>
        <div className={classes.review}>
          <p>
            Simply awesome food. You can keep on ordering for food and your mind
            will never be satisfied. Nice food and sweets are simply awesome.
            Don't miss the cookies either.
          </p>
          <img
            src="https://thumbs.dreamstime.com/b/closeup-photo-funny-excited-lady-raise-fists-screaming-loudly-celebrating-money-lottery-winning-wealthy-rich-person-wear-casual-172563278.jpg"
            alt=""
          />{" "}
          <h4>Pratik</h4>
        </div>
      </div>
      <div className={classes.customersay}>
        <div className={classes.review}>
          <p>
            This place is available in sector 17. You can get delicious food and
            sweets at this place. the price is fairly reasonable.
          </p>
          <img
            src="https://thumbs.dreamstime.com/z/close-up-photo-crazy-funky-girl-enjoy-free-cool-time-fooling-show-tongue-out-wink-blink-wear-good-looking-outfit-close-up-photo-165750861.jpg"
            alt=""
          />
          <h4>Era</h4>
        </div>
        <div className={classes.review}>
          <p>
            Sindhi Sweets is a big name in tricity. They provides delicious food
            with quality and variety. Value for money.
          </p>
          <img
            src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000"
            alt=""
          />
          <h4>Jaggy</h4>
        </div>
        <div className={classes.review}>
          <p>
            A very nice place to hangout with friends or family . Very
            affordable prices . Good type and variety of food is available .
            Overall a nice place
          </p>
          <img
            src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
            alt=""
          />{" "}
          <h4>Simran</h4>
        </div>
      </div>
    </Carousel>
    </>
  );
}

export default CustomerSay;
