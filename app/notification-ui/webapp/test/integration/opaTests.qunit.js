sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'miyasuta/notificationui/test/integration/FirstJourney',
		'miyasuta/notificationui/test/integration/pages/OrdersList',
		'miyasuta/notificationui/test/integration/pages/OrdersObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrdersList, OrdersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('miyasuta/notificationui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrdersList: OrdersList,
					onTheOrdersObjectPage: OrdersObjectPage
                }
            },
            opaJourney.run
        );
    }
);