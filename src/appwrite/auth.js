import config from "../config/config";
import { Client, Account, ID } from "appwrite";

class AuthService{

    client = new Client();
    account;

    constructor(){

        this.client
                .setEndpoint(config.appwriteURL)
                .setProject(config.appwriteProjectId)

        if (!this.client) {
            throw new Error('Appwrite client initialization failed.');
        }

        this.account = new Account(this.client)
    }

    async createAccount({name, email, password}){

        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if (userAccount) {
                return this.login({email, password})
            } else {
                return userAccount
            }

        } catch (error) {
            throw error
        }
    }

    async login({email, password}){

        try {
            return await this.account.createEmailPasswordSession(email, password)

        } catch (error) {
            throw error;
        }

    }
    
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error
        }
    }

    async logout(){

        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }

    }

    

}

const authService = new AuthService()

export default authService
