import { expect, test } from "bun:test";
import { Weekday, weekdayOccurence } from ".";

test("First Seven Weekdays March, Leap Year", () => {
  let timestamp = new Date(2024, 2, 1, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Friday);
  expect(weekdayOccurence(timestamp)).toEqual(1);

  timestamp = new Date(2024, 2, 2, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Saturday);
  expect(weekdayOccurence(timestamp)).toEqual(1);

  timestamp = new Date(2024, 2, 3, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Sunday);
  expect(weekdayOccurence(timestamp)).toEqual(1);

  timestamp = new Date(2024, 2, 4, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Monday);
  expect(weekdayOccurence(timestamp)).toEqual(1);

  timestamp = new Date(2024, 2, 5, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Tuesday);
  expect(weekdayOccurence(timestamp)).toEqual(1);

  timestamp = new Date(2024, 2, 6, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Wednesday);
  expect(weekdayOccurence(timestamp)).toEqual(1);

  timestamp = new Date(2024, 2, 7, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Thursday);
  expect(weekdayOccurence(timestamp)).toEqual(1);
});

test("Second Seven Weekdays March, Leap Year", () => {
  let timestamp = new Date(2024, 2, 8, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Friday);
  expect(weekdayOccurence(timestamp)).toEqual(2);

  timestamp = new Date(2024, 2, 9, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Saturday);
  expect(weekdayOccurence(timestamp)).toEqual(2);

  timestamp = new Date(2024, 2, 10, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Sunday);
  expect(weekdayOccurence(timestamp)).toEqual(2);

  timestamp = new Date(2024, 2, 11, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Monday);
  expect(weekdayOccurence(timestamp)).toEqual(2);

  timestamp = new Date(2024, 2, 12, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Tuesday);
  expect(weekdayOccurence(timestamp)).toEqual(2);

  timestamp = new Date(2024, 2, 13, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Wednesday);
  expect(weekdayOccurence(timestamp)).toEqual(2);

  timestamp = new Date(2024, 2, 14, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Thursday);
  expect(weekdayOccurence(timestamp)).toEqual(2);
});


test("First Seven Weekdays March, ! Leap Year", () => {
  let timestamp = new Date(2023, 2, 1, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Wednesday);
  expect(weekdayOccurence(timestamp)).toEqual(1);

  timestamp = new Date(2023, 2, 2, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Thursday);
  expect(weekdayOccurence(timestamp)).toEqual(1);

  timestamp = new Date(2023, 2, 3, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Friday);
  expect(weekdayOccurence(timestamp)).toEqual(1);

  timestamp = new Date(2023, 2, 4, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Saturday);
  expect(weekdayOccurence(timestamp)).toEqual(1);

  timestamp = new Date(2023, 2, 5, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Sunday);
  expect(weekdayOccurence(timestamp)).toEqual(1);

  timestamp = new Date(2023, 2, 6, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Monday);
  expect(weekdayOccurence(timestamp)).toEqual(1);

  timestamp = new Date(2023, 2, 7, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Tuesday);
  expect(weekdayOccurence(timestamp)).toEqual(1);
});

test("Second Seven Weekdays March, ! Leap Year", () => {
  let timestamp = new Date(2023, 2, 8, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Wednesday);
  expect(weekdayOccurence(timestamp)).toEqual(2);

  timestamp = new Date(2023, 2, 9, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Thursday);
  expect(weekdayOccurence(timestamp)).toEqual(2);

  timestamp = new Date(2023, 2, 10, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Friday);
  expect(weekdayOccurence(timestamp)).toEqual(2);

  timestamp = new Date(2023, 2, 11, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Saturday);
  expect(weekdayOccurence(timestamp)).toEqual(2);

  timestamp = new Date(2023, 2, 12, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Sunday);
  expect(weekdayOccurence(timestamp)).toEqual(2);

  timestamp = new Date(2023, 2, 13, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Monday);
  expect(weekdayOccurence(timestamp)).toEqual(2);

  timestamp = new Date(2023, 2, 14, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Tuesday);
  expect(weekdayOccurence(timestamp)).toEqual(2);
});


test("Last Eight Weekdays February, Leap Year", () => {
  let timestamp = new Date(2024, 1, 23, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Friday);
  expect(weekdayOccurence(timestamp)).toEqual(4);

  timestamp = new Date(2024, 1, 24, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Saturday);
  expect(weekdayOccurence(timestamp)).toEqual(4);

  timestamp = new Date(2024, 1, 25, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Sunday);
  expect(weekdayOccurence(timestamp)).toEqual(4);

  timestamp = new Date(2024, 1, 26, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Monday);
  expect(weekdayOccurence(timestamp)).toEqual(4);

  timestamp = new Date(2024, 1, 27, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Tuesday);
  expect(weekdayOccurence(timestamp)).toEqual(4);

  timestamp = new Date(2024, 1, 28, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Wednesday);
  expect(weekdayOccurence(timestamp)).toEqual(4);

  timestamp = new Date(2024, 1, 29, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Thursday);
  expect(weekdayOccurence(timestamp)).toEqual(5);
});


test("Last Eight Weekdays January, Leap Year", () => {
  let timestamp = new Date(2024, 0, 25, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Thursday);
  expect(weekdayOccurence(timestamp)).toEqual(4);

  timestamp = new Date(2024, 0, 26, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Friday);
  expect(weekdayOccurence(timestamp)).toEqual(4);

  timestamp = new Date(2024, 0, 27, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Saturday);
  expect(weekdayOccurence(timestamp)).toEqual(4);

  timestamp = new Date(2024, 0, 28, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Sunday);
  expect(weekdayOccurence(timestamp)).toEqual(4);

  timestamp = new Date(2024, 0, 29, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Monday);
  expect(weekdayOccurence(timestamp)).toEqual(5);

  timestamp = new Date(2024, 0, 30, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Tuesday);
  expect(weekdayOccurence(timestamp)).toEqual(5);

  timestamp = new Date(2024, 0, 31, 1, 0, 0);
  expect(timestamp.getDay()).toEqual(Weekday.Wednesday);
  expect(weekdayOccurence(timestamp)).toEqual(5);
});