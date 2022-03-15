const arrow1 = document.getElementById('iconImg1')
const arrow2 = document.getElementById('iconImg2')
const arrow3 = document.getElementById('iconImg3')
const ans1 = document.getElementById('ans-box-1')
const ans2 = document.getElementById('ans-box-2')
const ans3 = document.getElementById('ans-box-3')

arrow1.addEventListener('click', () => {
    arrow1.classList.toggle("inverse");
    console.log(ans1.style)
})

arrow2.addEventListener('click',() => {
    arrow2.classList.toggle("inverse");
})

arrow3.addEventListener('click',() => {
    arrow3.classList.toggle("inverse");
})
