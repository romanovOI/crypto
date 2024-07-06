export default function({title, text}){
    return(
        <div className="statistics__item">
        <span className="info__top">{title}</span>
        <span className="info__bottom">{text}</span>
      </div>
    );
}