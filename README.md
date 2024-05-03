### Haze App
Haze App is a powerful tool that enables users to unleash their creativity through extensive customization options. Elevate your customer's experience by offering seamless customization features. Boost sales, engage customers, and improve conversion rates for your e-commerce store.


## Tech Stack
**Frontend**:
ReactJs,
Redux,
Redux Toolkit,
Bootstrap,
HTML,
CSS
Axios,

**Backend**:
Node.js,
Express.js,
MongoDB,
Mongoose,

**Development Tools**:
NPM,
Babel,
Webpack,
ESLint,
Prettier,
GIT,
Visual Studio,

**Database**: MongoDB



**Authentication**:  Email- Password Authentication

## .env File for Local Testing (Backend)


``` bash
MONGO_URL='mongodb://localhost:27017/hazeapp'
PORT=8080
JWT_SECRET="ABC12345"

SHOPIFY_API_KEY=b75b268605814804f9c5ef699a7a2d96
SHOPIFY_API_SECRET=16ba71817680f156a8f4dee12694e39a
SHOP_DOMAIN=hazetest.myshopify.com
ACCESS_TOKEN=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


```

## .env File for Local and Global Testing (Frontend)


``` bash
VITE_APP_API_URL=http://localhost:8080/api

# VITE_APP_API_URL=https://haze.staging.app/backend/api

```
##  Insturction for running Frontend Locally:
```bash

 npm i or npm i --force

 npm start

```

## Instructions for Running Backend Locally:
Add values to the variables in the local .env file.
Run the following commands:
```bash
npm i or npm i --force
npm start

```

** API Endpoints (Local Testing) **:
Check Endpoints Locally: ```http://localhost:8080/api/test/test-user```

Register User: ```http://localhost:8080/api/auth/register```

Login: ```http://localhost:8080/api/auth/login```

Logout: ```http://localhost:8080/api/auth/logout```

Get All Users: ```http://localhost:8080/api/profile/getuser```

Update User: ```http://localhost:8080/api/profile/updateuser```

Update Password: ```http://localhost:8080/api/profile/updatepassword```

Reset Password: ```http://localhost:8080/api/profile/resetpassword```

Delete User: ```http://localhost:8080/api/profile/deleteuser/:id```

Save Product: ```http://localhost:8080/api/product/save```

Get All Products: ```http://localhost:8080/api/product/getAll```

Save Customizer Data: `POST http://localhost:8080/api/data/customizer`

Get Customizer Data: `GET http://localhost:8080/api/data/customizer`

Save Layer Data: `POST http://localhost:8080/api/data/layerdata`

Get Layer Data: `GET http://localhost:8080/api/data/layerdata`

Post Profile details: `POST http://localhost:8080/api/profile/addprofiledetails`

Get Profile List : `GET http://localhost:8080/api/profile/getprofilelist`

Get Profile List : ``GET http://localhost:8080/api/profile/getuser/:id``

Get Shopify Product : `` GET http://localhost:8080/api/shopify/products``

Post Shopify Product: `` POST http://localhost:8080/api/shopify/products``


**Body for registering user** :
```

{
"name":"user1"
"email":"user1@gmail.com"
"password":"12345"
"confirmPassword":"12345"
}
```

** Body for login user ** :
```
{
"email":"user1@gmail.com"
"password":"12345"
}
```
####  You need to pass token after login to the headers in 
``
Authorization : Bearer `token`
``

**Body for testing layerdata(post) in postman**:
```
{
    "layerId": "layer123",
    "inputType": "text",
    "displayType": "banner",
    "imageTitle": "Example Image",
    "thumbnailType": false,
    "labelType": true,
    "imageName": "example.jpg",
    "images": [
        {
            "id": "img1",
            "layerId": "layer123",
            "imageName": "example1.jpg",
            "url": "https://example.com/image1.jpg"
        },
        {
            "id": "img2",
            "layerId": "layer123",
            "imageName": "example2.jpg",
            "url": "https://example.com/image2.jpg"
        }
    ],
    "colors": [
        {
            "id": "color1",
            "layerId": "layer123",
            "colorName": "Red",
            "color": "#FF0000"
        },
        {
            "id": "color2",
            "layerId": "layer123",
            "colorName": "Blue",
            "color": "#0000FF"
        }
    ],
    "textName": "Example Text",
    "text": [
        {
            "id": "text1",
            "layerId": "layer123",
            "textName": "Text 1",
            "imageText": "Lorem ipsum dolor sit amet"
        },
        {
            "id": "text2",
            "layerId": "layer123",
            "textName": "Text 2",
            "imageText": "consectetur adipiscing elit"
        }
    ]
}
```


