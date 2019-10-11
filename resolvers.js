const resolvers = {
  Query: {
    me: () => {
      return {
        username: 'Robin Wieruch',
      };
    },
  },
  Mutation: {
    changeName: (_, { name }) => {
      const user = {
        username: name,
      }
      return user;
    },
  },
};

module.exports = resolvers