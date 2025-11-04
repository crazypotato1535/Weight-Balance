<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Two Numbers</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        input, button {
            margin: 5px 0;
            padding: 8px;
        }
        #result {
            margin-top: 10px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h2>Add Two Numbers</h2>
    <input type="number" id="firstNumber" placeholder="Enter first number">
    <br>
    <input type="number" id="secondNumber" placeholder="Enter second number">
    <br>
    <button onclick="AddNumbers()">Add</button>
    <div id="result"></div>

    <script>
        function AddNumbers() {
            const firstValue = parseFloat(document.getElementById('firstNumber').value) || 0;
            const secondValue = parseFloat(document.getElementById('secondNumber').value) || 0;
            const sum = firstValue + secondValue;
            document.getElementById('result').textContent = `Result: ${sum}`;
        }
    </script>
</body>
</html>