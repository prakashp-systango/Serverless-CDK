module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(test).ts?(x)'],
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
  };
  