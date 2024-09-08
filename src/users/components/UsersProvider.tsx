import { FormProvider, useForm } from "react-hook-form"
import User from "./User"
import { zodResolver } from "@hookform/resolvers/zod";
import { initialValues,Schema, schema } from "../types/_model";
import { DevTool } from "@hookform/devtools";

const UsersProvider = () => {
    const methods = useForm<Schema>({
        mode: "all",
        resolver: zodResolver(schema),
        defaultValues: initialValues
    });
    return (
        <FormProvider {...methods}>
            <User />
            <DevTool control={ methods.control} />
        </FormProvider>
    )
}

export { UsersProvider }
