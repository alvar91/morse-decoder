const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const arr = [];

  for (let i = 0; i < expr.length; i += 10) {
    const dec = expr.slice(i, i + 10);
    const chunk = dec.slice(dec.indexOf("1"));

    const res = [];

    for (let i = 0; i < chunk.length; i += 2) {
      const pair = chunk.slice(i, i + 2);

      switch (pair) {
        case "10":
          res.push(".");
          break;
        case "11":
          res.push("-");
          break;
        case "*":
          res.push(" ");
          break;
      }
    }

    arr.push(res.join(""));
  }

  return arr.map((item) => (item === " " ? " " : MORSE_TABLE[item])).join("");
}

module.exports = {
  decode,
};
