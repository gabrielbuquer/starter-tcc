import Agent from 'agentkeepalive';

/**
 * Agent config
 */
const defaultAgentConfig = {
  keepAlive: true,
  keepAliveMsecs: 1000,
  maxFreeSockets: 2046,
  maxSockets: 4092,
  socketActiveTTL: 600000,
  timeout: 60000,
  freeSocketTimeout: 30000,
};

export const httpAgent = (agentConfig: Agent.HttpsOptions = {}) => {
  const config = { ...defaultAgentConfig, ...agentConfig };

  const httpsAgentConfig = new Agent.HttpsAgent(config);
  const httpAgentConfig = new Agent(config);

  return {
    httpsAgent: httpsAgentConfig,
    httpAgent: httpAgentConfig,
  };
};
