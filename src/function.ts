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