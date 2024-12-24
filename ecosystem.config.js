module.exports = {
  apps: [
    {
      name: 'Express App',
      script: 'src/server.js',
      watch: true,
      instances: 'MAX',
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_prod: {
        NODE_ENV: 'production',
      },
    },
  ],
};
