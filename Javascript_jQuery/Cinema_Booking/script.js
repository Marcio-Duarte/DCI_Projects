let selectedSeats = []; //Saves the taken places.
let seats = 0; //Count selected seats in this session.
const countSeatsElement = document.getElementById('count');
const totalAmountElement = document.getElementById('total');

// Load the session parameters.
(function () {
    /* Load session storage */
    let seatsData = sessionStorage.getItem("selectedSeats");
    if (seatsData) {
        selectedSeats = JSON.parse(seatsData);
    }
    refreshSeats();
})();

// Add the event to cancel the selected seats and show just taken seats again.
document.getElementById('cancel').addEventListener('click', () => {
    selectedSeats.splice(selectedSeats.length - seats, selectedSeats.length);
    countSeatsElement.innerText = seats = 0;
    setPrice();
    refreshSeats();
});

// Refresh and add events to all seats and set the already taken seats.
function refreshSeats() {
    document.querySelectorAll('.container .seat').forEach((element, index) => {
        element.setAttribute("data-index", index);
        element.addEventListener('click', selectSeat);
        element.classList.remove('selected');
        if (selectedSeats.includes(index.toString(), 0)) {
            element.classList.add('occupied');
        }
    });
    totalAmountElement.innerText = countSeatsElement.innerText = seats = 0;
    if (selectedSeats.length == 48) {
        alert('This room is already full\nCheck for the next sessions.')
    }
}

function selectSeat() {
    if (this.classList.contains('occupied')) {
        alert('This place is already taken');
    } else {
        if (this.classList.contains('selected')) {
            selectedSeats.splice(selectedSeats.indexOf(this.dataset.index), 1);
            seats--;
        } else {
            selectedSeats.push(this.dataset.index)
            seats++;
        }
        this.classList.toggle('selected');
        countSeatsElement.innerText = seats;
        setPrice();
    }
}

function setPrice() {
    totalAmountElement.innerText = seats * +document.getElementById('movie').value;
    // To save the booked seats in the storage
    sessionStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
}