
# Data Content

## General Information

The input data for each disease compose both clinical and molecular collection types. This section is dedicated to explain the data sources and data types for the input data.

### Data Source

### Data Type

### Genesets Details

Key | description | number of genes
--------- | --------- | ---------
TCGA_GBM_classifiers | <a target="_blank" href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2818769/'>TCGA_GBM_classifiers</a> | <a href="#TCGA_GBM_classifiers" onclick="genesetDisplay">840</a>
Marker_genes_545 | The 545-gene set is all the genes that are recurrently impacted in TCGA gliomas. | <a href="#Marker_genes_545" onclick="genesetDisplay">545</a>
TCGA_pancan_mutated | all the genes recurrently mutated across all TCGA cancers (note that it may not be up to date for all the TCGA samples currently available | <a href="#TCGA_pancan_mutated" onclick="genesetDisplay">64</a>
oncoVogel274 | The OncoVogel274 gene set comes from combining (an old version of Oncoplex) with genes from this (famous) paper by <a target="_blank" href='https://www.ncbi.nlm.nih.gov/pubmed/23539594/'>Vogelstein</a> | <a href="#oncoVogel274" onclick="genesetDisplay">274</a>
Oncoplex | <a target="_blank" href='http://tests.labmed.washington.edu/UW-OncoPlex/'>UW Oncoplex Cancer Panel</a> | <a href="#Oncoplex" onclick="genesetDisplay">263</a>
OSCC_Chen_131_probes | <a target="_blank" href='https://www.ncbi.nlm.nih.gov/pubmed/18669583/'>OSCC_Chen_131_probes</a> | <a href="#OSCC_Chen_131_probes" onclick="genesetDisplay">109</a>
OSCC_Chen_9_genes | <a target="_blank" href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4527746//'>OSCC_Chen_9_genes</a> | <a href="#OSCC_Chen_9_genes" onclick="genesetDisplay">9</a>

## Data Content in Disease

This section is dedicated to explain the raw data Oncoscape utilizes. The section <a href='#data-provenance'>Data Provenance</a> explains how the raw data have been processed to fit into our visualization model.

## Raw Data

### Clinical Data

- Data Sources

- Data Type

### Molecular Data

- Data Sources

- Data Type

### Gene Set

Key | description | number of genes
--------- | --------- | ---------
TCGA_GBM_classifiers | <a target="_blank" href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2818769/'>TCGA_GBM_classifiers</a> | <a href="#TCGA_GBM_classifiers" onclick="genesetDisplay">840</a>
Marker_genes_545 | The 545-gene set is all the genes that are recurrently impacted in TCGA gliomas. | <a href="#Marker_genes_545" onclick="genesetDisplay">545</a>
TCGA_pancan_mutated | all the genes recurrently mutated across all TCGA cancers (note that it may not be up to date for all the TCGA samples currently available | <a href="#TCGA_pancan_mutated" onclick="genesetDisplay">64</a>
oncoVogel274 | The OncoVogel274 gene set comes from combining (an old version of Oncoplex) with genes from this (famous) paper by <a target="_blank" href='https://www.ncbi.nlm.nih.gov/pubmed/23539594/'>Vogelstein</a> | <a href="#oncoVogel274" onclick="genesetDisplay">274</a>
Oncoplex | <a target="_blank" href='http://tests.labmed.washington.edu/UW-OncoPlex/'>UW Oncoplex Cancer Panel</a> | <a href="#Oncoplex" onclick="genesetDisplay">263</a>
OSCC_Chen_131_probes | <a target="_blank" href='https://www.ncbi.nlm.nih.gov/pubmed/18669583/'>OSCC_Chen_131_probes</a> | <a href="#OSCC_Chen_131_probes" onclick="genesetDisplay">109</a>
OSCC_Chen_9_genes | <a target="_blank" href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4527746//'>OSCC_Chen_9_genes</a> | <a href="#OSCC_Chen_9_genes" onclick="genesetDisplay">9</a>

## Disease-Specific Raw Collections


**ACC - Adrenocortical carcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad curated) | molecular | ucsc xena
somatic gene-level non-silent mutation (bcm curated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad curated) | molecular | ucsc xena
somatic gene-level non-silent mutation (bcm automated) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcm curated) | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
copy number | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcm automated) | molecular | ucsc xena


