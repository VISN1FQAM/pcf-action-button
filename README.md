# Quick Action Button Control

![](https://github.com/novalogica/pcf-action-button/blob/main/screenshots/example.png)


## Usage

This is an example of the expected "Buttons JSON" property. In here you must specify the key, label, icon name (iconName), background color (bgColor), color. 

Also if needed, you can set a specific button to be disabled (isDisabled). If not specified, the buttons will be disabled only when the control is set to "Read-Only".

When the button is clicked the key is saved within the linked attribute and to handle the button click, just add an onChange event on this field and handle it based on the returned key value.


```json
[
   {
      "key":"account",
      "label":"Create Account",
      "iconName":"contact",
      "bgColor":"#38807b",
      "color":"#FFF",
      "isDisabled":false
   },
   {
      "key":"lead",
      "label":"Create Lead",
      "iconName":"dictionary",
      "bgColor":"#79e2b3",
      "color":"#FFF",
      "isDisabled":false
   },
   {
      "key":"oportunity",
      "label":"Create Oportunity",
      "iconName":"notepinned",
      "bgColor":"#38807b",
      "color":"#FFF"
   }
]
```




### Icons
To find more icons, you can follow [https://developer.microsoft.com/en-us/fluentui#/controls/web/icon#usage](https://developer.microsoft.com/en-us/fluentui#/controls/web/icon#usage)