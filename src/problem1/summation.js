var sum_to_n_a = function(n) {
    return (n+1)*n/2;
};

var sum_to_n_b = function(n) {
    if (n <= 0 ) {
        return 0;
    }
    return n + sum_to_n_b(n-1)
};

var sum_to_n_c = function(n) {
    var sum = 0;
    for (let index = 1; index < n+1; index++) {
        sum += index;
    }
    return sum;
};
