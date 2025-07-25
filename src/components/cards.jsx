function Card(props) {
  return (
    <>
      <article className={props.className}>
        <div className="card__image">
          <img width="100" src={props.image} alt="card image" />
          <p className="card__text">{props.text}</p>
        </div>
        <p className="card__description">{props.description}</p>
      </article>
    </>
  );
}
export default Card;
