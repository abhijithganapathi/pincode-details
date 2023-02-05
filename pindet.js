function search() {
    pincode = pininput.value
    fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        .then(data => data.json())
        .then(data => displayData(data))
    result0.innerHTML=``
    result1.innerHTML=``
    result2.innerHTML=``
}

function displayData(pinDetails) {
    num = getNumberFromEnd(pinDetails[0].Message)
    result0.innerHTML=`
    <h2 class="text-light">${num} Post office(s) found!</h2>
    `
    for (i = 0; i < num; i++) {
        pinName = pinDetails[0].PostOffice[i].Name
        pinDist = pinDetails[0].PostOffice[i].District
        pinRegion = pinDetails[0].PostOffice[i].Region
        pinCountry = pinDetails[0].PostOffice[i].Country
        result1.innerHTML +=`
        <h3>
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${pinName}</li>
                </ul>
            </div>
        </h3>
        `
        result2.innerHTML = `
        <div class="card">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> District: ${pinDist}</li>
                <li class="list-group-item"> Region: ${pinRegion}</li>
                <li class="list-group-item"> Country: ${pinCountry}</li>
            </ul>
        </div>
    `
    }
}

// function to get number of post offices from api
function getNumberFromEnd(str) {
    const matches = str.match(/[0-9]+$/);

    if (matches) {
        return parseInt(matches[0], 10);
    }

    return null;
}