module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cekg37pgp3jlcsksidq0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_6pvw'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '5On56XbSc0xHo93A2FNe6lqC9dF9MmLA'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
