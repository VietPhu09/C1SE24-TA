import React from 'react'
import axios from 'axios';
import img from '../../assets/img/hoian.jpg'
import './FavoriteLocations.css'

const FavoriteLocations = () => {
    // handleDelete = (item) => {
    //     const favoriteLocation = {
    //       id: item.id,
    //     };
    
    //     axios
    //       .post("/api/delete", favoriteLocation)
    //       .then((res) => {
    //         this.setState((prevState) => ({
    //           fav: prevState.fav.filter((el) => el.id !== item.id),
    //         }));
    //       })
    //       .catch((error) => console.log(error));
    //   };
  return (
    <>
    <h1>Favorite location</h1>
    <div className="favorite_location">
      <div className="favorite_location--imgs">
        <img src={img} alt="Trip Image" className="favorite_location--img" />
      </div>
      <div className="favorite_location--information">
        <h2>Sony Travel</h2>
        <p>228 Nguyễn Duy Hiệu, Cẩm Châu, Hội An, Quảng Nam, Việt Nam</p>
      </div>
      <button
        className="delete-button"
        // onClick={() => this.handleDelete(item)}
      >
        Delete
      </button>
    </div>
  </>
  )
}

export default FavoriteLocations