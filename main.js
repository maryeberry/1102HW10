const ol = document.querySelector("ol");
const movies = [
    {
        name: "Spirited Away",
        year: 2001,
        director: "Hayao Miyazaki",
        picture: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
        name: "The Handmaiden",
        year: 2016,
        director: "Park Chan-Wook",
        picture: "https://sothebys-md.brightspotcdn.com/87/b8/b4242a874f21bf596f2b1cb095c1/170l20895-bj7zy.jpg"
    },
    {
        name: "The Girl Who Leapt Through Time",
        year: 2006,
        director: "Mamoru Hosoda",
        picture: "https://m.media-amazon.com/images/M/MV5BNjhiN2FjMWUtMDAyMi00ODJkLWE3MDgtODJlYTA1NDk5M2MyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    }
];

const template = movies.map(movie => `
    <li>
        <p>Name: ${movie.name}</p>
        <p>Year: ${movie.year}</p>
        <p>Director: ${movie.director}</p>
        <p><img src="${movie.picture}" height="400"></p>
    </li>
`);
ol.innerHTML = template.join('');