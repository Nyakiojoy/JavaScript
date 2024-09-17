var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(Object.keys(student)); 

var student = {
    name: "David Rayy",


    sclass: "VI",
    rollno: 12
};

console.log('Before deleting rollno:', student);
delete student.rollno;
console.log('After deleting rollno:', student);

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(Object.keys(student).length); 

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

library.forEach(function(book) {
    console.log(`Title: ${book.title}, Author: ${book.author}, Reading Status: ${book.readingStatus}`);
});

function getSubsets(str) {
    let subsets = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            subsets.push(str.slice(i, j));
        }
    }
    return subsets;
}

console.log(getSubsets('dog')); 

var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];

// Sort by libraryID in descending order
library.sort((a, b) => b.libraryID - a.libraryID);

console.log(library);

function all_properties(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] === 'function';
    });
}

console.log(all_properties(Array)); 

function all_properties(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] === 'function';
    });
}

function parseURL(url) {
    var parser = new URL(url);
    
    return {
        protocol: parser.protocol,
        hostname: parser.hostname,
        pathname: parser.pathname,
        search: parser.search,
        hash: parser.hash,
        host: parser.host
    };
}


console.log(parseURL('https://www.example.com:8080/pathname/?search=test#hash'));

function getAllPropertyNames(obj) {
    let props = [];
    do {
        props = props.concat(Object.getOwnPropertyNames(obj));
    } while (obj = Object.getPrototypeOf(obj));
    return props;
}

console.log(getAllPropertyNames(new Date()));

function getAllValues(obj) {
    return Object.values(obj);
}

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(getAllValues(student)); 

function objectToPairs(obj) {
    return Object.entries(obj);
}

console.log(objectToPairs({ name: 'David Rayy', sclass: 'VI', rollno: 12 }));

function invertObject(obj) {
    let inverted = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            inverted[obj[key]] = key;
        }
    }
    return inverted;
}

console.log(invertObject({ name: 'David Rayy', sclass: 'VI', rollno: 12 }));

function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(hasProperty(student, 'name')); 
console.log(hasProperty(student, 'age')); 


















