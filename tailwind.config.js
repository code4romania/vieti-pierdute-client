module.exports = {
    purge: [ "src/**/*.vue"],
    darkMode: false, // or "media" or "class"
    theme: {
        fontFamily: {
            "sans": "Roboto, sans",
            "serif": "Fraunces, serif",
        },
        letterSpacing: {
            tight: "-.025em",
            normal: "0",
            wide: ".05em",
            wider: ".1em",
            widest: ".2em",
        },
        extend: {
            fontSize: {
                "10xl": "12em",
            },
            colors: {
                black: "#1d1d1d",
                white: "#ffffff",
            },
        },
    },
}