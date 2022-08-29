
const newsletterdiv = document.querySelector('.newsletterDiv')

const newsletter = document.querySelector('.newsletter')

const close = document.querySelector('.close')


newsletter.addEventListener(
    'click', () => {
        newsletterdiv.style.display = 'block';
    }
)

close.addEventListener(
    'click', () => {
        newsletterdiv.style.display = 'none';
    }
)


// Modal Form Validation

const submit = document.querySelector('.submit');
const form = document.forms['form'];
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const email = document.querySelector('#email');
const message = document.getElementById('formp');

form.addEventListener(
    'submit',
    (e) => {
        e.preventDefault(),
            validateInputs()
    }
);

validateInputs = () => {
    const fnameValue = fname.value
    const lnameValue = lname.value
    const emailValue = email.value

    if (fnameValue === '') {
        message.style.display = 'block'
        message.textContent = 'Input field cannot be Empty'
        fname.focus()
        fname.select()
    } else if (lnameValue === '') {
        message.style.display = 'block'
        message.textContent = 'Input field cannot be Empty'
        lname.focus()
        lname.select()
    } else if (emailValue === '') {
        message.style.display = 'block'
        message.textContent = 'Input field cannot be Empty'
        email.focus()
        email.select()
    }
    else {
        message.style.display = 'none'
    }
    setTimeout(
        () => {
            message.style.display = "none";
        }, 10000
    );
}



// navigation dropdown / accordion for smaller screens

const hammDiv = document.querySelector('.hammDiv');

const tl = gsap.timeline({
    defaults:
        { duration: 0.5, ease: "power1.out" }
});

hammDiv.onclick = () => {
    let pressed = hammDiv.getAttribute("aria-pressed");

    if (pressed === "false") {
        hammDiv.setAttribute("aria-pressed", "true");

        hammDiv.setAttribute("title", "Close");

        // Animation X transistion effect *gsap

        // hamm-div
        tl.to('.hammDiv',
            { y: 12, x: 0, padding: '25px 10px' }
        )

        // center
        tl.fromTo('.center',
            { opacity: 0.5, x: 0 }, //from
            { opacity: 0, x: -15, y: 0, duration: 0.5 }, //to
            '<'
        )

        // top
        tl.to('.top',
            { rotation: '-45deg', marginBotttom: '-30px', },
            '<60%'
        )

        // last
        tl.to('.bottom',
            { rotation: '45deg', marginTop: '-28px' },
            '<'
        )

        // hamm-content
        tl.fromTo('.hamm-content',
            { opacity: 0, y: -190, zIndex: -1 }, //from
            { opacity: 1, y: 0, display: 'block', ease: 'linear', }, // to
            '<'
        )

    } else {
        hammDiv.setAttribute("aria-pressed", "false");

        hammDiv.setAttribute("title", "Menu");
        // Animation X transistion effect using *gsap Library

        // hamm-content

        tl.to('.hamm-content',
            { display: 'none', opacity: 0.5, y: -150, duration: 0.5, ease: 'linear' },
        )

        // hammdiv
        tl.to('.hammDiv',
            { padding: '10px', y: 12 },
            '<20%'
        )

        // top
        tl.to('.top',
            { rotation: '0deg', marginBotttom: '0px', },
            '<20%'
        )

        // last
        tl.to('.bottom',
            { rotation: '0deg', marginTop: '0px' },
            '<'
        )

        // center
        tl.fromTo('.center',
            { opacity: 0, x: -35, y: -15, },
            { opacity: 1, x: 0, y: 0 },
            '<10%'
        )
    }
},
    false



const logoAppear = () => {
    let header = document.querySelector('.header')
    let logo = document.querySelector('#logo-hidden')
    let headerPosition = header.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 3;


    if (headerPosition < screenPosition) {
       logo.setAttribute('id','logo-appear');
    } else {
        logo.setAttribute('id', 'logo-hidden');
    }
}
window.onscroll = () => {
    logoAppear();
};
