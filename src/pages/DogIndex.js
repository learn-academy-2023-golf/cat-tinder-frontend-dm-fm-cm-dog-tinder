import React from 'react';
import { NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardText, CardSubtitle, Button } from "reactstrap"

const DogIndex = ({dogs}) => {
  return(
    <div className="index-page">
      <h2 className='index-header'>Meet the Dawgs:</h2>
      <div className="card-flex"> 
        {dogs.map((dogObject, index) => {
          return(
            <Card
              key={index}
              style={{
                width: '18rem'
              }}
            >
              <img
                alt="Sample"
                src={dogObject.image}
              />
              <CardBody>
                <CardTitle tag="h5">
                  {dogObject.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Age: {dogObject.age}
                </CardSubtitle>
                <Button>
                  <NavLink to={`/dogshow/${dogObject.id}`}>
                    More about me!
                  </NavLink>
                </Button>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default DogIndex