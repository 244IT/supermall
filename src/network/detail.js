import { request } from 'network/network_test'

export function getDetailGoods(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
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