const formDollar = document.querySelector('.formDollar')
const formDirham = document.querySelector('.formDirham')
const formYen = document.querySelector('.formYen')
const formPound = document.querySelector('.formPound')
const formFc = document.querySelector('.formFc')
const formBitcoin = document.querySelector('.formBitcoin')

const a1 = document.querySelectorAll('.setJs')

const dollar = a1[0]
const dirham = a1[1]
const yen = a1[2]
const pound = a1[3]
const fc = a1[4]
const bitcoin = a1[5]

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


const euroBit = document.querySelector('.euroBit')
const bitcoinC = document.querySelector('.bitcoinC')

bitcoinC.value = ''
euroBit.value = ''

const convertirBit = (source) => {
    const euroValue = parseFloat(euroBit.value)
    const bitcoinValue = parseFloat(bitcoinC.value)

    if (!isNaN(euroValue) && source === 'euroBit') {
        bitcoinC.value = (euroValue * 0.00003).toFixed(5)
    }else if (!isNaN(bitcoinValue) && source === 'bitcoinC') {
        euroBit.value = (bitcoinValue * 38461.53846153846).toFixed(3)
    }
}

const euroFc = document.querySelector('.euroFc')
const fcC = document.querySelector('.fcC')

fcC.value = ''
euroFc.value = ''

const convertirFc = (source) => {
    const euroValue = parseFloat(euroFc.value)
    const fcValue = parseFloat(fcC.value)

    if (!isNaN(euroValue) && source === 'euroFc') {
        fcC.value = (euroValue * 2964.65).toFixed(2)
    }else if (!isNaN(fcValue) && source === 'fcC') {
        euroFc.value = (fcValue * 0.00034).toFixed(5)
    }
}

const euroPound = document.querySelector('.euroPound')
const PoundC = document.querySelector('.PoundC')

PoundC.value = ''   
euroPound.value = ''

const convertirPound = (source) => {
    const euroValue = parseFloat(euroPound.value)
    const PoundValue = parseFloat(PoundC.value)

    if (!isNaN(euroValue) && source === 'euroPound') {
        PoundC.value = (euroValue * 0.85).toFixed(2)
    }else if (!isNaN(PoundValue) && source === 'PoundC') {
        euroPound.value = (PoundValue * 1.17).toFixed(2)
    }
}

const euroYen = document.querySelector('.euroYen')
const YenC = document.querySelector('.YenC')

YenC.value = ''   
euroYen.value = ''

const convertirYen = (source) => {
    const euroValue = parseFloat(euroYen.value)
    const YenValue = parseFloat(YenC.value)

    if (!isNaN(euroValue) && source === 'euroYen') {
        YenC.value = (euroValue * 160.99).toFixed(2)
    }else if (!isNaN(YenValue) && source === 'YenC') {
        euroYen.value = (YenValue * 0.0062).toFixed(4)
    }
}

const euroDirham = document.querySelector('.euroDirham')
const DirhamC = document.querySelector('.DirhamC')

DirhamC.value = ''   
euroDirham.value = ''

const convertirDirham = (source) => {
    const euroValue = parseFloat(euroDirham.value)
    const DirhamValue = parseFloat(DirhamC.value)

    if (!isNaN(euroValue) && source === 'euroDirham') {
        DirhamC.value = (euroValue * 10.82).toFixed(2)
    }else if (!isNaN(DirhamValue) && source === 'DirhamC') {
        euroDirham.value = (DirhamValue * 0.092).toFixed(3)
    }
}

const euroDollar = document.querySelector('.euroDollar')
const DollarC = document.querySelector('.DollarC')

DollarC.value = ''   
euroDollar.value = ''

const convertirDollar = (source) => {
    const euroValue = parseFloat(euroDollar.value)
    const DollarValue = parseFloat(DollarC.value)

    if (!isNaN(euroValue) && source === 'euroDollar') {
        DollarC.value = (euroValue * 1.09).toFixed(2)
    }else if (!isNaN(DollarValue) && source === 'DollarC') {
        euroDollar.value = (DollarValue * 0,92).toFixed(2)
    }
}

document.getElementById('conversionForm').addEventListener('submit', (e)=>{
    e.preventDefault()
})




