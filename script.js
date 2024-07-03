// reveal timeline (tl) in each button

let tlElement = document.querySelectorAll('.reveal')

tlElement.forEach(function(reveal) {
    reveal.addEventListener('click', function() {
        reveal.classList.toggle('active')
    })
})