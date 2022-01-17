const dailylink = document.getElementsByClassName('daily-btn')[0];
const weeklylink = document.getElementsByClassName('weekly-btn')[0];
const monthlylink = document.getElementsByClassName('monthly-btn')[0];
const daily = document.getElementsByClassName('daily');
const weekly = document.getElementsByClassName('weekly');
const monthly = document.getElementsByClassName('monthly');

const statdata = [
    {
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



const stats = JSON.parse(JSON.stringify(statdata));

const routine = document.getElementsByClassName('status')[0];

stats.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add("status", `${item.title}`);
    const content = `
     
      <div class="routine--container">
        <div class = "routine--info">
        <div class = "card-header">
        <h2 class = "stats--title-name ${item.title}">${item.title}</h2>
        <p>...</p>
      </div>
      <div class = hours--section">
      <!-- daily -->
        <div class= "daily ">
            <p class = "current">${item.timeframes.daily.current}hrs</p>
            <p class = "previous">Yesterday - ${item.timeframes.daily.previous}hrs</p>
        </div>
        <div class= "weekly weekly--active">
            <p class = "current">${item.timeframes.weekly.current}hrs</p>
            <p class = "previous">Last Week- ${item.timeframes.weekly.previous}hrs</p>
        </div>
        <div class= "monthly">
            <p class = "current">${item.timeframes.monthly.current}hrs</p>
            <p class = "previous">Last Month - ${item.timeframes.monthly.previous}hrs</p>
        </div>
      </div>
        </div>
          
      </div>
  
    `;
    
routine.innerHTML += content;
})

//setting active daily link section

const showDaily = () => {
  //for the link
  dailylink.classList.add('btn--active')
  //for the information
  for(let i = 0; i < daily.length; i++){
    daily[i].classList.add('daily--active');
  }
  
}

//when active deactivate other links monthly and weekly
const deactivate_mnw = () => {
  
  weeklylink.classList.remove('btn--active');
  for (let i = 0; i < weekly.length; i++)
  {
    weekly[i].classList.remove('weekly--active');
  }
  monthlylink.classList.remove('btn--active');

  for (let i = 0; i < monthly.length; i++)
  {
    monthly[i].classList.remove('monthly--active');
  }
  
 
}

let showWeekly = () => {

  //for the link
  weeklylink.classList.add('btn--active')
  //for the information
  for(let i = 0; i < weekly.length; i++){
    weekly[i].classList.add('weekly--active');
  }
}

//when active deactivate other links daily and monthly

const deactivate_dnm = () => {
  dailylink.classList.remove('btn--active');
  monthlylink.classList.remove('btn--active');

  for (let i = 0; i < daily.length; i++)
  {
    daily[i].classList.remove('daily--active');
  }
  for (let i = 0; i < monthly.length; i++)
  {
    monthly[i].classList.remove('monthly--active');
  }
 
}

let showMonthly = () => {
  //for the link
  monthlylink.classList.add('btn--active')
  //for the information
  for(let i = 0; i < monthly.length; i++){
    monthly[i].classList.add('monthly--active');
  }
}

//when active deactivate other links daily and weekly

const deactivate_dnw = () => {
  weeklylink.classList.remove('btn--active');
  dailylink.classList.remove('btn--active');

  for (let i = 0; i < weekly.length; i++)
  {
    weekly[i].classList.remove('weekly--active');
  }
  for (let i = 0; i < daily.length; i++)
  {
    daily[i].classList.remove('daily--active');
  }
 
}

dailylink.addEventListener('click', () => {
  showDaily()
  deactivate_mnw()

})

weeklylink.addEventListener('click', () => {

  showWeekly()
  deactivate_dnm()
})

monthlylink.addEventListener('click', () => {
  showMonthly()
  deactivate_dnw()
})


