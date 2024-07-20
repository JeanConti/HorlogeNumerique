function digitalClock12Hours() {
    // Get the current date and time.
    const now = new Date();

    // Get the hour, minute, and second.
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    // Convert the hour to 12-hour format.
    if (hour > 12) {
      hour -= 12;
    }
  
    // Pad the minute and second with zeros if necessary.
    minute = pad(minute, 2);
    second = pad(second, 2);
  
    // Create the string for the clock.
    const clock = `${hour}:${minute}:${second}`;
  
    // Return the clock.
    return clock;
  }
  
  // A helper function to pad a number with zeros.
  function pad(number, length) {
    const str = number.toString();
    while (str.length < length) {
      str = `0${str}`;
    }
    return str;
  }