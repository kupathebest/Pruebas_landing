/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
//

const $ = id => document.getElementById(id);
const regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

window.addEventListener('load', () => {

    $('name').addEventListener('focus', () => {
        if ($('name').value.trim() === "") {
            $('name-error').innerText = "* El nombre es obligatorio"
            $('name').classList.remove('input-success')
            $('name').classList.add('input-error')
            $('icono-error-name').classList.remove('ocultar')
            $('icono-success-name').classList.add('ocultar')
        }
    })
    $('name').addEventListener('blur', () => {

        switch (true) {
            case !$('name').value.trim():
                $('name-error').innerText = "* El nombre es obligatorio"
                $('name').classList.remove('input-success')
                $('name').classList.add('input-error')
                $('icono-error-name').classList.remove('ocultar')
                $('icono-success-name').classList.add('ocultar')

                break;
            default:
                $('name').classList.remove('input-error')
                $('name').classList.add('input-success')
                $('name-error').innerText = null
                $('icono-error-name').classList.add('ocultar')
                $('icono-success-name').classList.remove('ocultar')
                break;
        }
    })
    $('name').addEventListener('keydown', () => {
        $('name').classList.remove('input-error')
        $('name-error').innerText = null
        $('icono-error-name').classList.add('ocultar')
    })

    $('email').addEventListener('blur', async () => {

        switch (true) {
            case !regExEmail.test($('email').value):
                $('email-error').innerText = "* Tiene que ser un email válido"
                $('email').classList.remove('input-success')
                $('email').classList.add('input-error')
                $('icono-error-email').classList.remove('ocultar')
                $('icono-success-email').classList.add('ocultar')
                break;
            case await emailVerify($('email').value):
                $('email-error').innerText = "* El email ya está registrado"
                $('email').classList.remove('input-success')
                $('email').classList.add('input-error')
                $('icono-error-email').classList.remove('ocultar')
                $('icono-success-email').classList.add('ocultar')
                break;
            default:
                $('email').classList.remove('input-error')
                $('email').classList.add('input-success')
                $('email-error').innerText = null
                $('icono-error-email').classList.add('ocultar')
                $('icono-success-email').classList.remove('ocultar')
                break;
        }
    })

    $('email').addEventListener('keydown', () => {
        $('email').classList.remove('input-error')
        $('email-error').innerText = null
        $('icono-error-email').classList.add('ocultar')
    })

    $('message').addEventListener('blur', () => {
        if(!$('message').value.trim()){
            $('message-error').innerText = "* El mensaje es obligatorio"
            $('message').classList.add('input-error')
        }else{
            $('message-error').innerText = null
            $('message').classList.remove('input-error')
        }
    })

    $('form-contact').addEventListener('submit', event => {
        event.preventDefault();

        let elementsForm = $('form-contact').elements;
        
        let error = false;

        for (let i = 0; i < elementsForm.length - 1; i++) {
            
            if(!elementsForm[i].value){
                elementsForm[i].classList.add('input-error')
                error = true
            }
        }

        for (let i = 0; i < elementsForm.length - 1; i++) {
            
            if(elementsForm[i].classList.contains('input-error')){
                error = true
            }
        }

        console.log(elementsForm[0].value)

        if(!elementsForm[0].value){
            $('name-error').innerText = "* El nombre es obligatorio"
        }
        if(!elementsForm[1].value){
            $('phone-error').innerText = "* El telefono es obligatorio"
        }
        if(!elementsForm[2].value){
            $('email-error').innerText = "* El email es obligatorio"
        }
        if(!elementsForm[3].value){
            $('message-error').innerText = "* El mensaje es obligatorio"
        }
       

        if(!error){
            $('form-contact').submit()
            Swal.fire(
                'Muchas gracias por contactarnos!',
                'Even It',
                'success'
              )
        }
    })

})

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});