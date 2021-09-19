const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { print } = require('graphql');
const  { join } = require ('path');

const typesArray = loadFilesSync(join(__dirname, '.'), { extensions: ['graphql'] });
const mergedTypeDefs = mergeTypeDefs(typesArray);
const printedTypeDefs = print(mergedTypeDefs);
console.log("Combined Schema: ", printedTypeDefs);

module.exports = mergedTypeDefs