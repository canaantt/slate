
# Testing Schemas

## color

```

{
    "title": "color",
    "description": "used on validate color collections",
    "type": "object",
    "properties": {
        "dataset": {
            "type": "string"
        },
        "type": {
            "type": "string",
            "default": "color"
        },
        "name": {
            "type": "string"
        },
        "data": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "color": {
                        "pattern": "[A-Za-z0-9]+|^#[A-Z0-9]{6}"
                    },
                    "values": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "pattern": "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}"
                        }
                    }
                },
                "required": [
                    "name",
                    "color",
                    "values"
                ]
            }
        }
    },
    "required": [
        "_id",
        "dataset",
        "type",
        "name",
        "data"
    ],
    "additionalProperties": true
}
```


## mut

```

{
    "properties": {
        "gene": {
            "type": "string"
        },
        "min": {
            "type": "string"
        },
        "max": {
            "type": "string"
        },
        "patients": {
            "type": "object",
            "patternProperties": {
                "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}": {
                    "type": "string"
                }
            }
        }
    },
    "required": [
        "_id",
        "gene",
        "min",
        "max",
        "patients"
    ],
    "additionalProperties": true
}
```


## mut01

```

{
    "properties": {
        "gene": {
            "type": "string"
        },
        "min": {
            "type": "number"
        },
        "max": {
            "type": "number"
        },
        "patients": {
            "type": "object",
            "patternProperties": {
                "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}": {
                    "type": [
                        "number",
                        "null"
                    ]
                }
            },
            "minimum": 0,
            "maximum": 1
        }
    },
    "required": [
        "_id",
        "gene",
        "min",
        "max",
        "patients"
    ],
    "additionalProperties": true
}
```


## events

```

{
    "title": "events",
    "description": "clinical events organized by patients",
    "type": "object",
    "patternProperties": {
        "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}": {
            "type": "array",
            "items": {
                "properties": {
                    "name": {
                        "type": "string"
                    },
                    "data": {
                        "type": "object"
                    }
                },
                "required": [
                    "name",
                    "start",
                    "end",
                    "data"
                ]
            }
        }
    }
}
```


## patient

