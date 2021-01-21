import http from "../Http/http-common";

const sendOtp = data =>{
    return http.post('/sentOtp',data);
}

const verifyOtp = data =>{
    return http.post('/verifyOtp',data);
}

const createProfile = data =>{
    return http.post('/createProfile',data);
}

export default {
    sendOtp,
    verifyOtp,
    createProfile
  };