**BLCA - Bladder Urothelial Carcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
followup | clinical | TCGA
patient | clinical | TCGA
drug | clinical | TCGA
radiation | clinical | TCGA
newtumor | clinical | TCGA
newtumor-followup | clinical | TCGA
othermalignancy | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
miRNA isoform expression (IlluminaGA) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad automated) | molecular | ucsc xena
protein expression RPPA (RBN) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad curated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad curated) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
somatic gene-level non-silent mutation (pancan awg) | molecular | ucsc xena
somatic gene-level non-silent mutation (bcgsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcgsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad automated) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
copy number | molecular | ucsc xena


**BRAIN - Lower Grade Glioma & Glioblastoma multiforme**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
events | clinical | TCGA
patient | clinical | TCGA
followUp-v1p0 | clinical | TCGA
drug | clinical | TCGA
newTumor | clinical | TCGA
otherMalignancy-v4p0 | clinical | TCGA
radiation | clinical | TCGA
followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA


**BRCA - Breast invasive carcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
events | clinical | TCGA
followup | clinical | TCGA
drug | clinical | TCGA
radiation | clinical | TCGA
newtumor | clinical | TCGA
newtumor-followup | clinical | TCGA
othermalignancy | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
miRNA isoform expression (IlluminaGA) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (wustl) | molecular | ucsc xena
protein expression RPPA (RBN) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
somatic gene-level non-silent mutation (wustl curated) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic gene-level non-silent mutation (wustl) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (wustl curated) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
somatic gene-level non-silent mutation (pancan awg) | molecular | ucsc xena
DNA methylation (Methylation27k) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
gene expression (AgilentG4502A_07_3) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
copy number | molecular | ucsc xena


**CESC - Cervical squamous cell carcinoma and endocervical adenocarcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
followup | clinical | TCGA
drug | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA


**CHOL - Cholangiocarcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad automated) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
somatic gene-level non-silent mutation (bcm automated) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (ucsc automated) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
somatic gene-level non-silent mutation (bcgsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcgsc automated) | molecular | ucsc xena
somatic gene-level non-silent mutation (ucsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad automated) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
copy number | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcm automated) | molecular | ucsc xena


**COAD - Colon adenocarcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
patient | clinical | TCGA
drug | clinical | TCGA
radiation | clinical | TCGA
followup | clinical | TCGA
newtumor | clinical | TCGA
newtumor-followup | clinical | TCGA
othermalignancy | clinical | TCGA


**COADREAD - Colon adenocarcinoma & Rectum adenocarcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
events | clinical | TCGA
samplemap | clinical | TCGA
copy number (gistic2) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
protein expression RPPA (RBN) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
somatic gene-level non-silent mutation (pancan awg) | molecular | ucsc xena
DNA methylation (Methylation27k) | molecular | ucsc xena
gene expression (AgilentG4502A_07_3) | molecular | ucsc xena


**DLBC - Lymphoid Neoplasm Diffuse Large B-cell Lymphoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA


**ESCA - Esophageal carcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA


**FPPP - Formalin Fixed Paraffin-Embedded Pilot Phase II**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
Phenotypes | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena


**GBM - Glioblastoma multiforme**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
events | clinical | TCGA
samplemap | clinical | TCGA
patient | clinical | TCGA
drug | clinical | TCGA
radiation | clinical | TCGA
followup | clinical | TCGA
newtumor | clinical | TCGA
newtumor-followup | clinical | TCGA
othermalignancy | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad) | molecular | ucsc xena
protein expression RPPA (RBN) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
gene expression (AffyU133a) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
gene expression (AgilentG4502A_07_1) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (ucsc automated) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
somatic gene-level non-silent mutation (pancan awg) | molecular | ucsc xena
somatic gene-level non-silent mutation (ucsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad) | molecular | ucsc xena
DNA methylation (Methylation27k) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
gene expression (AgilentG4502A_07_2) | molecular | ucsc xena
copy number | molecular | ucsc xena


**HG19 - Genome Platform**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 


**HNSC - Head and Neck squamous cell carcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
events | clinical | TCGA
samplemap | clinical | TCGA
followup | clinical | TCGA
patient | clinical | TCGA
drug | clinical | TCGA
radiation | clinical | TCGA
newtumor | clinical | TCGA
newtumor-followup | clinical | TCGA
othermalignancy | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
miRNA isoform expression (IlluminaGA) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
protein expression RPPA (RBN) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad curated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad curated) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
somatic gene-level non-silent mutation (pancan awg) | molecular | ucsc xena
somatic gene-level non-silent mutation (bcgsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcgsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad automated) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
copy number | molecular | ucsc xena


