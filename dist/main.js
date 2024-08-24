/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("var margin = {top: 30, right: 20, bottom: 30, left: 20},\n    width = 960,\n    barHeight = 20,\n    barWidth = (width - margin.left - margin.right) * 0.8;\n\nvar i = 0,\n    duration = 400,\n    root;\n\nvar diagonal = d3.linkHorizontal()\n    .x(function(d) { return d.y; })\n    .y(function(d) { return d.x; });\n\nvar svg = d3.select(\"body\").append(\"svg\")\n    .attr(\"width\", width) // + margin.left + margin.right)\n  .append(\"g\")\n    .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");\n\nd3.json(\"/dist/data.json\", function(error, flare) {\n  if (error) throw error;\n  root = d3.hierarchy(flare);\n  root.x0 = 0;\n  root.y0 = 0;\n  update(root);\n});\n\nfunction update(source) {\n\n  // Compute the flattened node list.\n  var nodes = root.descendants();\n\n  var height = Math.max(500, nodes.length * barHeight + margin.top + margin.bottom);\n\n  d3.select(\"svg\").transition()\n      .duration(duration)\n      .attr(\"height\", height);\n\n  d3.select(self.frameElement).transition()\n      .duration(duration)\n      .style(\"height\", height + \"px\");\n\n  // Compute the \"layout\". TODO https://github.com/d3/d3-hierarchy/issues/67\n  var index = -1;\n  root.eachBefore(function(n) {\n    n.x = ++index * barHeight;\n    n.y = n.depth * 20;\n  });\n\n  // Update the nodes…\n  var node = svg.selectAll(\".node\")\n    .data(nodes, function(d) { return d.id || (d.id = ++i); });\n\n  var nodeEnter = node.enter().append(\"g\")\n      .attr(\"class\", \"node\")\n      .attr(\"transform\", function(d) { return \"translate(\" + source.y0 + \",\" + source.x0 + \")\"; })\n      .style(\"opacity\", 0);\n\n  // Enter any new nodes at the parent's previous position.\n  nodeEnter.append(\"rect\")\n      .attr(\"y\", -barHeight / 2)\n      .attr(\"height\", barHeight)\n      .attr(\"width\", barWidth)\n      .style(\"fill\", color)\n      .on(\"click\", click);\n\n  nodeEnter.append(\"text\")\n      .attr(\"dy\", 3.5)\n      .attr(\"dx\", 5.5)\n      .text(function(d) { return d.data.name; });\n\n  // Transition nodes to their new position.\n  nodeEnter.transition()\n      .duration(duration)\n      .attr(\"transform\", function(d) { return \"translate(\" + d.y + \",\" + d.x + \")\"; })\n      .style(\"opacity\", 1);\n\n  node.transition()\n      .duration(duration)\n      .attr(\"transform\", function(d) { return \"translate(\" + d.y + \",\" + d.x + \")\"; })\n      .style(\"opacity\", 1)\n    .select(\"rect\")\n      .style(\"fill\", color);\n\n  // Transition exiting nodes to the parent's new position.\n  node.exit().transition()\n      .duration(duration)\n      .attr(\"transform\", function(d) { return \"translate(\" + source.y + \",\" + source.x + \")\"; })\n      .style(\"opacity\", 0)\n      .remove();\n\n  // Update the links…\n  var link = svg.selectAll(\".link\")\n    .data(root.links(), function(d) { return d.target.id; });\n\n  // Enter any new links at the parent's previous position.\n  link.enter().insert(\"path\", \"g\")\n      .attr(\"class\", \"link\")\n      .attr(\"d\", function(d) {\n        var o = {x: source.x0, y: source.y0};\n        return diagonal({source: o, target: o});\n      })\n    .transition()\n      .duration(duration)\n      .attr(\"d\", diagonal);\n\n  // Transition links to their new position.\n  link.transition()\n      .duration(duration)\n      .attr(\"d\", diagonal);\n\n  // Transition exiting nodes to the parent's new position.\n  link.exit().transition()\n      .duration(duration)\n      .attr(\"d\", function(d) {\n        var o = {x: source.x, y: source.y};\n        return diagonal({source: o, target: o});\n      })\n      .remove();\n\n  // Stash the old positions for transition.\n  root.each(function(d) {\n    d.x0 = d.x;\n    d.y0 = d.y;\n  });\n}\n\n// Toggle children on click.\nfunction click(d) {\n  if (d.children) {\n    d._children = d.children;\n    d.children = null;\n  } else {\n    d.children = d._children;\n    d._children = null;\n  }\n  update(d);\n}\n\nfunction color(d) {\n  return d._children ? \"#3182bd\" : d.children ? \"#c6dbef\" : \"#fd8d3c\";\n}\n\n//# sourceURL=webpack://krm-tree/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;