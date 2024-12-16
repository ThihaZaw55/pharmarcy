$(document).ready(function(){
    $(".menubar, .ca-menu, .fame, .s2, .s3, .s4, .s5, .s6, .s7").hide();
});

// aside link click show href
$(".link-category li a").on({click: function(event){

        var current_link = $(this);
        var current_link_href = $(this).attr("href");

        $(".link-category a").removeClass("active-link")
        current_link.addClass("active-link");

            $(".container").hide();
            $(current_link_href).fadeIn();

        // event.preventDefault();
    }
});

// aside category menubar hideSidebar
function hideSidebar(){
    $(".category-menubar").slideUp();
}

// nav menu ico click slide down
$(".menu-icon").click(function(){
    
    $(".menubar").slideToggle();
});

// category menu icon click slide down
$(".category-menu-icon").click(function(){     
        $(".category-menubar").slideToggle();
});

// reset menu
function resetMenu(){
    if(window.innerWidth >= 900){
        $(".category-menubar").hide();
        $(".menubar").hide();
    }
}
window.addEventListener("resize", resetMenu);

// aside menu bar link
$(".category-menubar li a").on({click: function(event){

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

// pagination
let thisPage = 1;
let limit = 8;
let s1 = document.querySelectorAll(".s1 #card-container");
// let fame = document.querySelectorAll(".fame #card-container");
// let s2 = document.querySelectorAll(".s2 #card-container");

function loadItem(){
    let start = limit * (thisPage - 1);
    let end = limit * thisPage - 1;

    s1.forEach((item, key) => {
        if(key >= start && key <= end){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
    listPage();
}
loadItem();

function listPage(){
    let count = Math.ceil(s1.length / limit);
    document.querySelector(".p1 .pagination").innerHTML = "";

    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;

        if(i == thisPage){
            newPage.classList.add("active");
        }

        newPage.setAttribute('onclick', "changePage("+ i +")");
        document.querySelector(".pagination").appendChild(newPage);
    }
}

function changePage(i){
    thisPage = i;
    loadItem();
}


