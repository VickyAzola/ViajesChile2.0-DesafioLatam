//Activación de tooltips
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
//END tooltips

//Activar Alert on click
const alertPlaceholder = document.getElementById('alertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('showAlert')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('¡Tu mensaje fue enviado con exito!', 'info')
    })
}
//END Alert

//Para hacer que el navbar cambie de color onScroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $("nav").css({
        "background-color": "#212429",
        transition: "all ease-in-out .3s",
        });
    } else {
        $("nav").css({
        "background-color": "transparent",
        transition: "all ease-in-out .3s",
        });
    }
});
