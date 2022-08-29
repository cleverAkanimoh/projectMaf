function validateForm() {
    // join form
    const jform = document.getElementById('jform');
    const jfname = document.getElementById('jfname');
    const jlname = document.getElementById('jlname');
    const jemail = document.getElementById('jemail');
    const phone = document.getElementById('phone');
    const member = document.getElementById('memberr');
    const partner = document.getElementById('partnerr');
    const errorLabel = document.getElementById('errorLabel');
    const submit = document.getElementById('jsubmit');
    const java = document.getElementById('javaOff');
    const textarea = document.getElementById('additional')

    submit.removeAttribute('disabled')
    java.setAttribute('id', 'javaOn')


    jform.addEventListener(
        'submit',
        function (e) {
            e.preventDefault();
            joinInputs();
        }
    );

    //join form inputs
    function joinInputs() {

        const validFname = jfname.value.trim();
        const validLname = jlname.value.trim();
        const validEmail = jemail.value.trim();
        const validphone = phone.value.trim();

        if (validFname == '') {
            errorLabel.style.display = 'block';
            errorLabel.innerHTML = 'Input field cannot be empty';
            jfname.focus();
            jfname.select();
        }
        else if (validLname == '') {
            errorLabel.style.display = 'block';
            errorLabel.innerHTML = 'Input field cannot be empty';
            jlname.focus();
            jlname.select();
        }
        else if (validEmail == '') {
            errorLabel.style.display = 'block';
            errorLabel.innerHTML = 'Input field cannot be empty';
            jemail.focus();
            jemail.select();
        }
        else if (validphone == '') {
            errorLabel.style.display = 'block';
            errorLabel.innerHTML = 'Input field cannot be empty';
            phone.focus();
            phone.select();
        }
        else if (validphone.length > 15) {
            errorLabel.style.display = 'block';
            errorLabel.innerHTML = 'Phone number is more than required';
            phone.focus();
            phone.select();
        }
        else if (validphone.length < 10) {
            errorLabel.style.display = 'block';
            errorLabel.innerHTML = 'Phone number is less than required';
            phone.focus();
            phone.select();
        }
        // // else if (isNAN(validphone)) {
        // //     errorLabel.style.display = 'block';
        // //     errorLabel.textContent = 'Phone number is not valid';
        // } 
        else {
            errorLabel.style.display = 'none'
        }
    };

    member.addEventListener(
        'click',
        function () {
            if (member.checked) {
                partner.disabled = 'true'
            } else {
                partner.removeAttribute('disabled')
            }
        }
    )

    partner.addEventListener(
        'click',
        function () {
            if (partner.checked) {
                member.disabled = 'true'
            } else {
                member.removeAttribute('disabled')
            }
        }
    )

    textarea.addEventListener(
        'input',
        function (e) {
            let target = e.target
            let countEl = document.getElementById('count')
            let count = target.value.trim().split(' ').length
            if (count) {
                countEl.style.display = 'block'
                countEl.textContent = count + ' word(s)'
            } else {
                countEl.style.display = 'none'
            }
        }
    )
    textarea.addEventListener(
        'blur',
        function (e) {
            let target = e.target
            let countEl = document.getElementById('count')
            let count = target.value.trim().split(' ').length
            if (count) {
                countEl.style.display = 'none'
            }
        }
    )
}
validateForm();

function disappear() {
    errorLabel.style.display = 'none';
    setTimeout('disappear()', 15000)
}
disappear();