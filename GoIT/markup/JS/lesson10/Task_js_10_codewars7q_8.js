/*Let's build a calculator that can calculate the average for an
arbitrary number of arguments. The test expects you to provide a
Calculator object with an average method:
 Calculator.average()
 The test also expects that when you pass no arguments, it returns
 0. The arguments are expected to be integers.
 It expects Calculator.average(3,4,5) to return 4.
 */

var Calculator = {
    average: function() {
        var args = [].slice.call(arguments);
        if (args.length !== 0) {
            var sum = args.reduce(function(sum, current) {
                return sum + current;
            });
            return sum / args.length;
        } else {
            return 0;
        }
    }
};

console.log(Calculator.average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));