angular.module('eit', [])
  .controller('EITController', function EITController() {
    this.givenNames = "";
    this.lastName = "";
    this.gender = "";
    this.dob = "";
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "-" + (currentdate.getMonth() + 1) + "-"
      + currentdate.getFullYear() + "-" + currentdate.getHours() + "-"
      + currentdate.getMinutes() + "-" + currentdate.getSeconds();
    console.log(currentdate.getMilliseconds())

  });