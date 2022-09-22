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
    //complete with your code
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();