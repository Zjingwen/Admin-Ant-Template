let Mock = require('mockjs');

const Random = Mock.Random;

module.exports = {
  'GET /api/user/sign'(req, res) {
    res.json({
      status: {
        code: 1001,
        msg: 'ok',
      },
      result: {
        name: Random.string('壹贰叁肆伍陆柒捌玖拾', 3, 5),
        sign: Random.string('lower', 20),
      },
    });
  }
};
