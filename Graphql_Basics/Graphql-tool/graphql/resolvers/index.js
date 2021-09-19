const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeResolvers} = require('@graphql-tools/merge');
const  { join } = require ('path');
const { print } = require('graphql');

const resolverArray = loadFilesSync(join(__dirname, '.'), { extensions: ['js'] });
const mergedResolver = mergeResolvers(resolverArray);
// const printedResolvers = print(mergedResolver);
// console.log("Combined Schema: ", printedResolvers);
console.log("mergedResolve",mergedResolver)
module.exports = mergedResolver;