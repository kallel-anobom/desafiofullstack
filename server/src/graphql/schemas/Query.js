module.exports = `
  type Query {
    questions(tag: String!, order: String, score: Int, pagesize: Int, page: Int, sort: String): [Question!]!
  }
`;
