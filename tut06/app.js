var dir = process.argv[2],
    ext = process.argv[3],
    filterFn = require('./solution_filter.js');

filterFn(dir,ext, function(err, list) {
    if (err) {
        return console.error('There was an error:', err);
    } 
    list.forEach(function(val) {
        console.log(val);
    });
    
});
