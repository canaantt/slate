
# Data Provenance

To fit into the Oncoscape Data Visualization model, we further processed the raw data described in <a href='#data-content'>Data Content</a>. This section is dedicated to endeavor to explain the data model and process. The two major processes include <a href='#cluster'>cluster</a> and <a href='#network'>network</a>.

## Cluster

The cluster collections are generated to fit into two tools 'Markers and Patients' and 'PCA' in Oncoscape. There are two schemas for clutster collections: Multidimensional Scaling (MDS) and Principal component analysis (PCA).

### MDS


**Input Data:**

- Thresholed Copy Number Variation (CNV)

- Binary Mutation indication (Mut01)


**Mechanism:**

CNV and Mut01 were combined and the distance matrix (similarity scores) were calculated to best represent the similarity of individual sample in the N-dimensional space.

### PCA


**Input Data:**

- <a href='#data-type7'>cnv_thd</a>

- <a href='#data-type7'>mut01</a>mut01


**Mechanism:**

cnv_thd and mut01 were combined and the distance matrix were calculated best represent the similarity of individual sample in the N-dimensional space.

### Collection Organization.

Methods | Genesets | Data Type
--------- | ----------- | -----------

## Network

The network collections are generated to fit to'Markers and Patients' in Oncoscape. There are three schemas for network collections: edges, patient weights and gene weights.

### edges

### patient weights

### gene weights
