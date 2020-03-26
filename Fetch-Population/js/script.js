
/* To create automatically checkboxes with all countries in the API */
(async function () {
    let countries = await fetchAllCountryNames();
    let dropdown_menu = $('#dropdown-menu');
    /* Generate dropDown with comboboxes */
    for (const data of countries) {
        let div = document.createElement('div');
        let input = document.createElement('input');
        let label = document.createElement('label');
        div.classList.add("dropdown-item", "form-check");
        input.classList.add("form-check-input");
        input.setAttribute('type', "checkbox");
        input.setAttribute('id', data);
        input.setAttribute('onclick', "checkBoxControl.addCurrentState(this.id, this.checked)");
        label.classList.add("form-check-label");
        label.setAttribute('for', data);
        label.textContent = data;
        div.append(input, label);
        dropdown_menu.append(div);
    }
    dropdown_menu.css('height', '75vh').css('overflow-y', 'scroll');
})();

/* Comboboxes controls and events */
$(function () {
    let selectedCountries = {};
    /* Add actual state of a checkbox to the object "selectedCountries" */
    checkBoxControl = {
        addCurrentState: function (id, checked) {
            if (!selectedCountries[id]) {
                selectedCountries[id] = true;
            } else {
                if (checked) {
                    selectedCountries[id] = true;
                } else {
                    selectedCountries[id] = false;
                }
            }
        }
    }

    /* Function to select and unselect all available countries in the list */
    $('#selectAll').click(function (e) {
        let items = $('#dropdown-menu').children().children('input');
        if (e.currentTarget.value == "false") {
            e.currentTarget.value = "true"
            e.currentTarget.innerHTML = "Unselect all";
            for (const item of items) {
                item.checked = true;
                selectedCountries[item.id] = true;
            }
        } else {
            e.currentTarget.value = "false"
            e.currentTarget.innerHTML = "Select all";
            for (const item of items) {
                item.checked = false;
                selectedCountries[item.id] = false;
            }
        }
    });

    $('#btn-generateChart').click(function () {
        let countriesList = [];
        for (const key in selectedCountries) {
            if (selectedCountries[key]) {
                countriesList.push(key);
            }
        }
        updateChart(countriesList);
    })
});

async function updateChart(list) {
    let displayLoading = $('#loadingInfo').toggleClass("d-none");
    let data = await getCountriesData(list);
    removeChartData();
    for (const key in data) {
        addChartData(data[key].countryName, data[key].countryPopulation);
    }
    displayLoading.toggleClass("d-none");
}