```

{
    "properties": {
        "patient_ID": {
            "type": "string",
            "pattern": "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}"
        },
        "diagnosis_year": {
            "type": "number"
        },
        "prospective_collection": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "retrospective_collection": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "gender": {
            "type": "string"
        },
        "days_to_birth": {
            "type": [
                "number",
                "null"
            ]
        },
        "race": {
            "type": [
                "string",
                "null"
            ]
        },
        "ethnicity": {
            "type": [
                "string",
                "null"
            ]
        },
        "history_other_malignancy": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "history_neoadjuvant_treatment": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "status_vital": {
            "type": [
                "string",
                "null"
            ]
        },
        "days_to_last_contact": {
            "type": [
                "number",
                "null"
            ]
        },
        "days_to_death": {
            "type": [
                "number",
                "null"
            ]
        },
        "status_tumor": {
            "type": [
                "string",
                "null"
            ]
        },
        "KPS": {
            "type": [
                "number",
                "null"
            ]
        },
        "ECOG": {
            "type": [
                "number",
                "null"
            ]
        },
        "encounter_type": {
            "type": [
                "string",
                "null"
            ]
        },
        "radiation_treatment_adjuvant": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "treatment_outcome_first_course": {
            "type": [
                "string",
                "null"
            ]
        },
        "new_tumor_event_diagnosis": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "age_at_initial_pathologic_diagnosis": {
            "type": "number"
        },
        "days_to_diagnosis": {
            "type": "number"
        },
        "disease_code": {
            "type": [
                "string",
                "null"
            ]
        },
        "icd_10": {
            "type": [
                "string",
                "null"
            ]
        },
        "icd_3_histology": {
            "type": [
                "string",
                "null"
            ]
        },
        "icd_3": {
            "type": [
                "string",
                "null"
            ]
        },
        "tissue_source_site_code": {
            "type": [
                "string",
                "null"
            ]
        },
        "tumor_tissue_site": {
            "type": [
                "string",
                "null"
            ]
        },
        "history_lgg_dx_of_brain_tissue": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "pathologic_method": {
            "type": [
                "string",
                "null"
            ]
        },
        "pathologic_method.1": {
            "type": [
                "string",
                "null"
            ]
        },
        "pharmaceutical_tx_adjuvant": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "anatomic_organ_subdivision": {
            "type": [
                "string",
                "null"
            ]
        },
        "histologic_diagnosis": {
            "type": "string"
        },
        "histologic_diagnosis.1": {
            "type": [
                "string",
                "null"
            ]
        },
        "grade": {
            "type": [
                "string",
                "null"
            ]
        },
        "laterality": {
            "type": [
                "string",
                "null"
            ]
        },
        "tumor_site": {
            "type": [
                "string",
                "null"
            ]
        },
        "supratentorial_localization": {
            "type": [
                "string",
                "null"
            ]
        },
        "history_ionizing_rt_to_head": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "history_seizures": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "history_headaches": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "symp_changes_mental_status": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "symp_changes_visual": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "symp_changes_sensory": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "symp_changes_motor_movement": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "related_symptom_first_present": {
            "type": [
                "string",
                "null"
            ]
        },
        "first_symptom_longest_duration": {
            "type": [
                "string",
                "null"
            ]
        },
        "history_asthma": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "history_eczema": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "history_hay_fever": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "history_dust_mold_allergy": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "asthma_eczema_allergy_first_diagnosis": {
            "type": [
                "string",
                "null"
            ]
        },
        "allergy_food_dx": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "allergy_food_type": {
            "type": [
                "string",
                "null"
            ]
        },
        "age_allergy_food": {
            "type": [
                "number",
                "null"
            ]
        },
        "allergy_animals_insects": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "allergy_animals_insects_type": {
            "type": [
                "string",
                "null"
            ]
        },
        "age_allergy_animals_insects": {
            "type": [
                "number",
                "null"
            ]
        },
        "history_neoadjuvant_steroid_tx": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "history_neoadjuvant_medication": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "family_history_cancer": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "family_history_brain_tumor": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "idh1_mutation_test_indicator": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "idh1_method": {
            "type": [
                "string",
                "null"
            ]
        },
        "idh1_mutation_found": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "inherited_genetic_syndrome_indicator": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "inherited_genetic_syndrome_specified": {
            "type": [
                "string",
                "null"
            ]
        },
        "days_to_performance": {
            "type": [
                "number",
                "null"
            ]
        },
        "targeted_molecular_therapy": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "study": {
            "type": "string"
        }
    },
    "required": [
        "_id",
        "patient_ID",
        "diagnosis_year"
    ],
    "additionalProperties": true
}
```


## drug

```

{
    "properties": {
        "patient_ID": {
            "type": "string",
            "pattern": "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}"
        },
        "diagnosis_year": {
            "type": [
                "number",
                "null"
            ]
        },
        "drug_therapy_name": {
            "type": [
                "string",
                "null"
            ]
        },
        "pharmaceutical_therapy_type": {
            "type": [
                "string",
                "null"
            ]
        },
        "pharmaceutical_therapy_type.1": {
            "type": [
                "string",
                "null"
            ]
        },
        "days_to_drug_start": {
            "type": [
                "number",
                "null"
            ]
        },
        "pharmaceutical_tx_ongoing": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "days_to_drug_end": {
            "type": [
                "number",
                "null"
            ]
        },
        "treatment_best_response": {
            "type": [
                "string",
                "null"
            ]
        },
        "days_to_stem_cell_transplantation": {
            "type": [
                "number",
                "null"
            ]
        },
        "drug_cycles": {
            "type": [
                "number",
                "null"
            ]
        },
        "pharma_type_other": {
            "type": [
                "string",
                "null"
            ]
        },
        "drug_units": {
            "type": [
                "string",
                "null"
            ]
        },
        "drug_total_dose_units": {
            "type": [
                "string",
                "null"
            ]
        },
        "drug_dose": {
            "type": [
                "number",
                "null"
            ]
        },
        "regimen_number": {
            "type": [
                "number",
                "null"
            ]
        },
        "drug_route": {
            "type": [
                "string",
                "null"
            ]
        },
        "stem_cell_transplantation": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "therapy_regimen": {
            "type": [
                "string",
                "null"
            ]
        },
        "therapy_regimen_other": {
            "type": [
                "string",
                "null"
            ]
        },
        "drug_total_dose": {
            "type": [
                "number",
                "null"
            ]
        },
        "therapy_on_clinical_trial": {
            "type": [
                "boolean",
                "null"
            ]
        }
    },
    "required": [
        "_id",
        "patient_ID"
    ],
    "additionalProperties": true
}
```


## newTumor

