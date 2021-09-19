const resolvers1 = {
  Query: {
    posts1() {
      return[ {id: 1, title: "Post1", votes: 1}];
    },
  }
};

module.exports = resolvers1;