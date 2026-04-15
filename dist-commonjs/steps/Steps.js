'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var UploadFlow = require('./UploadFlow.js');

const Steps = () => {
    const [, setActiveStep] = react.useState(0);
    const nextStep = () => setActiveStep((prev) => prev + 1);
    return jsxRuntime.jsx(UploadFlow.UploadFlow, { nextStep: nextStep });
};

exports.Steps = Steps;
