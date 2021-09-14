/**
 * create a object (container)
 */

const dailyroutine = {
  rise: "early",
  shower: true,
  breakfast: true,
  emailCheck: 9,
  workStart: 10,
  projects: {
    companyA: "Booking Site",
    companyB: "Company Profile Site",
  },
  lunchTime: 1.3,
  workDone: 6,
  // use oject method properety
  doneTime: function (updateTime) {
    this.workDone = updateTime;
  },
  refreshment: {
    firstOption: "Cycle Riding",
    secondOption: "Outing with Wife",
  },
  refreshmentSwitch: function (thursday, friday) {
    this.refreshment.firstOption = thursday;
    this.refreshment.secondOption = friday;
  },
  dinner: 9,
  dinnerChange: function (dinnerdone) {
    this.dinner = dinnerdone;
  },
  familyTime: "Yes",
  sleep: 11,
};

// accessing entire object
console.log("Entire dailyroutine object: ", dailyroutine);

// accessing object properties
console.log("breakfast property value: ", dailyroutine.breakfast); // dot notation
console.log("breakfast property value: ", dailyroutine["breakfast"]); // bracket notation-1
let wakeup = "rise";
console.log("rise property value: ", dailyroutine[wakeup]); // bracket notation with variable

// accessing doneTime methods
console.log("workDone property value: ", dailyroutine.workDone);
dailyroutine.doneTime(10);
console.log("doneTime method property value: ", dailyroutine.workDone);

// accessing refreshmentSwitch methods
console.log(
  "refreshment property main value:",
  dailyroutine.refreshment.firstOption
);
console.log(
  "refreshment property main value:",
  dailyroutine.refreshment.secondOption
);
dailyroutine.refreshmentSwitch(
  "Dinner time with Family",
  "Movie Time with Family"
);
console.log(
  "refreshment property firstoption value:",
  dailyroutine.refreshment.firstOption
);
console.log(
  "refreshment property secondoption value:",
  dailyroutine.refreshment.secondOption
);

// dinnerChange method call
dailyroutine.dinnerChange("friday no dinner");
console.log("dinner time update:", dailyroutine.dinner);
