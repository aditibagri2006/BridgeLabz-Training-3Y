// Q4 – Custom Form Builder (Forms + Classes)
// Run this file using Q4-Custom-Form-Builder.html in a browser.
"use strict";

class FormBuilder {
    constructor(fields, containerId) {
        this.fields = fields;
        this.container = document.getElementById(containerId);
    }

    createForm() {
        const formFields = this.fields.map((field, index) => {
            const fieldId = `field-${index}`;

            // Escape labels and field names before inserting them into HTML.
            const safeLabel = this.escapeHTML(field.label);
            const safeName = this.escapeHTML(field.name);

            return `
                <div class="form-group">
                    <label for="${fieldId}">${safeLabel}</label>
                    <input
                        id="${fieldId}"
                        name="${safeName}"
                        type="${this.escapeHTML(field.type)}"
                        class="form-control"
                        ${field.required ? "required" : ""}
                    >
                </div>
            `;
        }).join("");

        this.container.innerHTML = `
            <form id="generatedForm">
                ${formFields}
                <button type="submit">Submit</button>
            </form>
            <pre id="formOutput"></pre>
        `;

        document.getElementById("generatedForm").addEventListener("submit", event => {
            event.preventDefault();
            const formData = this.getFormData();
            document.getElementById("formOutput").textContent =
                JSON.stringify(formData, null, 2);
            console.log("Submitted form data:", formData);
        });
    }

    getFormData() {
        const form = document.getElementById("generatedForm");
        const data = {};

        this.fields.forEach(field => {
            const input = form.elements.namedItem(field.name);
            data[field.name] = input.value;
        });

        return data;
    }

    escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[character]);
    }
}

const fields = [
    { type: "text", name: "username", label: "Username", required: true },
    { type: "email", name: "email", label: "Email Address", required: true },
    { type: "number", name: "age", label: "Age", required: false }
];

const builder = new FormBuilder(fields, "formContainer");
builder.createForm();
