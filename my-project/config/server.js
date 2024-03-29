module.exports = ({ env }) => ({
    host: env('HOST', 'https://tawfiki-design.netlify.app/'),
    prod('')
    port: env.int('PORT', 1337),
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', '2cff22a8f4c73bf35f80b6ed40ce3db6'),
        },
    },
});