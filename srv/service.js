const cds = require('@sap/cds')

module.exports = class NotificationService extends cds.ApplicationService {
    async init() {
        this.after('CREATE', 'Orders', async(results, req) => {
            console.log(results);
            const alert = await cds.connect.to('notifications');

            alert.notify({
                recipients: [ 'mio.fujita.01@gmail.com' ],
                priority: "HIGH", //optional
                title: "New Order has been created!",
                description: `Order by customer ${req.data.customer} as been created!`
              });
        })
        return super.init()
    }
}