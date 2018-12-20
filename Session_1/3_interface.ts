//An interface is a syntactical contract that an entity should conform to

function testA(person: { name: string, age: number }) {
    console.log(person.name);
    console.log(person.age);
}

testA({ name: "A", age: 10 });

//There may be other functions also requires same argument signature then we will have to
//write the whole signature again

function otherFunction(person: { name: string, age: number }) {

}

//Better apporach define a interface
interface Person {
    name: string,
    age: number
}


function testB(person: Person) {
    console.log(person.name);
    console.log(person.age);
}

testB({ name: "A", age: 10 });
