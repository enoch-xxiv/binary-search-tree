import buildTree from './modules/buildTree.js';
import { prettyPrint } from './modules/prettyPrint.js';

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
prettyPrint(buildTree(arr));
