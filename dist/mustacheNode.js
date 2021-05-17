const mustache = require('mustache')

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
        let output = mustache.render("{{title}} spends", { title: 'coucou' });
        return this.prepareOutputData(output);
    }
}
exports.MustacheNode = MustacheNode;