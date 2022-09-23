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
}

function deleteMovie(index) {
    movies.splice(index, 1);
    createUI();
}

function celm(type, attribute = {}, ...children){
    var element = document.createElement(type);
    for (const key in attribute) {
        if(key.startsWith('data-')){
            element.setAttribute(key, attribute[key])
        }else if(key.startsWith('on')){
            let eventType = key.replace('on', '').toLowerCase();
            element.addEventListener(eventType, attribute[key]);
        }else{
            element[key] = attribute[key];
        }
    }
    children.forEach((child) => {
        if(typeof child == "object"){
            element.append(child);
        }
        if(typeof child == "string"){
            var node = document.createTextNode(child);
            element.append(node);
        }
    });
    return element;
}

function createUI() {
    movieList.innerHTML = "";
    movies.forEach((movie, index) => {
        var li = celm('li', {
            className: "flex"
        },
        celm('input', {
            type: "checkbox",
            checked: movie.isWatched,
            onClick: () => {
                handleToggle(index)
            }
        }),
        celm('p', {}, movie.name),
        celm('span', {
            "style.color": "red",
            onClick: () => {
                deleteMovie(index)
            }
        }, "X")
        );        
        movieList.append(li);
    });
    
    
}

createUI();

