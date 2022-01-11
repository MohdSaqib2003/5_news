import Fetch_News_API from "../API/FetchNews";

const FetchNews = val => async dispatch => {
    // console.log('action',val);
    const data = await Fetch_News_API.get('', {
        params: {
            category: val,
            language: "en",
            country: 'in',
            apiKey: "3f8018ecb1774be7bca797aaa91da8f6"
        }
    });
    
    dispatch({ type:'FETCH_NEWS',payload:data.data.articles});
}
export default FetchNews;