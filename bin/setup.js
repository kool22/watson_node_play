/**
 * Created by swizzle on 2016. 11. 14..
 */

// Setup Data Files
var fs = require('fs');
var read_train = require('../data/js/read_train');

var options = {
    separate: true,
    headers: false,
    delimiter: ',',
    csv: true,
    limit_count: 1500
};

read_train('data/source/data.csv', function (err, text, train, test) {
    fs.writeFile('data/train/data_train.csv', train);
    fs.writeFile('data/train/data_test.csv', test);
}, options);