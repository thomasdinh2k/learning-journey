function activateButton(selector) {
    const subsElement = document.querySelector(selector);
    const button = document.querySelectorAll('.is-toggled');
    console.log(button)
    
    for (let i = 0; i < button.length ; i++) {
        button[i].classList.remove('is-toggled');
    }

    subsElement.classList.add('is-toggled');
}