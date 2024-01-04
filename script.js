var timeOfDay = [6, "noon", 8, "morning", "evening", 12];
console.log(timeOfDay[3]);

timeOfDay[3] = "midnight";
console.log(timeOfDay);

timeOfDay.push("morning");
console.log(timeOfDay);

timeOfDay.splice(0, 2);
console.log(timeOfDay);

for (var time of timeOfDay) {
  console.log(`It is ${time}.`);
}
