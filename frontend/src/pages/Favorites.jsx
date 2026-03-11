import MovieCard from '../components/MovieCard'
import { useMovieContext } from '../contexts/MovieContext'
import '../css/favorites.css'


function Favorites() {
    const {favorites} = useMovieContext()

    if (favorites) {
    return (
        <div className='favorites'>
            <h2>Your Favorite</h2>
            <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
    }

    return (
    <div className="favorites-empty">
        <h2>No favorite movies yet</h2>
        <p>Start adding movies to your favorites!</p>
    </div>
    );
}

export default Favorites