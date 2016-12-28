
# Data Provenance

To fit into the Oncoscape Data Visualization model, we further processed the raw data described in <a href='#data-content'>Data Content</a>. This section is dedicated to explain the data model and process. The two major processes include <a href='#cluster'>cluster</a> and <a href='#network'>network</a>.

## Cluster

The cluster collections are generated to fit into two tools 'Markers and Patients' and 'PCA' in Oncoscape. There are two Schemas for clutster collections: Multidimensional Scaling (MDS) and Principal component analysis (PCA).

### MDS


**Input Data:**

- <a href='#data-type7'>cnv_thd</a>

- <a href='#data-type7'>mut01</a>


**Mechanism:**

cnv_thd and mut01 were combined and the distance matrix were calculated best represent the similarity of individual sample in the N-dimensional space.


**Schema:**

### PCA


**Input Data:**

- <a href='#data-type7'>expr</a> including RNA and Protein

- <a href='#data-type7'>cnv</a>


**Mechanism:**

The collection of each class will be processed respectively that distance matrices were generated to best represent the similarity of individual sample in the N-dimensional space.


**Schema:**

### Collection Organization

The naming convention of the derived collections includes the information from method, geneset as well as data class listed below.

Methods | Genesets | Data Class
--------- | ----------- | -----------
PCA | All Genes | RNA
MDS | TCGA Pancan Mutated | Protein
    | Oncoplex | CNV/Mut01
    | Glioma Markers | Mut01
    | Oncoplex Vogelstein | CNV
    | TCGA GBM Classifiers |    

## Network

The network collections are generated to fit to'Markers and Patients' in Oncoscape. There are three Schemas for network collections: edges, patient weights and gene weights.

### Edges

Edges contain the information to define the edges connecting one patient sample with one gene. For each record the value may be integer between -2 to +2. If one gene in one patient sample has copy number variation, this information will be represented as -2 (deletion), or -1 (loss), or +1 (gain), or +2 (amplificaiton). If this gene on this patient sample doesn't have copy number variation but point mutation, this information will be represented as '0'. Otherwise, no record will be shown. 

### Patient degrees

For a certain dataset, patient degrees record the number of altered genes (copy number variation and point mutation) for each patient.

### Gene degrees

For a certain dataset, gene degrees record the number of patients who have this gene altered (either caused by copy number varation or point mutation).
