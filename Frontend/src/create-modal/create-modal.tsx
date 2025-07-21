import { useEffect, useState } from "react"
import { useMovieDataMutate } from "../hooks/useMovieDataMutate";
import type { MovieData } from "../interface/MovieData";

import "./modal.css"

interface InputProps {
    label: string,
    value: string,
    updateValue: (value: string) => void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({label, value, updateValue}: InputProps) => { 
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}


export function CreateModal({closeModal} : ModalProps){
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("0");
    const [image, setImage] = useState("");
    const{ mutate, isSuccess,  isLoading } = useMovieDataMutate();

    const submit = () => {
        const movieData: MovieData = {
            title,
            rating,
            image
        }

        mutate(movieData)
    }
    
    useEffect(() => {
    if (!isSuccess) return;
    closeModal();
}, [isSuccess, closeModal]);


    return(
        <div className="modal-overlay"> 
            <div className="modal-body">
                <h2>Cadastre um novo Filme</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle}/>
                    <Input label="rating" value={rating} updateValue={setRating}/>
                    <Input label="image" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'Postando...' : 'Postar'}
                </button>
            </div>
            
        </div>
    )
}