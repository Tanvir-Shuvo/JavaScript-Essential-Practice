/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */
class DailyRoutine {
  constructor(
    // Defines parameters:
    rise,
    shower,
    breakfast,
    emailCheck,
    workStart,
    projectA,
    projectB,
    lunchTime,
    workDone,
    refreshment,
    dinner,
    familyTime,
    sleep,
    startday
  ) {
    // Define properties:
    this.rise = rise;
    this.shower = shower;
    this.breakfast = breakfast;
    this.emailCheck = emailCheck;
    this.workStart = workStart;
    this.projects = {
      morning: projectA,
      afternoon: projectB,
    };
    this.lunchTime = lunchTime;
    this.workDone = workDone;
    this.refreshment = refreshment;
    this.dinner = dinner;
    this.familyTime = familyTime;
    this.sleep = sleep;
    this.startday = startday;
  }
  // Add methods like normal functions:
  projectChange(morningNew, afternoonNew) {
    this.projects.morning = morningNew;
    this.projects.afternoon = afternoonNew;
  }
  // date global object
}

export default DailyRoutine;
