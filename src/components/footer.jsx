import "../style/blocks/footer.css";
import FooterColumn from "./FooterColumn";
import Button from "./button";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__title">
          <p>
            Join the Adventure newsletter to receive our best vacation deals
            <br />
            You can unsubscribe at any time.
          </p>
        </div>
        <form className="footer__form">
          <input type="text" placeholder="Your Email" required />
          <Button type="submit" text="Subscribe" />
        </form>
        <div className="footer__contact">
          <FooterColumn
            title="About Us"
            subItems={[
              "How it works",
              "Testimonials",
              "Careers",
              "Investors",
              "Terms of Service",
            ]}
          />
          <FooterColumn
            title="Contact Us"
            subItems={["Contact", "Support", "Destinations", "Sponsorships"]}
          />
          <FooterColumn
            title="Videos"
            subItems={["Submit Video", "Ambassadors", "Agency", "Influencer"]}
          />
          <FooterColumn
            title="Social Media"
            subItems={["Instagram", "Facebook", "Youtube", "Twitter"]}
          />
        </div>
        <div className="footer__end">
          <p className="footer__end-title">
            TRVL<i className="fa-brands fa-typo3"></i>
          </p>
          <small className="footer__end-copy">TRVL &copy; 2025</small>
          <div className="footer__end-social">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
