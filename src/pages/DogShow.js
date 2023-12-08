import { useParams } from "react-router-dom"

const DogShow = ({dogs}) => {
    const {id} = useParams()
    let selectedDog = dogs.find(dogObject => dogObject.id === +id)
}  


export default DogShow