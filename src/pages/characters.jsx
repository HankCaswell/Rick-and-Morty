import axios from 'axios'
import { useState, useEffect } from 'react';
import CharacterCards from '../Components/CharacterCards';
import { useCharacterSelect } from '../contexts/CharacterSelectContext';

function Characters () {

    const [characterDetails, setCharacterDetails] = useState([])
    const [error, setError] = useState(null)
    const { onCharacterSelect } = useCharacterSelect();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
 


    // useEffect(() => {
    //       const fetchCharacterData = async () => {
    //         try {
    //           const response = await axios.get('https://rickandmortyapi.com/api/character');
    //           const characters = response.data.results
    //           setCharacterDetails(characters)
    //         }

    //         catch (error) {
    //           setError(error.message)
    //         }
    //       };
    //       fetchCharacterData()
    //     }, [])

    useEffect(() => {
      const fetchCharacterData = async (page = 1) => {
        try {
          const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
          const data = response.data;
          setCharacterDetails(data.results);
          setTotalPages(data.info.pages); // Set the total number of pages
        } catch (error) {
          setError(error.message);
        }
      };
    
      fetchCharacterData(currentPage); // Fetch data for the current page
    }, [currentPage]);




    return (
        <>
        <h1>Characters</h1>
        

        <CharacterCards characterDetails={characterDetails} onCharacterSelect={onCharacterSelect}/> 

        <div className="pagination-controls">
      <button 
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button 
        onClick={() => setCurrentPage(prev => (prev < totalPages ? prev + 1 : prev))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
        </>



    )
    }

export default Characters