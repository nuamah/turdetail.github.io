document.addEventListener("DOMContentLoaded", function () {
    const yesOptions = document.querySelectorAll(".inlineCheckbox1");
    const noOptions = document.querySelectorAll(".inlineCheckbox2");
    const uploads = document.querySelectorAll(".upload12");
  
    const toggleButtonVisibility = (yesOption, noOption, upload) => {
      if (yesOption.checked) {
        upload.style.display = "none";
      } else if (noOption.checked) {
        upload.style.display = "";
      }
    };
  
    // Set all upload buttons to be visible initially
    uploads.forEach(upload => {
      upload.style.display = "none";
    });
  
    // Iterate over each yesOption and add event listeners
    yesOptions.forEach(yesOption => {
      const group = yesOption.getAttribute("data-group");
      const noOption = document.querySelector(`.inlineCheckbox2[data-group="${group}"]`);
      const upload = document.querySelector(`.upload12[data-group="${group}"]`);
  
      if (noOption && upload) {
        // Attach event listeners to the checkboxes
        yesOption.addEventListener("change", () => toggleButtonVisibility(yesOption, noOption, upload));
        noOption.addEventListener("change", () => toggleButtonVisibility(yesOption, noOption, upload));
  
        // Initial check to set the button visibility on page load
        toggleButtonVisibility(yesOption, noOption, upload);
      }
    });
  });
  