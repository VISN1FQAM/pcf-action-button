# Quick Action Button Control

![](https://github.com/novalogica/pcf-action-button/blob/main/screenshots/example.png)


## Usage

This is an example of the expected "Buttons JSON" property. In here you must specify the key, label, icon name (iconName), background color (bgColor), color. 

Also if needed, you can set a specific button to be disabled (isDisabled). If not specified, the buttons will be disabled only when the control is set to "Read-Only".


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

When the button is clicked the key is saved within the linked attribute and to handle the button click, just add an onChange event on this field and handle it based on the returned key value.

```javascript
function onQuickActionClicked(executionContext) {
    const formContext = executionContext.getFormContext();
    const buttonClicked = formContext.getAttribute("nl_quickactions")?.getValue();
    
    switch(buttonClicked) {
        case "account":
            onCreateAccount(executionContext)
            break;
        case "lead":
            onCreateLead(executionContext)
            break;
        case "opportunity":
            onCreateOpportunity(executionContext)
            break;
    }
}
```



### Icons
To find more icons, you can follow [https://developer.microsoft.com/en-us/fluentui#/controls/web/icon#usage](https://developer.microsoft.com/en-us/fluentui#/controls/web/icon#usage)


### Deploy
In order to deploy to your environment you'll need to run this commands: 
   #### 1. Create your authentication profile using the pac auth create command
      pac auth create --url https://xyz.crm.dynamics.com 

   #### 2. If you have previously created an authentication profile, you can view all the existing profiles using the pac auth list command
      pac auth list
   #### 3. To switch between the previously created authentication profiles, use the pac auth select command:
      pac auth select --index <index of the active profile>
   #### 4. Ensure that you have a valid connection and push the component
      pac pcf push -pp <your publisher prefix>