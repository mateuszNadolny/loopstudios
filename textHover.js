// this script makes the paragraphs in #products section go black on hover

const wrapper = document.querySelectorAll('.product-img-div');
const text = document.querySelectorAll('.products-paragraph');


for (let i = 0; i < wrapper.length; i++) {
    wrapper[i].addEventListener('mouseover', () => {
            text[i].style.color = 'black';
    });
}

for (let i = 0; i < wrapper.length; i++) {
    wrapper[i].addEventListener('mouseout', () => {
            text[i].style.color = 'white';
    });
}


