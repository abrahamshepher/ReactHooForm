import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { Slider, Typography } from "@mui/material";

type Props<T extends FieldValues> = {
    name: Path<T>;
    label:string
};

const RHFSlider = <T extends FieldValues>({ name, label }: Props<T>) => {
    const { control } = useFormContext<T>();

    return (
        <Controller
			name={name}
			control={control}
			render={({ field }) => (
				<>
					<Typography>{label}</Typography>
					<Slider valueLabelDisplay="auto" {...field} />
				</>
			)}
		/>
    );
}

export { RHFSlider };
