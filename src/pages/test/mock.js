import mockjax from 'mockjs'
// 获取彩种tab信息
mockjax.mock(/.*?\/wap\/match\/bets.*?/, {
  code: 200,
  data: {
    schemeId: 137421,
    name: '韩国 vs 德国',
    schemeType: 'IN_PLAY',
    icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527659142555&di=b19806ed37f5739290609ea5b8909585&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f343596de3e1a8012193a36fefb4.jpg%402o.jpg',
    accountId: '858919757981',
    coin: '1万',
    awardCoin: '-',
    ballType: 'FOOTBALL',
    playType: 'HAD',
    acceptBetterOdds: true,
    created: 1530093012000,
    status: 'REFUNDED',
    refundedCoin: '1万',
    inPlayRefundReason: '投注过期',
    inPlayRefundTime: 1530093012000,
    records: [{
      matchCode: '2018062731537',
      matchStatus: 'ENDED',
      homeTeam: {
        name: '韩国',
        imgUrl: 'https://img.itaojin8.cn/product/team/898.jpg'
      },
      homeScore: 2,
      halfHomeScore: 0,
      awayTeam: {
        name: '德国',
        imgUrl: 'https://img.itaojin8.cn/product/team/650.jpg'
      },
      awayScore: 0,
      halfAwayScore: 0,
      optionResults: [{
        option: {
          name: '平',
          odds: 6.6,
          param: '2018062731537*HAD|X@6.60',
          playType: 'HAD',
          extra: {
            concedePoint: '0:0',
            scores: '3:0'
          }
        },
        confirmOdds: 6.6,
        matchResult: '客胜',
        hit: false
      }]
    }]
  },
  msg: '12'
})
