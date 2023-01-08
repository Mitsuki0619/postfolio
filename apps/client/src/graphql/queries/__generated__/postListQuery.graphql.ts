/**
 * @generated SignedSource<<6a46e6a64a96209bf18a5e6c125ec5fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type postListQuery$variables = {};
export type postListQuery$data = {
  readonly allPosts: ReadonlyArray<{
    readonly content: string;
    readonly createdAt: string;
  } | null>;
};
export type postListQuery = {
  response: postListQuery$data;
  variables: postListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "allPosts",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "postListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "postListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f14c85e344eed3b2c19a2eda4e4661bb",
    "id": null,
    "metadata": {},
    "name": "postListQuery",
    "operationKind": "query",
    "text": "query postListQuery {\n  allPosts {\n    content\n    createdAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "9c0729132b8f65fe6a6a466b3c4f71d3";

export default node;
