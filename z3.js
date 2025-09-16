function whatCentury(year)
{
  const yr = parseInt(year, 10);
  const centuryNum = Math.ceil(yr / 100);

  const suffixes = ["th", "st", "nd", "rd"];
  const v = centuryNum % 100;

  let suffix;
  if (v >= 11 && v <= 13) {
    suffix = "th";
  } else {
    switch (centuryNum % 10) {
      case 1:
        suffix = "st";
        break;
      case 2:
        suffix = "nd";
        break;
      case 3:
        suffix = "rd";
        break;
      default:
        suffix = "th";
    }
  }

  return centuryNum + suffix;
}