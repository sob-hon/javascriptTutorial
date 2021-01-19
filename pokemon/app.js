// sequential requests
async function get3Pokemon() {
    // send one request and use await in each one to wait for response of that and when it arrived, go to another
    const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
    const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
    const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/5");
    // catch data and use it
    console.log(`${poke1.data.name} has ${poke1.data.abilities[0].ability.name} ability`);
    console.log(`${poke2.data.name} has ${poke2.data.abilities[0].ability.name} ability`);
    console.log(`${poke3.data.name} has ${poke3.data.abilities[0].ability.name} ability`);
}

// parallel requests
async function get3Pokemon(){
    // send all requests and don't wait for response of each one
    const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
    const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
    const promise3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
    // await the responses comming back
    const poke1 = await promise1;
    const poke2 = await promise2;
    const poke3 = await promise3;
    // catching data and use it
    console.log(`${poke1.data.name} has ${poke1.data.abilities[0].ability.name} ability`);
    console.log(`${poke2.data.name} has ${poke2.data.abilities[0].ability.name} ability`);
    console.log(`${poke3.data.name} has ${poke3.data.abilities[0].ability.name} ability`);
}

// rafactoring parallel requests

async function get3Pokemon(){
    // send all requests and don't wait for response of each one
    const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
    const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
    const promise3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
    // await the responses comming back
    const results = await Promise.all([promise1, promise2, promise3]);
    // catching data and use it
    console.log(`${results[0].data.name} has ${results[0].data.abilities[0].ability.name} ability`);
    console.log(`${results[1].data.name} has ${results[1].data.abilities[0].ability.name} ability`);
    console.log(`${results[2].data.name} has ${results[2].data.abilities[0].ability.name} ability`);
}

get3Pokemon();
