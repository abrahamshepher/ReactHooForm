import { Controller, FieldValues, Path, useFormContext, ControllerRenderProps } from "react-hook-form";
import { Option } from "../types/_model";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";

type Props<T extends FieldValues> = {
    name: Path<T>;
    options?: Option[];
    label:string
};

const RHFRadioGroup = <T extends FieldValues>({ name, options, label }: Props<T>) => {
    const { control } = useFormContext<T>();

    return (
        <Controller
            control={control}
            name={name}
            render={({field,fieldState:{error}}) => (
                <FormControl {...field} error={!!error}>
                    <FormLabel>
                        { label}
                    </FormLabel>
                    <RadioGroup>
                        {options?.map((option) => (
                            <FormControlLabel value={option.id} control={<Radio checked={field.value === option.id} />} label={ option.label} key={option.id} />
                        ))}
                    </RadioGroup>
</FormControl>
              
            )}></Controller>
    );
}

export { RHFRadioGroup };
