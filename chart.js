var ctx = document.getElementById('miGrafico').getContext('2d');

var data = {
  labels: ['Depositos', 'Retiros', 'Pagos de servicio', 'Transacciones'],
  datasets: [{
    label: 'Dinero gastado',
    data: [400, 40, 80, 150],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)'
      ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
    ],
    borderWidth: 1
  }]
};
var options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};
var miGrafico = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});
