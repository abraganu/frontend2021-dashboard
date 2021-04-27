let people = [];
let films = [];
let species = [];
let starships = [];
let vehicles = [];
let mappedPeople = [];

/**
 * TODO: crear una nueva funcion que filtre los resultados repetidos
 * y concatene el array filtrado.
 * films
 * species
 * starships
 * vehicles
 * */ 

function mappedPeopleData(people = []) {
    return people.map((person) => {
        films = films.concat(person.films);
        starships = starships.concat(person.starships);
        return {
            birthYear: person.birth_year,
            created: person.created,
            edited: person.edited,
            eyeColor: person.eye_color,
            gender: person.gender,
            hairColor: person.hair_color,
            height: person.height,
            homeWorld: person.homeworld,
            mass: person.mass,
            name: person.name,
            skinColor: person.skin_color,
            url: person.url
        }
    })
}

async function getPeople() {
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    return mappedPeopleData(data.results);
}

getPeople().then((people) => {
    const foundItems = people.filter((person) => {
        return person.mass === '32';
    })
    console.log(starships);
    console.log(films);
})













