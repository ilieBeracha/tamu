import axios from "axios";
import { UserInterface } from "../models/UserModel";

const IP_ADDRESS =  '10.8.1.227'
class ApiService {

  async postUser(user: UserInterface) {
    const userJson = await JSON.stringify(user);
    console.log(userJson);

    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin':"*"
      },
      body: userJson
    });
    console.log(response);
  }
}

export const apiService = new ApiService;