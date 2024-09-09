import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { LocalizationProvider,DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

type Props<T extends FieldValues> = {
    name: Path<T>;
};

const RHFDateRange = <T extends FieldValues>({ name }: Props<T>) => {
    const { control } = useFormContext<T>();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { value, ...restField } }) => (
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DateRangePicker
						{...restField}
						value={Array.isArray(value) ? value : [null, null]}
					/>
				</LocalizationProvider>
			)}
		/>
	);
}

export { RHFDateRange };
