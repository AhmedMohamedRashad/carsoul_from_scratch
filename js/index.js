var imgs = Array.from(document.querySelectorAll(".item img"));
var lightBox = document.getElementById("lightBox");
var lightBoxItem = document.getElementById("lightBoxItem");
var closeBtn = document.getElementById("closeBtn");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var currentIndex;

for(var i=0;i<imgs.length; i++)
{
    imgs[i].addEventListener("click",function(e){
        
        currentIndex = imgs.indexOf(e.target);
        var imgSrc = e.target.getAttribute("src");
        lightBoxItem.style.backgroundImage="url("+imgSrc+")";
        lightBox.style.display="flex";
        
    });
}


prevBtn.addEventListener("click",prevSlide);
nextBtn.addEventListener("click",nextSlide);
closeBtn.addEventListener("click",closeMethod);

function closeMethod(){
    lightBox.style.display = "none";
}

function prevSlide(){
    currentIndex--;
    if(currentIndex < 0)
    {
        currentIndex = imgs.length-1;
    }
    lightBoxItem.style.backgroundImage = "url("+imgs[currentIndex].getAttribute("src")+")";
}
function nextSlide(){
    currentIndex++;
    if(currentIndex >= imgs.length)
    {
        currentIndex=0;
    }
    lightBoxItem.style.backgroundImage = "url("+imgs[currentIndex].getAttribute("src")+")";
}
document.addEventListener("keydown",function(e){
  
    if(e.code == "Escape"){
        closeMethod();
    }
    else if(e.code == "ArrowRight")
    {
        nextSlide();
    }
    else if(e.code == "ArrowLeft")
    {
        prevSlide();
    }
});
lightBox.addEventListener('click', function(e){   
    if (!lightBoxItem.contains(e.target)){
      closeMethod();
    }
  });
  