```

{
    "properties": {
        "patient_ID": {
            "type": "string",
            "pattern": "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}"
        },
        "days_to_progression": {
            "type": [
                "number",
                "null"
            ]
        },
        "radiation_therapy": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "drug": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "days_to_surgery": {
            "type": [
                "number",
                "null"
            ]
        },
        "new_tumor": {
            "type": [
                "string",
                "null"
            ]
        },
        "surgery_procedure": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "surgery_procedure.1": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "days_to_surgery_locoregional": {
            "type": [
                "number",
                "null"
            ]
        },
        "new_tumor_event_surgery_met": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "days_to_surgery_metastatic": {
            "type": [
                "number",
                "null"
            ]
        },
        "drug.1": {
            "type": [
                "boolean",
                "null"
            ]
        }
    },
    "required": [
        "_id",
        "patient_ID"
    ],
    "additionalProperties": true
}
```


## otherMalignancy

```

{
    "properties": {
        "patient_ID": {
            "type": "string",
            "pattern": "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}"
        },
        "malignancy_type": {
            "type": [
                "string",
                "null"
            ]
        },
        "days_to_diagnosis": {
            "type": [
                "number",
                "null"
            ]
        },
        "surgery_procedure": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "days_to_surgery": {
            "type": [
                "number",
                "null"
            ]
        },
        "pharmaceutical_therapy": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "drug_therapy_name": {
            "type": [
                "string",
                "null"
            ]
        },
        "days_to_drug_start": {
            "type": [
                "number",
                "null"
            ]
        },
        "radiation_therapy": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "history_rt_tx_to_site_of_tumor": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "days_to_radiation_start": {
            "type": [
                "number",
                "null"
            ]
        },
        "ajcc_staging_edition": {
            "type": [
                "string",
                "null"
            ]
        },
        "pathologic_stage_T": {
            "type": [
                "string",
                "null"
            ]
        },
        "pathologic_stage_N": {
            "type": [
                "string",
                "null"
            ]
        },
        "pathologic_stage_M": {
            "type": [
                "string",
                "null"
            ]
        },
        "pathologic_stage_S": {
            "type": [
                "string",
                "null"
            ]
        },
        "clinical_stage_S": {
            "type": [
                "string",
                "null"
            ]
        },
        "laterality": {
            "type": [
                "string",
                "null"
            ]
        }
    },
    "required": [
        "_id",
        "patient_ID"
    ],
    "additionalProperties": true
}
```


## radiation

```

{
    "properties": {
        "patient_ID": {
            "type": "string",
            "pattern": "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}"
        },
        "radiation_type": {
            "type": [
                "string",
                "null"
            ]
        },
        "radiation_therapy_site": {
            "type": [
                "string",
                "null"
            ]
        },
        "radiation_total_dose": {
            "type": [
                "number",
                "null"
            ]
        },
        "radiation_total_dose_units": {
            "type": [
                "string",
                "null"
            ]
        },
        "radiation_number_fractions_total": {
            "type": [
                "number",
                "null"
            ]
        },
        "days_to_radiation_start": {
            "type": [
                "number",
                "null"
            ]
        },
        "radiation_therapy_ongoing": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "days_to_radiation_end": {
            "type": [
                "number",
                "null"
            ]
        },
        "treatment_best_response": {
            "type": [
                "string",
                "null"
            ]
        },
        "course_number": {
            "type": [
                "number",
                "null"
            ]
        },
        "radiation_type_other": {
            "type": [
                "string",
                "null"
            ]
        },
        "therapy_regimen": {
            "type": [
                "string",
                "null"
            ]
        },
        "therapy_regimen_other": {
            "type": [
                "string",
                "null"
            ]
        }
    },
    "required": [
        "_id",
        "patient_ID"
    ],
    "additionalProperties": true
}
```


## followUp

```

{
    "properties": {
        "patient_ID": {
            "type": "string",
            "pattern": "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}"
        },
        "followup_reason": {
            "type": [
                "string",
                "null"
            ]
        },
        "followup_lost_to": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "radiation_treatment_adjuvant": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "pharmaceutical_tx_adjuvant": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "treatment_outcome_first_course": {
            "type": [
                "string",
                "null"
            ]
        },
        "status_vital": {
            "type": [
                "string",
                "null"
            ]
        },
        "days_to_last_contact": {
            "type": [
                "number",
                "null"
            ]
        },
        "days_to_death": {
            "type": [
                "number",
                "null"
            ]
        },
        "status_tumor": {
            "type": [
                "string",
                "null"
            ]
        },
        "new_tumor_event_diagnosis": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "treatment_outcome_at_tcga_followup": {
            "type": [
                "string",
                "null"
            ]
        }
    },
    "required": [
        "_id",
        "patient_ID"
    ],
    "additionalProperties": true
}
```


