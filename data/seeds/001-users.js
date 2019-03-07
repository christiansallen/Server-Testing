exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries AND resets ids
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { username: "John" },
        { username: "Hamza" },
        { username: "Christian" }
      ]);
    });
};
