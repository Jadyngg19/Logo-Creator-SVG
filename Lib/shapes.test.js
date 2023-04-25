const {Circle, Triangle, Square} = require("/Users/jadyn/Bootcamp/Logo-Creator-SVG/lib/shapes");

describe("Circle Test", () => {
    test("Test for a circle with a #2986cc background", () => {
        const shape = new Circle();
        shape.setColor("#2986cc");
        expect(shape.render()).toEqual(
            `<circle cx="150" cy="115" r="80" fill="#2986cc"/>`
        );
    });
});

describe("Triangle Test", () => {
    test("Test for a traingle with a Green background", () => {
        const shape = new Triangle();
        shape.setColor("Green");
        expect(shape.render()).toEqual(
            `<polygon points="150, 18 244, 182 56, 182" fill="Green"/>`
        );
    });
});

describe("Square Test", () => {
    test("Test for a square with a Pink background", () => {
        const shape = new Square();
        shape.setColor("Pink");
        expect(shape.render()).toEqual(
            `<rect x="73" y="40" width="160" height"160" fill="Pink"/>`
        );
    });
});