## newTumor-followUp

```

{
    "properties": {
        "patient_ID": {
            "type": "string",
            "pattern": "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}"
        },
        "days_to_progression": {
            "type": [
                "number",
                "null"
            ]
        },
        "surgery_procedure": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "radiation_therapy": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "drug": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "days_to_surgery": {
            "type": [
                "number",
                "null"
            ]
        },
        "new_tumor": {
            "type": [
                "string",
                "null"
            ]
        },
        "surgery_procedure.1": {
            "type": [
                "boolean",
                "null"
            ]
        },
        "residual_tumor": {
            "type": [
                "string",
                "null"
            ]
        }
    },
    "required": [
        "_id",
        "patient_ID"
    ],
    "additionalProperties": true
}
```


## genesets

```

{
    "properties": {
        "name": {
            "type": "string"
        },
        "genes": {
            "type": "array",
            "items": {
                "type": "string",
                "pattern": "^[A-Z]+[A-Za-z0-9]+"
            }
        },
        "type": {
            "type": "string"
        },
        "scale": {
            "type": "number"
        },
        "data": {
            "type": "object",
            "patternProperties": {
                "^[A-Z]+[A-Za-z0-9]+": {
                    "type": "object",
                    "properties": {
                        "x": {
                            "type": "number"
                        },
                        "y": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "x",
                        "y"
                    ]
                }
            }
        }
    },
    "required": [
        "_id",
        "name"
    ],
    "additionalProperties": true
}
```


## methylation

```

{
    "properties": {
        "gene": {
            "type": "string"
        },
        "min": {
            "type": [
                "number",
                "null"
            ],
            "minimum": 0,
            "maximum": 1
        },
        "max": {
            "type": [
                "number",
                "null"
            ],
            "minimum": 0,
            "maximum": 1
        },
        "patients": {
            "type": "object",
            "patternProperties": {
                "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[A-Z0-9]{5}": {
                    "type": [
                        "number",
                        "null"
                    ]
                }
            }
        }
    },
    "required": [
        "_id",
        "gene",
        "min",
        "max",
        "patients"
    ],
    "additionalProperties": true
}
```


## rna

```

{
    "properties": {
        "gene": {
            "type": "string"
        },
        "min": {
            "type": [
                "number",
                "null"
            ]
        },
        "max": {
            "type": [
                "number",
                "null"
            ]
        },
        "patients": {
            "type": "object",
            "patternProperties": {
                "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[A-Z0-9]{5}": {
                    "type": [
                        "number",
                        "null"
                    ]
                }
            }
        }
    },
    "required": [
        "_id",
        "gene",
        "min",
        "max",
        "patients"
    ],
    "additionalProperties": true
}
```


## protein

```

{
    "properties": {
        "gene": {
            "type": "string"
        },
        "min": {
            "type": [
                "number",
                "null"
            ],
            "minimum": -20,
            "maximum": 0
        },
        "max": {
            "type": [
                "number",
                "null"
            ],
            "minimum": -1,
            "maximum": 20
        },
        "patients": {
            "type": "object",
            "patternProperties": {
                "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}": {
                    "type": [
                        "number",
                        "null"
                    ]
                }
            }
        }
    },
    "required": [
        "_id",
        "gene",
        "min",
        "max",
        "patients"
    ],
    "additionalProperties": true
}
```


## psi

```

{
    "properties": {
        "gene": {
            "type": "string"
        },
        "min": {
            "type": [
                "number",
                "null"
            ],
            "minimum": 0,
            "maximum": 1
        },
        "max": {
            "type": [
                "number",
                "null"
            ],
            "minimum": 0,
            "maximum": 2
        },
        "patients": {
            "type": "object",
            "patternProperties": {
                "^[a-z0-9:|@+-]+": {
                    "type": [
                        "number",
                        "null"
                    ]
                }
            }
        }
    },
    "required": [
        "_id",
        "gene",
        "min",
        "max",
        "patients"
    ],
    "additionalProperties": true
}
```


## facs

