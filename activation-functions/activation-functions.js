'use strict';

function drawActivationFunctions() {
  const target = document.getElementById('root');

  const identity = {
    title: 'Identity',
    fn: 'x'
  };
  const binaryStepLeft = {
    title: 'Binary Step',
    fn: '0',
    range: [-Infinity, 0],
    color: 'red',
  };
  const binaryStepRight = {
    title: 'Binary Step',
    fn: '1',
    range: [0, Infinity],
    color: 'red',
  };
  const logSigmoid = {
    title: 'Log Sigmoid',
    fn: '1 / (1 + exp(-x))',
  };
  const tanhSigmoid = {
    title: 'Hyperbolic Tangent Sigmoid',
    fn: '(exp(x) - exp(-x)) / (exp(x) + exp(-x))',
  };
  const arcTan = {
    title: 'ArcTan',
    fn: 'atan(x)',
  };
  const softSign = {
    title: 'SoftSign',
    fn: 'x / (1 + abs(x))',
  };
  const softPlus = {
    title: 'SoftPlus',
    fn: 'ln(1 + exp(x))',
  };
  const reLULeft= {
    title: 'ReLU',
    fn: '0',
    range: [-Infinity, 0],
  };
  const reLURight = {
    title: 'ReLU',
    fn: 'x',
    range: [0, Infinity],
  };
  functionPlot({
    title: 'Activation Functions',
    width: 1024,
    height: 768,
    data: [
      identity,
      binaryStepLeft, binaryStepRight,
      logSigmoid,
      tanhSigmoid,
      arcTan,
      softSign,
      softPlus,
      //reLULeft, reLURight,
    ],
    target
  });
}
