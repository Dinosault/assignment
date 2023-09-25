class Teacher {
    name : string;
    age : number;
    hascar:boolean;

    // 為定義好的人套上身份, Teacher類別
    constructor(data:Person){
        this.name = data.name;
        this.age = data.age;
        this.hascar = data.hascar;
    }

    displayInfo(): void{
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Hascar: ${this.hascar}`);
    }
}
interface Person{
    name: string;
    age: number;
    hascar: boolean;
}
// 定義物件，賦予值
// 定義一個人
const bobo : Person ={ 
    name: 'Bob',
    age: 27,
    hascar: false
};
// 將物件作為參數傳入，用以建立類別
// 分配身份, 類別
const bob: Teacher = new Teacher(bobo);
bob.displayInfo();