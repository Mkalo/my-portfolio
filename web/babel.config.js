const plugins = ['inline-react-svg'];
if (process.env.NODE_ENV !== 'test') {
  plugins.push(['react-remove-properties', { properties: ['data-testid'] }]);
}

module.exports = { plugins };
