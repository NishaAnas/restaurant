let navBar =document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a)
{
    a.addEventListener("click" , function() 
    {
        navCollapse.classList.remove("show");
    })
})
document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    const popup = document.getElementById('popup');
    const confirmBtn = document.getElementById('confirmBtn');

    openBtn.addEventListener('click', function () {
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    confirmBtn.addEventListener('click', function () {
        alert('Calling the restaurant...');
        popup.style.display = 'none';
    });
});
function submitMaidID() {
    var maidID = document.getElementById("submitBtn").value;

    if (maidID.trim() !== "") {
        alert("Your Maid ID (" + maidID + ") is submitted successfully!");
    } else {
        alert("Error: Maid ID cannot be empty. Please enter a valid Maid ID.");
    }
}
function order1() {
    alert("Your order for Rainbow Vegetable Sandwich is placed successfully");
}
function order2() {
    alert("Your order for Vegitarian Burger is placed successfully");
}
function order3() {
    alert("Your order for Raspberry Stuffed Sandwitch is placed successfully");
}