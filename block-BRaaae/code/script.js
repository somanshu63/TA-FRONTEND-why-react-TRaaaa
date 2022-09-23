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

// function celm(type, attribute = {}, ...children){
//     var element = document.createElement(type);
//     for (const key in attribute) {
//         if(key.startsWith('data-')){
//             element.setAttribute(key, attribute[key])
//         }else if(key.startsWith('on')){
//             let eventType = key.replace('on', '').toLowerCase();
//             element.addEventListener(eventType, attribute[key]);
//         }else{
//             element[key] = attribute[key];
//         }
//     }
//     children.forEach((child) => {
//         if(typeof child == "object"){
//             element.append(child);
//         }
//         if(typeof child == "string"){
//             var node = document.createTextNode(child);
//             element.append(node);
//         }
//     });
//     return element;
// }

var elm = React.createElement;

function createUI() {
    // movieList.innerHTML = "";
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
        // movieList.append(li);
    });
    
    ReactDOM.render(ui, movieList)

}

createUI();

