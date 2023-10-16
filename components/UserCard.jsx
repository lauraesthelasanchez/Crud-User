import defaultImage from '../assets/avatar.jpg';
import { useState, useEffect } from "react";
import '../css/UserCard.css'

const UserCard = ({ user, deleteUser, setInfoUpdate, setIsFormActive }) => {

  const [isActive, setIsActive] = useState(false);
  const [userImage, setUserImage] = useState(defaultImage);

  useEffect(() => {
    const storedImage = localStorage.getItem(`userImage-${user.id}`);
    if (storedImage) {
      setUserImage(storedImage);
    }
  }, [user.id]);
  
  const handleActive = () => {
      setIsActive(!isActive);
      setIsFormActive(!isActive);
      setInfoUpdate(user)
  };

  const handleDelete = () => {
      deleteUser('/users', user.id)
  }

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const newImage = e.target.result;
        setUserImage(newImage);
        localStorage.setItem(`userImage-${user.id}`, newImage);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUserImage(defaultImage);
      localStorage.setItem(`userImage-${user.id}`, defaultImage);
    }
  };
  

  return (
    <article className="user_card">
      <aside className="user_aside"></aside>
      <div className="user_display">
        <div className="user_box ">
          <div className="user_photo">
            <img src={userImage} alt="avatar" />
          </div>
          <div className="user_info">
            <div className="user_name">
              <h2>{`${user.first_name} ${user.last_name}`}</h2>
            </div>
            <h3>User ID: #{`${user.id}`}</h3>
            <ul>
              <li><span>Birthday: </span><span>{user.birthday}</span></li>
              <li><span>Email: </span><span>{user.email}</span></li>
            </ul>
          </div>
        </div>
        <div className="user_button">
          <label className='photo_label' htmlFor={`photo-${user.id}`}>
            <input
              type="file"
              name={`photo-${user.id}`}
              id={`photo-${user.id}`}
              accept="image/*"
              onChange={handleImageChange}
            />
            Load Photo
          </label>
          <button onClick={handleActive}>Edit</button>
          <button className="custom-btn btn-2" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  )
}

export default UserCard