/*
*   Copyright (C) 2013-2014 Spark Labs, Inc. All rights reserved. -  https://www.spark.io/
*
*   This file is part of the Spark-protocol module
*
*   This program is free software: you can redistribute it and/or modify
*   it under the terms of the GNU General Public License version 3
*   as published by the Free Software Foundation.
*
*   Spark-protocol is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU General Public License for more details.
*
*   You should have received a copy of the GNU General Public License
*   along with Spark-protocol.  If not, see <http://www.gnu.org/licenses/>.
*
*   You can download the source here: https://github.com/spark/spark-protocol
*/


/**
 * Interface for the Spark Core module
 * @constructor
 */
var Constructor = function () {

};

Constructor.prototype = {
    classname: "ISparkCore",
    socket: null,

    startupProtocol: function () {
        this.handshake(this.hello, this.disconnect);
    },

    handshake: function (onSuccess, onFail) { throw new Error("Not yet implemented"); },
    hello: function (onSuccess, onFail) { throw new Error("Not yet implemented"); },
    disconnect: function () { throw new Error("Not yet implemented"); },


    /**
     * Connect to API
     */
    onApiMessage: function(sender, msg) { throw new Error("Not yet implemented"); },

    /**
     * Connect to API
     */
    sendApiResponse: function(sender, msg) { throw new Error("Not yet implemented"); },


    foo: null
};
module.exports = Constructor;
