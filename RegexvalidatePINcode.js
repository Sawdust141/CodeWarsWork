/*ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.*/

function validatePIN (pin) {
    //Check length of number, if not 4 or 6, return false
    if (pin.length != 4 && pin.length != 6)
      return false
    //Check that all digits are integers
    for (var i in pin)
      if (pin[x] > '9' || pin[x] < '0')
        return false
    return true
  }