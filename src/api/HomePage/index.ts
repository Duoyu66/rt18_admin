import {requests} from "../../utils";
interface personalType{
    qq:string
}
export function getHomePageMessage(data:personalType){
    return requests({
        url:`https://api.vvhan.com/api/qq?qq=${data.qq}`,
        method:"GET",
    })
}
