import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import MovieCard from './MovieCard';
=======
>>>>>>> 4952764 (Resolve o requisito 3)

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
<<<<<<< HEAD

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
=======
    console.log(movies);
    return (
      <p>teste</p>
>>>>>>> 4952764 (Resolve o requisito 3)
    );
  }
}

MovieList.propTypes = {
<<<<<<< HEAD
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;// implement MovieList component here
=======
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
>>>>>>> 4952764 (Resolve o requisito 3)
