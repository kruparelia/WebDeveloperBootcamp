var movies = [
    {
        title: "The Godfather"
        , rating: 5
        , hasWatched: true
    }
    , {
        title: "Casino"
        , rating: 4
        , hasWatched: true
    }
    , {
        title: "Warcraft"
        , rating: 3
        , hasWatched: false
    }
    , {
        title: "Shawshank Redemption"
        , rating: 4.5
        , hasWatched: true
    }
    , {
        title: "Bourne"
        , rating: 2.5
        , hasWatched: false
    }
]

function movieDb(movies) {
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].hasWatched) {
            console.log("You have watched " + movies[i].title + " - " + movies[i].rating + " stars")
        }
        else {
            console.log("You have not seen " + movies[i].title + " - " + movies[i].rating + " stars")
        }
    }
}
