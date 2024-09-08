import { Controller, useFormContext, Path, FieldValues } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";
import { Option } from "../types/_model";

type Props<T extends FieldValues> = {
  name: Path<T>;
  options: Option[];
};

const RHFAutoComplete = <T extends FieldValues>({
  name,
  options,
}: Props<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref },fieldState:{error} }) => (

        <Autocomplete
          options={options}
          value={value.map((id: string) =>
            options.find((item) => item.id === id)
              )}
              
              
          getOptionLabel={(option) =>
            options.find((item) => item.id === option.id)?.label ?? ""
          }

          isOptionEqualToValue={(option, newValue) => option.id === newValue.id}
          onChange={(_, newValue) => {
            onChange(newValue.map((item) => item.id));
          }}

          disableCloseOnSelect
          multiple
          renderInput={(params) => <TextField {...params} fullWidth inputRef={ref} error={!!error } />}
        />
      )}
    />
  );
};

export { RHFAutoComplete };
