var doughnut = 0;

    // Define a function,
    // which you can reuse for the task (inc & set in the DOM)
    var incrementAndSet = function () {
      doughnut = doughnut + 1;
      document.getElementById("doughnuts").innerHTML = "You have " + doughnut + " doughnuts!";
    }
    
    // Reuse the function where you want.
    // increment and set each second
    window.setInterval(incrementAndSet, 1000);
    
    // increment and set on click
    document.getElementById('btn').onclick = incrementAndSet;

    // initialize
    incrementAndSet();