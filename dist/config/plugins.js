"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// config/plugins.ts
exports.default = () => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: process.env.CLOUDINARY_NAME,
                api_key: process.env.CLOUDINARY_KEY,
                api_secret: process.env.CLOUDINARY_SECRET,
            },
        },
    },
});
