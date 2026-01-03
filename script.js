function saveDonation() {
    let donations = JSON.parse(localStorage.getItem("donations")) || [];

    let donation = {
        donor: document.getElementById("donor").value,
        food: document.getElementById("food").value,
        quantity: document.getElementById("quantity").value,
        location: document.getElementById("location").value,
        time: document.getElementById("time").value
    };

    donations.push(donation);
    localStorage.setItem("donations", JSON.stringify(donations));

    alert("Thank you! Your food donation has been added.");
}

window.onload = function () {
    let container = document.getElementById("donations");
    if (!container) return;

    let donations = JSON.parse(localStorage.getItem("donations")) || [];

    donations.forEach(d => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
            <h3>${d.food}</h3>
            <p><b>Quantity:</b> ${d.quantity}</p>
            <p><b>Location:</b> ${d.location}</p>
            <p><b>Available till:</b> ${d.time}</p>
            <p><b>Donor:</b> ${d.donor}</p>
        `;
        container.appendChild(div);
    });
};