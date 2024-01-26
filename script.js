const formDollar = document.querySelector('.formDollar')
const formDirham = document.querySelector('.formDirham')
const formYen = document.querySelector('.formYen')
const formPound = document.querySelector('.formPound')
const formFc = document.querySelector('.formFc')
const formBitcoin = document.querySelector('.formBitcoin')

const a = document.querySelectorAll('.setJs')

const dollar = a[0]
const dirham = a[1]
const yen = a[2]
const pound = a[3]
const fc = a[4]
const bitcoin = a[5]

formDollar.style.display = 'flex'
formDirham.style.display = 'none'
formYen.style.display = 'none'
formPound.style.display = 'none'
formFc.style.display = 'none'
formBitcoin.style.display = 'none'

dollar.style.borderBottomStyle = 'none'
dollar.style.borderRightColor = 'black'
dollar.style.borderRightWidth = '2px'
dollar.style.borderRightStyle = 'solid'

dollar.addEventListener('click', () => {
    dollar.style.borderBottomStyle = 'none'
    dollar.style.borderRightColor = 'black'
    dollar.style.borderRightWidth = '2px'
    dollar.style.borderRightStyle = 'solid'
    //  --------------------------------------  // 
    formDollar.style.display = 'flex'
    formDirham.style.display = 'none'
    formYen.style.display = 'none'
    formPound.style.display = 'none'
    formFc.style.display = 'none'
    formBitcoin.style.display = 'none'

    if (dirham.style.borderBottomStyle == 'none' ||
        yen.style.borderBottomStyle == 'none' ||
        pound.style.borderBottomStyle == 'none' ||
        fc.style.borderBottomStyle == 'none' ||
        bitcoin.style.borderBottomStyle == 'none') {
        //  --------------------------------------  // 
        dirham.style.borderBottomColor = 'black'
        dirham.style.borderBottomWidth = '2px'
        dirham.style.borderBottomStyle = 'solid'
        dirham.style.borderRightStyle = 'none'
        dirham.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        yen.style.borderBottomColor = 'black'
        yen.style.borderBottomWidth = '2px'
        yen.style.borderBottomStyle = 'solid'
        yen.style.borderRightStyle = 'none'
        yen.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        pound.style.borderBottomColor = 'black'
        pound.style.borderBottomWidth = '2px'
        pound.style.borderBottomStyle = 'solid'
        pound.style.borderRightStyle = 'none'
        pound.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        fc.style.borderBottomColor = 'black'
        fc.style.borderBottomWidth = '2px'
        fc.style.borderBottomStyle = 'solid'
        fc.style.borderRightStyle = 'none'
        fc.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        bitcoin.style.borderBottomColor = 'black'
        bitcoin.style.borderBottomWidth = '2px'
        bitcoin.style.borderBottomStyle = 'solid'
        bitcoin.style.borderRightStyle = 'none'
        bitcoin.style.borderLeftStyle = 'none'
    }
})
dirham.addEventListener('click', () => {
    dirham.style.borderBottomStyle = 'none'
    dirham.style.borderLeftColor = 'black'
    dirham.style.borderLeftWidth = '2px'
    dirham.style.borderLeftStyle = 'solid'
    dirham.style.borderRightColor = 'black'
    dirham.style.borderRightWidth = '2px'
    dirham.style.borderRightStyle = 'solid'
    //  --------------------------------------  // 
    formDollar.style.display = 'none'
    formDirham.style.display = 'flex'
    formYen.style.display = 'none'
    formPound.style.display = 'none'
    formFc.style.display = 'none'
    formBitcoin.style.display = 'none'

    if (dollar.style.borderBottomStyle == 'none' ||
        yen.style.borderBottomStyle == 'none' ||
        pound.style.borderBottomStyle == 'none' ||
        fc.style.borderBottomStyle == 'none' ||
        bitcoin.style.borderBottomStyle == 'none') {
        //  --------------------------------------  // 
        dollar.style.borderBottomColor = 'black'
        dollar.style.borderBottomWidth = '2px'
        dollar.style.borderBottomStyle = 'solid'
        dollar.style.borderRightStyle = 'none'
        dollar.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        yen.style.borderBottomColor = 'black'
        yen.style.borderBottomWidth = '2px'
        yen.style.borderBottomStyle = 'solid'
        yen.style.borderRightStyle = 'none'
        yen.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        pound.style.borderBottomColor = 'black'
        pound.style.borderBottomWidth = '2px'
        pound.style.borderBottomStyle = 'solid'
        pound.style.borderRightStyle = 'none'
        pound.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        fc.style.borderBottomColor = 'black'
        fc.style.borderBottomWidth = '2px'
        fc.style.borderBottomStyle = 'solid'
        fc.style.borderRightStyle = 'none'
        fc.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        bitcoin.style.borderBottomColor = 'black'
        bitcoin.style.borderBottomWidth = '2px'
        bitcoin.style.borderBottomStyle = 'solid'
        bitcoin.style.borderRightStyle = 'none'
        bitcoin.style.borderLeftStyle = 'none'
    }
})
yen.addEventListener('click', () => {
    yen.style.borderBottomStyle = 'none'
    yen.style.borderLeftColor = 'black'
    yen.style.borderLeftWidth = '2px'
    yen.style.borderLeftStyle = 'solid'
    yen.style.borderRightColor = 'black'
    yen.style.borderRightWidth = '2px'
    yen.style.borderRightStyle = 'solid'
    //  --------------------------------------  // 
    formDollar.style.display = 'none'
    formDirham.style.display = 'none'
    formYen.style.display = 'flex'
    formPound.style.display = 'none'
    formFc.style.display = 'none'
    formBitcoin.style.display = 'none'

    if (dirham.style.borderBottomStyle == 'none' ||
        dollar.style.borderBottomStyle == 'none' ||
        pound.style.borderBottomStyle == 'none' ||
        fc.style.borderBottomStyle == 'none' ||
        bitcoin.style.borderBottomStyle == 'none') {
        //  --------------------------------------  // 
        dirham.style.borderBottomColor = 'black'
        dirham.style.borderBottomWidth = '2px'
        dirham.style.borderBottomStyle = 'solid'
        dirham.style.borderRightStyle = 'none'
        dirham.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        dollar.style.borderBottomColor = 'black'
        dollar.style.borderBottomWidth = '2px'
        dollar.style.borderBottomStyle = 'solid'
        dollar.style.borderRightStyle = 'none'
        dollar.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        pound.style.borderBottomColor = 'black'
        pound.style.borderBottomWidth = '2px'
        pound.style.borderBottomStyle = 'solid'
        pound.style.borderRightStyle = 'none'
        pound.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        fc.style.borderBottomColor = 'black'
        fc.style.borderBottomWidth = '2px'
        fc.style.borderBottomStyle = 'solid'
        fc.style.borderRightStyle = 'none'
        fc.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        bitcoin.style.borderBottomColor = 'black'
        bitcoin.style.borderBottomWidth = '2px'
        bitcoin.style.borderBottomStyle = 'solid'
        bitcoin.style.borderRightStyle = 'none'
        bitcoin.style.borderLeftStyle = 'none'
    }
})
pound.addEventListener('click', () => {
    pound.style.borderBottomStyle = 'none'
    pound.style.borderLeftColor = 'black'
    pound.style.borderLeftWidth = '2px'
    pound.style.borderLeftStyle = 'solid'
    pound.style.borderRightColor = 'black'
    pound.style.borderRightWidth = '2px'
    pound.style.borderRightStyle = 'solid'
    //  --------------------------------------  // 
    formDollar.style.display = 'none'
    formDirham.style.display = 'none'
    formYen.style.display = 'none'
    formPound.style.display = 'flex'
    formFc.style.display = 'none'
    formBitcoin.style.display = 'none'

    if (dirham.style.borderBottomStyle == 'none' ||
        yen.style.borderBottomStyle == 'none' ||
        dollar.style.borderBottomStyle == 'none' ||
        fc.style.borderBottomStyle == 'none' ||
        bitcoin.style.borderBottomStyle == 'none') {
        //  --------------------------------------  // 
        dirham.style.borderBottomColor = 'black'
        dirham.style.borderBottomWidth = '2px'
        dirham.style.borderBottomStyle = 'solid'
        dirham.style.borderRightStyle = 'none'
        dirham.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        yen.style.borderBottomColor = 'black'
        yen.style.borderBottomWidth = '2px'
        yen.style.borderBottomStyle = 'solid'
        yen.style.borderRightStyle = 'none'
        yen.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        dollar.style.borderBottomColor = 'black'
        dollar.style.borderBottomWidth = '2px'
        dollar.style.borderBottomStyle = 'solid'
        dollar.style.borderRightStyle = 'none'
        dollar.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        fc.style.borderBottomColor = 'black'
        fc.style.borderBottomWidth = '2px'
        fc.style.borderBottomStyle = 'solid'
        fc.style.borderRightStyle = 'none'
        fc.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        bitcoin.style.borderBottomColor = 'black'
        bitcoin.style.borderBottomWidth = '2px'
        bitcoin.style.borderBottomStyle = 'solid'
        bitcoin.style.borderRightStyle = 'none'
        bitcoin.style.borderLeftStyle = 'none'
    }
})
fc.addEventListener('click', () => {
    fc.style.borderBottomStyle = 'none'
    fc.style.borderLeftColor = 'black'
    fc.style.borderLeftWidth = '2px'
    fc.style.borderLeftStyle = 'solid'
    fc.style.borderRightColor = 'black'
    fc.style.borderRightWidth = '2px'
    fc.style.borderRightStyle = 'solid'
    //  --------------------------------------  // 
    formDollar.style.display = 'none'
    formDirham.style.display = 'none'
    formYen.style.display = 'none'
    formPound.style.display = 'none'
    formFc.style.display = 'flex'
    formBitcoin.style.display = 'none'

    if (dirham.style.borderBottomStyle == 'none' ||
        yen.style.borderBottomStyle == 'none' ||
        pound.style.borderBottomStyle == 'none' ||
        dollar.style.borderBottomStyle == 'none' ||
        bitcoin.style.borderBottomStyle == 'none') {
        //  --------------------------------------  // 
        dirham.style.borderBottomColor = 'black'
        dirham.style.borderBottomWidth = '2px'
        dirham.style.borderBottomStyle = 'solid'
        dirham.style.borderRightStyle = 'none'
        dirham.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        yen.style.borderBottomColor = 'black'
        yen.style.borderBottomWidth = '2px'
        yen.style.borderBottomStyle = 'solid'
        yen.style.borderRightStyle = 'none'
        yen.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        pound.style.borderBottomColor = 'black'
        pound.style.borderBottomWidth = '2px'
        pound.style.borderBottomStyle = 'solid'
        pound.style.borderRightStyle = 'none'
        pound.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        dollar.style.borderBottomColor = 'black'
        dollar.style.borderBottomWidth = '2px'
        dollar.style.borderBottomStyle = 'solid'
        dollar.style.borderRightStyle = 'none'
        dollar.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        bitcoin.style.borderBottomColor = 'black'
        bitcoin.style.borderBottomWidth = '2px'
        bitcoin.style.borderBottomStyle = 'solid'
        bitcoin.style.borderRightStyle = 'none'
        bitcoin.style.borderLeftStyle = 'none'
    }
})
bitcoin.addEventListener('click', () => {
    bitcoin.style.borderBottomStyle = 'none'
    bitcoin.style.borderLeftColor = 'black'
    bitcoin.style.borderLeftWidth = '2px'
    bitcoin.style.borderLeftStyle = 'solid'
    //  --------------------------------------  // 
    formDollar.style.display = 'none'
    formDirham.style.display = 'none'
    formYen.style.display = 'none'
    formPound.style.display = 'none'
    formFc.style.display = 'none'
    formBitcoin.style.display = 'flex'

    if (dirham.style.borderBottomStyle == 'none' ||
        yen.style.borderBottomStyle == 'none' ||
        pound.style.borderBottomStyle == 'none' ||
        fc.style.borderBottomStyle == 'none' ||
        dollar.style.borderBottomStyle == 'none') {
        //  --------------------------------------  // 
        dirham.style.borderBottomColor = 'black'
        dirham.style.borderBottomWidth = '2px'
        dirham.style.borderBottomStyle = 'solid'
        dirham.style.borderRightStyle = 'none'
        dirham.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        yen.style.borderBottomColor = 'black'
        yen.style.borderBottomWidth = '2px'
        yen.style.borderBottomStyle = 'solid'
        yen.style.borderRightStyle = 'none'
        yen.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        pound.style.borderBottomColor = 'black'
        pound.style.borderBottomWidth = '2px'
        pound.style.borderBottomStyle = 'solid'
        pound.style.borderRightStyle = 'none'
        pound.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        fc.style.borderBottomColor = 'black'
        fc.style.borderBottomWidth = '2px'
        fc.style.borderBottomStyle = 'solid'
        fc.style.borderRightStyle = 'none'
        fc.style.borderLeftStyle = 'none'
        //  --------------------------------------  // 
        dollar.style.borderBottomColor = 'black'
        dollar.style.borderBottomWidth = '2px'
        dollar.style.borderBottomStyle = 'solid'
        dollar.style.borderRightStyle = 'none'
        dollar.style.borderLeftStyle = 'none'
    }
})




