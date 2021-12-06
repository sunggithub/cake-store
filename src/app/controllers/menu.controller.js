const catchAsync = require('../../utils/catch-async');

const index = catchAsync(async (req, res) => {
    const { user } = req;
    const data = {
        user,
    };
    return res.render('user/menu', {
        title: 'Menu', //  Required Title
        styles: ['layout-user', 'header', 'footer', 'menu'], // Required Stylesheet name from public
        scripts: [], // Required Script name from public
        data,
    });
});

module.exports = {
    index,
};
