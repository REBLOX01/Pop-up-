document.querySelector("#open-popup").addEventListener("click",function(){
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .popup-body .close-btn").addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("active");
});