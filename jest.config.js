module.exports = {
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    verbose: true,
    testURL: "http://localhost/",
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: ['**/__tests__/*.js?(x)'],
  };
