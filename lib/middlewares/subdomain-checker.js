module.exports = function(req, res, next) {
    'use strict';

    // If the length of subdomains array is less than and equal to zero
    // Then there's no subdomain
    if (req.subdomains.length == 0) {
        // Do nothing, this is default page
        next();
        return false;
    }

    // Get the first subdomain
    var subdomain = req.subdomains[0];

    // Check if subdomain is www
    if (subdomain === 'www') {
        // Do nothing, this is the default page
        next();
        return false;
    }

    // Change configuration to tenant pages
    req.tenant = subdomain;
    next();
};