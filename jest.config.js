const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './', // Next.js 앱의 루트 디렉토리를 지정합니다.
})

const customJestConfig = {
  testEnvironment: 'jsdom', // 브라우저 환경에서 테스트를 실행합니다.
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // CSS 모듈 매핑
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // ts-jest를 사용하여 TypeScript 파일을 변환합니다.
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'], // node_modules 폴더 내 파일 변환을 무시합니다.
  collectCoverage: true, // 커버리지 정보를 수집하도록 설정
  coverageDirectory: 'coverage', // 커버리지 결과를 저장할 디렉토리 설정
}

module.exports = createJestConfig(customJestConfig)
