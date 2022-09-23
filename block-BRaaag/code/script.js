var input = document.querySelector('input[name = moviename]')
var movieList = document.querySelector('.movielist');
var movies = [
    {
        name: "thor",
        isWatched: false
    },
    {
        name: "thor5",
        isWatched: false
    },
];

input.addEventListener('keyup', (event) => {
    
    if(event.keyCode == 13){
        var movie = {
            name: input.value,
            isWatched: false
        }
        movies.push(movie);
        createUI();
        input.value = "";
    }
});



function handleToggle(index) {
    movies[index].isWatched = !movies[index].isWatched;
    createUI();
}

function deleteMovie(index) {
    movies.splice(index, 1);
    createUI();
}

var elm = React.createElement;

function createUI() {
    var ui = movies.map((movie, index) => {
        var li = elm('li', {
            className: "flex"
        },
        elm('input', {
            type: "checkbox",
            checked: movie.isWatched,
            onClick: () => {
                handleToggle(index)
            }
        }),
        elm('p', {}, movie.name),
        elm('span', {
            "style.color": "red",
            onClick: () => {
                deleteMovie(index)
            }
        }, "X")
        );     
        return li;   
    });
    ReactDOM.render(ui, movieList)
}

createUI();

