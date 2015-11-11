module.exports = function (){
  return {
    add: function(num1, num2) { 
        console.log("the sum is:", num1 + num2); 
    },
    multiply: function(num1, num2) {
        console.log("the product is:", num1 * num2); 
    },
    square: function(num) {
        console.log(num + " squared is:", num * num);  

    },
    random: function(min, max) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(num);
    }
  }
}();