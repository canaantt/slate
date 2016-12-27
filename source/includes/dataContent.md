
# Data Content

This section is dedicated to explain the raw data Oncoscape utilizes. The section <a href='#data-provenance'>Data Provenance</a> explains how the raw data has been processed to fit into our visualization model.

## Clinical Data

### Data Sources

Genomic Data Commons Data Portal (GDC) from National Institutes of Health (NIH) provides the compiled annotated clinical data.

<a target='_blank' href='https://gdc-portal.nci.nih.gov/legacy-archive/search/f?filters=%7B%22op%22:%22and%22,%22content%22:%5B%7B%22op%22:%22in%22,%22content%22:%7B%22field%22:%22cases.project.program.name%22,%22value%22:%5B%22TCGA%22%5D%7D%7D,%7B%22op%22:%22in%22,%22content%22:%7B%22field%22:%22files.data_category%22,%22value%22:%5B%22Clinical%22%5D%7D%7D,%7B%22op%22:%22in%22,%22content%22:%7B%22field%22:%22files.data_type%22,%22value%22:%5B%22Clinical%20Supplement%22,%22Clinical%20data%22%5D%7D%7D%5D%7D&pagination=%7B%22files%22:%7B%22from%22:0,%22size%22:20,%22sort%22:%22cases.project.project_id:asc%22%7D%7D'>GDC clinical data</a>

### Data Type

Clinical Collection Type | Annotation
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

Collection Class | Annotation
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

## Gene Set

Name | Description | Genes
--------- | --------- | ---------
<a target="_blank" href=https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2818769/>TCGA GBM Classifiers</a> | Gene expression-based molecular classification of GBM subtypes (Proneural, Neural, Classical, Mesenchymal) | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"TCGA GBM Classifiers","$fields":["genes"]}&apikey=password'>840</a>
<a target="_blank" href=>Glioma Markers</a> | Genes recurrently impacted in TCGA gliomas | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"Glioma Markers","$fields":["genes"]}&apikey=password'>545</a>
<a target="_blank" href=https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4320046/>TCGA Pancan Mutated</a> | Significantly mutated genes according to the TCGA PANCAN working group (syn1750331) identified by both MuSiC and MutSig | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"TCGA Pancan Mutated","$fields":["genes"]}&apikey=password'>73</a>
<a target="_blank" href=https://www.ncbi.nlm.nih.gov/pubmed/23539594/>Oncoplex Vogelstein</a> | Combined set from the Oncoplex gene panel and driver genes described in Vogelstein, Science 2013. | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"Oncoplex Vogelstein","$fields":["genes"]}&apikey=password'>274</a>
<a target="_blank" href=http://tests.labmed.washington.edu/UW-OncoPlex/>Oncoplex</a> | A sequencing panel that detects mutations in genes related to cancer treatment, prognosis, and diagnosis. | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"Oncoplex","$fields":["genes"]}&apikey=password'>263</a>
<a target="_blank" href=https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2575803/>OSCC Expression Markers</a> | Differentially expressed probe set comparing normal oral tissue to oral squamous cell carcinoma | <a target="_blank" href='https://dev.oncoscape.sttrcancer.io/api/lookup_genesets/?q={"name":"OSCC Expression Markers","$fields":["genes"]}&apikey=password'>109</a>
