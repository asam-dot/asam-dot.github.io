document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Display the BMI result
    document.getElementById('bmiResult').textContent = bmi;

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        // Display the BMI category
        document.getElementById('bmiCategory').textContent = `Category: ${category}`;
    } else {
        alert('Please enter valid numbers for weight and height.');
    }
});
