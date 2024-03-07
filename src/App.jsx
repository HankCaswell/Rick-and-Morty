import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import {Button, Offcanvas} from 'react-bootstrap'
import CharacterSelectContext from './contexts/CharacterSelectContext';;

import MyNavbar from '../src/Components/MyNavbar'




function App() {
  const [show, setShow] = useState(false)
  const [sidebarImage, setSidebarImage] = useState([]) // Add useState for sidebarImage

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false); // Define handleClose

  const onCharacterSelect = (character) => {
    const ch = character.image // Set ch to the character's image
    setSidebarImage([...sidebarImage, ch]) // Set the sidebarImage state to the character's image
    setShow(true) // Set show to true
  }
  
  
  return (
    <CharacterSelectContext.Provider value={{ onCharacterSelect }}>
      <Button variant="primary" onClick={handleShow}>
        Open Sidebar
      </Button>
  
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Favorite Character </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {sidebarImage.map((image, index) => (
            <img key={index} src={image} alt="Character" />
          ))}
          <MyNavbar />
        </Offcanvas.Body>
      </Offcanvas> {/* Add closing tag */}
  
      <MyNavbar /> 
  
      <Outlet /> 
    </CharacterSelectContext.Provider>
  );
}

export default App
