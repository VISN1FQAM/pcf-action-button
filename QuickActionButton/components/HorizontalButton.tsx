import * as React from 'react';
import { CompoundButton } from 'office-ui-fabric-react/lib/components/Button/CompoundButton/CompoundButton';
import { IActionButtonProps } from '../interfaces/IActionButtonProps';

const HorizontalButton = ({ button, styling, onClicked, isFormDisabled } : IActionButtonProps) => {
    styling.flexContainer = {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 100,
        width: 'auto',
        height: 40,
        gap: 8
    }

    styling.textContainer = {
        textAlign: 'left'
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
 
export default HorizontalButton;