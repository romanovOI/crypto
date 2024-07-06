export default function Comment({img, name, link, descr}) {
    return (
        <article className="comment">
            <div className="author">
                <img src={img} alt="" className="avatar" />
                <div className="author-info">
                    <h2 className="author-name">{name}</h2>
                    <span className="author-link">{link}</span>
                </div>
            </div>
            <div className="comment__bottom-part">
                <p className="comment__text">{descr}</p>
            </div>
        </article>
    )
}