// Write your Javascript code.
$('document').ready(function () {
    //var lang = ;

    //if (lang === null)
    //    sessionStorage.setItem("lang", "KR");
    //$('#lang').val(sessionStorage.getItem("lang"));

    //console.log(lang);

    //$('#lang').on('change', function () {
    //    sessionStorage.setItem("lang", $('#lang').val());
    //    console.log(lang);

    //    var paths = window.location.pathname.split('/');
    //    console.log(paths);

    //    //if (paths[paths.length - 1] === "" || paths[paths.length - 1] === null) {
    //    //    window.location.href = sessionStorage.getItem("lang");
    //    //}
    //    //else {
    //    //    paths.push($('#lang').val());
    //    //    window.location.href = window.location.host + paths.join('/');
    //    //}
    //});

    if (location.pathname !== '/')
        $('nav').addClass('navbar-shadow');
    else
        $('nav').removeClass('navbar-shadow');

    function selectMenu() {
        $("a[href='" + location.pathname + "'][class='menu']").addClass('menu-selected');
    }

    selectMenu();

    $("a[class~='menu']").mouseover(function () {
        $("a[class~='menu-selected']").removeClass('menu-selected');
    }).mouseout(function () {
        selectMenu();
    });

    $("img[class*='link']").mouseover(function () {
        $(this).attr('src', $(this).attr('src').slice(0, -5) + "2.png");
    }).mouseout(function () { $(this).attr('src', $(this).attr('src').slice(0, -5) + "1.png"); });

    $("li[id*='item']").on('click', function () {
        var id = $(this).attr('id');
        $("div[id*='description']").hide();
        switch (id) {
            case 'item1':
                $('#description1').show();
                $('#targetItem').attr('src', "/images/plable_images/item/image/labi3.jpg");
                break;

            case 'item2':
                $('#description2').show();
                $('#targetItem').attr('src', "/images/plable_images/item/image/plant.png");
                break;

            case 'item3':
                $('#description3').show();
                $('#targetItem').attr('src', "/images/plable_images/item/image/flawn.png");
                break;

            default:
                break;
        }
        $("li[class~='active']").removeClass('active');
        $(this).addClass('active');
    });

    //$('#itemCarousel').bind('slide.bs.carousel', function (e) {
    //    console.log($(this));
    //    //$('#targetItem').src =
    //});
});