import Mock from 'mockjs';
import {checkQuery} from './src/utils/assist';

const Random = Mock.Random;

export default {
  'GET /user/sign'(req,res){
    const QUERY = [
      'userName',
      'passWord',
    ];
    let checkbox = checkQuery(QUERY,req.query);
    if(checkbox.length){
      res.json({
        status: {
          code: 4004,
          msg: `缺少${checkbox[0]}`,
        },
      });
      return false;
    }

    res.json({
      status: {
        code: 1001,
        msg: 'ok',
      },
      result: {
        name: Random.string( '壹贰叁肆伍陆柒捌玖拾', 3, 5 ),
        sign: Random.string('lower',20),
      },
    });
  }
};
