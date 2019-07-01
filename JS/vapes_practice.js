/**
 * Created by Jwiz on 12/9/2014.
 */
function main(){
    "use-strict";

    var photos = ["images/vapes-logo.jpg", "images/product1.jpg","images/product2.jpg","images/product3.jpg","images/product4.jpg","images/product5.jpg","images/hookah.jpg"];
    var i, n = photos.length;

    var bgPhoto = $("#ad_photo");

    (function (){
        for(i = 0; i < n; i++){
            $('#ad_photo').addClass("preloaded").append('<img src=' + photos[i] + ' class="ad_photo" width="700px" height="350px">');
        }
        return i = 0;
    }());
    $(".ad_photo").eq(6).css("z-index", 6);
    $(".ad_photo").eq(5).css("z-index", 5);
    $(".ad_photo").eq(4).css("z-index", 4);
    $(".ad_photo").eq(3).css("z-index", 3);
    $(".ad_photo").eq(2).css("z-index", 2);
    $(".ad_photo").eq(1).css("z-index", 1);
    $(".ad_photo").eq(0).css("z-index", 0);


    setInterval(flipIn, 6000);


    $(document).click(function(){
        console.log($('#ad_photo').css("background-image"));
        console.log(i);
    });

    function flipIn(){
        if(i == n - 1){
            i = 0;
            $('.ad_photo').eq(i).velocity({translateX: '700px', rotateX: '360deg'}, 2500,
                function() {
                    $('#ad_photo').css("background-image", 'url(' + photos[i] + ')');
                    $('.ad_photo').eq(i).css('visibility', 'hidden');
                    $('.ad_photo').eq(i).velocity({translateX: '0px'},
                        function () {
                            $('.ad_photo').eq(i).css('visibility', 'visible');
                        });
                });
        }else{
            i++;
            $('.ad_photo').eq(i).velocity({translateX: '700px', rotateX: '360deg'}, 2500,
                function(){
                    $('#ad_photo').css("background-image",'url(' + photos[i] + ')' );
                    $('.ad_photo').eq(i).css('visibility', 'hidden');
                    $('.ad_photo').eq(i).velocity({translateX: '0px'},
                        function () {
                            $('.ad_photo').eq(i).css('visibility', 'visible');
                        });
                });
        }

    }


}

$(document).ready(main);

