const formLogin = document.querySelector('.formLogin')

const formSign = document.querySelector('.formSign')

const a2 = document.querySelectorAll('.setJs1')

const login = a2[0]
const sign = a2[1]

login.style.borderBottomStyle = 'none'
login.style.borderRightColor = 'black'
login.style.borderRightWidth = '2px'
login.style.borderRightStyle = 'solid'
login.style.fontWeight = '600'

formLogin.style.display = 'flex'
formSign.style.display = 'none'

login.addEventListener('click', () => {
    login.style.borderBottomStyle = 'none'
    login.style.borderRightColor = 'black'
    login.style.borderRightWidth = '2px'
    login.style.borderRightStyle = 'solid'
    login.style.fontWeight = '600'
    //  --------------------------------------  // 
    formLogin.style.display = 'flex'
    formSign.style.display = 'none'

    if (sign.style.borderBottomStyle == 'none') {
        //  --------------------------------------  // 
        sign.style.borderBottomColor = 'black'
        sign.style.borderBottomWidth = '2px'
        sign.style.borderBottomStyle = 'solid'
        sign.style.borderLeftStyle = 'none'
        sign.style.borderRightStyle = 'none'
        sign.style.fontWeight = '500'
    }
})
sign.addEventListener('click', () => {
    sign.style.borderBottomStyle = 'none'
    sign.style.borderLeftColor = 'black'
    sign.style.borderLeftWidth = '2px'
    sign.style.borderLeftStyle = 'solid'
    sign.style.fontWeight = '600'
    //  --------------------------------------  // 
    formLogin.style.display = 'none'
    formSign.style.display = 'flex'

    if (login.style.borderBottomStyle == 'none') {
        //  --------------------------------------  // 
        login.style.borderBottomColor = 'black'
        login.style.borderBottomWidth = '2px'
        login.style.borderBottomStyle = 'solid'
        login.style.borderLeftStyle = 'none'
        login.style.borderRightStyle = 'none'
        login.style.fontWeight = '500'
    }
})