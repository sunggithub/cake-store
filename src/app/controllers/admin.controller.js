const catchAsync = require('../../utils/catch-async');

const index = catchAsync(async (req, res) => {
    res.render('admin/admin', {
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb'],
        breadcrumbsItem: [
            {
                title: 'Quản lý người dùng',
                href: '#',
            },
            {
                title: 'Thông tin cá nhân',
                href: '#',
            },
        ],
    });
});
const changePassword = catchAsync(async (req, res) => {
    res.render('admin/change-password', {
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb', 'change-password'],
        breadcrumbsItem: [
            {
                title: 'Quản lý người dùng',
                href: '#',
            },
            {
                title: 'Đổi mật khẩu',
                href: '#',
            },
        ],
    });
});

const info = catchAsync(async (req, res) => {
    res.render('admin/info', {
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb', 'info'],
        breadcrumbsItem: [
            {
                title: 'Quản lý người dùng',
                href: '#',
            },
            {
                title: 'Thông tin cá nhân',
                href: '#',
            },
        ],
    });
});
const managerCake = catchAsync(async (req, res) => {
    const data = [
        {
            name:"cake1",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake2",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake3",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000324234,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
    ]
    res.render('admin/managerCake', {
        data,
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb'],
        breadcrumbsItem: [
            {
                title: 'Quản lý dịch vụ',
                href: '#',
            },
            {
                title: 'Quản lý bánh',
                href: '#',
            },
        ],
    });
});
const managerReceipt = catchAsync(async (req, res) => {
    const data = [
        {
            name:"cake1",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake2",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake3",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000324234,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
        {
            name:"cake4",
            price:123000,
            typeCake:{
                name:"banh ngot"
            },
            description:"123123"
        },
    ]
    res.render('admin/managerReceipt', {
        data,
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb'],
        breadcrumbsItem: [
            {
                title: 'Quản lý dịch vụ',
                href: '#',
            },
            {
                title: 'Quản lý hóa đơn',
                href: '#',
            },
        ],
    });
});

const managerTypeCake = catchAsync(async (req, res) => {
    const data = [
        {
            id:'TypeCake1',
            name:"Bánh ngọt",
            
        },
        {
            id:'TypeCake1',
            name:"Bánh ngọt2",
            
        },
        {
            id:'TypeCake1',
            name:"Bánh ngọt3",
            
        },
        {
            id:'TypeCake1',
            name:"Bánh ngọt4",
           
        },
        {
            id:'TypeCake1',
            name:"Bánh ngọt5",
           
        },
        {
            id:'TypeCake1',
            name:"Bánh ngọt6",
           
        },
        {
            id:'TypeCake1',
            name:"Bánh ngọt7",
        
        },
        {
            id:'TypeCake1',
            name:"Bánh ngọt8",
           
        },
        {
            id:'TypeCake1',
            name:"Bánh ngọt9",            
        },
        {
            id:'TypeCake1',
            name:"Bánh kem",           
        },
        {
            id:'TypeCake1',
            name:"Bánh kem2",           
        },
    ]
    res.render('admin/managerTypeCake', {
        data,
        layout: 'admin',
        styles: ['sidebar', 'layout-admin', 'breadcrumb'],
        breadcrumbsItem: [
            {
                title: 'Quản lý dịch vụ',
                href: '#',
            },
            {
                title: 'Quản lý loại bánh',
                href: '#',
            },
        ],
    });
});

module.exports = {
    index,
    changePassword,
    managerCake,
    managerTypeCake,
    managerReceipt,
    info,
};