**KICH - Kidney Chromophobe**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA


**KIRC - Kidney renal clear cell carcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA


**KIRP - Kidney renal papillary cell carcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA
Phenotypes | molecular | ucsc xena
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
miRNA isoform expression (IlluminaGA) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad automated) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad curated) | molecular | ucsc xena
somatic gene-level non-silent mutation (bcm curated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad curated) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcm curated) | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (ucsc automated) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
somatic gene-level non-silent mutation (pancan awg) | molecular | ucsc xena
somatic gene-level non-silent mutation (ucsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad automated) | molecular | ucsc xena
DNA methylation (Methylation27k) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
gene expression (AgilentG4502A_07_3) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
copy number | molecular | ucsc xena


**LAML - Acute Myeloid Leukemia**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
patient | clinical | TCGA
copy number (gistic2) | molecular | ucsc xena
miRNA isoform expression (IlluminaGA) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (wustl) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaGA) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaGA) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic gene-level non-silent mutation (wustl) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
somatic gene-level non-silent mutation (pancan awg) | molecular | ucsc xena
DNA methylation (Methylation27k) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
copy number | molecular | ucsc xena


**LGG - Brain Lower Grade Glioma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
events | clinical | TCGA
samplemap | clinical | TCGA
patient | clinical | TCGA
drug | clinical | TCGA
radiation | clinical | TCGA
followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad curated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad curated) | molecular | ucsc xena
somatic gene-level non-silent mutation (bcm automated) | molecular | ucsc xena
DNA Methylation (MethylMix) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (ucsc automated) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
somatic gene-level non-silent mutation (pancan awg) | molecular | ucsc xena
somatic gene-level non-silent mutation (ucsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad automated) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
gene expression (AgilentG4502A_07_3) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
copy number | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcm automated) | molecular | ucsc xena


**LIHC - Liver hepatocellular carcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad automated) | molecular | ucsc xena
somatic gene-level non-silent mutation (bcm automated) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (ucsc automated) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
somatic gene-level non-silent mutation (bcgsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcgsc automated) | molecular | ucsc xena
somatic gene-level non-silent mutation (ucsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad automated) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
copy number | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcm automated) | molecular | ucsc xena


**LUAD - Lung adenocarcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
events | clinical | TCGA
samplemap | clinical | TCGA
patient | clinical | TCGA
drug | clinical | TCGA
radiation | clinical | TCGA
followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
miRNA isoform expression (IlluminaGA) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad automated) | molecular | ucsc xena
protein expression RPPA (RBN) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad curated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad curated) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
somatic gene-level non-silent mutation (pancan awg) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad automated) | molecular | ucsc xena
DNA methylation (Methylation27k) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
gene expression (AgilentG4502A_07_3) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
copy number | molecular | ucsc xena


**LUNG - Lung adenocarcinoma & Lung squamous cell carcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
events | clinical | TCGA
samplemap | clinical | TCGA
copy number (gistic2) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
protein expression RPPA (RBN) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
somatic gene-level non-silent mutation (pancan awg) | molecular | ucsc xena
DNA methylation (Methylation27k) | molecular | ucsc xena
gene expression (AgilentG4502A_07_3) | molecular | ucsc xena


**LUSC - Lung squamous cell carcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
events | clinical | TCGA
samplemap | clinical | TCGA
patient | clinical | TCGA
drug | clinical | TCGA
radiation | clinical | TCGA
followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
miRNA isoform expression (IlluminaGA) | molecular | ucsc xena


**MESO - Mesothelioma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA


**OV - Ovarian serous cystadenocarcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA


**PAAD - Pancreatic adenocarcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
patient | clinical | TCGA
drug | clinical | TCGA
radiation | clinical | TCGA
followup | clinical | TCGA
newtumor | clinical | TCGA
newtumor-followup | clinical | TCGA
othermalignancy | clinical | TCGA


**PANCAN - undefined**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
gene-level copy number (gistic2) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (wustl) | molecular | ucsc xena
Paradigm IPLs (Five3 Genomics) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
somatic gene-level non-silent mutation (bcm) | molecular | ucsc xena
gene expression | molecular | ucsc xena
somatic gene-level non-silent mutation (wustl) | molecular | ucsc xena
somatic gene-level non-silent mutation (pancan awg 19 cohorts) | molecular | ucsc xena
somatic gene-level non-silent mutation (bcgsc) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcgsc) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcm) | molecular | ucsc xena


