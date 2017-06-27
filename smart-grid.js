var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'scss', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: "30px", /* gutter width px || % */
    container: {
        maxWidth: '1170px', /* max-width оn very large screen */
        fields: '15px' /* side fields */
    },
    breakPoints: {
        lg: {
            'width': '1170px', /* -> @media (max-width: 1100px) */
            'fields': '15px' /* side fields */
        },
        md: {
            'width': '970px', /* -> @media (max-width: 1100px) */
            'fields': '15px' /* side fields */
        },
        sm: {
            'width': '750px', /* -> @media (max-width: 1100px) */
            'fields': '15px' /* side fields */
        },
        xs: {
            'width': '480px', /* -> @media (max-width: 1100px) */
            'fields': '15px' /* side fields */
        },
        xxs: {
            'width': '320px', /* -> @media (max-width: 1100px) */
            'fields': '15px' /* side fields */
        }
        /*
        We can create any quantity of break points.

        some_name: {
            some_width: 'Npx',
            some_offset: 'N(px|%)'
        }
        */
    }
};

smartgrid('src/precss/lib', settings);
