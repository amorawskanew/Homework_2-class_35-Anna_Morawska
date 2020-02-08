module.exports.groupAdultsByAgeRange = function(people) {
  var adults = people.filter(person => person.age >= 18);

  var group20AndYounger = adults.filter(
    person => person.age >= 18 && person.age <= 20
  );

  var group21To30 = adults.filter(
    person => person.age >= 21 && person.age <= 30
  );

  var group31To40 = adults.filter(
    person => person.age >= 31 && person.age <= 40
  );

  var group41To50 = adults.filter(
    person => person.age >= 41 && person.age <= 50
  );

  var group51AndOlder = adults.filter(person => person.age >= 51);

  var result = {};

  if (group20AndYounger.length !== 0) {
    result["20 and younger"] = group20AndYounger;
  }
  if (group21To30.length !== 0) {
    result["21-30"] = group21To30;
  }
  if (group31To40.length !== 0) {
    result["31-40"] = group31To40;
  }
  if (group41To50.length !== 0) {
    result["41-50"] = group41To50;
  }
  if (group51AndOlder.length !== 0) {
    result["51 and older"] = group51AndOlder;
  }

  return result;
};
