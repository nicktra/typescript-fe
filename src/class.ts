export class User {
    name: string;

    constructor(name: string, public age: number) {
        this.name = name;
    }

    setName(value: string): void {
        this.name = value;
    }

    getName = (): string => {
        return this.name;
    }
}

// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan kelas turunannya
// private = hanya bisa di akses dari class itu sendiri

class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string;

    constructor(phone: string, name: string, age: number) {
        super(name, age);
        this.phone = phone;
    }

    getRole(): { read: boolean, write: boolean } {
        return {
            read: this.read,
            write: this.write
        };
    };
}

let admin = new Admin('08128244444', 'Tony', 25);
admin.getName();
admin.getRole();
admin.setName("abc");
admin.phone;