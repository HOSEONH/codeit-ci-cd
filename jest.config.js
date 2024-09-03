module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],  // ESM 지원을 위해 확장자 설정
  // ESM을 지원하기 위해 필요한 설정이 있을 수 있습니다.
};
