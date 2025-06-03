document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("log").addEventListener("click", () => {
    console.log("console log demo");
  });

  document.getElementById("error").addEventListener("click", () => {
    console.error("console error demo");
  });

  document.getElementById("count").addEventListener("click", () => {
    console.count("Count Button");
  });

  document.getElementById("warn").addEventListener("click", () => {
    console.warn("console warn button");
  });

  document.getElementById("assert").addEventListener("click", () => {
    const errorMsg = "the number does not equal 3";
    console.assert(2 === 3, errorMsg);
  });

  document.getElementById("clear").addEventListener("click", () => {
    console.clear();
  });

  document.getElementById("dir").addEventListener("click", () => {
    const object = document.getElementById("dir");
    console.dir(object);
  });

  document.getElementById("dirxml").addEventListener("click", () => {
    console.dirxml(document.getElementById("dirxml"));
  });

  document.getElementById("group-start").addEventListener("click", () => {
    console.group();
  });

  document.getElementById("group-end").addEventListener("click", () => {
    console.groupEnd();
  });

  document.getElementById("table").addEventListener("click", () => {
    const people = [
      { index: 0, book: "software-1", author: "billy" },
      { index: 1, book: "software-2", author: "bob" },
      { index: 2, book: "software-3", author: "joe" },
    ];
    console.table(people);
  });

  document.getElementById("start-timer").addEventListener("click", () => {
    console.time("timer button");
  });

  document.getElementById("end-timer").addEventListener("click", () => {
    console.timeEnd("timer button");
  });

  document.getElementById("trace").addEventListener("click", () => {
    console.trace();
  });

  try {
    const btn = document.getElementById("dne");
    const logger = btn.addEventListener("click", () => {
      console.log("still here!");
    });
  } catch (err) {
    console.error(err);
  } finally {
    console.log("try catch logic executed!");
  }

  document.getElementById("custom-error").addEventListener("click", () => {
    if (!(2 === 3)) {
      throw new WeirdError("why would 2 be equal to 3?");
    }
  });

  // calculator stuff
  const firstInput = document.getElementById("first-num");
  const secondInput = document.getElementById("second-num");
  const operatorSel = document.getElementById("operator");
  const calculateBtn = document.getElementById("calculate");
  const outputEl = document.querySelector("output");

  calculateBtn.addEventListener("click", (event) => {
    event.preventDefault();

    try {
      const a = parseInt(firstInput.value, 10);
      const b = parseInt(secondInput.value, 10);
      if (Number.isNaN(a)) {
        throw new CalculationError(`"${firstInput.value}" needs to be an int`);
      }
      if (Number.isNaN(b)) {
        throw new CalculationError(`"${secondInput.value}" needs to be an int`);
      }
      const op = operatorSel.value;
      let result;
      switch (op) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          if (b === 0) {
            throw new CalculationError("divide by 0");
          }
          result = a / b;
          break;
      }
      outputEl.textContent = result;
    } catch (err) {
      throw new CalculationError("breh");
    }
  });

  document.getElementById("global").addEventListener("click", () => {
    foo();
  });
});

class WeirdError extends Error {
  constructor(message) {
    super(message);
    this.name = "weiiird";
  }
}

class CalculationError extends Error {
  constructor(message) {
    super(message);
    this.name = "???";
  }
}

window.onerror = (err) => {
  console.error("WEE WOO WEE WOO!");
};
