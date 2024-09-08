import { Stack, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Schema } from "../types/_model";
import { RHFAutoComplete } from "../../components/RHFAutoComplete";
import { useEffect } from "react";
import { useStates } from "../services/queries";


const User = () => {
  const statesQuery=useStates()

  const { register, formState: { errors }, watch } = useFormContext<Schema>()
  
  useEffect(() => { 
    const sub = watch((value) => { console.log(value) })
    return () => sub.unsubscribe()
  }, [watch])

  return (
    <>
      <Stack sx={{ gap: 2 }}>
        <TextField 
          {...register("name")}
          label="Name"
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField 
          {...register("email")}
          label="Email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </Stack>
      <RHFAutoComplete<Schema>  name="states" label="States" options={statesQuery.data}/>
    </>
  );
};

export default User;
