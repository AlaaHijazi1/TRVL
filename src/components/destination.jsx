import Card from "./cards";
import "../style/blocks/destination.css";
import img9 from "../assets/images/img-9.jpg";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img-3.jpg";
import img4 from "../assets/images/img-4.jpg";
import img8 from "../assets/images/img-8.jpg";
function Destination() {
  return (
    <>
      <section className="destination">
        <h2 className="destination__title">
          Check out these EPIC Destinations!
        </h2>
        <div className="destination__cards">
          <Card
            className="card card-larger"
            image={img9}
            text="Adventure"
            description="Explore the hidden waterfall deep inside the Amazon Jungle"
          />
          <Card
            className="card card-larger"
            image={img2}
            text="Luxury"
            description="Travel through the Islands of Bali in a Private Cruise"
          />
          <Card
            className="card"
            image={img3}
            text="Mystery"
            description="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
          />
          <Card
            className="card"
            image={img4}
            text="Adventure"
            description="Experience Football on Top of the Himalayan Mountains"
          />
          <Card
            className="card"
            image={img8}
            text="Adventure"
            description="Ride through the Sahara Desert on a guided camel tour"
          />
        </div>
      </section>
    </>
  );
}
export default Destination;
