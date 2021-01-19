// axios requesting nesting
axios.get("http://swapi.dev/api/people")
    .then(({data}) => {
        for(let planet of data.results){
            console.log(planet.name);
        }
        return axios.get(data.next);
    })
    .then(({data}) => {
        for(let planet of data.results){
            console.log(planet.name);
        }
        return axios.get(data.next);
    })
    .then(({data}) => {
        for(let planet of data.results){
            console.log(planet.name);
        }
        return axios.get(data.next);
    })
    .then(({data}) => {
        for(let planet of data.results){
            console.log(planet.name);
        }
        return axios.get(data.next);
    })
    .then(({data}) => {
        for(let planet of data.results){
            console.log(planet.name);
        }
        return axios.get(data.next);
    })
    .then(({data}) => {
        for(let planet of data.results){
            console.log(planet.name);
        }
    })
    .catch((error) => {
        console.log(error);
    });

// axios nesting requesting refacture
const fetchNextPage = (url = "http://swapi.dev/api/people") => {
    return axios.get(url);
};

const ptintPlanets = ({data}) => {
    for(let planet of data.results){
        console.log(planet.name);
    }
    return Promise.resolve(data.next);
};

fetchNextPage()
    .then(ptintPlanets)
    .then(fetchNextPage)
    .then(ptintPlanets)
    .then(fetchNextPage)
    .then(ptintPlanets)
    .then(fetchNextPage)
    .then(ptintPlanets)
    .catch((error) => {
        console.log(error);
    });