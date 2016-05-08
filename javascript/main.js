function toggleAppearance()
{
     var dataDiv = document.getElementById("about-me");
     if(dataDiv.style.visibility == "hidden")
     {
          dataDiv.style.visibility = "visible";
     }
     else
     {
          dataDiv.style.visibility = "hidden";
     }
}

$('.about-section').click(function(){
    $(this).toggleClass('show');
});