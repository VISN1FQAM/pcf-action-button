import { IButtonStyles } from "@fluentui/react";
import { ActionButton } from "./ActionButton";

export interface IActionButtonProps {
    button: ActionButton,
    styling: IButtonStyles
    onClicked: () => void,
    isFormDisabled: boolean
}