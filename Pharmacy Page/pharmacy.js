$(document).ready(function(){
    $(".menubar,.ca-menu, .fame, .s2, .s3, .s4, .s5, .s6, .s7").hide();
});

// aside link click show href
$(".link-category li a").on({click: function(event){

        var current_link = $(this);
        var current_link_href = $(this).attr("href");

        $(".link-category a").removeClass("active-link")
        current_link.addClass("active-link");

            $(".container").hide();
            $(current_link_href).fadeIn();

        event.preventDefault();
    }
});

// pagination link click show href
$(".pagination li a").on("click" , function(event){

    var current_link_href = $(this).attr("href");

    $(".container").hide();
    $(current_link_href).fadeIn();

    event.preventDefault();
});

// nav menu ico click slide down
$(".nav-menu").click(function(){
    
    $(".menubar").slideToggle();
});

// category menu icon click slide down
$(".category-menu-icon").click(function(){     
        $(".c2").slideToggle();
});

// aside menu bar link
$(".c2 li a").on({click: function(event){

    var current_link_href = $(this).attr("href");

        $(".container").hide();
        $(current_link_href).fadeIn();

    event.preventDefault();
}
});

// button click increase cart amount
var count = 0;
$(".btn-buy").on("click",function(){ 
    count++;
    $(".cart-amount").text(count);
});



