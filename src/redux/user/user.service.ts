import axios from "axios";
import { decrypting } from "../../common/crypto";

class UserService {
  token: string;
  basicURL: string;
  port: string;

  constructor() {
    const hashedToken: any = localStorage.getItem("token");
    this.token = decrypting(hashedToken).toString();
    if (window.location.protocol === "https:") {
      this.port = "6500";
    } else {
      this.port = "5500";
    }
    this.basicURL = `${window.location.protocol}//${window.location.hostname}:${this.port}`;
  }

  getUsers(): Promise<any> {
    const hashedToken: any = localStorage.getItem("token");
    console.log("getting user : ", hashedToken);
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(`${this.basicURL}/user/`, {
          headers: { Authorization: `Bearer ${this.token}` }
        });
        console.log("user : ", data);
        resolve(data);
      } catch (err) {
        if (!err.response) {
          reject(err.error);
        } else {
          reject(err.response.data);
        }
      }
    });
  }

  tryLogin(email: string, password: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.post(`${this.basicURL}/user/login`, {
          email,
          password
        });
        console.log("promise success : ", data);
        resolve(data);
      } catch (err) {
        console.log("Err : ", err);
        if (err.response === undefined) {
          reject(err.error);
        } else {
          reject(err.response.data.error);
        }
      }
    });
  }

  Register(
    email: string,
    address: string,
    name: string,
    password: string
  ): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        await axios.post(`${this.basicURL}/user/register`, {
          email,
          address,
          name,
          password
        });
        resolve(true);
      } catch (err) {
        if (err.response.data.error === undefined) {
          reject(err.error);
        } else {
          reject(err.response.data.error);
        }
      }
    });
  }
}

export default UserService;
