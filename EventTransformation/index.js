module.exports = function (context, serviceInputEventHubTrigger) {

    context.log('Incoming Event:', serviceInputEventHubTrigger);
    // context.log('Incoming Context:', context);
    var payload = {};
    var events = [];

    context.log('3rd commit');
    context.bindings.outputEventHubMessage = payload;
    context.done();
};