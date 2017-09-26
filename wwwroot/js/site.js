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
        if (location.pathname === '/Home/Grint' || location.pathname === '/Home/Flawn')
            $("a[href='/Home/Rabby'][class='menu']").addClass('menu-selected');
    }

    selectMenu();

    $('nav li').mouseenter(function () {
        $(this).find('.menu-detail').slideDown(250);
        $("a[class~='menu-selected']").removeClass('menu-selected');
        $(this).find("a.menu").addClass('menu-selected');
    }).mouseleave(function () {
        $(this).find('.menu-detail').slideUp(250);
        $("a[class~='menu-selected']").removeClass('menu-selected');
        selectMenu();
    });

    $("img[class*='link']").mouseover(function () {
        $(this).attr('src', $(this).attr('src').slice(0, -5) + "2.png");
    }).mouseout(function () { $(this).attr('src', $(this).attr('src').slice(0, -5) + "1.png"); });
    
});