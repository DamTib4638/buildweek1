let dataRight = JSON.parse(window.localStorage.getItem('rights'))
let dataWrong = JSON.parse(window.localStorage.getItem('wrongs'))
console.log(dataWrong)

let rightsPercentuale = document.querySelector('#domande-corrette #a')
let wrongsPercentuale = document.querySelector('.domande-sbagliate #a')
let rightsNum = document.querySelector('#domande-corrette #b')
let wrongsNum = document.querySelector('.domande-sbagliate #b')

rightsPercentuale.textContent = (dataRight*10) + '%'
wrongsPercentuale.textContent = (dataWrong*10) + '%'
rightsNum.textContent = `${dataRight} su 10` 
wrongsNum.textContent = `${dataWrong} su 10`

