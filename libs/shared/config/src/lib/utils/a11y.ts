export const a11yProps = (component: string, mode: string) => {
  return {
    id: `${component}-tab-${mode}`,
    'aria-controls': `${component}-tabpanel-${mode}`,
  };
}
