export default function({svgPath, topText, bottomText}){
    return(
        <a href="" className="link link-list__item">
              <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use xlink:href={svgPath} />
              </svg>
              <div className="link__right-part">
                <span className="link__text link__text_first">{topText}</span>
                <span className="link__text link__text_second">{bottomText}</span>
              </div>
            </a>
    );
}