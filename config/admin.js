module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '196b1971ae0ea885a176ac0eee67a0a2'),
  },
});