**Body for customizer post request(post) over postman**:
```
{
    "ThemeType": {
        "ThemeSelect": "example theme"
    },
    "CustomizerTitle": {
        "bgColor": "#ffffff",
        "ftColor": "#000000",
        "font": "Arial",
        "fontSize": "14px",
        "fontSizeMobile": "12px",
        "ftColorMobile": "#2D2D2D",
        "dividerColor": "#2D2D2D",
        "dividerThickness": "1px"
    },
    "LayersPanel": {
        "LayerPanelPos": "left",
        "LaPnbgColor": "#ffffff",
        "LaPnbrdColor": "#cccccc",
        "borderThickness": "1px",
        "errorClr": "#ff0000"
    },
    "LayersList": {
        "LayerFtClr": "#ffffff",
        "LayerFntSize": "16px",
        "LayerFntFmly": "Arial, sans-serif",
        "LayerDscFntClr": "#ffffff",
        "LayerDscFntSize": "14px",
        "LayerDscFntFmly": "Arial, sans-serif",
        "LayerDivClr": "#ffffff",
        "LayerDivThick": "1px"
    },
    "LayersSettings": {
        "LayerSetBrdClr": "#ffffff",
        "LayerSetSelBrdClr": "#ffffff",
        "LayerSetBrdThick": "1px",
        "LayerSetSelBrdThick": "1px",
        "LayerSetFtClr": "#ffffff",
        "LayerSetFtSize": "16px",
        "LayerSetFtFmly": "Arial, sans-serif",
        "LayerSetPopUpBkgClr": "#ffffff",
        "LayerSetPopUpBkgRound": "5px",
        "LayerSetDescFtClr": "#ffffff",
        "LayerSetDescFtSize": "14px",
        "LayerSetDescFtFmly": "Arial, sans-serif"
    },
    "ThumbnailButtonList": {
        "ThumbnailRounding": "5px",
        "ThumbnailColoumn": "4",
        "ThumbnailWidth": "100px",
        "ThumbnailHeight": "100px",
        "ThumbnailVerticalMargin": "10px",
        "ThumbnailRoundMob": "5px",
        "ThumbnailWidthMob": "80px",
        "ThumbnailHeightMob": "80px",
        "ThumbnailMargintMob": "8px"
    },
    "InputTextDropDown": {
        "InputTxtBgClr": "#ffffff",
        "InputTxtHeight": "40px",
        "InputTxtRoundings": "5px",
        "InputTxtBrdClr": "#ffffff",
        "InputTxtFontFmly": "Arial, sans-serif",
        "InputTextFontClr": "#ffffff",
        "InputTextFontSize": "16px",
        "InputTextDrpDownMenuBgClr": "#ffffff",
        "InputTextDrpDownHovOpClr": "#ffffff",
        "InputTextDrpDownSelcOpClr": "#ffffff",
        "InputTextDrpDownMenuFtClr": "#ffffff"
    },
    "FileUpload": {
        "FileUploadBgClr": "#ffffff",
        "FileUploadBrdClr": "#cccccc",
        "FileUploadRound": "5px",
        "FileUploadFtClr": "#333333",
        "FileUploadLinkClr": "#007bff",
        "FileUploadFontSize": "14px",
        "FileUploadImgRound": "5px",
        "FileUploadRemoveIptBgClr": "#ffffff",
        "FileUploadRemoveIptHovBgClr": "#f0f0f0",
        "FileUploadRemoveIptIconBgClr": "#333333"
    },
    "PrintReady": {
        "PrintReadyEditionClr": "#ff0000",
        "PrintReadyEditionIcClr": "#ffffff",
        "PrintReadyEditionDPIIndTxtClr": "#333333",
        "LowQualityTextClr": "#ff0000",
        "LowQualityMsgBkgClr": "#ffffcc",
        "LowQualityMsgTextClr": "#333333",
        "HighQualClr": "#008000"
    },
    "Customizer": {
        "LoadingIconClr": "#009688",
        "BkgClr": "#f0f0f0"
    },
    "StepTitle": {
        "BkgColor": "#f0f0f0",
        "SwitchStepsArrow": "#009688"
    },
    "SummaryTitle": {
        "FontFamily": "Arial, sans-serif",
        "FontColor": "#333333",
        "FontSize": "18px"
    },
    "AddToCart": {
        "BorderClr": "#cccccc",
        "BorderThickness": "1px",
        "Rounding": "5px",
        "FontFamily": "Arial, sans-serif",
        "FontColor": "#ffffff",
        "BackgroundClr": "#007bff",
        "HoverBkgColor": "#0056b3",
        "FontSize": "16px"
    },
    "ConfirmBtn": {
        "FontClr": "#ffffff",
        "BackgroundClr": "#28a745"
    },
    "Price": {
        "PricePosition": "right",
        "PriceFont": "Arial, sans-serif",
        "FontSize": "16px",
        "FontSizeMb": "14px",
        "FontColour": "#007bff",
        "ShowExtraPrice": "true",
        "ExtraPriceFontClr": "#ff0000",
        "ExtraPriceBrClr": "#cccccc",
        "ExtraPriceBgClr": "#ffffff"
    },
    "SwitchViewArrows": {
        "Color": "#007bff"
    },
    "SwitchViewDots": {
        "colour": "#007bff",
        "SelectColour": "#333333"
    },
    "zoom": {
        "ZoomClr": "#007bff"
    },
    "ShareButton": {
        "DisplayShrBtn": "true",
        "IconOrTxtButton": "icon",
        "ShrBtnClr": "#007bff",
        "TextBtnRnd": "5px",
        "TextBtnLnth": "100px"
    },
    "DescriptionMobile": {
        "DescMbClr": "#333333",
        "DescMbBkgClr": "#ffffff",
        "DescMbFontFmly": "Arial, sans-serif",
        "DescMbFontSize": "14px"
    },
    "OutOfStock": {
        "badgeIconClr": "#ffffff",
        "badgeBkgClr": "#ff0000",
        "badgeBrWidth": "1px",
        "badgeBrClr": "#ffffff",
        "BannerTextClr": "#ffffff",
        "BannerBgClr": "#ff0000"
    }
}
```


