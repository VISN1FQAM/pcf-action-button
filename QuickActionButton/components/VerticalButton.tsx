import * as React from 'react';
import { CompoundButton } from '@fluentui/react/lib/Button';
import { IActionButtonProps } from '../interfaces/IActionButtonProps';

const VerticalButton = ({ button, styling, onClicked, isFormDisabled } : IActionButtonProps) => {
    styling.flexContainer = {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        width: 100,
        height: 60
    }

    styling.textContainer = {
        textAlign: 'center'
    }

    styling.icon = {
        margin: 0
    }

    return ( 
        <CompoundButton 
            styles={styling} 
            disabled={button.isDisabled ?? isFormDisabled}
            onClick={onClicked}
            allowDisabledFocus
            iconProps={
                button.iconName ? { iconName: button.iconName,  className: "icon-M" } : undefined           
            }>
            {button.label}
        </CompoundButton>
    );
}
 
export default VerticalButton;