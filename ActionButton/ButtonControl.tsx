import * as React from 'react'
import { Stack } from '@fluentui/react/lib/Stack';
import { ActionButton, IBaseButtonProps, IButtonStyles, IconButton } from '@fluentui/react/lib/Button';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react';

export interface IButtonControlProps extends IBaseButtonProps {
  styles: IButtonStyles,
  iconName?: string,
  toolTip?: string,
  onButtonClicked: () => void
}

const ButtonControl = (props: IButtonControlProps) => {
  const toolTipId = `tooltip_${props.iconName}`;

  return ( 
    <Stack horizontal>
        <TooltipHost content={props.toolTip} id={toolTipId}>
          <PrimaryButton
            iconProps={{ iconName: props.iconName, style: { color: 'white'} }}
            styles={props.styles}
            text={props.text}
            onClick={props.onButtonClicked}
            disabled={props.disabled}
            allowDisabledFocus
            aria-describedby={toolTipId}/>
        </TooltipHost>
    </Stack> 
  );
}

export default ButtonControl;