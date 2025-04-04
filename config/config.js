require('dotenv').config();

module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 6000,
    jwt: {
        secret: process.env.JWT_SECRET || 'your_jwt_secret',
        expiresIn: process.env.JWT_EXPIRES_IN || '30d'
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        name: process.env.DB_NAME || 'tuckmate_db'
    },
    ecocash: {
        apiKey: process.env.ECOCASH_API_KEY,
        merchantId: process.env.ECOCASH_MERCHANT_ID,
        callbackUrl: process.env.ECOCASH_CALLBACK_URL
    },
    qr: {
        secret: process.env.QR_CODE_SECRET || 'your_qr_secret',
        cashExpiryMinutes: 15,
        ecocashExpiryMinutes: 60
    }
};