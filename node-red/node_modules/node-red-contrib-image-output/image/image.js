module.exports = function(RED) {
    function ImageNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on("input", function(msg) {
            try {
                var data = msg.payload.toString("base64")
                RED.comms.publish("image", { id:this.id, data:data });
                if (msg.hasOwnProperty("filename")) { node.status({text:" "+msg.filename}); }
            }
            catch(e) {
                node.error("Invalid image",msg);
            }
        });

        node.on("close", function() {
            RED.comms.publish("image", { id:this.id });
            node.status({});
        });
    }
    RED.nodes.registerType("image", ImageNode);
};
