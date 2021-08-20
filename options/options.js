
// Save the currently selected Country settings

function saveSettings() {

  function getCountry() {
    const country = document.querySelector("#country");
    return country.value;
  }


//On clicking the save button, save the currently selected settings.
const saveButton = document.querySelector("#save-button");
saveButton.addEventListener("click", saveSettings);
}