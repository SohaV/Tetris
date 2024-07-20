const Shapes = [
    [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ],
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],
    [
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]
    ],
    [
        [1, 1],
        [1, 1]
    ]
];

const Colors = [
    "#fff",
    "#ef4043",
    "#fcec52",
    "#72bad5",
    "#99ca3c",
    "#f4a261",
    "#a874d2",
    "#fc9cb5"
];

const Rows = 20;
const Cols = 10;

const canvas = document.getElementById("tetris");
const ctx = canvas.getContext("2d");

// scaleWidth is 30 and total columns are 10, hence total width of the canvas is 300.
// Similarly, scaleHeight is 30 and total rows are 20, hence total height of the canvas is 600.
ctx.scale(30, 30);

let shapeObj = null;

function generateRandomShape() {
    let random = Math.floor(Math.random() * 7);
    let shape = Shapes[random];
    let colorIndex = random + 1; // random + 1 because the first color in the Colors array is white.

    let x = 4; // For the shape to start from the top-center of the canvas.
    let y = 0; // top-center y-coordinate is 0.

    return {shape, x, y, colorIndex};
}

setInterval(newGameState, 500);

function newGameState() {
    if (shapeObj == null) {
        shapeObj = generateRandomShape();
        renderShape();
    }
    moveDown();
}

function renderShape() {
    let shape = shapeObj.shape;

    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape[i].length; j++) {
            if (shape[i][j] == 1) {
                ctx.fillStyle = Colors[shapeObj.colorIndex];
                ctx.fillRect(shapeObj.x + j, shapeObj.y + i, 1, 1);
            }
        }
    }
}

function moveDown() {
    shapeObj.y += 1;
    renderShape();
}

