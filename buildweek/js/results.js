var giuste=8;
var sbagliate=2;


  const data = {
    labels: [
      'Sbagliate',
      'Corrette'
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