**Post profile details api(POST) over postman**:
```
{
    "userId": "write user_id",
    "city": "City Name",
    "state": "State Name",
    "country": "Country Name",
    "address": ["Address Line 1", "Address Line 2"],
    "profileImage": "path/to/profile/image.jpg"
}

```

**Post shopify api(data) to shopify store**:
```
{
  "title": "Sample Product",
  "body_html": "<p>This is a sample product description.</p>",
  "price": "10.99"
}

**OR**

{
  "product": {
    "title": "New Product",
    "body_html": "Description of the new product",
    "vendor": "Snowboard Vendor",
    "product_type": "Snowboard",
    "variants": [
      {
        "title": "Variant 1",
        "price": "49.99",
        "inventory_management": "shopify",
        "inventory_policy": "deny",
        "option1": "Default Title"
      },
      {
        "title": "Variant 2",
        "price": "59.99",
        "inventory_management": "shopify",
        "inventory_policy": "deny",
        "option1": "Default Title"
      }
    ],
    "options": [
      {
        "name": "Size",
        "values": [
          "Small",
          "Medium",
          "Large"
        ]
      }
    ],
    "images": [
      {
        "src": "https://example.com/image1.jpg"
      },
      {
        "src": "https://example.com/image2.jpg"
      }
    ]
  }
}

```
