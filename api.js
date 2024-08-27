import { card } from "./ui.js";
const getCountry= async (country) => {
    const res = await fetch (`https://restcountries.com/v3.1/name/${country}`);
const data = await res.json()
console.log(data);
card(data)}
const getCountry2= async (country2) => {
    const res = await fetch (`https://restcountries.com/v3.1/name/${country2}`);
const data = await res.json()
console.log(data);
card(data)}

const getCountry3= async (country3) => {
    const res = await fetch (`https://restcountries.com/v3.1/name/${country3}`);
const data = await res.json()
console.log(data);
card(data)}

const getCountry4= async (country4) => {
    const res = await fetch (`https://restcountries.com/v3.1/name/${country4}`);
const data = await res.json()
console.log(data);
card(data)}

const getCountry5= async (country5) => {
    const res = await fetch (`https://restcountries.com/v3.1/name/${country5}`);
const data = await res.json()
console.log(data);
card(data)} 

const getCountry6= async (country6) => {
    const res = await fetch (`https://restcountries.com/v3.1/name/${country6}`);
const data = await res.json()
console.log(data);
card(data)}

const getCountry7= async (country7) => {
    const res = await fetch (`https://restcountries.com/v3.1/name/${country7}`);
const data = await res.json()
console.log(data);
card(data)}
const getCountry8= async (country8) => {
    const res = await fetch (`https://restcountries.com/v3.1/name/${country8}`);
const data = await res.json()
console.log(data);
card(data)}
getCountry('egypt')
getCountry2('uk')
getCountry3('tunisia')
getCountry4('ISE')
getCountry5('French Polynesia')
getCountry6("Curaçao")
getCountry7("Togo")
getCountry8('russia')
export{getCountry}