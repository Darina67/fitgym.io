$("#nav-toggle").on("click", function(event){
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});
