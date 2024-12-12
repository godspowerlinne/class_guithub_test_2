<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #ffffff;
    font-family: Arial, sans-serif;
}

.calculator {
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    overflow: hidden;
}

.display {
    background-color: #222;
    color: #fff;
    text-align: right;
    padding: 20px;
    font-size: 2em;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: #ffffff;
}

.btn {
    padding: 20px;
    font-size: 1.5em;
    border: 1px solid #ddd;
    cursor: pointer;
    background-color: #f9f9f9;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
}

.btn.operator {
    background-color: #f0a500;
    color: #fff;
}

.btn:active {
    background-color: #ddd;
}

    </style>
</head>
<body>
    <div class="calculator">
        <div class="display" id="display">0</div>
        <div class="buttons">
            <button class="btn">7</button>
            <button class="btn">8</button>
            <button class="btn">9</button>
            <button class="btn operator">/</button>
            <button class="btn">4</button>
            <button class="btn">5</button>
            <button class="btn">6</button>
            <button class="btn operator">*</button>
            <button class="btn">1</button>
            <button class="btn">2</button>
            <button class="btn">3</button>
            <button class="btn operator">-</button>
            <button class="btn">0</button>
            <button class="btn">.</button>
            <button class="btn operator">+</button>
            <button class="btn operator">=</button>
        </div>
    </div>
</body>
</html>
