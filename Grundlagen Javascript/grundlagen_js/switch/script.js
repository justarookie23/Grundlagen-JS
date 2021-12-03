let product = prompt('Please choose your product:');

switch (product) {
    case "Oranges":
      console.log("Oranges are $0.59 a pound.");
      break;
    case "Apples":
      console.log("Apples are $0.32 a pound.");
      break;
    default:
      console.log("This product is not in stock");
      break;
}