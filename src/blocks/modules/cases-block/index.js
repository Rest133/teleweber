const arrowSVG = `<svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.71973 1.68848L9.06641 9.03516L1.71973 16.3818" stroke="white" stroke-width="2.07796" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

$('.cases-block__slider').slick({
    infinite: false,
    slidesToShow: 2,
    variableWidth: true,
    prevArrow: `<button class="cases-block__slider-arrow cases-block__slider-arrow_prev">${arrowSVG}</button>`,
    nextArrow: `<button class="cases-block__slider-arrow">${arrowSVG}</button>`,
});
