
# Data Content

This section is dedicated to explain the raw data Oncoscape utilizes. The section <a href='#data-provenance'>Data Provenance</a> explains how the raw data has been processed to fit into our visualization model.

## Clinical Data

### Data Sources

Genomic Data Commons Data Portal (GDC) from National Institutes of Health (NIH) provides the compiled annotated clinical data.

<a target='_blank' href='https://gdc-portal.nci.nih.gov/legacy-archive/search/f?filters=%7B%22op%22:%22and%22,%22content%22:%5B%7B%22op%22:%22in%22,%22content%22:%7B%22field%22:%22cases.project.program.name%22,%22value%22:%5B%22TCGA%22%5D%7D%7D,%7B%22op%22:%22in%22,%22content%22:%7B%22field%22:%22files.data_category%22,%22value%22:%5B%22Clinical%22%5D%7D%7D,%7B%22op%22:%22in%22,%22content%22:%7B%22field%22:%22files.data_type%22,%22value%22:%5B%22Clinical%20Supplement%22,%22Clinical%20data%22%5D%7D%7D%5D%7D&pagination=%7B%22files%22:%7B%22from%22:0,%22size%22:20,%22sort%22:%22cases.project.project_id:asc%22%7D%7D'>GDC clinical data</a>

### Data Type

Type | Annotation
--------- | ----------- 
events | clinical events collection organized by patient
patient | patient collection for each disease type
drug | chemo or other medicine administration records
newtumor | new tumor event records for possible patients
othermalignancy | other maliganancy records for possible patients
radiation | radiation administration records
followup | possible follow-up records
newtumor-followup | possible follow-up records for the new tumor events
samplemap | sample-patient mapping collection

## Molecular Data

### Data Sources

UCSC Xena compiled annotated normalized molecular datasets of various platforms from multiple institutes. 

<a target='_blank' href='https://xenabrowser.net/datapages/?host=https://tcga.xenahubs.net'>UCSC xena hub</a>

<a target='_blank' href='https://github.com/ucscXena/ucsc-xena-server'>UCSC xena github</a>

### Data Type

Type | Annotation
--------- | ----------- 
expr | Expression data including mRNA and microRNA expression data and Reverse hase protein array (RPPA) data
mut | non-synonymous mutations representated as strings in this collection
mut01 | non-synonymous mutations representated as binary values in this collection
meth | DNA methlyation data
meth_thd | Thresholded DNA methlyation data
cnv | DNA copy-number data represented as Gistic score
cnv_thd | Thresholded DNA copy-number data represented as Gistic score

### Schema

Schema Type | Annotation
--------- | ----------- 
chr_sample | Collections of this schema have chromosomal location inhelper.formation as keys for each record, which is a list of values with samples as keys.
hugo_sample | Collections of this schema have chromosomal HUGO genes as keys for each record, which is a list of values with samples as keys.
sample_pos | Collections of this schema have samples as keys for each record, which is a list of position.
methoprobe_sample | Collections of this schema have methlyation probes as keys for each record, which is a list of values with samples as keys.

## Gene Sets

