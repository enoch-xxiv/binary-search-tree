import Node from './Node.js';

export default function buildTree(arr) {
    arr = Array.from(new Set(arr));
    arr.sort((a, b) => a - b);
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    if (start > end) {
        return null;
    } else {
        const root = new Node(arr[mid]);
        root.left = buildTree(arr.slice(0, mid));
        root.right = buildTree(arr.slice(mid + 1));
        return root;
    }
}
