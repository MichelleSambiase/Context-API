import React, {createContext, useState } from 'react'


const UserContext = createContext();

const initialUser = { id: 1, name: 'Michelle', favoriteMovies: [1,2] }

const UserProvider = ({children}) => {
const [user, setUser] = useState(initialUser)

const login = () => {
setUser(initialUser);
}
const logout = () => {
setUser(null);
}
const toggleFavoriteMovieToUser = (movieId) => {
const isFavorite = user.favoriteMovies.includes(movieId)
// const favoriteMovies = isFavorite
//? user.favoriteMovies.filter(favMovieId => favMovieId !== movieId) // delete
//: [...user.favoriteMovies, movieId] //add
let favoriteMovies;

if(isFavorite === true ){
favoriteMovies = user.favoriteMovies.filter(favMovie => favMovie !== movieId)
}else{
favoriteMovies = [...user.favoriteMovies, movieId]
}

setUser({
...user,
favoriteMovies
})
}
const data = {user, login, logout, toggleFavoriteMovieToUser}

return (
<UserContext.Provider value={data}>
    {children}
</UserContext.Provider>
)
}
export { UserProvider }
export default UserContext;