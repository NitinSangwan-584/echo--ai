const navbarbtn = () => {
    document.getElementById("nav-name").classList.toggle("show-nvabar")
    document.getElementById("rotats").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotats2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}

// // // accordian code
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
    button.addEventListener('click', function () {
        const activeAccordionItem = document.querySelector('.accordion-item.active');
        const accordionItem = this.closest('.accordion-item');
        accordionItem.classList.toggle('active') && activeAccordionItem.classList.remove("active")
    });
}); 