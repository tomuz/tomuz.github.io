var dropdownCantidad = new ch.Dropdown(document.querySelector('.ch-dropdown-cantidad'));
var dropdownCuotas = new ch.Dropdown(document.querySelector('.ch-dropdown-cuotas'));

var carousel = new ch.Carousel(ch('.demo-carousel')[0], {
    pagination: false,
    arrows: true,
    limitPerPage: 2,
    autoMargin: false
});