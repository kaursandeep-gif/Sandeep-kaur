function calculateCost() {
    // Retrieve user input values
    const destination = document.getElementById("destination").value;
    const travelers = parseInt(document.getElementById("travelers").value);
    const accommodation = document.getElementById("accommodation").value;
    const transport = document.getElementById("transport").value;

    // Base costs for each destination
    const destinationCosts = {
        paris: 1000,
        newyork: 1200,
        tokyo: 1500
    };

    // Cost multipliers for accommodation
    const accommodationCosts = {
        budget: 1,
        midrange: 1.5,
        luxury: 2.5
    };

    // Cost multipliers for transportation
    const transportCosts = {
        flight: 500,
        bus: 100,
        car: 300
    };

    // Calculate cost based on user input
    const baseCost = destinationCosts[destination] || 0;
    const accommodationCost = baseCost * accommodationCosts[accommodation];
    const transportCost = transportCosts[transport] * travelers;
    const totalCost = (accommodationCost + transportCost) * travelers;

    // Display the estimated cost
    document.getElementById("estimate").innerText = `Estimated Cost: $${totalCost.toFixed(2)}`;
}
