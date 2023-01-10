//Get the form and input elements
let form = document.querySelector('#MyForm');
let radiusInput = document.querySelector('#radius');
let volumeInput = document.querySelector('#volume');

//
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the radius value
    let radius = radiusInput.value;

    // Calculate the volume of the sphere
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the volume in the volume input element
    volumeInput.value = volume;
});