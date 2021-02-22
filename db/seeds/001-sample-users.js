
exports.seed = function(knex) {

   return knex('customers').del()
    .then(function () {
      return knex('customers').insert([
        {username: 'sampleUser01', password: 'pw01'},
        {username: 'sampleUser02', password: 'pw02'},
        {username: 'sampleUser03', password: 'pw03'}
      ]);
    });
};
