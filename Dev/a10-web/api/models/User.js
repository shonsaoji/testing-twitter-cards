/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        uid: {
            type: 'string',
            unique: true
        },
        username: {
            type: 'string',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            required: true
        },
        oauthToken: {
            type: 'string',
            unique: true
        },
        firstName: {
            type: 'string'
        },
        lastName: {
            type: 'string'
        },
        provider: {
            type: 'string'  
        },
        toJSON: function() {
          var obj = this.toObject();
          delete obj.password;
          return obj;
        }
    }
};

