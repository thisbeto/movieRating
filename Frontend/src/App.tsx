import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { CreateModal } from './create-modal/create-modal';
import { useMovieData } from './hooks/useMovieData';

function App() {
  const { data } = useMovieData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
      <div className="container">
        <h1>Filmes</h1>
        <div className="card-grid">
          {data?.map(movieData => 
          <Card
            key={movieData.id} // <-- ESSENCIAL
            rating={movieData.rating}
            title={movieData.title}
            image={movieData.image}
          />
        )}

        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>Novo</button>
      </div>
  )
}

export default App
