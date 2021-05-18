"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mustache_1 = require("mustache");
class MustacheNode {
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
    async execute() {
        const items = this.getInputData();
        let item;
        let myString;
        let output = mustache_1.default.render("{{title}} spends", { title: 'coucou' });
        item.json['render'] = output;
        return this.prepareOutputData(items);
    }
}
//# sourceMappingURL=mustacheNode.js.map