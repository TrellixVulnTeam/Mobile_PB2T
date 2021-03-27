function calculate(dialog) {
    // function to calculate body mass index
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    var bmi = weight * height
    document.getElementById('bmi-value').innerText = bmi
    document.getElementById(dialog).show()
    
    
}