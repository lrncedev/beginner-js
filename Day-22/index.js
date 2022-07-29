const person = {
  name: "Wes Bos",
  sayHi() {
    return `hey ${this.name}`;
  },
};
const jenna = { name: "Jenna" };

const $ = document.querySelector.bind(document);
const lookFor = document.querySelectorAll.bind(document);

const wrapper = document.querySelector(".wrapper");
const p = wrapper.querySelector("p");
console.log(p);
console.log($("p"));
console.log(lookFor("p"));

const bill = {
  total: 1000,
  calculate: function (taxRate) {
    return this.total + this.total * taxRate;
  },
  describe(mealType, drinkType, taxRate) {
    console.log(
      `Your meal of ${mealType} with a drink of ${drinkType} was ${this.calculate(
        taxRate
      )}`
    );
  },
};

const calc = bill.calculate.bind({ total: 500 }, 0.06);
console.log("bind:", calc());

const total2 = bill.calculate.call({ total: 500 }, 0.06);
console.log("call:", total2);

const total3 = bill.calculate.apply({ total: 325 }, [0.6]);
console.log("apply:", total3);

const meal1 = bill.describe.call(bill, "pizza", "beer", 0.13);
const meal2 = bill.describe.apply(bill, ["pizza", "beer", 0.13]);
