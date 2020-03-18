export const JsonService = {
  selector: 'jsonService',
  service: class
    JsonService {
    constructor() {
      'ngInject';
    }

    /**
     * parse json with validation
     * @param {*} data 
     */
    decodeBase64toJson(data) {

      // json valid
      if (/^[\],:{}\s]*$/.test(data.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

        return { status: true, data: JSON.parse(data) }
      } else {
        return { status: false, data: {} }
      }
    }

    /**
     * Normalize json data
     * @param {*} data
     * @return {array} normalized data 
     * [
     *  {
     *    id:number
     *    type:string,
     *    change:boolean
     *    key:string
     *    nestedKey:string
     *    value:string|undefined
     *    output:string|empty
     *    children:array
     *  }
     * ]
     */
    noramlizeJson(data, ignoreString = '') {
      var uniqId = 0;
      var outputArray = [];
      normalize(data, outputArray);
      return outputArray;

      /**
       * @param {*} parentObject | object of child arrays
       * @param {*} mainArray | return array of normalized data
       * @param {*} childArray | array of child unique id
       */
      function normalize(parentObject, mainArray, parentKey = '', childArray = [], node = 0) {
        Object.keys(parentObject).map(item => {
          var itemValue = parentObject[item];
          var nestedKey = `${parentKey}[${item}]`;
          var translateObj = {
            id: uniqId,
            type: typeof itemValue,
            change: true,
            key: item,
            value: itemValue,
            nestedKey: nestedKey,
            node: node,
            nodeKey: parentKey,
            output: '',
            children: []
          };

          childArray.push(uniqId);
          if (typeof itemValue === 'object') {
            var childrenArray = [];
            normalize(itemValue, mainArray, nestedKey, childrenArray, node + 1);
            translateObj.change = false;
            translateObj.value = undefined;
            translateObj.children = childrenArray || [];
          }
          else if (typeof itemValue === 'string') {
            if (itemValue.startsWith(ignoreString))
              translateObj.change = false;
          }

          mainArray.push(translateObj);
          ++uniqId;
        });
      }
    }

    /**
     * denormalize above json
     * @param {*} data 
     * @param {*} ignoreString 
     */
    revertNormalizeJson(data, ignoreString = '') {
      var nodeArray = data.map(item => { return item.node });
      var max = Math.max(...nodeArray);
      var nodeList = [];
      for (let i = 0; i <= max; i++) {
        nodeList[i] = data.filter(item => {
          return i === item.node
        });
      }
      var outArray = {};
      accumulateChildren(0, outArray);
      return outArray;

      /**
       * 
       * @param {*} node current node
       * @param {*} outputArray parent array for the node current list
       * @param {*} node_key nodekey for children filter
       */
      function accumulateChildren(node = 0, outputArray, node_key = '') {
        nodeList[node].map(element => {
          // append to node if children
          if (node_key === element.nodeKey) {
            if (element.type === 'string') {
              if (element.value.startsWith(ignoreString))
                outputArray[element.key] = element.value || '';
              else
                outputArray[element.key] = element.output || '';
            } else if (element.type === 'object') {
              outputArray[element.key] = {};
              accumulateChildren(node + 1, outputArray[element.key], element.nestedKey);
            }
            //remove added children for optimization
            var removeIndex = nodeList[node].indexOf(element);
            nodeList[node] = nodeList[node].slice(0, removeIndex).concat(nodeList[node].slice(removeIndex + 1, nodeList[node].length))
          }
        });
      }
    }
  }
};
