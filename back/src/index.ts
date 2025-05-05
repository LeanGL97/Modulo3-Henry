import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
    .then(res => {
        console.log("Conexión a la base de datos exitosa");
        server.listen(PORT, () => {
            console.log(`Server listening on PORT ${PORT}`);
        });
    }).catch((err) => {
        console.error("Error durante la conexión a la base de datos:", err);
        process.exit(1);
    });