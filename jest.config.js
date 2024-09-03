module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  // 최신 방식으로 ts-jest 설정
  // 아래와 같이 ts-jest에 대한 설정을 최상위에 직접 작성
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  // Jest에서 ESM을 지원하기 위해 필요할 수 있는 설정
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx', // TypeScript와 JSX를 사용할 수 있도록 설정
      },
    },
  },
};
