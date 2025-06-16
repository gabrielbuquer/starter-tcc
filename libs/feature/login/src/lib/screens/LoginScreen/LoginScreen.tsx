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
  type: LoginType;
  value: LoginType;
}

export enum LoginType {
  SIGNIN = 'signin',
  REGISTER = 'register',
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, type, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== type}
      id={`login-tabpanel-${type}`}
      aria-labelledby={`simple-tab-${type}`}
      {...other}
    >
      {value === type && children}
    </div>
  );
}

export const LoginScreen = () => {
  const [value, setValue] = useState(LoginType.SIGNIN);

  const handleChange = (event: React.SyntheticEvent, value: LoginType) => {
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
            <Tab
              label="ENTRAR"
              value={LoginType.SIGNIN}
              {...a11yProps(COMPONENT, LoginType.SIGNIN)}
            />
            <Tab
              label="REGISTRE-SE"
              value={LoginType.REGISTER}
              {...a11yProps(COMPONENT, LoginType.REGISTER)}
            />
          </Tabs>
          <CustomTabPanel value={value} type={LoginType.SIGNIN}>
            <SignIn />
          </CustomTabPanel>
          <CustomTabPanel value={value} type={LoginType.REGISTER}>
            <Register onBack={() => handleChange(null, LoginType.SIGNIN)} />
          </CustomTabPanel>
        </Wrapper>
      </Box>
    </Container>
  );
};
