using { shop } from '../db/data-model';

service NotificationService {
    @odata.draft.enabled
    entity Orders as projection on shop.Orders;
}

annotate NotificationService.Orders with @(
    UI.LineItem: [
        {
            $Type : 'UI.DataField',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Value : description,
        },
        {
            $Type : 'UI.DataField',
            Value : deliveryDate,
        },
        {
            $Type : 'UI.DataField',
            Value : customer,
        }
    ],
    UI.HeaderInfo: {
        TypeName: 'Order',
        TypeNamePlural: 'Orders'
    },
    UI.Identification: [
        {
            $Type : 'UI.DataField',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Value : description,
        },
        {
            $Type : 'UI.DataField',
            Value : deliveryDate,
        },
        {
            $Type : 'UI.DataField',
            Value : customer,
        }
    ],
    UI.Facets: [
        {
            $Type : 'UI.ReferenceFacet',
            Target : '@UI.Identification',
        },
    ]

);