Name | Description | Genes
--------- | --------- | ---------
<a target="_blank" href=https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2818769/>TCGA GBM Classifiers</a> | Gene expression-based molecular classification of GBM subtypes (Proneural, Neural, Classical, Mesenchymal) | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"TCGA GBM Classifiers","$fields":["genes"]}&apikey=password'>840</a>
Glioma Markers | Genes recurrently impacted in TCGA gliomas | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"Glioma Markers","$fields":["genes"]}&apikey=password'>545</a>
<a target="_blank" href=https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4320046/>TCGA Pancan Mutated</a> | Significantly mutated genes according to the TCGA PANCAN working group (syn1750331) identified by both MuSiC and MutSig | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"TCGA Pancan Mutated","$fields":["genes"]}&apikey=password'>73</a>
<a target="_blank" href=https://www.ncbi.nlm.nih.gov/pubmed/23539594/>Oncoplex Vogelstein</a> | Combined set from the Oncoplex gene panel and driver genes described in Vogelstein, Science 2013. | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"Oncoplex Vogelstein","$fields":["genes"]}&apikey=password'>274</a>
<a target="_blank" href=http://tests.labmed.washington.edu/UW-OncoPlex/>Oncoplex</a> | A sequencing panel that detects mutations in genes related to cancer treatment, prognosis, and diagnosis. | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"Oncoplex","$fields":["genes"]}&apikey=password'>263</a>
<a target="_blank" href=https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2575803/>OSCC Expression Markers</a> | Differentially expressed probe set comparing normal oral tissue to oral squamous cell carcinoma | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"OSCC Expression Markers","$fields":["genes"]}&apikey=password'>109</a>
<a target="_blank" href=https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2667820/>Breast PAM50</a> | Gene expression based subtype predictor for subtypes luminal A, luminal B, HER2-enriched, and basal-like | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"Breast PAM50","$fields":["genes"]}&apikey=password'>50</a>
<a target="_blank" href=https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1468408/>Breast Tumor Intrinsic Classifier</a> | Meta analysis of available breast cancer gene expression datasets grouping LumA, LumB, Basal-like, HER2+/ER-, and Normal Breast-like tumor subtypes  | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"Breast Tumor Intrinsic Classifier","$fields":["genes"]}&apikey=password'>1232</a>
<a target="_blank" href=http://foundationone.com/docs/FoundationOne%20Heme/F1H_TechSpecs_v02-05_sph.pdf?__hstc=197910000.7e60b86e037292aa06aca25d0c93dfbb.1489670793555.1490378142028.1491933771152.4&__hssc=197910000.1.1491933771152&__hsfp=1612135321>FoundationOne Heme</a> | FoundationOne® Heme is designed to analyze and interpret sequence information for somatically altered genes in human hematologic malignancies (leukemias, lymphomas, and myelomas), and sarcomas. Genes included in this assay encode known or likely targets of therapies, either approved or in clinical trials, or otherwise known drivers of oncogenesis. | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"FoundationOne Heme","$fields":["genes"]}&apikey=password'>593</a>
<a target="_blank" href=http://www.nature.com/ng/journal/v42/n8/full/ng.619.html>TCGA Sarcoma alterations</a> | Frequently mutated genes in soft-tissue sarcoma subtypes | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"TCGA Sarcoma alterations","$fields":["genes"]}&apikey=password'>21</a>
<a target="_blank" href=https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4526352>Leiomyosarcoma molecular subtypes</a> | Three molecular subtypes of leiomyosarcoma were confirmed in 2 publically available datasets. Subtype I LMS is associated with good outcome in extrauterine LMS while subtype II LMS is associated with poor prognosis in both uterine and extrauterine LMS. A subset of the biomarkers are used here based on the genes mentioned in the publication. | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"Leiomyosarcoma molecular subtypes","$fields":["genes"]}&apikey=password'>13</a>
Sarcoma markers | Compiled from multiple publications on different sarcoma subtypes | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"Sarcoma markers","$fields":["genes"]}&apikey=password'>48</a>
Sarcoma markers Heme | Compiled from multiple publications on different sarcoma subtypes & intersected with FoundationOne Heme | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"Sarcoma markers Heme","$fields":["genes"]}&apikey=password'>24</a>
Sarcoma markers Oncoplex | Compiled from multiple publications on different sarcoma subtypes & intersected with Oncoplex | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"Sarcoma markers Oncoplex","$fields":["genes"]}&apikey=password'>19</a>
<a target="_blank" href=https://www.nature.com/nm/journal/v16/n7/full/nm.2174.html>Sarcoma CINSARC</a> | Performed genomic and expression profiling in a training set of 183 sarcomas and established a prognostic gene expression signature, complexity index in sarcomas (CINSARC), composed of 67 genes related to mitosis and chromosome management | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"Sarcoma CINSARC","$fields":["genes"]}&apikey=password'>67</a>
