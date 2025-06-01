import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useMemo } from 'react';

import { generateLastNMonths } from '@monetix/core-utils';

interface MonthSelectorProps {
  lastMonths?: number;
  onChange?: (month: string) => void;
}

export const MonthSelector = ({
  lastMonths = 12,
  onChange,
}: MonthSelectorProps) => {
  const monthOptions = useMemo(
    () => generateLastNMonths(lastMonths),
    [lastMonths],
  );

  return (
    <FormControl sx={{ minWidth: 140 }} size="small">
      <InputLabel id="month-select-label">Mês</InputLabel>
      <Select
        label={'Mês'}
        labelId="month-select-label"
        defaultValue={monthOptions[0].value}
        onChange={(e) => {
          onChange?.(e.target.value as string);
        }}
      >
        {monthOptions.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
