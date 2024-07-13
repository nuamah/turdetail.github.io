document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.toggle-button');
  const items = document.querySelectorAll('#item1, #item2');

  items.forEach(item => {
    console.log(item.id)
    if (item.id === 'item2') {
        item.style.display = "none";
    } 
});

  buttons.forEach(button => {
    button.addEventListener("click", function() {
        const targetId = this.getAttribute('data-target');

        items.forEach(item => {
            if (item.id === targetId) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
});