```

{
    "properties": {
        "patient": {
            "type": "string"
        },
        "markers": {
            "type": "object",
            "patternProperties": {
                "^[A-Z]+[A-Z0-9]+": {
                    "type": [
                        "number",
                        "null"
                    ]
                }
            }
        }
    },
    "required": [
        "_id",
        "patient",
        "markers"
    ],
    "additionalProperties": true
}
```


## cnv

```

{
    "properties": {
        "gene": {
            "type": "string"
        },
        "min": {
            "type": [
                "number",
                "null"
            ],
            "maximum": 2,
            "minimum": -2
        },
        "max": {
            "type": [
                "number",
                "null"
            ],
            "maximum": 2,
            "minimum": -2
        },
        "patients": {
            "type": "object",
            "patternProperties": {
                "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}": {
                    "type": [
                        "number",
                        "null"
                    ]
                }
            },
            "minimum": -2,
            "maxmum": 2
        }
    },
    "required": [
        "_id",
        "gene",
        "min",
        "max",
        "patients"
    ],
    "additionalProperties": true
}
```


## annotation

```

{
    "properties": {
        "event": {
            "type": "string"
        },
        "Ensembl": {
            "type": "string"
        },
        "HGNC_symbol": {
            "type": "string"
        },
        "coding": {
            "type": "boolean"
        },
        "chr": {
            "type": [
                "string",
                "null"
            ]
        },
        "strand": {
            "type": [
                "string",
                "null"
            ]
        },
        "splicing_category": {
            "type": "string"
        },
        "location_in_gene": {
            "type": [
                "string",
                "null"
            ]
        },
        "start.1": {
            "type": [
                "number",
                "null"
            ]
        },
        "end.1": {
            "type": [
                "number",
                "null"
            ]
        },
        "end.2": {
            "type": [
                "number",
                "string",
                "null"
            ]
        },
        "start.2": {
            "type": [
                "string",
                "null"
            ]
        },
        "ss3.1": {
            "type": [
                "number",
                "null"
            ]
        },
        "ss5.1": {
            "type": [
                "number",
                "null"
            ]
        },
        "ss5.2": {
            "type": [
                "string",
                "null"
            ]
        },
        "ss3.2": {
            "type": [
                "string",
                "null"
            ]
        }
    },
    "required": [
        "_id",
        "event",
        "Ensembl",
        "HGNC_symbol",
        "coding",
        "chr",
        "strand",
        "splicing_category",
        "location_in_gene",
        "start.1",
        "end.1",
        "end.2",
        "start.2",
        "ss3.1",
        "ss5.1",
        "ss5.2",
        "ss3.2"
    ],
    "additionalProperties": true
}
```


## chromosome

```

{
    "properties": {
        "type": {
            "type": "string"
        },
        "scale": {
            "type": "number"
        },
        "process": {
            "type": "string"
        },
        "data": {
            "type": "object",
            "patternProperties": {
                "[A-Za-z0-9]+": {
                    "oneOf": [
                        {
                            "type": "number"
                        },
                        {
                            "type": "object",
                            "properties": {
                                "x": {
                                    "type": "number"
                                },
                                "p": {
                                    "type": "number"
                                },
                                "c": {
                                    "type": "number"
                                },
                                "q": {
                                    "type": "number"
                                }
                            },
                            "required": [
                                "x",
                                "p",
                                "c",
                                "q"
                            ]
                        }
                    ]
                }
            }
        }
    },
    "required": [
        "_id",
        "type",
        "data"
    ],
    "additionalProperties": true
}
```


## genes

```

{
    "properties": {
        "type": {
            "type": "string"
        },
        "scale": {
            "type": "number"
        },
        "dataset": {
            "type": "string"
        },
        "process": {
            "type": "object",
            "properties": {
                "type": {
                    "type": "array",
                    "items": {
                        "type": [
                            "string",
                            "null"
                        ]
                    }
                },
                "scale": {
                    "type": [
                        "number",
                        "null"
                    ]
                }
            }
        },
        "data": {
            "type": "object",
            "patternProperties": {
                "^[A-Z]+[A-Za-z0-9]+": {
                    "oneOf": [
                        {
                            "type": "array",
                            "items": {
                                "type": "string"
                            }
                        },
                        {
                            "type": "object",
                            "properties": {
                                "x": {
                                    "type": "number"
                                },
                                "y": {
                                    "type": "number"
                                }
                            },
                            "required": [
                                "x",
                                "y"
                            ]
                        }
                    ]
                }
            }
        }
    },
    "required": [
        "_id",
        "type",
        "data"
    ],
    "additionalProperties": true
}
```


