// tipe data pada balikan function

function getName(): string {
    return "Hello, my name is Nicktra";
}

console.log(getName());

function getAge(): number {
    return 123;
}

function printName(): void {
    console.log("print name");
}

printName();

//////

function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

const result = multiply(2, 5);
console.log(result);

// function as type
type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
}

// default parameter
const fullName = (first: string, last: string = "Handi"): string => {
    return first + " " + last;
}

console.log(fullName("Mark"));

// optional parameter
const getUmur = (val1: string, val2?: string): string => {
    return val1 + val2;
}

console.log(getUmur("Mark"));