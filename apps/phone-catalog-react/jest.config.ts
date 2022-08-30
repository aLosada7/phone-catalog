/* eslint-disable */
export default {
  displayName: 'phone-catalog-react',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/phone-catalog-react',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
