import ratingGrey from "../../assets/pictures/rating-grey.png";
import ratingRed from "../../assets/pictures/rating-red.png";
import "./style.css";

function Rating({rate}) {
    const getRatingStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const starClass = (i < rating) ? ratingRed : ratingGrey;
            stars.push(<img src={starClass} alt='rating' key={i} className={starClass} />);
        }
        return stars;
    };

    return (
        <div className='rating'>
            {getRatingStars(rate)}
        </div>
        
    )
}

export default Rating