## centromere

```

{
    "properties": {
        "dataset": {
            "type": "string"
        },
        "type": {
            "type": "string"
        },
        "process": {
            "type": "string"
        },
        "data": {
            "type": "object",
            "patternProperties": {
                "[A-Za-z0-9]+": {
                    "type": "number"
                }
            }
        }
    },
    "required": [
        "_id",
        "dataset",
        "type",
        "process",
        "data"
    ],
    "additionalProperties": true
}
```


## pcaScores

```

{
    "properties": {
        "disease": {
            "type": "string"
        },
        "source": {
            "type": "string"
        },
        "type": {
            "type": "string"
        },
        "geneset": {
            "type": "string"
        },
        "scale": {
            "type": [
                "number",
                "null"
            ]
        },
        "pc1": {
            "type": "number"
        },
        "pc2": {
            "type": "number"
        },
        "pc3": {
            "type": "number"
        },
        "data": {
            "type": "object",
            "patternProperties": {
                "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}": {
                    "oneOf": [
                        {
                            "type": "array",
                            "maxitem": 3,
                            "items": {
                                "type": "number"
                            }
                        },
                        {
                            "type": "object",
                            "properties": {
                                "x": {
                                    "type": "number"
                                },
                                "y": {
                                    "type": "number"
                                },
                                "z": {
                                    "type": "number"
                                }
                            },
                            "required": [
                                "x",
                                "y",
                                "z"
                            ]
                        }
                    ]
                }
            }
        }
    },
    "required": [
        "type",
        "disease",
        "source",
        "scale",
        "data"
    ],
    "additionalProperties": true
}
```


## pcaLoadings

```

{
    "properties": {
        "disease": {
            "type": "string"
        },
        "source": {
            "type": "string"
        },
        "type": {
            "type": "string"
        },
        "scale": {
            "type": [
                "number",
                "null"
            ]
        },
        "data": {
            "type": "object",
            "patternProperties": {
                "^[A-Z]+[A-Z0-9]+": {
                    "type": "array",
                    "maxitem": 3,
                    "items": {
                        "type": "number"
                    }
                }
            }
        }
    },
    "required": [
        "type",
        "disease",
        "source",
        "scale",
        "data"
    ],
    "additionalProperties": true
}
```


## mds

```

{
    "properties": {
        "type": {
            "type": "string"
        },
        "dataset": {
            "type": "string"
        },
        "name": {
            "type": "string"
        },
        "scale": {
            "type": [
                "number",
                "null"
            ]
        },
        "data": {
            "type": "object",
            "patternProperties": {
                "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}": {
                    "oneOf": [
                        {
                            "type": "array",
                            "maxitem": 2,
                            "items": {
                                "properties": {
                                    "x": {
                                        "type": "number"
                                    },
                                    "y": {
                                        "type": "number"
                                    }
                                },
                                "required": [
                                    "x",
                                    "y"
                                ]
                            }
                        },
                        {
                            "type": "object",
                            "properties": {
                                "x": {
                                    "type": "number"
                                },
                                "y": {
                                    "type": "number"
                                }
                            },
                            "required": [
                                "x",
                                "y"
                            ]
                        }
                    ]
                }
            }
        }
    },
    "required": [
        "type",
        "dataset",
        "name",
        "scale"
    ],
    "additionalProperties": true
}
```


## edges

```

{
    "properties": {
        "m": {
            "type": "string"
        },
        "g": {
            "type": "string",
            "pattern": "^[A-Z]+[A-Z0-9]+"
        },
        "p": {
            "type": "string",
            "pattern": "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}"
        }
    },
    "required": [
        "_id",
        "m",
        "g",
        "p"
    ],
    "additionalProperties": true
}
```


## ptDegree

```

{
    "type": "object",
    "patternProperties": {
        "TCGA-[A-Z0-9]{2}-[A-Z0-9]{4}-[0-9]{2}": {
            "type": "number"
        }
    },
    "maxProperties": 2,
    "minProperties": 2,
    "required": [
        "_id"
    ],
    "additionalProperties": true
}
```


## geneDegree

```

{
    "type": "object",
    "patternProperties": {
        "^[A-Z]+[A-Z0-9]+": {
            "type": "number"
        }
    },
    "maxProperties": 2,
    "minProperties": 2,
    "required": [
        "_id"
    ],
    "additionalProperties": true
}
```

