export default (props) => {
    let badgeText;
    // condition ? ifTrue : ifFalse
    if (props.openSpots === 0) { 
        badgeText = 'Sold out' 
     } else if (props.location === 'Online') {
        badgeText = 'online'
     }

    return (
        <div className='card-container'>
          <div className="img-container">
            <img src={`/images/${props.coverImg}`} alt="" className="card--img" />
            {badgeText && <div className="current--status">{badgeText}</div>}
          </div>

            <div className="card-review-container">
                <img src="/images/star.png" alt="" className="review--icon" />
                <div className="review--score">{props.stats.reviewCount}</div>
                <span>({props.stats.rating}) •</span>
                <span>{props.location}</span>
            </div>
            <p className="card--info">{props.info}</p>
            <p className="card--price">From ${props.price} / <span>person</span></p>
        </div>
    )
}