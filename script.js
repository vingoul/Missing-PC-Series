var json = [
    {
        "type": "FOTW",
        "values": ["Japan", "Slovenia", "Sweden", "Czech Republic ", "Switzerland ", "Netherlands", "United Kingdom", "Hungary", "United Arab Emirates", "Austria", "Taiwan", "Romania", "Spain", "Andorra", "Gibraltar", "Sri Lanka", "India", "Liechtenstein", "Northern Ireland", "Estonia", "Finland", "Australia", "European Union", "Indonesia", "Croatia", "Germany", "Hong Kong", "England", "China", "Canada", "Bulgaria", "Cambodia", "Malaysia", "Kosovo", "Albania", "Montenegro", "Italy", "Poland", "Ukraine", "Laos", "Azores", "Norway", "Bosnia", "Chile", "Cyprus", "Greece", "Philippines", "Argentina", "South Korea", "French Guyana", "Aland Island", "ASEAN", "Turkey (Arranged)", "Cocos Island", "Thailand", "Costa Rica", "Ireland", "Dominican Republic (Arranged)", "Palau", "Portugal", "Azerbaijan", "USA", "Macau", "Iceland", "Belgium", "Latvia", "Kazakhstan", "Israel", "Benin", "Iran", "Ascension Island", "Falkland Island", "Nepal (Arranged)", "Serbia", "Slovakia", "Vietnam", "Uruguay", "Cuba", "Brazil", "Brunei", "Ivory Coast (Arranged)", "Rwanda", "Vatican City", "Singapore", "France", "Luxembourg", "Suriname", "Russia (Arranged)", "Malta (Arranged)", "Guadeloupe", "Uzbekistan (Arranged)", "Papua New Guineu", "Seychelles (Arranged)", "Bangladesh (Arranged)", "Peru", "North Macedonia", "Wales", "Belarus", "Bahamas", "Djibouti", "Lithuania", "Fiji", "Eswatini", "Moldova", "Jordan (Arranged)", "Oman", "San Marino", "Maldives", "Pitcairn Islands", "Belize", "Kyrgyzstan", "Georgia", "Mozambique", "New Zealand", "Comoros", "Nauru (Arranged)", "Angola", "Senegal", "South Africa", "Armenia", "Morocco"]
    },
    {
        "type": "MOTW",
        "values": ["Austria", "Costa Rica", "Canada", "UK", "Hong Kong", "Italy", "Finland", "Norway", "Spain", "Malaysia", "Japan", "Germany", "Czech Republic", "Taiwan", "China", "England", "Croatia", "Thailand", "UAE", "Sovereign Military Order Of Malta", "Poland", "Ukraine", "Armenia", "Portgual", "Latvia", "Turkey (Arranged)", "St Pierre and Miquelon", "Singapore", "Malta", "India (Arranged)", "Nepal", "Maldives", "Philippines", "Switzerland", "Slovenia", "Peru", "Belarus", "Bahamas", "Greece", "Hungary", "Ireland", "Cyprus", "Indonesia", "Pitcairn Islands", "San Marino", "Greenland", "Estonia", "Honduras", "Mozambique", "Denmark", "New Zealand ", "Israel", "USA (Arranged)", "France (Arranged)", "Nauru (Arranged)", "Mexico", "Egypt", "Macau"]

    },
    {
        "type": "Loupaper",
        "values": ["Alaska", "California", "Colorado", "Connecticut", "Florida", "Georgia", "Kentucky", "Louisiana", "Maine", "Maryland", "Michigan", "Minnesota", "New Jersey", "New Mexico", "New York", "Ohio", "Pennsylvania", "South Carolina", "Tennessee", "Texas", "Washington"]
    },
    {
        "type": "Missing FOTW",
        "values": [“Afghanistan”, “American Samoa (USA)”, “Angola”, “Anguilla (UK)”, “Antigua and Barbuda”, “Argentina”, “Aruba (Netherlands)”, “Azerbaijan”, “Bahamas”, “Bahrain”, “Belize”, “Benin”, “Bermuda (UK)”, “Bolivia”, “Botswana”, “Burkina Faso”, “Burundi”, “Cambodia”, “Cayman Islands (UK) ”, “Central African Republic”, “Chad”, “Chile”, “Cocos (Keeling) Islands (Australia) ”, “Colombia”, “Comoros”, “Costa Rica”, “Cuba”, “Cyprus”, “Democratic Republic of the Congo”, “Djibouti”, “Dominica”,
“Dominican Republic”, “Ecuador”, “El Salvador”, “Equatorial Guinea”, “Ethiopia”, “Fiji”, “French Guiana (France) ”, “French Polynesia (France) ”, “Gabon”, “Gambia”, “Guadeloupe (France) ”, “Guatemala”, “Guinea”, “Guinea-Bissau”, “Guyana”, “Haiti”, “Iran”, “Iraq”, “Isle of Man (UK) ”, “Ivory Coast”, “Kiribati”, “Kuwait”, “Lebanon”, “Lesotho”, “Liberia”, “Libya”, “Madagascar”, “Malawi”, “Mali”, “Malta”, “Marshall Islands”, “Martinique (France) ”, “Mauritania”, “Mayotte (France) ”, “Mexico”, “Montserrat (UK) ”, “Morocco”, “Myanmar”, “Nauru”, “New Caledonia (France) ”, “Nicaragua”, “Niger”, “Nigeria”, “Niue (NZ) ”, “Norfolk Island (Australia) ”, “North Korea”, “Northern Mariana Islands (USA) ”, “Oman”, “Palau”, “Palestine”, “Panama”, “Papua New Guinea”, “Paraguay”, “Peru”, “Pitcairn Islands (UK)”, “Puerto Rico”, “Qatar”, “Republic of the Congo”, “Saint Barthelemy (France) ”, “Saint Kitts and Nevis”, “Saint Lucia”, “Saint Martin (France) ”, “Saint Pierre and Miquelon (France)”, “Saint Vincent and the Grenadines”, “Samoa”, “Sao Tom and Principe”, “Saudi Arabia”, “Senegal”, “Seychelles”, “Sint Maarten (Netherlands) ”, “Solomon Islands”, “Somalia”, “South Sudan”, “Sudan”, “Suriname”, “Svalbard and Jan Mayen (Norway) ”, “Swaziland”, “Syria”, “Tajikistan”, “Tokelau (NZ) ”, “Tonga”, “Turkey”, “Turkmenistan”, “Turks and Caicos Islands (UK) ”, “Tuvalu”, “United Arab Emirates”, “United States Virgin Islands (USA) ”, “Uruguay”, “Vanuatu”, “Wallis and Futuna (France) ”, “Yemen”, “Zambia”, “Zimbabwe”, “SINT EUSTATIUS”, “BONAIRE”, “East Timor”, “SABA”, “Ascension”, “British Indian Ocean Territory”, “Saint Helena”, “Eswatini”]
    },
{
“type”: “Missing Greetings From “,
“value”: [“Argentina”, “Armenia”, “Austria”, “Azerbaijan”, “Barbados”, “Bolivia”, “Colombia”, “Costa Rica”, “Cuba”, “Ecuador”, “Kazakhstan”, “Kyrgyzstan”, “Latvia”, “Mauritius”, “Mexico”, “Moldova”, “Romania”, “South Africa”, “Tajikistan”, “Turkey”, “Spain Bullfighter (for GF) ”]
    }
]


