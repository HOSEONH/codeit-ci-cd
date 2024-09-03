module.exports = {
  preset: 'ts-jest/presets/js-with-ts-esm',  // ts-jest 프리셋 사용
  testEnvironment: 'jsdom',  // 브라우저 환경에서 테스트 실행
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['ts-jest', {
      useESM: true,
    }],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // CSS 모듈을 위한 매핑
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      tsconfig: {
        jsx: 'react-jsx',
      },
    },
  },
};
