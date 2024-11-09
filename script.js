function calculateFootprint() {
    const productType = document.getElementById('product').value;
    const usage = document.getElementById('usage').value;
    let factor = 0;

    if (productType === 'bottle') {
        factor = 0.4; 
    } else if (productType === 'toothbrush') {
        factor = 0.3; 
    }

    if (usage && usage > 0) {
        const footprint = usage * factor;
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Estimated carbon footprint: ${footprint.toFixed(2)} kg CO₂/year.`;
        resultElement.classList.add('show-result'); 
    } else {
        alert("Please enter a valid usage amount.");
    }
}

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Thank you for your message!");
});
