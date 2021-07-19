import { fetchData } from "../../frontend/src/components/shop/order/Action";



export const updateWhishlist = async(dispatch ) => {
    dispatch({type: "loading", payload: true });
    let userId = JSON.parse(localstorage.getItem("jwt"))
        ?  JSON.parse(localStorage.getItem("jwt")).user._id : "";
    try {
    let reponseData = await getWhishlistByUser(userId);
    setTimeout(()  => {
        if (responseData && responseData.Whishlist) {
            console.log(responseData)
            dispatch ({ type:"loading", payload: false});
            fetchData(dispatch);
        }
    }, 400);
} catch (error) {
    console.log(error);
}
}