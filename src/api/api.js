import server from './server'
import { apiurl } from './apiconfig';

class Api extends server{
    
    async search(params){
        let result = await this.axios('get',`${apiurl.getName}?part_name=${params}`)
        return result;
    }
    async getCustomerInfo(params){
        let result = await this.axios('get',`${apiurl.getCustomerInfo}?${params}`)
        return result
    }
    async getMarksInfo(params){
        let result = await this.axios('get',`${apiurl.getMarksInfo}?${params}`)
        return result
    }
    async getManageInfo(params){
        let result = await this.axios('get',`${apiurl.getManageInfo}?${params}`)
        return result
    }
    //历史
    async getHistoryIndex(params){
        let result = await this.axios('get',`${apiurl.getHistoryIndex}?1232656`)
        return result
    }
    async getHistoryRece(params){
        let result = await this.axios('get',`${apiurl.getHistoryRece}?0001A21000000002RX5L`)
        return result
    }

    async getHistoryContract(params){
        let result = await this.axios('get',`${apiurl.getHistoryContract}?1232856`)
        return result
    }
    async getHistoryOrder(parmas){
        let result = await this.axios('get',`${apiurl.getHistroyOrder}?8531F1B867F8552EE0500A0A2C040878`)
        return result
    }

    async getHistoryOut(params){
        let result = await this.axios('get',`${apiurl.getHistoryOut}?110`)
        return result
    }

    async getHistoryProduct(parmas){
        let result = await this.axios('get',`${apiurl.getHistoryProduct}?110`)
        return result
    }

    //行业信息
    async getIndustrySign(params){
        let result = await this.axios('get',`${apiurl.getIndustrySign}?1509301403045E3942`)
        return result.data
    }

    async getIndustryBid(params){
        let result = await this.axios('get',`${apiurl.getIndustryBid}?040809002`)
        return result.data
    }

    async getIndustryModel(params){
        let result = await this.axios('get',`${apiurl.getIndustryModel}?15`)
        return result.data
    }

    async getSentimentInfo(parmas){
        let result = await this.axios('get',`${apiurl.getSentimentInfo}?139500`)
        return result
    }
    async getSentimentCustomer(params){
        let result = await this.axios('get',`${apiurl.getSentimentCustomer}?119`)
        return result.data
    }

    async getSentimentIndustry(params){
        let result = await this.axios('get',`${apiurl.getSentimentIndustry}?1873474`)
        return result.data
    }


    async getRelations(params){

        let result = await this.axios('post',`${apiurl.getRelation}`,params)
        return result.data
    }



}


export default new Api()