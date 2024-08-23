import { IButtonStyles } from "@fluentui/react/lib/Button"
import { ActionButton } from "../interfaces"

const createButtonStyle = (button: ActionButton): IButtonStyles => {
    return {
        root:{
            background: button.bgColor,
            color: button.color,
            margin: 10,
            border: 0,
            borderRadius: 4
        },
        rootPressed:{
            background: button.bgColor,
            color: button.color
        },
        rootHovered:{
            background: button.bgColor,
            color: button.color,
            opacity: 0.9
        },
        description:{
            color: button.color
        },
        descriptionHovered:{
            color: button.color
        }
    }
}

export {
    createButtonStyle
}