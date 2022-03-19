const arrow1 = document.getElementById('iconImg1');
const arrow2 = document.getElementById('iconImg2');
const arrow3 = document.getElementById('iconImg3');

const ans1 = document.getElementById('ans-box-1');
const ans2 = document.getElementById('ans-box-2');
const ans3 = document.getElementById('ans-box-3');

const ans1Mobile = document.getElementById('ans-box-mobile-1');
const ans2Mobile = document.getElementById('ans-box-mobile-2');
const ans3Mobile = document.getElementById('ans-box-mobile-3');

const angle1 = document.getElementById('angle-1');
const angle2 = document.getElementById('angle-2');
const angle3 = document.getElementById('angle-3');

const hamburger = document.getElementById('hamburger');
const hmb = document.getElementById('hmb');

angle1.addEventListener('click', ()=>{
    angle1.classList.toggle('Inverse');
        angle1.classList.contains('Inverse') ? 
            ans1Mobile.style.display = 'none' : ans1Mobile.style.display = 'block';
});

angle2.addEventListener('click', ()=>{
    angle2.classList.toggle('Inverse');
        angle2.classList.contains('Inverse') ? 
            ans2Mobile.style.display = 'none' : ans2Mobile.style.display = 'block';
    }
);

angle3.addEventListener('click', ()=>{
    angle3.classList.toggle('Inverse');
        angle3.classList.contains('Inverse') ? 
            ans3Mobile.style.display = 'none' : ans3Mobile.style.display = 'block';
});

hamburger.addEventListener("click", () => {
    (hmb.style.opacity != 1)? hmb.style.opacity = 1 : hmb.style.opacity = 0;
})

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