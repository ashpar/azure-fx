module.exports = function (context, serviceInputEventHubTrigger) {

    context.log('Incoming Event:', serviceInputEventHubTrigger);
    // context.log('Incoming Context:', context);
    var payload = {};
    var events = [];

    context.log('2nd commit');
    context.bindings.outputEventHubMessage = payload;
    context.done();
};