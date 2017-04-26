$(".item1").click(function () {
    $(".item1").addClass("active");
    $(".item2").removeClass("active");
    $(".item3").removeClass("active");

})

$(".item2").click(function () {
    $(".item1").addClass("active");
    $(".item2").removeClass("active");
    $(".item3").removeClass("active");
});

$(".item3").click(function () {
    $(".item3").addClass("active");
    $(".item2").removeClass("active");
    $(".item1").removeClass("active");
   })


$('.item1').click(function () {
    $("#first").addClass("active");
    $("#second").removeClass("active");
    $("#third").removeClass("active");
    $("#fourth").removeClass("active");
    $("#fifth").removeClass("active");
})

$(".item2").click(function () {
    $("#first").removeClass("active");
    $("#second").addClass("active");
    $("#third").removeClass("active");
    $("#fourth").removeClass("active");
    $("#fifth").removeClass("active");
})

$(".item3").click(function () {
    $("#first").removeClass("active");
    $("#second").removeClass("active");
    $("#third").addClass("active");
    $("#fourth").removeClass("active");
    $("#fifth").removeClass("active");
})


