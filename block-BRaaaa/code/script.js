var input = document.querySelector('input[name = moviename]')
var movieList = document.querySelector('.movielist');

var movies = [
    
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
}

function deleteMovie(index) {
    movies.splice(index, 1);
    createUI();
}

function createUI() {
    movieList.innerHTML = "";
    movies.forEach((movie, index) => {
        var li = document.createElement('li');
        li.classList.add('flex');
        var input = document.createElement('input');
        input.type = "checkbox";
        input.checked = movie.isWatched;
        input.addEventListener('click', () => {
            handleToggle(index);
        });
        var p = document.createElement('p');
        p.innerText = movie.name;
        var span = document.createElement('span');
        span.innerText = "X";
        span.addEventListener('click', () => {
            deleteMovie(index);
        });
        span.style.color = "red";
        li.append(input, p, span);
        movieList.append(li);
    });
}

createUI();