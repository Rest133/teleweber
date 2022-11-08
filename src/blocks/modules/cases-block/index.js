const arrowSVG = `<svg width="98" height="99" viewBox="0 0 98 99" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_897_3626)">
<g filter="url(#filter1_b_897_3626)">
<circle cx="49" cy="49.2886" r="19" fill="black" fill-opacity="0.5"/>
</g>
<path d="M46.7197 41.6885L54.0664 49.0352L46.7197 56.3818" stroke="white" stroke-width="2.07796" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_897_3626" x="0" y="0.288574" width="98" height="98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.458824 0 0 0 0 0.458824 0 0 0 0 0.458824 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_897_3626"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_897_3626" result="shape"/>
</filter>
<filter id="filter1_b_897_3626" x="26.96" y="27.2486" width="44.08" height="44.08" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="1.52"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_897_3626"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_897_3626" result="shape"/>
</filter>
</defs>
</svg>
`

$('.cases-block__slider').slick({
    infinite: false,
    slidesToShow: 2,
    variableWidth: true,
    prevArrow: `<button class="cases-block__slider-arrow cases-block__slider-arrow_prev">${arrowSVG}</button>`,
    nextArrow: `<button class="cases-block__slider-arrow">${arrowSVG}</button>`,
});
