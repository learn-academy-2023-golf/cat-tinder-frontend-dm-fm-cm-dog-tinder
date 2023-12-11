import { useParams, NavLink } from "react-router-dom"
import React from 'react';



const DogShow = ({dogs}) => {
  const {id} = useParams()
  let selectedDog = dogs.find(dogObject => dogObject.id === +id)

  return(
    <div className="show-page"> 
      {selectedDog && (
        <>
          <h2>I am {selectedDog.name}, age {selectedDog.age}.</h2>
          <h3>I enjoy {selectedDog.enjoys}</h3>
          <img alt={selectedDog.name} src={selectedDog.image}/>
        </>
      )}
            <NavLink to={`/dogedit/${selectedDog.id}`} className="nav-link">
        Edit Dog Profile
      </NavLink>
    </div>
  )
}




export default DogShow