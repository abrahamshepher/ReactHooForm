import { Controller, FieldValues, Path, useFormContext, ControllerRenderProps } from "react-hook-form";
import { Option } from "../types/_model";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

type Props<T extends FieldValues> = {
    name: Path<T>;
    options?: Option[];
};

const RHFToggleButtonGroup = <T extends FieldValues>({ name, options }: Props<T>) => {
    const { control } = useFormContext<T>();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value, ...restField } }) => (

                <ToggleButtonGroup
                onChange={(_, newValue) => {
                    if (newValue.length) {
                        onChange(newValue);
                    }
                    }}
                {...restField}
                value={value.length ? value : [options?.[0].id]}
            >
                {options?.map((option) => (
                    <ToggleButton key={option.id} value={option.id}>
                        {option.label}
                    </ToggleButton>
                ))}
                    
            </ToggleButtonGroup>
            )}></Controller>
    );
}

export { RHFToggleButtonGroup };
