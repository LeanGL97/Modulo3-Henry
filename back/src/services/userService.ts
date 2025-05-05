import { UserModel } from "../config/data-source";
import IUserDto from "../dto/UserDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { createCredentialService } from "./credentialService";


export const getAllUsersService = async (): Promise<User[]> => {
    const users: User[] = await UserModel.find();
    return users;
};

export const getUserByIdService = async (id: number): Promise<User|null> => {
    const findUser: User|null = await UserModel.findOne({
        where: {id}, relations: ["appointments"]
    });
    if(!findUser) throw Error('User not found');
    return findUser;
};

export const createUserService = async (userData: IUserDto): Promise<User> => {
    const newCredential: Credential = await createCredentialService({
        username: userData.email,
        password: userData.password
    })
    const newUser: User = await UserModel.create(userData)
    newUser.credential = newCredential;
    await UserModel.save(newUser)
    return newUser;
}