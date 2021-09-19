const resolvers2 = {
  Query: {
    posts2() {
      return[ {id: 2, title: "Post2", votes: 2}];
    },
  }
};

module.exports = resolvers2;