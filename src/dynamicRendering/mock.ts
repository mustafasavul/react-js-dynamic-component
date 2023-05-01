//generates random id;
const expireDate = new Date().getTime() + 1000 * 60 * 60 * 24;

const mockResponse = {
    "type": "VerticalList",
    "base": {
        "width": null,
        "height": null,
        "ratio": null,
        "weight": null,
        "margin": {
            "top": 0.0,
            "bottom": 0.0,
            "left": 0.0,
            "right": 0.0
        },
        "padding": null,
        "cornerRadius": {
            "topRight": 0.0,
            "topLeft": 0.0,
            "bottomRight": 0.0,
            "bottomLeft": 0.0
        },
        "backgroundColor": "#ffffff",
        "border": null,
        "shadow": null,
        "deeplink": null,
        "analytic": null,
        "mask": null
    },
    "data": {},
    "custom": {
        "spacing": 10,
        "horizontalAlignment": "left",
        "isScrollable": true,
    },
    "items": [
        {
            "type": "Label",
            "base": {
                "width": null,
                "height": null,
                "ratio": null,
                "weight": null,
                "margin": {
                    "top": 0.0,
                    "bottom": 0.0,
                    "left": 0.0,
                    "right": 0.0
                },
                "padding": {
                    "top": 14.0,
                    "bottom": 14.0,
                    "left": 14.0,
                    "right": 14.0
                },
                "cornerRadius": {
                    "topRight": 23.0,
                    "topLeft": 23.0,
                    "bottomRight": 23.0,
                    "bottomLeft": 23.0
                },
                "backgroundColor": '#ccc',
                "border": null,
                "shadow": null,
                "deeplink": null,
                "analytic": null,
                "mask": null
            },
            "custom": {
                "htmlFormatted": true,
                "charLimit": 32,
                "font": {
                    "color": "red",
                    "name": "String",
                    "size": "Number",
                    "style": []
                },
            },
            "data": {
                "text": "Merhaba dünya"
            },
            "items": null
        },
        {
            "type": "HorizontalList",
            "base": {
                "width": null,
                "height": null,
                "ratio": null,
                "weight": null,
                "margin": {
                    "top": 0.0,
                    "bottom": 0.0,
                    "left": 0.0,
                    "right": 0.0
                },
                "padding": {
                    "top": 4.0,
                    "bottom": 4.0,
                    "left": 4.0,
                    "right": 4.0
                },
                "cornerRadius": {
                    "topRight": 0.0,
                    "topLeft": 0.0,
                    "bottomRight": 0.0,
                    "bottomLeft": 0.0
                },
                "backgroundColor": null,
                "border": null,
                "shadow": null,
                "deeplink": null,
                "analytic": null,
                "mask": null
            },
            "custom": {
                "spacing": null,
                "verticalAlignment": null,
                "isScrollable": true
            },
            "items": [
                {
                    "type": "Countdown",
                    "base": {
                        "width": null,
                        "height": null,
                        "ratio": null,
                        "weight": null,
                        "margin": {
                            "top": 0.0,
                            "bottom": 0.0,
                            "left": 0.0,
                            "right": 0.0
                        },
                        "padding": {
                            "top": 4.0,
                            "bottom": 4.0,
                            "left": 4.0,
                            "right": 4.0
                        },
                        "cornerRadius": {
                            "topRight": 0.0,
                            "topLeft": 0.0,
                            "bottomRight": 0.0,
                            "bottomLeft": 0.0
                        },
                        "backgroundColor": null,
                        "border": null,
                        "shadow": null,
                        "deeplink": null,
                        "analytic": null,
                        "mask": null
                    },
                    "custom": {
                        "variant": "String",
                        "boxColor": "String",
                        "textColor": "String"
                    },
                    "data": {
                        "expireDate": expireDate,
                        "title": "CountDown"
                    },
                    "items": null
                }
            ]
        },
        {
            "type": "CampaignCard",
            "base": {
                "width": null,
                "height": null,
                "ratio": null,
                "weight": null,
                "margin": {
                    "top": 0.0,
                    "bottom": 0.0,
                    "left": 0.0,
                    "right": 0.0
                },
                "padding": {
                    "top": 4.0,
                    "bottom": 4.0,
                    "left": 4.0,
                    "right": 4.0
                },
                "cornerRadius": {
                    "topRight": 25.0,
                    "topLeft": 25.0,
                    "bottomRight": 25.0,
                    "bottomLeft": 25.0
                },
                "backgroundColor": '#ccc',
                "border": null,
                "shadow": null,
                "deeplink": null,
                "analytic": null,
                "mask": null
            },
            "custom": {
                "variant": "ProductOriented || CampaignOriented",
            },
            "data": {
                "title": "Merhaba dünya",
                "price": "",
                "stockInfo": "",
                "campaignType": "Flash Sale",
                "campaignText": "Limited Time Offer!",
                "imageUrls": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"],
                "stock": 10,
                "sku": "ABCD1234",
                "incentiveToBuyLabel": "Free Shipping",
                "valueAddedServiceLabel": "Extended Warranty",
                "campaignLabel": "Winter Sale",
                "link": "https://example.com/product",
                "status": "In Stock",
                "productName": "Amazing Product",
                "reviewsInfo": {
                    "rating": 4.5,
                    "count": 200
                },
                "priceInfo": {
                    "price": "$100",
                    "originalPrice": "$150",
                    "finalPriceOnSale": "$90",
                    "premiumPrice": "$80"
                },
                "buttonText": "Buy Now",
                "hasVariant": true,
                "productId": "123456789"
            },
            "items": null
        },
        {
            "type": "Countdown",
            "base": {
                "width": null,
                "height": null,
                "ratio": null,
                "weight": null,
                "margin": {
                    "top": 0.0,
                    "bottom": 0.0,
                    "left": 0.0,
                    "right": 0.0
                },
                "padding": {
                    "top": 4.0,
                    "bottom": 4.0,
                    "left": 4.0,
                    "right": 4.0
                },
                "cornerRadius": {
                    "topRight": 0.0,
                    "topLeft": 0.0,
                    "bottomRight": 0.0,
                    "bottomLeft": 0.0
                },
                "backgroundColor": null,
                "border": null,
                "shadow": null,
                "deeplink": null,
                "analytic": null,
                "mask": null
            },
            "custom": {
                "variant": "String",
                "boxColor": "String",
                "textColor": "String"
            },
            "data": {
                "expireDate": expireDate,
                "title": "CountDown"
            },
            "items": null
        },
    ]
}

export default mockResponse;