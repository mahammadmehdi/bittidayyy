const icon = document.querySelector(".icon");
const newDiv = document.querySelector(".hidden");
const XIcon = document.querySelector(".XIcon");

icon.addEventListener("click",function () {
    newDiv.style.display="block";
    icon.style.display= "none";
    XIcon.style.display= "block";

})
XIcon.addEventListener("click", function () {
    newDiv.style.display="none";
    icon.style.display="block";
    XIcon.style.display="none";
})


const bagicon = document.querySelector(".bagIcon")
const exit = document.querySelector(".exit")
const fixnav = document.querySelector(".fixnav")

bagicon.addEventListener("click", function () {
    fixnav.style.transform="translate(0px)"

})
exit.addEventListener("click", function () {
    fixnav.style.transform="translate(400px)"
})



document.addEventListener("DOMContentLoaded", function() {
    const rangeMin = document.getElementById("range-min");
    const rangeMax = document.getElementById("range-max");
    const minValue = document.getElementById("min-value");
    const maxValue = document.getElementById("max-value");

    rangeMin.addEventListener("input", updatePriceValues);
    rangeMax.addEventListener("input", updatePriceValues);

    function updatePriceValues() {
        const minValueText = `$${rangeMin.value}`;
        const maxValueText = `$${rangeMax.value}`;

        minValue.textContent = minValueText;
        maxValue.textContent = maxValueText;
    }
});

