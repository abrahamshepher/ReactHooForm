import { FormProvider, useForm } from "react-hook-form"
import User from "./User"
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema, schema } from "../types/_model";

const UsersProvider = () => {
    const methods = useForm<Schema>({
        mode: "all",
        resolver: zodResolver(schema),
    });
    return (
        <FormProvider {...methods}>
            <User />
        </FormProvider>
    )
}

export { UsersProvider }
