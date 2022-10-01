
var div1 = $("<div></div>").text("Hello")
var div2 = $("<div></div>")
var div3 = $("<div></div>")
$(div2).css("background-color","yellow")
$(div3).css("background-color","yellow")
$(div2).css("height","150px")
$(div3).css("height","150px")
var isShow = false;
$(".show-hide").on("click",()=>{
    if(isShow==false){
        $(".left").append(div1,div2,div3);
        $(".show-hide").text("hide");
        isShow = true;
    }else{
        $(".left").empty();
        isShow = false;
        $(".show-hide").text("show");
    }
    console.log(123)
})

$(".sum").on("click",()=>{
    let a = +$(".ip-1").val();
    let b = +$(".ip-2").val();
    let sum = a+b;
    console.log(sum)
    $(".sum-result").text(sum);
})

