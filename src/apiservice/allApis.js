import Category from "../components/Category";
import { BASE_URL } from "./baseurl";
import { commonApi } from "./commonstructure";


//video add
export const addVideoApi=async(bodyData)=>{
    return await commonApi('POST',`${BASE_URL}/videos`,bodyData)
}


//get all video
export const getVideoApi=async()=>{
    return await commonApi('GET',`${BASE_URL}/videos`,{})
}

//delete video
export const deleteVideoApi=async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/videos/${id}`,)
}

//categ add

export const addCatApi=async(bodyData)=>{
    return await commonApi('POST',`${BASE_URL}/category`,bodyData)
}


//get all category
export const getCatApi=async()=>{
    return await commonApi('GET',`${BASE_URL}/category`,{})
}

//delete cat
export const deleteCatApi=async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/category/${id}`,)
}

//get single video
export const getVideo=async(id)=>{
    return await commonApi('GET',`${BASE_URL}/videos/${id}`,{})
}

//update category
export const updateCatApi=async(id,bodyData)=>{
    return await commonApi('PUT',`${BASE_URL}/Category/${id}`,bodyData)
}

//history add

export const addHistoryApi=async(bodyData)=>{
    return await commonApi('POST',`${BASE_URL}/histories`,bodyData)
}

//get history
export const getHistoryApi=async()=>{
    return await commonApi('GET',`${BASE_URL}/histories`,{})
}

//delete History
export const deleteHistoryApi=async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/histories/${id}`,)
}
