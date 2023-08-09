const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker', // that space after "Anakin" is how we are determining where to split
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const names = characters.map((character) => character.name)
console.log(names);
//2. Get array of all heights
const heights = characters.map((character) => character.height)
console.log(heights);
//3. Get array of objects with just name and height properties
const nameHeight = characters.map((character) => ({
    name: character.name,
    height: character.height,
}))
console.log(nameHeight);
//4. Get array of all first names
const firstNames = characters.map(character => character.name.split(" ")) // splitting it based on the space inside the object
console.log(firstNames);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0)
console.log(totalMass);
//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0)
console.log(totalHeight);
//3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if (acc[color]) {
        acc[color]++
    } else {
        acc[color] = 1;
    }
    return acc
}, {})
console.log(charactersByEyeColor);
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
const byMass = characters.sort((a, b) => {
    return a.mass - b.mass
    return b.mass - a.mass // descending order
})
console.log(byMass);
//2. Sort by height
const byHeight = characters.sort((a, b) => {
    return a.height - b.height
})
console.log(byHeight);
//3. Sort by name
const byName = characters.sort((a,b) => {
    if (a.name < b.name) return -1;
    return 1;
})
console.log(byName);
//4. Sort by gender
const byGender = characters.sort((a, b) => {
    if (a.gender === "female") return -1;
    return 1;
})
console.log(byGender);

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
