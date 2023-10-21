import axios from "axios";
const API_REST_URL = 'http://localhost:8080/api/v1/student';
 class StudentsServices {

 getStudents(){  
return  axios.get(API_REST_URL);
    }
    createStudents(student){
        return axios.post(API_REST_URL, student);
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default  new StudentsServices()
