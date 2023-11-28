const cds = require('@sap/cds')

module.exports = class NotificationService extends cds.ApplicationService {
    async init() {
        this.on('notify', async(req)=> {
            // const alert = await cds.connect.to('notifications');

            // alert.notify({
            //     recipients: [ req.data.recipient ],
            //     priority: "HIGH", //optional
            //     title: "New high priority incident is assigned to you!",
            //     description: "Incident titled 'Engine overheating' created by 'customer X' with priority high is assigned to you!"
            //   });

        })
        return super.init()
    }
}