import { FormLabel, Stack, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Schema } from "../types/_model";
import { RHFAutoComplete } from "../../components/RHFAutoComplete";
import { useEffect } from "react";
import { useGenders, useLanguagues, useSkills, useStates } from "../services/queries";
import { RHFToggleButtonGroup } from "../../components/RHFToggleButtonGroup";
import { RHFRadioGroup } from "../../components/RHFRadioGroup";
import { RHFCheckbox } from "../../components/RHFCheckbox";
import { RHFDateTime } from "../../components/RHFDateTime";
import { RHFDateRange } from "../../components/RHFDateRange";
import { RHFSlider } from "../../components/RHFSlider";
import { RHFActive } from "../../components/RHFActive";
import { RHFTextField } from "../../components/RHFTextField";


const User = () => {
  const statesQuery=useStates()
  const languagesQuery = useLanguagues()
  const gendersQuery = useGenders()
  const skillsQuery = useSkills()
  
  const {  watch } = useFormContext<Schema>()
  
  useEffect(() => { 
    const sub = watch((value) => { console.log(value) })
    return () => sub.unsubscribe()
  }, [watch])

  return (
    <>
      <Stack sx={{ gap: 2, width: "50%", margin: "auto" }}>

      <Typography variant="h4">  React Hook Form  </Typography>
        
        <RHFTextField<Schema> name="name" label="Name"/>
        
        <RHFTextField<Schema> name="email" label="Email" />
          
      <RHFAutoComplete<Schema> name="states" label="States" options={statesQuery.data} />
      <RHFToggleButtonGroup<Schema> name="languages" options={languagesQuery.data} />
      <RHFRadioGroup<Schema> name="genders" options={gendersQuery.data} label="Gender" />
        <RHFCheckbox<Schema> name="skills" options={skillsQuery.data} label="Skills" />
        <RHFDateTime<Schema> name='dateAndTime' label="Date and Time" />
        <Typography>Former Employment Period</Typography>
        <RHFDateRange<Schema> name="period" />
        <RHFSlider<Schema> name="range" label="Salary Range" />
        <RHFActive<Schema> name="isActive" label="Are you a Teacher?"/>
      </Stack>
    </>
  );
};

export default User;
