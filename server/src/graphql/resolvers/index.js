const api = require('../../api/index');

const resolvers = {
	Query: {
		questions: async (_, { tag, order = "desc", score = 0, pagesize = 1, page = 1, sort = "activity" } ) => {

      const params = {
        site: 'stackoverflow',
        tagged: tag || 'javascript',
        order,
        score,
        pagesize,
        page,
        sort
      };

      try {
        let questionsList = [];
        let pageIncrement = 1;

        let { pagesize, page } = params;

        while(questionsList.length < pagesize) {
          page = pageIncrement;

          const response = await api.get('/questions', { params });

          response.data.items.filter(question => question.score >= score).map(question => questionsList.push(question));

          page = pageIncrement + 1;

          break;
        }

        if(questionsList.length === 0) {
          throw new Error('Não existe questions');
        }

        questionsList = questionsList.slice(0, pagesize);

        return questionsList;

      } catch (error) {
        console.error(error);
        throw new Error(error);
      }

		}
	}
};

module.exports = resolvers;
