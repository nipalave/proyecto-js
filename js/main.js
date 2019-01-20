$(document).ready(function () {

    //Slider
    if (window.location.href.indexOf('index') > -1) {
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    }

    //Posts
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl in luctus viverra. Vivamus ut ornare metus. Pellentesque vehicula risus tempus nulla semper tristique. Sed posuere libero vel neque commodo, a mattis justo blandit. Nam vulputate finibus erat, id varius mi ornare vel. Phasellus molestie purus at pulvinar imperdiet. Suspendisse condimentum eros in lobortis viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam mauris lorem, euismod nec ornare nec, tristique vitae dui. In non odio sollicitudin, volutpat lectus nec, gravida ligula. Maecenas vitae quam bibendum, fermentum ante id, efficitur est. Sed elementum purus velit, nec gravida felis pharetra ac. Aenean eu venenatis est, a vulputate est. Integer malesuada nunc ut finibus faucibus.'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl in luctus viverra. Vivamus ut ornare metus. Pellentesque vehicula risus tempus nulla semper tristique. Sed posuere libero vel neque commodo, a mattis justo blandit. Nam vulputate finibus erat, id varius mi ornare vel. Phasellus molestie purus at pulvinar imperdiet. Suspendisse condimentum eros in lobortis viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam mauris lorem, euismod nec ornare nec, tristique vitae dui. In non odio sollicitudin, volutpat lectus nec, gravida ligula. Maecenas vitae quam bibendum, fermentum ante id, efficitur est. Sed elementum purus velit, nec gravida felis pharetra ac. Aenean eu venenatis est, a vulputate est. Integer malesuada nunc ut finibus faucibus.'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl in luctus viverra. Vivamus ut ornare metus. Pellentesque vehicula risus tempus nulla semper tristique. Sed posuere libero vel neque commodo, a mattis justo blandit. Nam vulputate finibus erat, id varius mi ornare vel. Phasellus molestie purus at pulvinar imperdiet. Suspendisse condimentum eros in lobortis viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam mauris lorem, euismod nec ornare nec, tristique vitae dui. In non odio sollicitudin, volutpat lectus nec, gravida ligula. Maecenas vitae quam bibendum, fermentum ante id, efficitur est. Sed elementum purus velit, nec gravida felis pharetra ac. Aenean eu venenatis est, a vulputate est. Integer malesuada nunc ut finibus faucibus.'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl in luctus viverra. Vivamus ut ornare metus. Pellentesque vehicula risus tempus nulla semper tristique. Sed posuere libero vel neque commodo, a mattis justo blandit. Nam vulputate finibus erat, id varius mi ornare vel. Phasellus molestie purus at pulvinar imperdiet. Suspendisse condimentum eros in lobortis viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam mauris lorem, euismod nec ornare nec, tristique vitae dui. In non odio sollicitudin, volutpat lectus nec, gravida ligula. Maecenas vitae quam bibendum, fermentum ante id, efficitur est. Sed elementum purus velit, nec gravida felis pharetra ac. Aenean eu venenatis est, a vulputate est. Integer malesuada nunc ut finibus faucibus.'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl in luctus viverra. Vivamus ut ornare metus. Pellentesque vehicula risus tempus nulla semper tristique. Sed posuere libero vel neque commodo, a mattis justo blandit. Nam vulputate finibus erat, id varius mi ornare vel. Phasellus molestie purus at pulvinar imperdiet. Suspendisse condimentum eros in lobortis viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam mauris lorem, euismod nec ornare nec, tristique vitae dui. In non odio sollicitudin, volutpat lectus nec, gravida ligula. Maecenas vitae quam bibendum, fermentum ante id, efficitur est. Sed elementum purus velit, nec gravida felis pharetra ac. Aenean eu venenatis est, a vulputate est. Integer malesuada nunc ut finibus faucibus.'
            },
        ];

        posts.forEach((item, index) => {
            var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
        ${item.content}
        </p>
        <a href="#" class="button-more">Leer más</a>
    </article>
        `;

            $("#posts").append(post);
        })
    }

    //Selector de temas
    var theme = $("#theme");
    var green = "css/green.css";
    var red = "css/red.css";
    var blue = "css/blue.css";

    if (localStorage.getItem("tema") == null || localStorage.getItem("tema") == green) {
        localStorage.setItem("tema", green);
        theme.attr("href", green);
    }
    else if (localStorage.getItem("tema") == red) {
        localStorage.setItem("tema", red);
        theme.attr("href", red);
    }
    else if (localStorage.getItem("tema") == blue) {
        localStorage.setItem("tema", blue);
        theme.attr("href", blue);
    }

    $("#to_green").click(function () {
        theme.attr("href", green);
        localStorage.setItem("tema", green);
    });
    $("#to_red").click(function () {
        theme.attr("href", red);
        localStorage.setItem("tema", red);
    });
    $("#to_blue").click(function () {
        theme.attr("href", blue);
        localStorage.setItem("tema", blue);
    });


    //Scroll arriba
    $('.subir').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 400);

        return false;
    });


    //Login falso
    $("#login form").submit(function () {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<br><a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });
    }

    //Acordeón
    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

    //Reloj
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000)
    }

    //Validación
    if (window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
});