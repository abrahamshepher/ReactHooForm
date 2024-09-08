
import { Stack, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Schema } from "../types/_model";
import { RHFAutoComplete } from "../../components/RHFAutoComplete";


const User = () => {

  const { register, formState: { errors } } = useFormContext<Schema>()

  return (
    <>
      <Stack sx={{ gap: 2 }}>
        <TextField
          {...register("name")}
          label="Name"
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </Stack>
      <RHFAutoComplete<Schema> name="states"/>
    </>
  );
};

export default User;
