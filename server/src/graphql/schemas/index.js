const { gql } = require('apollo-server');

const Owner = require('./Owner');
const Question = require('./Question');
const Query = require('./Query');

const typeDefs = gql `
  ${Owner}
  ${Question}
  ${Query}
`;

module.exports = typeDefs;
