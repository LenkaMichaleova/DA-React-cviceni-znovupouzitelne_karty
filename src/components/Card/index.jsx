import './style.css';

export const Card = ({ type, title, img, imgPosition, children, paticka }) => {
  return (
    <div className={`card card--${type}`}>
      <div className="card__head">
        {imgPosition === "top" && <img src={img} alt={title} />}
        <h2 className="card__title">{title}</h2>
        {imgPosition === "middle" && <img src={img} alt={title} />}
      </div>

      <div className="card__body">{children}</div>
      
      <div className="card__foot">
        {imgPosition === "down" && <img src={img} alt={title} />}
        <p>{paticka}</p>
      </div>
    </div>
  );
};