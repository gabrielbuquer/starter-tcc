import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

import { Box } from '@monetix/shared/ui';
import { a11yProps } from '@monetix/shared/config';

import { Register, SignIn } from '../../components';

import { Container, Wrapper } from './LoginScreen.styled';

const COMPONENT = 'login';

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

export const LoginScreen = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <Container>
      <Box>
        <Wrapper>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Selecione para Entrar ou Registrar"
            centered
          >
            <Tab label="ENTRAR" {...a11yProps(COMPONENT, 'signin')} />
            <Tab label="REGISTRE-SE" {...a11yProps(COMPONENT, 'register')} />
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
  );
};
