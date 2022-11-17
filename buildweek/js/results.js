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
        'Sbagliate',
        'Giuste'
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
      elements:{
        center:{
          text:'ciao proviamo',
          color: '#FF6384'
        }
      },
        cutout:150,
        responsive: true,
        borderColor:'transparent',
        plugins: {
        legend: {
            position: 'top',
            display:false
        },
        title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
        },
        doughnutlabel: {
          labels: [
            {
              text: '550',
              font: {
                size: 20,
                weight: 'bold',
              },
            }
          ]
        }
        },
    },
    centerText:{
      display:true,
      text:'prova'
    }

  }
  );


  var canvas=document.querySelector('#span-canvas');
  
  if(giuste>=6)
  {


  canvas.innerHTML="<h5>Congratulations!</h5> <h6>You passed the exam.</h6> We'll send you the certificate in a few minutes. Check your email (including promotions / spam folder)"
  }
  else{
    canvas.innerHTML="ritenta,sarai più fortunato"
  }

