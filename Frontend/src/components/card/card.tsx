import "./card.css"

interface CardProps {
    rating: string;
    title: string;
    image: string;
}

export function Card({rating, image, title} : CardProps) {
    return(
        <div className="card"> 
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>Nota:</b>{rating}</p>
        </div>
    )
}