"use strict";
var core_1 = require("@ng2-dynamic-forms/core");
exports.MY_DYNAMIC_FORM_MODEL = [
    new core_1.DynamicFormGroupModel({
        id: "bootstrapFormGroup1",
        legend: "Base line",
        group: [
            new core_1.DynamicInputModel({
                id: "InclusionDate",
                label: "Inclusion date",
                placeholder: "25/2/2017",
                readOnly: true
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-4",
                    errors: "col-sm-offset-3 col-sm-4",
                    label: "col-sm-3"
                }
            }),
            new core_1.DynamicInputModel({
                id: "PatientCode",
                label: "Patient code",
                placeholder: "",
                readOnly: true
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-4",
                    errors: "col-sm-offset-3 col-sm-4",
                    label: "col-sm-3"
                }
            }),
            new core_1.DynamicSelectModel({
                id: "Gender",
                label: "Gender",
                options: [
                    {
                        label: "Female",
                        value: "Female",
                    },
                    {
                        label: "Male",
                        value: "Male"
                    }
                ],
                value: "option-3"
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-4",
                    label: "col-sm-3"
                }
            }),
            new core_1.DynamicInputModel({
                id: "age",
                label: "Age",
                placeholder: "",
                inputType: "number",
                min: 0,
                max: 120
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-4",
                    errors: "col-sm-offset-3 col-sm-4",
                    label: "col-sm-3"
                }
            }),
            new core_1.DynamicSelectModel({
                id: "race",
                label: "Race",
                options: [
                    {
                        label: "White",
                        value: "White",
                    },
                    {
                        label: "Pink",
                        value: "Pink"
                    },
                    {
                        label: "Yellow",
                        value: "Yellow"
                    },
                    {
                        label: "Grey",
                        value: "Grey"
                    },
                    {
                        label: "Others",
                        value: "Others"
                    }
                ],
                value: "option-3"
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-4",
                    label: "col-sm-3"
                }
            }),
            new core_1.DynamicTextAreaModel({
                id: "others",
                label: "Others",
                rows: 5,
                placeholder: "",
                relation: [
                    {
                        action: "ENABLE",
                        when: [
                            {
                                id: "race",
                                value: "Others"
                            }
                        ]
                    }
                ]
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-4",
                    label: "col-sm-3"
                }
            }),
            new core_1.DynamicInputModel({
                id: "waistcircumfernce",
                label: "Waist circumfernce",
                inputType: "number",
                max: 200,
                min: 0,
                suffix: "Cm",
                validators: {
                    required: null
                },
                errorMessages: {
                    required: "{{label}} is required"
                }
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-4",
                    errors: "col-sm-offset-3 col-sm-4",
                    label: "col-sm-3"
                }
            }),
            new core_1.DynamicTextAreaModel({
                id: "generalCommentsOfThePatient",
                label: "General comments of the patient",
                rows: 5,
                placeholder: "example Textarea",
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-4",
                    label: "col-sm-3"
                }
            })
        ]
    }),
    new core_1.DynamicFormGroupModel({
        id: "bootstrapFormGroup2",
        legend: "  ",
        group: [
            new core_1.DynamicCheckboxModel({
                id: "concomtentDiseaseAtTheTimeOfVTEDiagnosis",
                label: "concomtent disease at the time of vte diagnosis"
            }, {
                grid: {
                    control: "col-sm-offset-3 col-sm-4"
                }
            }),
            //
            new core_1.DynamicCheckboxModel({
                id: "concomitantTherapy",
                label: "Concomitant therapy"
            }, {
                grid: {
                    control: "col-sm-offset-3 col-sm-4"
                }
            }),
            new core_1.DynamicCheckboxModel({
                id: "corticosteroids",
                label: "Corticosteroids",
                relation: [
                    {
                        action: "DISABLE",
                        when: [
                            {
                                id: "concomitantTherapy",
                                value: false
                            }
                        ]
                    }
                ],
            }, {
                grid: {
                    control: "col-sm-offset-3 col-sm-4"
                }
            }),
            new core_1.DynamicCheckboxModel({
                id: "nsaid",
                label: "NSAID",
                relation: [
                    {
                        action: "DISABLE",
                        when: [
                            {
                                id: "concomitantTherapy",
                                value: false
                            }
                        ]
                    }
                ],
            }, {
                grid: {
                    control: "col-sm-offset-3 col-sm-4"
                }
            }),
            new core_1.DynamicCheckboxModel({
                id: "antiplatelets",
                label: "Antiplatelets",
                relation: [
                    {
                        action: "DISABLE",
                        when: [
                            {
                                id: "concomitantTherapy",
                                value: false
                            }
                        ]
                    }
                ],
            }, {
                grid: {
                    control: "col-sm-offset-3 col-sm-4"
                }
            }),
            new core_1.DynamicCheckboxModel({
                id: "wereAntiplateletsDiscontinuedWhenAnticoagulantTherapyStarted",
                label: "Were antiplatelets discontinued when anticoagulant therapy started?",
                relation: [
                    {
                        action: "ENABLE",
                        connective: "AND",
                        when: [
                            {
                                id: "concomitantTherapy",
                                value: true
                            },
                            {
                                id: "antiplatelets",
                                value: true
                            }
                        ]
                    }
                ],
            }, {
                grid: {
                    control: "col-sm-offset-3 col-sm-4"
                }
            }),
            new core_1.DynamicCheckboxModel({
                id: "psychotropics",
                label: "Psychotropics",
                relation: [
                    {
                        action: "DISABLE",
                        when: [
                            {
                                id: "concomitantTherapy",
                                value: false
                            }
                        ]
                    }
                ],
            }, {
                grid: {
                    control: "col-sm-offset-3 col-sm-4"
                }
            }),
            new core_1.DynamicInputModel({
                id: "specifyDrugs",
                label: "Specify drugs",
                placeholder: "",
                relation: [
                    {
                        action: "DISABLE",
                        when: [
                            {
                                id: "corticosteroids",
                                value: false
                            }
                        ]
                    }
                ],
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-4",
                    errors: "col-sm-offset-3 col-sm-4",
                    label: "col-sm-3"
                }
            }),
            new core_1.DynamicCheckboxModel({
                id: "erythropoietin",
                label: "Erythropoietin",
                relation: [
                    {
                        action: "DISABLE",
                        when: [
                            {
                                id: "concomitantTherapy",
                                value: false
                            }
                        ]
                    }
                ],
            }, {
                grid: {
                    control: "col-sm-offset-3 col-sm-4"
                }
            }),
            new core_1.DynamicCheckboxModel({
                id: "statins",
                label: "Statins",
                relation: [
                    {
                        action: "DISABLE",
                        when: [
                            {
                                id: "concomitantTherapy",
                                value: false
                            }
                        ]
                    }
                ],
            }, {
                grid: {
                    control: "col-sm-offset-3 col-sm-4"
                }
            }),
            new core_1.DynamicInputModel({
                id: "drug",
                label: "Drug",
                placeholder: "",
                relation: [
                    {
                        action: "DISABLE",
                        when: [
                            {
                                id: "statins",
                                value: false
                            }
                        ]
                    }
                ],
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-4",
                    errors: "col-sm-offset-3 col-sm-4",
                    label: "col-sm-3"
                }
            }),
            new core_1.DynamicInputModel({
                id: "doseDday",
                label: "Dose/day",
                placeholder: "",
                inputType: "number",
                min: "0",
                max: "80",
                relation: [
                    {
                        action: "DISABLE",
                        when: [
                            {
                                id: "statins",
                                value: false
                            }
                        ]
                    }
                ],
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-4",
                    errors: "col-sm-offset-3 col-sm-4",
                    label: "col-sm-3"
                }
            }),
            new core_1.DynamicTextAreaModel({
                id: "others",
                label: "Others",
                rows: 5,
                placeholder: "",
                relation: [
                    {
                        action: "ENABLE",
                        when: [
                            {
                                id: "concomitantTherapy",
                                value: true
                            }
                        ]
                    }
                ]
            }, {
                element: {
                    label: "control-label"
                },
                grid: {
                    control: "col-sm-4",
                    label: "col-sm-3"
                }
            })
        ]
    }),
];
//# sourceMappingURL=schema.model.js.map