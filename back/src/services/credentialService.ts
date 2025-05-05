import { CredentialModel } from "../config/data-source";
import ICredentialDTO from "../dto/CredentialDto";
import { Credential } from "../entities/Credential";



export const createCredentialService = async (credentialData: ICredentialDTO): Promise<Credential> => {
    const newCredential = await CredentialModel.create(credentialData)
    await CredentialModel.save(newCredential)
    return newCredential;
};

export const validateCredentialsService = async (
    credentialData: ICredentialDTO
): Promise<Credential | null> => {
    const { username, password } = credentialData;

    const foundCredential: Credential | null = await CredentialModel.findOneBy({
        username,
    });

    if (!foundCredential) {
        return null;
    }

    if (foundCredential.password !== password) {
        return null;
    }

    return foundCredential;
};
