function getShippingCost(country) {
  const inputCountry = country.toLowerCase();
  const normCountry = inputCountry[0].toUpperCase() + inputCountry.slice(1);
  switch (inputCountry) {
    case "china":
      return `Shipping to ${normCountry} will cost 100 credits`;
    case "chile":
      return `Shipping to ${normCountry} will cost 250 credits`;
    case "australia":
      return `Shipping to ${normCountry} will cost 170 credits`;
    case "jamaica":
      return `Shipping to ${normCountry} will cost 120 credits`;
    default: 
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("ausTralia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
