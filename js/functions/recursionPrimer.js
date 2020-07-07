function power(base, exp) {
	
    if (exp === 0) {
		return 1;
	} 

    // The call stack will process this as:
	//2 * power(2, 3-1) -> 2 * power(2, 2) -> 2 * 4
    //2 * power(2, 2-1) -> 2 * power(2, 1) -> 2 * 2 = 4
    //2 * power(2, 1-1) -> 2 * power(2, 0) -> 1 ==> 2 * 1 = 2
	return base * power(base, exp - 1);

}

console.clear();
console.log(power(2, 3));