document.getElementById("searchInput").onkeyup = function () { search() }
search()

function search() {
    var input;
    input = document.getElementById("searchInput").value;
    var searchList = document.getElementById("searchResult");
    searchList.innerHTML = "";
    var fragList = document.createDocumentFragment();

    json.forEach(function (item) {
        var values = item.values
        var filteredRes = values.filter(
            item => item.toLowerCase().includes(input.toLowerCase())
        );
        var arrangedPlaces = filteredRes.filter(
            place => place.toLowerCase().includes("Arranged".toLowerCase())
        );
        var obtainedPlaces = filteredRes.filter(filteredPlaces => !arrangedPlaces.includes(filteredPlaces));
        if (filteredRes.length !== 0) {
            var topDiv = document.createElement('div');
            topDiv.className = "card";
            topDiv.style.textAlign = "center"
            var headerDiv = document.createElement('div');
            headerDiv.className = "card-header";
            headerDiv.textContent = item.type;
            headerDiv.style.fontSize = '18px';
            headerDiv.style.textAlign = "center";
            topDiv.appendChild(headerDiv);
            var badgeSpan = document.createElement('span');
            badgeSpan.className = "badge badge-pill badge-primary";
            badgeSpan.textContent = obtainedPlaces.length.toString()
            badgeSpan.style.marginLeft = '8px';
            badgeSpan.style.marginBottom = '8px';
            headerDiv.appendChild(badgeSpan)
            var obtainedPlaceList = obtainedPlaces.sort().join(", ");
            var arrangedPlaceList = arrangedPlaces.sort().join(", ");
            var obtainedDiv = document.createElement("p");
            var arrangedDiv = document.createElement("p");
            obtainedDiv.textContent = obtainedPlaceList;
            obtainedDiv.className = "list-group-item lead";
            arrangedDiv.textContent = arrangedPlaceList;
            arrangedDiv.className = "list-group-item lead";
            headerDiv.appendChild(obtainedDiv);
            if (arrangedPlaceList.length != 0) {
                headerDiv.appendChild(arrangedDiv);
            }
            fragList.appendChild(topDiv);
            searchList.appendChild(fragList);
        }
    });
}
