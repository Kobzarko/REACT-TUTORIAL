/* eslint-disable babel/object-curly-spacing */
const employers = [
  "Alex",
  "",
  "ludmila",
  "Viktor",
  "",
  "oleg",
  "iNna",
  "Ivan",
  "Alex",
  "Olga",
  " Ann",
];

let employersNames = employers.filter((employer) => {
  return employer.length > 0 && employer.length != "";
});

console.log(employersNames);

employersNames = employersNames.map((item) =>
  item
    .toLocaleLowerCase()
    .trim()
    .replace(/\b\w/g, (l) => l.toUpperCase())
);

console.log(employersNames);

const sponsors = {
  cash: [40000, 5000, 30400, 12000],

  eu: ["SRL", "PLO", "J&K"],

  rus: ["RusAuto", "SBO"],
};

const { cash, eu, rus } = sponsors;

const sumSponsors = [...eu, ...rus, "unexpected sponsor"];

const calcCash = (cash = 0) => cash.reduce((a, b) => a + b);

const money = calcCash(cash);

const makeBusiness = ({ cash, emp, owner = "Sam", director = "Victor" }) => {
  console.log(
    `We have a business. Owner: ${owner},
    director: ${director}. 
    Our budget: ${cash}.
    And our employers: ${emp}.
    And we have sponsors: ${sumSponsors}.
    Note. Be careful with ${eu[0]}. It's a huge risk.`
  );
};

makeBusiness({ cash: money, emp: employersNames });
