import _ from 'lodash';

CollectionHelpers = {};

CollectionHelpers.set = function(Collection, dict) {
  Collection.prepareHelpers = function(instance, options = {}) {
    const { force } = options;
    if(!instance || !!instance.isUsingHelpers && !force) return instance;
    if(_.isArray(instance)) {
      prepareArray(instance, dict);
    } else {
      prepareSingle(instance, dict);
    }
    instance.isUsingHelpers = true;
    return instance;
  }
}

function prepareArray(array, helpers) {
  _.merge(array, helpers.array);
}

function prepareSingle(single, helpers) {
  _.merge(single, helpers.single);
}

export default CollectionHelpers;
