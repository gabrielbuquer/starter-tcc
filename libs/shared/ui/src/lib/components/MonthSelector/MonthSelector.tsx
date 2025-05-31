import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useMemo } from 'react';

import { generateLastNMonths } from '@monetix/core-utils';

export const MonthSelector = () => {
  const monthOptions = useMemo(() => generateLastNMonths(12), []);

  return (
    <FormControl sx={{ minWidth: 140 }} size="small">
      <InputLabel id="month-select-label">Mês</InputLabel>
      <Select
        label={'Mês'}
        labelId="month-select-label"
        defaultValue={monthOptions[0].value}
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
