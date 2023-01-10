// Récupérez le formulaire et consolez-le
let form = document.querySelector('form');
console.log(form);

// Récupérez les entrées par leur identifiant et console.log les.
const fNameInput = document.querySelector("#fname");
const lNameInput = document.querySelector("#lname");
console.log(fNameInput, lNameInput)

// Récupérez les entrées par leur nameattribut et console.log les
let input1 = document.querySelector("[name=fname]").value;
let input2 = document.querySelector("[name=lname]").value;
console.log(input1, input2);

//
form.addEventListener("submit", (event) => {
    // utiliser event.preventDefault()
    event.preventDefault();

    // obtenir les valeurs des balises d'entrée
    const fname = fNameInput.value;
    const lname = lNameInput.value;

    // assurez-vous qu'ils ne sont pas vides
    if (fname === '' || lname === '') {
        return;
    }

    // créer une livaleur par entrée
    let fnameItem = document.createElement('li');
    fnameItem.textContent = fname;
    let lnameItem = document.createElement('li');
    lnameItem.textContent = lname;

    // ajoutez-les à un <ul class="usersAnswer"></ul>, sous le form
    const list = document.querySelector('.usersAnswer');
    list.appendChild(fnameItem);
    list.appendChild(lnameItem);
})