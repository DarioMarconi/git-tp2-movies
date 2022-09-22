const movies = require('./movies.json');

/**
 * 
This feature chooses the top 10 movies
 * @returns {Array}
 */
function getFirstTenMovies(){
    const firstTenMovies = movies.slice(0,10);
    return firstTenMovies;
}

/**
 * This function chooses the genres of the movies
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    const moviesGenre = movies.filter(a => a.genre == genre);
    return moviesGenre;
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies ${JSON.stringify(firstTenMovies)}`)
    console.log(`Only first ten movies`, firstTenMovies);
}

main();