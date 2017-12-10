$(function()
{
    var arr=[];
    var refer=['javascript库','桌布','俄罗斯','38万公里']
    var score=0;
    $("#img1").click(function()
    {
        $("#box1").hide().siblings().hide();
        $(".box2:eq(0)").show();
    })
    $(".box2 p").click(function()
    {
        /*  $(".box2 img").show();*/
        $(this).nextAll(".img-right").show()
        $(this).addClass("bg").siblings().removeClass("bg")

    })
    $(".box2 .img-right").click(function()
    {
        $(".box2").hide()
        $(this).parent().next().show();
        /*var ind=$(this).parent().find("p[class='bg']").index//索引为什么不对*/
        var ind=$(this).parent().find("p[class='bg']").text();
        arr.push(ind)

        /*for(var i=0;i<$(".box2").length;i++)
         {
         if($(this).prevAll("p").eq(i).attr("background")=="blue")
         {
         arr.push(i)
         }
         }*/
    })
    $(".box2 .img-left").click(function()
    {
        $(".box2").hide()
        $(this).parent().prev().show();

    })
    $(".box2 .over").click(function(){
        for(var i=0;i<arr.length;i++)
        {
            if(arr[i]==refer[i])
            {
                score+=25
                $(".answer").find("span em").eq(i).text("√")
                $(".answer").find("span").eq(i).css("background","green")
            }
            else
            {

                $(".answer").find(" span em").eq(i).text("x")
                $(".answer").find("span").eq(i).css("background","red")
                if(arr[i]!="")
                {
                    $(".rusult1").eq(i).find("p:contains("+arr[i]+")").css("background","red")
                }
            }
        }
        $(".answer  #result").text("您的分数"+score)
        switch(score)
        {
            case 0:
                $(".answer p:eq(0)").text("你太可怜了")
                break;

            case 25:
                $(".answer p:eq(0)").text("表现很差")
                break;
            case 50:
                $(".answer p:eq(0)").text("还需努力")
                break;
            case 75:
                $(".answer p:eq(0)").text("表现不错")
                break;
            case 100:
                $(".answer p:eq(0)").text("Very Good!")
                break;
        }
        console.log(arr);
    })

    $(".answer span").hover(function()
    {
        var index=$(this).index("span")
        console.log($(this))
        console.log(index)
        $(".rusult1").hide()
        $(this).parent().find(".rusult1").eq(index).show()
    },function()
    {
        $(".rusult1").hide()
    })
})