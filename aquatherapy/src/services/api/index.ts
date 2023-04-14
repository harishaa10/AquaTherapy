import axios from 'axios';

const BASE_URL= "https://aqua-chat-heiencyic-harishaa10.vercel.app/";

export const getAnswer = async (question: string) => { 
    try{
        const response = await axios.post(`${BASE_URL}api/help-me-out?prompt=${question}`);
        if (response.status===200){
            return response?.data?.answer;
        } else{
            return "Something went wrong ☹";
        }
    } catch(error){
        console.error("Request failed with error: ", error);
        return "Something went wrong ☹";
    }
}