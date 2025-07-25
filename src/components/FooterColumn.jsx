function FooterColumn(props) {
  return (
    <>
      <div className="footer__contact-column">
        <h4 className="footer__contact-columnTitle">{props.title}</h4>
        <div className="footer__contact-columnItems">
          {props.subItems.map((item, index) => (
            <p key={index} className="footer__contact-columnItem">
              {item}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
export default FooterColumn;