**PCPG - Pheochromocytoma and Paraganglioma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA


**PRAD - Prostate adenocarcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
patient | clinical | TCGA
drug | clinical | TCGA
radiation | clinical | TCGA
followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad automated) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad curated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad curated) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
somatic gene-level non-silent mutation (bcm automated) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
somatic gene-level non-silent mutation (pancan awg) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad automated) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
copy number | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcm automated) | molecular | ucsc xena


**READ - Rectum adenocarcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
miRNA isoform expression (IlluminaGA) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
protein expression RPPA (RBN) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
somatic gene-level non-silent mutation (bcm SOLiD) | molecular | ucsc xena
somatic gene-level non-silent mutation (bcm) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaGA) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcm SOLiD) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
DNA methylation (Methylation27k) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
gene expression (AgilentG4502A_07_3) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaGA) | molecular | ucsc xena
copy number | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcm) | molecular | ucsc xena


**SARC - Sarcoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
patient | clinical | TCGA
drug | clinical | TCGA
radiation | clinical | TCGA
followup | clinical | TCGA
newtumor | clinical | TCGA
newtumor-followup | clinical | TCGA
othermalignancy | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad automated) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (ucsc automated) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
somatic gene-level non-silent mutation (bcgsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcgsc automated) | molecular | ucsc xena
somatic gene-level non-silent mutation (ucsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad automated) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
copy number | molecular | ucsc xena


**SKCM - Skin Cutaneous Melanoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad automated) | molecular | ucsc xena
somatic gene-level non-silent mutation (bcm automated) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
somatic gene-level non-silent mutation (pancan awg) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad automated) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
copy number | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcm automated) | molecular | ucsc xena


**STAD - Stomach adenocarcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
miRNA isoform expression (IlluminaGA) | molecular | ucsc xena
exon expression RNAseq (IlluminaHiseq BC) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq UNC) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad automated) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiseq BC) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad curated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad curated) | molecular | ucsc xena
somatic gene-level non-silent mutation (bcm automated) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaGA BC) | molecular | ucsc xena
exon expression RNAseq (IlluminaGA BC) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena


**TGCT - Testicular Germ Cell Tumors**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA


**THCA - Thyroid carcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
followup | clinical | TCGA
drug | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA


**THYM - Thymoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA


**UCEC - Uterine Corpus Endometrial Carcinoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
followup | clinical | TCGA
drug | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA


**UCS - Uterine Carcinosarcoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad automated) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad curated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad curated) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
somatic gene-level non-silent mutation (bcm automated) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
somatic gene-level non-silent mutation (bcgsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcgsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad automated) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
copy number | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcm automated) | molecular | ucsc xena


**UVM - Uveal Melanoma**

Data Type | Collection Type | Data Source 
--------- | ----------- | ----------- 
samplemap | clinical | TCGA
drug | clinical | TCGA
followup | clinical | TCGA
newtumor-followup | clinical | TCGA
newtumor | clinical | TCGA
othermalignancy | clinical | TCGA
patient | clinical | TCGA
radiation | clinical | TCGA
protein expression RPPA | molecular | ucsc xena
copy number (gistic2) | molecular | ucsc xena
exon expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad automated) | molecular | ucsc xena
somatic gene-level non-silent mutation (broad curated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad curated) | molecular | ucsc xena
somatic gene-level non-silent mutation (bcm automated) | molecular | ucsc xena
gene expression RNAseq (ployA+ IlluminaHiSeq pancan normalized) | molecular | ucsc xena
DNA methylation (Methylation450k) | molecular | ucsc xena
copy number (delete germline cnv) | molecular | ucsc xena
copy number segments (delete germline cnv) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (ucsc automated) | molecular | ucsc xena
Phenotypes | molecular | ucsc xena
copy number (gistic2_thresholded) | molecular | ucsc xena
copy number segments | molecular | ucsc xena
somatic gene-level non-silent mutation (bcgsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcgsc automated) | molecular | ucsc xena
somatic gene-level non-silent mutation (ucsc automated) | molecular | ucsc xena
somatic mutation SNPs and small INDELs (broad automated) | molecular | ucsc xena
gene expression RNAseq (polyA+ IlluminaHiSeq percentile) | molecular | ucsc xena
miRNA isoform expression (IlluminaHiseq) | molecular | ucsc xena
copy number | molecular | ucsc xena
somatic mutation SNPs and small INDELs (bcm automated) | molecular | ucsc xena
