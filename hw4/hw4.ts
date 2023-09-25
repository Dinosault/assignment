interface Live {
    street: string;
    city: string;
    country: string;
}
interface Data{
    name: string;
    age: number;
    isStudent: boolean;
    skills: string[];
    address: object;
}

const liveing: Live ={
    street: "123 Main St",
    city: "Exampleville",
    country: "Exampleland"
}
const data: Data={
    name: "Bob",
    age: 24,
    isStudent: false,
    skills: ["Javascript", "HTML", "CSS"],
    address:liveing
}
console.log(liveing);
console.log(data);