// Write your Javascript code.
$('document').ready(function () {
    if (location.pathname !== '/')
        $('nav').addClass('navbar-shadow');
    else
        $('nav').removeClass('navbar-shadow');

    function selectMenu() {
        $("a[href='" + location.pathname + "'][class='menu']").addClass('menu-selected');
    };

    selectMenu();

    $("a[class~='menu']").mouseover(function () {
        $("a[class~='menu-selected']").removeClass('menu-selected');
    }).mouseout(function () {
        selectMenu();
    });

    $("img[class*='link']").mouseover(function () {
        $(this).attr('src', $(this).attr('src').slice(0, -5) + "2.png");
    }).mouseout(function () { $(this).attr('src', $(this).attr('src').slice(0, -5) + "1.png"); });

    //if ($("li[data-target='#itemCarousel']")) {
    //    $("li[data-target='#itemCarousel'][class='item']").addClass('hide');
    //}

    $('#itemCarousel').bind('slide.bs.carousel', function (e) {
    });
});
