module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'burger',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}