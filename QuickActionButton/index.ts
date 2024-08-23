import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import ButtonControl, { IButtonControlProps } from "./ButtonControl";

type IControlContext = ComponentFramework.Context<IInputs>;

export class QuickActionButton implements ComponentFramework.StandardControl<IInputs, IOutputs> {
	private container: HTMLDivElement;
	private buttonClicked: string;
	private notifyOutputChanged: () => void;

    constructor() {
		initializeIcons();
	}

	public init(context: IControlContext, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void {
		this.container = container;
		this.notifyOutputChanged = notifyOutputChanged;
	}

	public updateView(context: IControlContext): void {
		this.renderControl(context);
	}

	private renderControl(context: IControlContext): void {
		const params = context.parameters;

		const props: IButtonControlProps = {
			buttons: JSON.parse(params.Buttons.raw ?? ""),
			buttonType: params.ButtonType.raw ?? "",
			isFormDisabled: context.mode.isControlDisabled,
			onButtonClicked: this.onActionClicked
		}

		ReactDOM.render(React.createElement(ButtonControl, props), this.container);
	}

	private onActionClicked = (key: string) => {
		this.buttonClicked = key;
		this.notifyOutputChanged()
	}

	public getOutputs(): IOutputs {
		return { 
			LinkedAttribute: this.buttonClicked 
		};
	}

	public destroy(): void {
	}
}