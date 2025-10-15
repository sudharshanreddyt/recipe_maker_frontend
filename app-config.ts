export interface AppConfig {
  pageTitle: string;
  pageDescription: string;
  companyName: string;

  supportsChatInput: boolean;
  supportsVideoInput: boolean;
  supportsScreenShare: boolean;
  isPreConnectBufferEnabled: boolean;

  logo: string;
  startButtonText: string;
  accent?: string;
  logoDark?: string;
  accentDark?: string;

  sandboxId?: string;
  agentName?: string;
}

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'RecipeMaker',
  pageTitle: 'AI Cooking Assistant',
  pageDescription: 'Your advanced AI voice cooking assistant',

  supportsChatInput: true,
  supportsVideoInput: false,
  supportsScreenShare: false,
  isPreConnectBufferEnabled: true,

  logo: '/happy-chef.png',
  accent: '#002cf2',
  logoDark: '/happy-chef.png',
  accentDark: '#1fd5f9',
  startButtonText: 'Talk to Priyanka',
};
