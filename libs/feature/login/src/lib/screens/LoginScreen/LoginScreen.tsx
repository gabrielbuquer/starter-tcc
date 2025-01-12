import { Box } from '@monetix/shared/ui';
import { Container, Wrapper } from './LoginScreen.styled';
import { Register, SignIn } from '../../components';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

type Mode = 'signin' | 'register';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`login-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(mode: Mode) {
  return {
    id: `login-tab-${mode}`,
    'aria-controls': `login-tabpanel-${mode}`,
  };
}

export const LoginScreen = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <Container>
      <Box>
        <Wrapper>
          <Tabs value={value} onChange={handleChange} aria-label="Selecione para Entrar ou Registrar" centered>
            <Tab label="ENTRAR" {...a11yProps('signin')} />
            <Tab label="REGISTRE-SE" {...a11yProps('register')} />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <SignIn />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Register onBack={() => handleChange(null, 0)} />
          </CustomTabPanel>
        </Wrapper>
      </Box>
    </Container>
  )
}
