/** @type { import("dirzzle-kit").Config } */
const config = {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:5CoxZAUna6Yi@ep-jolly-math-a15dfv6r.ap-southeast-1.aws.neon.tech/blog-website1?sslmode=require'
    }
};

export default config;