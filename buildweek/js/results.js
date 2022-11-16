var giuste = JSON.parse(window.localStorage.getItem('rights'))
var sbagliate = JSON.parse(window.localStorage.getItem('wrongs'))

let rightsPercentuale = document.querySelector('#domande-corrette #a')
let wrongsPercentuale = document.querySelector('.domande-sbagliate #a')
let rightsNum = document.querySelector('#domande-corrette #b')
let wrongsNum = document.querySelector('.domande-sbagliate #b')

rightsPercentuale.textContent = (giuste*10) + '%'
wrongsPercentuale.textContent = (sbagliate*10) + '%'
rightsNum.textContent = `${giuste} su 10` 
wrongsNum.textContent = `${sbagliate} su 10`


  const data = {
        labels: [
        'Blue',
        'Purple'
        ],
        datasets: [{
        label: 'domande',
        data: [sbagliate,giuste],
        backgroundColor: [
            '#D20094',
            '#00FFFF'
        ],
        hoverOffset: 4
        }]
  };

  const config = {
    type: 'doughnut',
    data: data,
  };

  const ctx = document.getElementById('myChart');
  
  new Chart(ctx,{
    type: 'doughnut',
  data: data,
    options: {
        cutout:140,
        responsive: true,
        plugins: {
        legend: {
            position: 'top',
            display:false
        },
        title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
        }
        }
    },

  });

