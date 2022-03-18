const arrow1 = document.getElementById('iconImg1');
const arrow2 = document.getElementById('iconImg2');
const arrow3 = document.getElementById('iconImg3');

const ans1 = document.getElementById('ans-box-1');
const ans2 = document.getElementById('ans-box-2');
const ans3 = document.getElementById('ans-box-3');

const hamburger = document.getElementById('hamburger');

arrow1.addEventListener('click', () => {
    arrow1.classList.toggle("inverse");
    arrow1.classList.contains("inverse") ? ans1.style.display = 'block' : ans1.style.display = 'none';
});

arrow2.addEventListener('click',() => {
    arrow2.classList.toggle("inverse");
    arrow2.classList.contains("inverse") ? ans2.style.display = 'block' : ans2.style.display = 'none';
});

arrow3.addEventListener('click',() => {
    arrow3.classList.toggle("inverse");
    arrow3.classList.contains("inverse") ? ans3.style.display = 'block' : ans3.style.display = 'none'; 
});