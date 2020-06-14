import { request } from 'network/network_test'


// 商品详情接口
export function getDetailGoods(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
// 推荐商品接口
export function getDetailRecommend() {
  return request({
    url: '/recommend',
  })
}

//同意保存商品详情页的数据
export class Goods {
	constructor(itemInfo, columns, services) {
		this.title = itemInfo.title
		this.desc = itemInfo.desc
		this.newPrice = itemInfo.price
		this.oldPrice = itemInfo.oldPrice
		this.discount = itemInfo.discountDesc
		this.columns = columns
		this.services = services
		this.realPrice = itemInfo.lowNowPrice
	}
}