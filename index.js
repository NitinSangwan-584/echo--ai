const navbarbtn = () => {
    document.getElementById("nav-name").classList.toggle("show-nvabar")
    document.getElementById("rotats").classList.toggle("rotate40")
    document.getElementById("transparent").classList.toggle("bg-transparent")
    document.getElementById("rotats2").classList.toggle("rotate-45")
    document.body.classList.toggle("overflow-hidden")
}
document.querySelectorAll('.accordion-item').forEach(item => {
    const button = item.querySelector('.accordion-header');
    const arrow = item.querySelector('.arrow');
    const content = item.querySelector('.accordion-content');

    button.addEventListener('click', () => {
        // Toggle active class for content visibility
        content.classList.toggle('active');

        // Rotate the arrow
        arrow.classList.toggle('rotated');

        // Optionally, close other open items
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector('.accordion-content').classList.remove('active');
                otherItem.querySelector('.arrow').classList.remove('rotated');
            }

        });
    });
});
