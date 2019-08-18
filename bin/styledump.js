#!/usr/bin/env node

var fs = require('fs');
var program = require('commander');
var dumpComputedStyle = require('..');

program
  .version('1.0.0')
  .description('extract computed CSS property values from a web page and return them as JSON')
  .usage('[options] <url>')
    .option("-t, --timeout [ms]", "timeout in ms to wait for responses", 60000)
  .action(function(url, options) {
    if(url.length > 0) {
      dumpComputedStyle(url, {"timeout": options.timeout}).then(function(json) {
          console.log(json);
      });
    }
    else {
        console.error("no URL provided");
        program.outputHelp()
    }
  });

program.parse(process.argv);