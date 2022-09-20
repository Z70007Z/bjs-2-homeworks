// Задание 1

function parseCount(elem) {
    const parsed = Number.parseInt(elem);
    if (Number.isNaN(parsed)) {
        throw new Error("Невалидное значение");
    } else {
        return parsed;
    }     
}

function validateCount(elem) {
    try {
        return parseCount(elem);
    }
    catch(error) {
        return error;
    }   
}

// Задание 2

class Triangle {

    constructor(side1, side2, side3) {
        if (((side1 + side2) < side3) || ((side1 + side3) < side2) || ((side2 + side3) < side1)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.sideA = side1;
        this.sideB = side2;
        this.sideC = side3;
    }  

    getPerimeter() {
        let sum = this.sideA + this.sideB + this.sideC;
        return sum;
    }

    getArea() {
        let p = 1/2 * (this.sideA + this.sideB + this.sideC);
        let s = parseFloat((Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC))).toFixed(3))
        return s;
    }
}

function getTriangle(sideA,sideB,sideC) {
    try {
        const triangleNew = new Triangle(sideA, sideB, sideC);
        return triangleNew;  
    }
    catch(error) {       
        return () => {
            // triangleNew.getPerimeter() = () => {"Ошибка! Треугольник не существует"};
            // triangleNew.getArea() = () => {"Ошибка! Треугольник не существует"};
            console.log("Ошибка! Треугольник не существует");
        }
    }   
}