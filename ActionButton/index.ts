import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ButtonControl, { IButtonControlProps } from "./ButtonControl";
import { initializeIcons } from '@fluentui/font-icons-mdl2';


export class ActionButtonControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private container: HTMLDivElement;
	private notifyOutputChanged: () => void;
	private actionText: string;

    constructor() {
		initializeIcons();
	}

	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement) {
		this.container = container;
		this.notifyOutputChanged = notifyOutputChanged;

		this.actionText = context.parameters.ActionButtonLabel.raw ?? "";

		// @ts-ignore
		this.controlType = context.parameters.BoundAttribute.attributes.Type;

		if (this.actionText.trim().startsWith("{")) {
			let json = JSON.parse(this.actionText);
			try {
				this.actionText = json[context.userSettings.languageId];
				if (this.actionText === undefined) {
					this.actionText = json[parseInt(Object.keys(json)[0])];
				}
			}
			catch {
				this.actionText = json[parseInt(Object.keys(json)[0])];
			}
		}

		this.renderControl(context);
	}

	private renderControl(context: ComponentFramework.Context<IInputs>): void {
		let props: IButtonControlProps = {
			text: this.actionText,
			disabled: context.parameters.EnableButtonOnDisabledForm.raw === "1" ? false : context.mode.isControlDisabled,
			style: {
				backgroundColor: context.parameters.BackgroundColor.raw ?? "#0078d4",
				color: context.parameters.Color.raw ?? "#FFFFFF",
				width: context.parameters.Width.raw ?? "auto",
				height: context.parameters.Height.raw ?? "auto",
                borderRadius: context.parameters.BorderRadius.raw ?? 0
			},
			hoverBackgroundColor: context.parameters.HoverBackgroundColor.raw ?? "#106EBE",
			hoverColor: context.parameters.HoverColor.raw ?? "#FFFFF",
			checkedBackgroundColor: context.parameters.ActiveBackgroundColor.raw ?? "#0078d4",
			checkedColor: context.parameters.ActiveColor.raw ?? "#FFFFFF",
			iconName: context.parameters.IconName.raw,
			toolTip: context.parameters.ToolTipDescription.raw ?? "",
			onClick: () => this.notifyOutputChanged()
		}

		ReactDOM.render(React.createElement(ButtonControl, props), this.container);
	}

	public updateView(context: ComponentFramework.Context<IInputs>): void {
		this.renderControl(context);
	}

	public getOutputs(): IOutputs {
		return {
			BoundAttribute: "ABCD"
		};
	}

	public destroy(): void {
	}
}