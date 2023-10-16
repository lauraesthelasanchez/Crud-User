import { useState } from "react"
import '../css/App.css'

const AddUser = ({ setIsFormActive }) => {

    const [isActive, setIsActive] = useState(false);

    const handleActive = () => {
        setIsActive(!isActive);
        setIsFormActive(!isActive);
    };

  return (
    <button onClick={handleActive} className="add_user_button">AddUser</button>
  )
}

export default AddUser