import mustache from 'mustache'
import { IExecuteFunctions } from 'n8n-core';
import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

class MustacheNode implements INodeType{
    constructor() {
        this.description = {
            displayName: 'Mustache convert',
            name: 'mustacheConvert',
            group: ['transform'],
            version: 1,
            description: 'Convert mustache temmplate',
            defaults: {
                name: 'Mustache convert',
                color: '#772244',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Template',
                    name: 'template',
                    type: 'string',
                    default: '',
                    placeholder: '{{title}} spends',
                    description: 'The template',
                }
            ]
        };
    }
    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        let item: INodeExecutionData;
		let myString: string;
        let output = mustache.render("{{title}} spends", { title: 'coucou' }) as string;

        item.json['render'] = output;
        return this.prepareOutputData(items);
    }
}