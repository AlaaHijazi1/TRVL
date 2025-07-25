import "../style/blocks/Hero.css";
import video from "../assets/videos/video-1.mp4";
import Button from "./button";
function HeroBanner() {
  return (
    <>
      <section className="heroBanner">
        <video className="heroBanner__video" autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
        <div className="heroBanner__about">
          <h2 className="heroBanner__text">ADVENTURE AWAITS</h2>
          <p className="heroBanner__question">What are you waiting for ?</p>
          <div className="heroBanner__buttons">
            <Button className="heroBanner__start" text="Get Started" />
            <Button
              className="heroBanner__watch"
              text={
                <>
                  WATCH TRAILER <i className="bi bi-play-circle"></i>
                </>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroBanner;
