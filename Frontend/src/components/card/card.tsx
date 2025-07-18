import "./card.css"

interface CardProps {
    rating: string;
    title: string;
    image: string;
}

export function Card({rating, title, image} : CardProps) {
    return(
        <div className="card"> 
            <img/>
            <h2></h2>
            <p><b>Nota:</b></p>
        </div>
    )
}