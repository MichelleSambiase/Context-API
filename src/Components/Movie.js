import React, { useContext } from "react";
import UserContext from "../contexts/userContext";

const Movie = ({ movie }) => {
const { user, toggleFavoriteMovieToUser } = useContext(UserContext)

const imgStyles = {
height: '260px',
objectFit: "cover",
}

const isFavorite = user?.favoriteMovies?.includes(movie.id);

return (
<div className="card mb-3">
  <img className="card-img-top" style={imgStyles} src={movie.imageUrl} alt={movie.title} />

  <div className="card-body">
    <h4>{movie.title}</h4>
    {user?.id &&
    <button className={ `btn ${isFavorite ? 'btn btn-success' : 'btn-outline-primary' }`} onClick={()=>
      toggleFavoriteMovieToUser(movie.id)}
      >
      Favorito
    </button>
    }
  </div>

</div>
);
};

export default Movie;