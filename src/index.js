
exports.min = function min (array) {
	if(!array || array.length == 0) {
		return 0;
	}

	array.sort(function(a,b) {
      return a-b;
    });

	return array[0];
  //return 0;
}

exports.max = function max (array) {

	if(!array || array.length ==0) {
		return 0;
	}

	array.sort((a,b) => a-b);

	return array[array.length - 1];
  //return 0;
}

exports.avg = function avg (array) {
	if(!array || array.length == 0) {
		return 0;
	}

	const reducer = (accumulator, currentValue) => accumulator + currentValue;

	return array.reduce(reducer) / array.length;
  //return 0;
}
