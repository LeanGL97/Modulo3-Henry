import { Request, Response } from "express";
import { createUserService, getAllUsersService, getUserByIdService } from "../services/userService";
import IUserDto from "../dto/UserDto";
import { validateCredentialsService } from "../services/credentialService";
import { User } from "../entities/User";
import { UserModel } from "../config/data-source";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getAllUsersService();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "An error ocurred" });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const user: User = await getUserByIdService(Number(id));

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "An error ocurred" })
    }
};

export const userRegister = async (req: Request, res: Response) => {
    try {
        const { name, email, birthdate, nDni, password }: IUserDto = req.body;

        if (!name || !email || !birthdate || !nDni || !password) {
            res.status(400).json({ message: "All fields are required." });
            return;
        }

        const newUser: User = await createUserService({ name, email, birthdate, nDni, password });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "An error ocurred" });
    }
};

export const userLogin = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const credential = await validateCredentialsService({ username, password });

        if (credential) {
            const user = await UserModel.findOne({
                where: { credential: { id: credential.id } }
            });

            if (user) {
                res.status(200).json({ message: "Login successful", id: user.id });
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: "An error occurred" });
    }
};