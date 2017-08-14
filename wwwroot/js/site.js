$('document').ready(function () {
    var lang = sessionStorage.getItem("lang");

    if (lang === null)
        sessionStorage.setItem("lang", "KR");

    $('#lang').val(sessionStorage.getItem("lang"));
    setLang();

    $('#lang').on('change', function () {
        setLang();
    });

    function setLang() {
        sessionStorage.setItem("lang", $('#lang').val());

        $("div[class^='lang']").hide();
        $("div[class^='lang" + sessionStorage.getItem("lang") + "']").show();
    }

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

    $(".page-item").on('click', function () {
        var classNames = $(this).attr('class');

        $(".item-description").hide();

        var active = '';
        var image = '';
        var className = '';

        if (classNames.indexOf('page-item-1') !== -1) {
            active = '.page-item-1';
            className = '.description1';
            image = '/images/plable_images/item/image/labi3.jpg';
        }
        else if (classNames.indexOf('page-item-2') !== -1) {
            active = '.page-item-2';
            className = '.description2';
            image = '/images/plable_images/item/image/plant.png';
        }
        else if (classNames.indexOf('page-item-3') !== -1) {
            active = '.page-item-3';
            className = '.description3';
            image = '/images/plable_images/item/image/flawn.png';
        }

        $(className).show();
        $('.targetItem').attr('src', image);

        $(".page-item.active").removeClass('active');
        $(active).addClass('active');
    });
});