const resolvers3 = {
  Query: {
    posts3() {
      return[ {id: 3, title: "Post3", votes: 3}];
    },
  }
};

module.exports = resolvers3;