
let data = [{
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self-care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

let myData = JSON.parse(JSON.stringify(data))

let stat = document.getElementsByClassName('stats')[0];
myData.forEach((item) => {
  let cards = document.createElement('div')
  cards.classList.add('cont', `${item.title}`);
  cards.innerHTML = `
  <div class="cont__info stats__${item.title}">
   <div class="stats__title">
      <h2 class="stats__title-name ${item.title}-title">${item.title}</h2>
       <p>...</p>
     </div>
    <div class="stats__hours-section">
      <div class="daily daily--active">
         <p class="recent">
         ${item.timeframes.daily.current}hrs
           <!-- daily -->
         </p>
         <p class="previous">
           Yesterday - ${item.timeframes.daily.previous}hrs
           <!-- daily -->
         </p>
       </div>

       <div class="weekly">
         <p class="recent">
         ${item.timeframes.weekly.current}hrs
          <!-- weekly -->
        </p>
        <p class="previous">
           Last Week - ${item.timeframes.weekly.previous}hrs
           <!-- weekly -->
         </p>

       </div>
       <div class="monthly">
         <p class="recent">
         ${item.timeframes.monthly.current}hrs
           <!-- monthly -->
         </p>
         <p class="previous">
          Last Month - ${item.timeframes.monthly.previous}hrs
          <!-- monthly -->
         </p>
      </div>
     </div>
  </div>
 </div>  
  `
  stat.append(cards)
})
let dBtn = document.getElementsByClassName('daily-btn')[0];
let wBtn = document.getElementsByClassName('weekly-btn')[0];
let mBtn = document.getElementsByClassName('monthly-btn')[0];
let daily = document.getElementsByClassName('daily');
let weekly = document.getElementsByClassName('weekly');
let monthly = document.getElementsByClassName('monthly');

// set active to daily button and section
let showDaily = () => {
  // button
  dBtn.classList.add('btn--active')
  // sections
  for(let i = 0;i < daily.length; i++){
    daily[i].classList.add('daily--active');
  }
}
// when daily btn is active this remove active from the other buttons and sections
let remove_wm = () => {
  wBtn.classList.remove('btn--active');
  mBtn.classList.remove('btn--active');
  
  for(let i = 0;i < weekly.length; i++){
    weekly[i].classList.remove('weekly--active');
  }
  for(let i = 0;i < monthly.length; i++){
    monthly[i].classList.remove('monthly--active');
  }
}
// set active to weekly button and section
let showWeekly = () => {
  // button
  wBtn.classList.add('btn--active');
  // sections
  for(let i = 0;i < weekly.length; i++){
    weekly[i].classList.add('weekly--active');
  }
}

// when weekly btn is active this remove active from the other buttons and sections
let remove_dm = () => {
  dBtn.classList.remove('btn--active');
  mBtn.classList.remove('btn--active');

  for(let i = 0;i < daily.length; i++){
    daily[i].classList.remove('daily--active');
  }
  for(let i = 0;i < monthly.length; i++){
    monthly[i].classList.remove('monthly--active');
  }
}

// set active to monthly button and section
let showMonthly = () => {
  // button
  mBtn.classList.add('btn--active');
  // sections
  for(let i = 0;i < monthly.length; i++){
    monthly[i].classList.add('monthly--active');
  }
}
// when monthly btn is active this remove active from the other buttons and sections
let remove_dw = () => {
  // btn
  dBtn.classList.remove('btn--active');
  wBtn.classList.remove('btn--active');

  // sections
  for(let i = 0;i < daily.length; i++){
    daily[i].classList.remove('daily--active');
  }
  for(let i = 0;i < weekly.length; i++){
    weekly[i].classList.remove('weekly--active');
  }
}

dBtn.addEventListener('click', () => {
  showDaily()
  remove_wm()

})
wBtn.addEventListener('click', () => {
  showWeekly()
  remove_dm()

})
mBtn.addEventListener('click', () => {
  showMonthly()
  remove_dw()


})