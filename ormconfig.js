module.exports = {
	type: 'postgres',
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT,
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DATABASE,
	synchronize: true,
	logging: true,
	logger: 'file',
	entities:
		process.env.NODE_ENV === 'prod'
			? ['dist/entity/**/*.js']
			: ['src/entity/**/*.ts'],
	migrations: ['src/migration/**/*.ts'],
	subscribers: ['src/subscriber/**/*.ts'],
	cli: {
		entitiesDir: 'src/entity',
		migrationsDir: 'src/migration',
		subscribersDir: 'src/subscriber',
	},
};
