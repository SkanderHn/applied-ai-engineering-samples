Repository Structure 
-------------

```
.
├── agents
  └── __init__.py
  └── core.py
  └── BuildSQLAgent.py
  └── DebugSQLAgent.py
  └── DescriptionAgent.py
  └── EmbedderAgent.py
  └── ResponseAgent.py
  └── ValidateSQLAgent.py
  └── VisualizeAgent.py
└── Dockerfile
└── backend-apis
  └── __init__.py
  └── policy.yaml
  └── main.py
└── dbconnectors
  └── __init__.py
  └── core.py
  └── PgConnector.py
  └── BQConnector.py
└── docs
  └── best_practices.md
  └── faq.md
  └── repo_structure.md
└── embeddings
  └── __init__.py
  └── retrieve_embeddings.py
  └── store_embeddings.py
  └── kgq_embeddings.py
└── frontend
└── notebooks
  └── (standalone)Run_OpenDataQnA.ipynb
  └── 0_CopyDataToBigQuery.ipynb
  └── 0_CopyDataToCloudSqlPG.ipynb
  └── 1_Setup_OpenDataQnA.ipynb
  └── 2_Run_OpenDataQnA.ipynb
  └── 3_LoadKnownGoodSQL.ipynb
└── scripts
  └── ...
└── utilities
  └── __init__.py
└── pyproject.toml
└── config.ini
└── env_setup.py
└── opendataqna.py
```

- [`/agents`](/agents): Source code for the LLM Agents.  
- [`/backend-apis`](/backend-apis/) : Cloud Run based api deployement for frontend to demo the solution on a UI
- [`/dbconnectors`](/dbconnectors): Source code for database connectors.
- [`/docs`](/docs): Documentations, including FAQ & Best Practices for using this library. 
- [`/embeddings`](/embeddings): Source code for creating and storing embeddings.
  - [`/retrieve_embeddings.py`](/embeddings/retrieve_embeddings.py): Source code for retrieving table schema and embedding creation. 
  - [`/store_embeddings.py`](/embeddings/store_embeddings.py): Source code for storing table schema embeddings in Vector Store.
  - [`/kgq_embeddings.py`](/embeddings/kgq_embeddings.py): Source code for loading good sqls and creating embeddings in the Vector Store) 
- [`/frontend`](/frontend) : Angular based frontend code to deploy demo app using the API developed with [`/main.py`](backend-apis/main.py)
- [`/notebooks`](/notebooks): Sample notebooks demonstrating the usage of this library.  
- [`/scripts`](/scripts): Additional scripts for initial setup.
  - [`/bq_to_pg.py`](/scripts/bq_to_pg.py): Source code for exporting BigQuery tables to PostgreSQL on Google Cloud SQL. 
  - [`/copy_select_table_column_bigquery.py`](/scripts/copy_select_table_column_bigquery.py): Code Sample to copy select tables and columns from one BQ table to another; add table and column descriptions from csv file.
  - [`/tables_columns_descriptions.csv`](/scripts/tables_columns_descriptions.csv): CSV file containing table and column names and descriptions to be copied 
  - [`/known_good_sql.csv`](/scripts/known_good_sql.csv): CSV files
- [`/Dockerfile`](/Dockerfile): Dockerfile for deployment of backend apis. It is placed at the root folder to give it right context and access to the files.
- [`/env_setup.py`](/env_setup.py): Python file for initial setup. 
- [`/opendataqna.py`](/opendataqna.py): Python file for running the main pipeline. 
