module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'sans': 'Roboto, sans',
            'serif': 'Fraunces, serif',
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'primary': '#1d1d1d',
        }),
        letterSpacing: {
            tight: '-.025em',
            normal: '0',
            wide: '.05em',
            wider: '.1em',
            widest: '.2em',
        },
        extend: {
            fontSize: {
                '10xl': '12em',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}