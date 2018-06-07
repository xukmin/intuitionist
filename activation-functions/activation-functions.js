'use strict';

const widthCombined = 640;
const heightCombined = 480;
const widthIndividual = 480;
const heightIndividual = 240;

function drawActivationFunctions() {
  functionPlot.globals.COLORS = [
    ...functionPlot.globals.COLORS,
    ...functionPlot.globals.COLORS,
    ...functionPlot.globals.COLORS,
    ...functionPlot.globals.COLORS,
  ];

  const identity = {
    title: 'Identity',
    fn: 'x'
  };
  const binaryStep = [{
    title: 'BinaryStep',  // 'Binary Step',
    fn: '0',
    range: [-Infinity, 0],
    color: 'red',
  }, {
    title: 'BinaryStep',  // 'Binary Step',
    fn: '1',
    range: [0, Infinity],
    color: 'red',
  }];
  const logSigmoid = {
    title: 'LogSigmoid',  // 'Log Sigmoid',
    fn: '1 / (1 + exp(-x))',
  };
  const tanhSigmoid = {
    title: 'TanhSigmoid',  // 'Hyperbolic Tangent Sigmoid',
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
  const reLU = [{
    title: 'ReLU',
    fn: '0',
    range: [-Infinity, 0],
    color: 'blue',
  }, {
    title: 'ReLU',
    fn: 'x',
    range: [0, Infinity],
    color: 'blue',
  }];
  const bentIdentity = {
    title: 'BentIdentity',
    fn: '(sqrt(x ^ 2 + 1) - 1) / 2 + x',
  };
  const iSRUs = [];
  for (let alpha of [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]) {
    iSRUs.push({
      title: 'ISRU',
      fn: `x / sqrt(1 + ${alpha} * x ^ 2)`,
    });
  }
  const softExponentials = [];
  for (let alpha of [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]) {
    softExponentials.push({
      title: 'SoftExponential',
      fn: alpha < 0 ?
          `-ln(1 - ${alpha} * (x + ${alpha})) / ${alpha}` :
          alpha == 0 ? 'x' :
          `(exp(${alpha} * x) - 1) / ${alpha} + ${alpha}`,
    });
  }
  const sinusoid = {
    title: 'Sinusoid',
    fn: 'sin(x)',
  };
  const sinc = {
    title: 'Sinc',
    fn: 'sin(x) / x',
  };
  const gaussian = {
    title: 'Gaussian',
    fn: 'exp(- x ^ 2)',
  };

  const element = document.createElement('div');
  element.className = 'combined';
  element.id = 'root';
  element.style.width = `${widthCombined}px`;
  element.style.height = `${heightCombined}px`;
  document.body.appendChild(element);
  functionPlot({
    title: 'Activation Functions',
    width: 640,
    height: 480,
    data: [
      identity,
      ...binaryStep,
      logSigmoid,
      tanhSigmoid,
      arcTan,
      softSign,
      softPlus,
      ...reLU,
      bentIdentity,
      // ...iSRUs,
      // ...softExponentials,
      sinusoid,
      //sinc,
      gaussian,
    ],
    target: `#${element.id}`,
  });

  function plot(datum) {
    let data = Array.isArray(datum) ? datum : [datum];
    const element = document.createElement('div');
    element.className = 'individual';
    element.id = data[0].title;
    element.style.width = `${widthIndividual}px`;
    element.style.height = `${heightIndividual}px`;
    document.body.appendChild(element);
    return functionPlot({
      width: widthIndividual,
      height: heightIndividual,
      data: data,
      title: element.id,
      target: `#${element.id}`,
    });
  }

  const plots = [
    plot(identity),
    plot(binaryStep),
    plot(logSigmoid),
    plot(tanhSigmoid),
    plot(arcTan),
    plot(softSign),
    plot(softPlus),
    plot(reLU),
    plot(bentIdentity),
    plot(iSRUs),
    plot(softExponentials),
    plot(sinusoid),
    //plot(sinc),
    plot(gaussian),
  ];

  for (let p of plots) {
    for (let q of plots) {
      if (p != q) {
        p.addLink(q);
      }
    }
  }
}
