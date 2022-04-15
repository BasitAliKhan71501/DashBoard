 const part1 = document.querySelector("#part1");
 const part2 = document.querySelector("#part2");
 const navbarDropdown = document.querySelector("#navbarDropdown");
 const dropClick1 = document.querySelector("#dropClick1");
 const dropClick2 = document.querySelector("#dropClick2");
 const dropClick3 = document.querySelector("#dropClick3");
 const dropClick4 = document.querySelector("#dropClick4");
 const dropClick5 = document.querySelector("#dropClick5");
 const dropClick6 = document.querySelector("#dropClick6");



 const firstRotator = document.querySelector(".firstRotator");
 const secondRotator = document.querySelector(".secondRotator");
 const thirdRotator = document.querySelector(".thirdRotator");
 const fourthRotator = document.querySelector(".fourthRotator");
 const fifthRotator = document.querySelector(".fifthRotator");
 const sixthRotator = document.querySelector(".sixthRotator");
 const barsBtn = document.querySelector("#barsBtn");
 const titleNone = document.querySelector("#titleNone");
 const titleblock = document.querySelector("#titleblock");
 const noneOnSm1 = document.querySelector("#noneOnSm1");
 const noneOnSm2 = document.querySelector("#noneOnSm2");
 const noneOnSm3 = document.querySelector("#noneOnSm3");
 const noneOnSm4 = document.querySelector("#noneOnSm4");
 const noneOnSm5 = document.querySelector("#noneOnSm5");
 const noneOnSm6 = document.querySelector("#noneOnSm6");
 const noneOnSm7 = document.querySelector("#noneOnSm7");
 const noneOnSm8 = document.querySelector("#noneOnSm8");
 const noneOnSm9 = document.querySelector("#noneOnSm9");
 const noneOnSm10 = document.querySelector("#noneOnSm10");
 const noneOnSm11 = document.querySelector("#noneOnSm11");







 let m = true;

 barsBtn.addEventListener('click', () => {
     if (m === true) {
         part1.style.width = "5%";
         barsBtn.style.marginRight = "0.75rem";
         part2.style.width = "95%";
         titleNone.style.display = "none";
         titleblock.style.display = "block";
         noneOnSm1.style.display = "none";
         noneOnSm2.style.display = "none";
         noneOnSm3.style.display = "none";
         noneOnSm4.style.display = "none";
         noneOnSm5.style.display = "none";
         noneOnSm6.style.display = "none";
         noneOnSm7.style.display = "none";
         noneOnSm8.style.display = "none";
         noneOnSm9.style.display = "none";
         noneOnSm10.style.display = "none";
         noneOnSm11.style.display = "none";
         m = false;
     } else {
         part1.style.width = "17%";
         part2.style.width = "83%";
         titleNone.style.display = "block";
         titleblock.style.display = "none";
         noneOnSm1.style.display = "block";
         noneOnSm2.style.display = "block";
         noneOnSm3.style.display = "block";
         noneOnSm4.style.display = "block";
         noneOnSm5.style.display = "block";
         noneOnSm6.style.display = "block";
         noneOnSm7.style.display = "block";
         noneOnSm8.style.display = "block";
         noneOnSm9.style.display = "block";
         noneOnSm10.style.display = "block";
         noneOnSm11.style.display = "block";

         m = true;
     }
 });
 part1.style.width = "17%";
 part2.style.width = "83%";
 titleblock.style.display = 'none';

 let a = true;
 let b = true;
 let c = true;
 let t = true;
 let p = true;
 let q = true;

 dropClick1.addEventListener('click', () => {
     if (a === true) {
         firstRotator.classList.add("firstRotatorr");
         secondRotator.classList.remove("secondRotatorr");
         thirdRotator.classList.remove("thirdRotatorr");
         fourthRotator.classList.remove("fourthRotatorr");
         fifthRotator.classList.remove("fifthRotatorr");
         sixthRotator.classList.remove("sixthRotatorr");
         a = false;
     } else {
         firstRotator.classList.remove("firstRotatorr");
         a = true;
     }
 });
 dropClick2.addEventListener('click', () => {
     if (b === true) {
         firstRotator.classList.remove("firstRotatorr");
         thirdRotator.classList.remove("thirdRotatorr");
         fourthRotator.classList.remove("fourthRotatorr");
         fifthRotator.classList.remove("fifthRotatorr");
         sixthRotator.classList.remove("sixthRotatorr");
         secondRotator.classList.add("secondRotatorr");
         b = false;
     } else {
         secondRotator.classList.remove("secondRotatorr");
         b = true;
     }
 });
 dropClick3.addEventListener('click', () => {
     if (c === true) {
         firstRotator.classList.remove("firstRotatorr");
         fourthRotator.classList.remove("fourthRotatorr");
         fifthRotator.classList.remove("fifthRotatorr");
         sixthRotator.classList.remove("sixthRotatorr");
         secondRotator.classList.remove("secondRotatorr");
         thirdRotator.classList.add("thirdRotatorr");
         c = false;
     } else {
         thirdRotator.classList.remove("thirdRotatorr");
         c = true;
     }
 });
 dropClick4.addEventListener('click', () => {
     if (t === true) {
         thirdRotator.classList.remove("thirdRotatorr");
         firstRotator.classList.remove("firstRotatorr");
         fifthRotator.classList.remove("fifthRotatorr");
         sixthRotator.classList.remove("sixthRotatorr");
         secondRotator.classList.remove("secondRotatorr");
         fourthRotator.classList.add("fourthRotatorr");
         t = false;
     } else {
         fourthRotator.classList.remove("fourthRotatorr");
         t = true;
     }
 });
 dropClick5.addEventListener('click', () => {
     if (p === true) {
         fourthRotator.classList.remove("fourthRotatorr");
         thirdRotator.classList.remove("thirdRotatorr");
         firstRotator.classList.remove("firstRotatorr");
         sixthRotator.classList.remove("sixthRotatorr");
         secondRotator.classList.remove("secondRotatorr");
         fifthRotator.classList.add("fifthRotatorr");
         p = false;
     } else {
         fifthRotator.classList.remove("fifthRotatorr");
         p = true;
     }
 });
 dropClick6.addEventListener('click', () => {
     if (q === true) {
         fifthRotator.classList.remove("fifthRotatorr");
         fourthRotator.classList.remove("fourthRotatorr");
         thirdRotator.classList.remove("thirdRotatorr");
         firstRotator.classList.remove("firstRotatorr");
         secondRotator.classList.remove("secondRotatorr");
         sixthRotator.classList.add("sixthRotatorr");
         q = false;
     } else {
         sixthRotator.classList.remove("sixthRotatorr");
         q = true;
     }
 });




 let y = true;
 navbarDropdown.addEventListener('click', () => {
     if (y === true) {
         navbarDropdown.style.paddingBottom = "10rem";
         y = false;
     } else {
         navbarDropdown.style.paddingBottom = "0rem";
         y = true;

     }
 });



 //  lineChart
 const firstChart = document.getElementById('lineChart').getContext('2d');
 //  Chart.defaults.global.responsive = false;
 const lineChart = new Chart(firstChart, {
     type: 'line',
     data: {
         labels: ['Jan', '', 'Mar', '', 'May', '', 'Jul', '', 'Sep', '', 'Nov', ''],
         datasets: [{
             fill: true,
             lineTension: 0.4,
             backgroundColor: "rgba(75, 192, 192,0.4)",
             borderColor: 'rgba(75, 192, 192,1)',
             borderCapStyle: "butt",
             borderDash: [],
             borderDashoffset: "0.0",
             borderJoinStyle: "miter",
             pointBorderColor: "rgba(75, 192, 192,1)",
             pointBackgroundColor: "#ffff",
             pointBorderWidth: "1",
             pointHoverRadius: "4",
             pointHoverBackgroundColor: "rgba(75, 192, 192,1)",
             pointHoverBorderColor: "rgba(220,220,220,1)",
             pointHoverBorderWidth: "2",
             pointRadius: "4",
             pointHitRadius: "2",

             data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 40000],
         }]
     },
     options: {
         plugins: {
             legend: {
                 display: false
             },
         },
         responsive: true,

         scales: {

         }
     }
 });


 //  doughnutChart

 const secondChart = document.getElementById('doughnutChart').getContext('2d');
 const doughnutChart = new Chart(secondChart, {
     type: 'doughnut',
     data: {

         labels: [
             'Social',
             'Refreal',
             'Direct'
         ],
         datasets: [{
             backgroundColor: [
                 '#1cc88a',
                 '#36b9cc',
                 '#4e73df'
             ],
             data: [30, 15, 55]
         }]
     },

     options: {
         plugins: {
             legend: {
                 display: false
             },
         },
         responsive: true,
         cutout: 80,
         rotation: Math.PI * 65,
         animation: {
             animateScale: true
         },

     },

 });



 //  Bar Chart

 const thirdChart = document.getElementById('barChart').getContext('2d');
 const barChart = new Chart(thirdChart, {
     type: 'bar',
     data: {

         labels: [
             'Jan',
             'Mar',
             'May',
             'Jul',
             'Sep',
             'Nov'

         ],
         datasets: [{
             backgroundColor: [
                 '#1cc88a',
                 '#36b9cc',
                 '#4e73df',
                 '#1cc88a',
                 '#36b9cc',
                 '#4e73df',
                 '#1cc88a',
                 '#36b9cc',
                 '#4e73df'
             ],
             data: [100, 250, 350, 450, 550, 650, 750, 850, 950]
         }]
     },
     options: {
         plugins: {
             legend: {
                 display: false
             },
         },
         responsive: true,
         animation: {
             animateScale: true
         },

     },



 });