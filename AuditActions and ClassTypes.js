    // MSSQL Audit Action Ids
    var auditActionIds = {
        "ACDO": "DATABASE_OBJECT_ACCESS_GROUP",
        "ACO": "SCHEMA_OBJECT_ACCESS_GROUP",
        "ADBO": "BULK ADMIN",
        "ADDP": "DATABASE_ROLE_MEMBER_CHANGE_GROUP",
        "ADSC": "ADD SENSITIVITY CLASSIFICATION",
        "ADSP": "SERVER_ROLE_MEMBER_CHANGE_GROUP",
        "AL": "ALTER",
        "ALCN": "ALTER CONNECTION",
        "ALRS": "ALTER RESOURCES",
        "ALSS": "ALTER SERVER STATE",
        "ALST": "ALTER SETTINGS",
        "ALTR": "ALTER TRACE",
        "APRL": "ADD MEMBER",
        "AS": "ACCESS",
        "AUSC": "AUDIT SESSION CHANGED",
        "AUSF": "AUDIT SHUTDOWN ON FAILURE",
        "AUTH": "AUTHENTICATE",
        "BA": "BACKUP",
        "BAL ": "BACKUP LOG",
        "BCM ": "BATCH COMPLETED",
        "BCMG": "BATCH_COMPLETED_GROUP",
        "BRDB": "BACKUP_RESTORE_GROUP",
        "BST ": "BATCH STARTED",
        "BSTG": "BATCH_STARTED_GROUP",
        "C2OF": "TRACE AUDIT C2OFF",
        "C2ON": "TRACE AUDIT C2ON",
        "CCLG": "CHANGE LOGIN CREDENTIAL",
        "CMLG": "CREDENTIAL MAP TO LOGIN",
        "CNAU": "AUDIT_CHANGE_GROUP",
        "CO": "CONNECT",
        "CP": "CHECKPOINT",
        "CR": "CREATE",
        "D ": "DENY",
        "DABO": "DATABASE BULK ADMIN",
        "DAGF": "FAILED_DATABASE_AUTHENTICATION_GROUP",
        "DAGL": "DATABASE_LOGOUT_GROUP",
        "DAGS": "SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP",
        "DBAF": "DATABASE AUTHENTICATION FAILED",
        "DBAS": "DATABASE AUTHENTICATION SUCCEEDED",
        "DBCC": "DBCC",
        "DBCG": "DBCC_GROUP",
        "DBL ": "DATABASE LOGOUT",
        "DL": "DELETE",
        "DPRL": "DROP MEMBER",
        "DR": "DROP",
        "DRSC": "DROP SENSITIVITY CLASSIFICATION",
        "DWC ": "DENY WITH CASCADE",
        "EX": "EXECUTE",
        "FT": "FULLTEXT",
        "FTG ": "FULLTEXT_GROUP",
        "G ": "GRANT",
        "GRDB": "DATABASE_PERMISSION_CHANGE_GROUP",
        "GRDO": "DATABASE_OBJECT_PERMISSION_CHANGE_GROUP",
        "GRO ": "SCHEMA_OBJECT_PERMISSION_CHANGE_GROUP",
        "GRSO": "SERVER_OBJECT_PERMISSION_CHANGE_GROUP",
        "GRSV": "SERVER_PERMISSION_CHANGE_GROUP",
        "GWG ": "GRANT WITH GRANT",
        "IMDP": "DATABASE_PRINCIPAL_IMPERSONATION_GROUP",
        "IMP ": "IMPERSONATE",
        "IMSP": "SERVER_PRINCIPAL_IMPERSONATION_GROUP",
        "IN": "INSERT",
        "LGB ": "BROKER LOGIN",
        "LGBG": "BROKER_LOGIN_GROUP",
        "LGDA": "DISABLE",
        "LGDB": "CHANGE DEFAULT DATABASE",
        "LGEA": "ENABLE",
        "LGFL": "FAILED_LOGIN_GROUP",
        "LGG ": "GLOBAL TRANSACTIONS LOGIN",
        "LGGG": "GLOBAL_TRANSACTIONS_LOGIN_GROUP",
        "LGIF": "LOGIN FAILED",
        "LGIS": "LOGIN SUCCEEDED",
        "LGLG": "CHANGE DEFAULT LANGUAGE",
        "LGM ": "DATABASE MIRRORING LOGIN",
        "LGMG": "DATABASE_MIRRORING_LOGIN_GROUP",
        "LGNM": "NAME CHANGE",
        "LGO ": "LOGOUT",
        "LGS ": "STORAGE LOGIN",
        "LGSD": "SUCCESSFUL_LOGIN_GROUP",
        "LGSG": "STORAGE_LOGIN_GROUP",
        "LO": "LOGOUT_GROUP",
        "MNDB": "DATABASE_CHANGE_GROUP",
        "MNDO": "DATABASE_OBJECT_CHANGE_GROUP",
        "MNDP": "DATABASE_PRINCIPAL_CHANGE_GROUP",
        "MNO ": "SCHEMA_OBJECT_CHANGE_GROUP",
        "MNSO": "SERVER_OBJECT_CHANGE_GROUP",
        "MNSP": "SERVER_PRINCIPAL_CHANGE_GROUP",
        "NMLG": "NO CREDENTIAL MAP TO LOGIN",
        "OP": "OPEN",
        "OPDB": "DATABASE_OPERATION_GROUP",
        "OPSV": "SERVER_OPERATION_GROUP",
        "PWAR": "APPLICATION_ROLE_CHANGE_PASSWORD_GROUP",
        "PWC ": "CHANGE PASSWORD",
        "PWCG": "LOGIN_CHANGE_PASSWORD_GROUP",
        "PWCS": "CHANGE OWN PASSWORD",
        "PWEX": "PASSWORD EXPIRATION",
        "PWMC": "MUST CHANGE PASSWORD",
        "PWPL": "PASSWORD POLICY",
        "PWR ": "RESET PASSWORD",
        "PWRS": "RESET OWN PASSWORD",
        "PWU ": "UNLOCK ACCOUNT",
        "R ": "REVOKE",
        "RC": "RECEIVE",
        "RCM ": "RPC COMPLETED",
        "RF": "REFERENCES",
        "RS": "RESTORE",
        "RST ": "RPC STARTED",
        "RWC ": "REVOKE WITH CASCADE",
        "RWG ": "REVOKE WITH GRANT",
        "SCCG": "SENSITIVITY_CLASSIFICATION_CHANGE_GROUP",
        "SL": "SELECT",
        "SN": "SEND",
        "SPLN": "SHOW PLAN",
        "STSV": "SERVER_STATE_CHANGE_GROUP",
        "SUQN": "SUBSCRIBE QUERY NOTIFICATION",
        "SVCN": "SERVER CONTINUE",
        "SVPD": "SERVER PAUSED",
        "SVSD": "SERVER SHUTDOWN",
        "SVSR": "SERVER STARTED",
        "TASA": "TRACE AUDIT START",
        "TASP": "TRACE AUDIT STOP",
        "TO": "TAKE OWNERSHIP",
        "TODB": "DATABASE_OWNERSHIP_CHANGE_GROUP",
        "TODO": "DATABASE_OBJECT_OWNERSHIP_CHANGE_GROUP",
        "TOO ": "SCHEMA_OBJECT_OWNERSHIP_CHANGE_GROUP",
        "TOSO": "SERVER_OBJECT_OWNERSHIP_CHANGE_GROUP",
        "TRBC": "TRANSACTION BEGIN COMPLETED",
        "TRBS": "TRANSACTION BEGIN STARTING",
        "TRCC": "TRANSACTION COMMIT COMPLETED",
        "TRCG": "TRACE_CHANGE_GROUP",
        "TRCS": "TRANSACTION COMMIT STARTING",
        "TRGC": "TRANSACTION PROPAGATE COMPLETED",
        "TRGS": "TRANSACTION PROPAGATE STARTING",
        "TRO ": "TRANSFER",
        "TRPC": "TRANSACTION PROMOTE COMPLETED",
        "TRPS": "TRANSACTION PROMOTE STARTING",
        "TRRC": "TRANSACTION ROLLBACK COMPLETED",
        "TRRS": "TRANSACTION ROLLBACK STARTING",
        "TRSC": "TRANSACTION SAVEPOINT COMPLETED",
        "TRSS": "TRANSACTION SAVEPOINT STARTING",
        "TX": "TRANSACTION_GROUP",
        "TXBG": "TRANSACTION BEGIN",
        "TXCG": "TRANSACTION_COMMIT_GROUP",
        "TXCM": "TRANSACTION COMMIT",
        "TXGG": "TRANSACTION_BEGIN_GROUP",
        "TXRB": "TRANSACTION ROLLBACK",
        "TXRG": "TRANSACTION_ROLLBACK_GROUP",
        "UCGP": "USER_CHANGE_PASSWORD_GROUP",
        "UDAG": "USER_DEFINED_AUDIT_GROUP",
        "UDAU": "USER DEFINED AUDIT",
        "UNDG": "STATEMENT_ROLLBACK_GROUP",
        "UNDO": "STATEMENT ROLLBACK",
        "UP": "UPDATE",
        "USAF": "CHANGE USERS LOGIN AUTO",
        "USLG": "CHANGE USERS LOGIN",
        "USTC": "COPY PASSWORD",
        "VDST": "VIEW DATABASE STATE",
        "VSST": "VIEW SERVER STATE",
        "VW": "VIEW",
        "VWCT": "VIEW CHANGETRACKING",
        "XA": "EXTERNAL ACCESS ASSEMBLY",
        "XU": "UNSAFE ASSEMBLY",
    };

    // Class types
    var classTypes = {
        "A": "SERVER AUDIT",
        "AF": "AGGREGATE",
        "AG": "AVAILABILITY GROUP",
        "AK": "ASYMMETRIC KEY",
        "AL": "ASYMMETRIC KEY LOGIN",
        "AP": "Undocumented",
        "AQ": "ADHOC QUERY",
        "AR": "APPLICATION ROLE",
        "AS": "ASSEMBLY",
        "AU": "ASYMMETRIC KEY USER",
        "BN": "REMOTE SERVICE BINDING",
        "C": "CHECK CONSTRAINT",
        "CD": "CREDENTIAL",
        "CK": "COLUMN ENCRYPTION KEY",
        "CL": "CERTIFICATE LOGIN",
        "CM": "COLUMN MASTER KEY",
        "CO": "SERVER CONFIG",
        "CP": "CRYPTOGRAPHIC PROVIDER",
        "CR": "CERTIFICATE",
        "CT": "CONTRACT",
        "CU": "CERTIFICATE USER",
        "D": "DEFAULT",
        "DA": "DATABASE AUDIT SPECIFICATION",
        "DB": "DATABASE",
        "DC": "DATABASE SCOPED CREDENTIAL",
        "DE": "DATABASE EVENT SESSION",
        "DK": "DATABASE ENCRYPTION KEY",
        "DN": "EVENT NOTIFICATION DATABASE",
        "DR": "DATABASE SCOPED RESOURCE GOVERNOR",
        "DS": "DATABASE SCOPED CONFIGURATION",
        "DT": "TRIGGER DATABASE",
        "DU": "AUDIT",
        "EC": "EDGE CONSTRAINT",
        "ED": "EXTERNAL DATA SOURCE",
        "EF": "EXTERNAL FILE FORMAT",
        "EL": "EXTERNAL LIBRARY",
        "EN": "EVENT NOTIFICATION",
        "EP": "ENDPOINT",
        "ER": "EXTERNAL RESOURCE POOL",
        "EX": "EXTERNAL SCRIPT QUERY",
        "F": "FOREIGN KEY CONSTRAINT",
        "FC": "FULLTEXT CATALOG",
        "FL": "FULLTEXT STOPLIST",
        "FN": "FUNCTION SCALAR SQL",
        "FP": "SEARCH PROPERTY LIST",
        "FS": "FUNCTION SCALAR ASSEMBLY ",
        "FT": "FUNCTION TABLE-VALUED ASSEMBLY ",
        "GU": "GROUP USER",
        "IF": "FUNCTION TABLE-VALUED INLINE SQL",
        "IS": "FUNCTION SCALAR INLINE SQL ",
        "IT": "INTERNAL TABLE",
        "IX": "INDEX",
        "LA": "EXTERNAL LANGUAGE",
        "LX": "LOGIN",
        "MK": "MASTER KEY",
        "MT": "MESSAGE TYPE",
        "OB": "OBJECT",
        "ON": "EVENT NOTIFICATION OBJECT",
        "P": "STORED PROCEDURE",
        "PC": "STORED PROCEDURE ASSEMBLY",
        "PF": "PARTITION FUNCTION",
        "PK": "PRIMARY KEY",
        "PL": "EXTERNAL GROUP LOGIN",
        "PQ": "PREPARED ADHOC QUERY",
        "PR": "BROKER PRIORITY",
        "PS": "PARTITION SCHEME",
        "PU": "EXTERNAL GROUP USER",
        "R": "RULE",
        "RF": "STORED PROCEDURE REPLICATION FILTER",
        "RG": "RESOURCE GOVERNOR",
        "RL": "ROLE",
        "RT": "ROUTE",
        "S": "TABLE SYSTEM",
        "SA": "SERVER AUDIT SPECIFICATION",
        "SC": "SCHEMA",
        "SD": "EVENT NOTIFICATION SERVER",
        "SE": "EVENT SESSION",
        "SG": "SERVER ROLE",
        "SK": "SYMMETRIC KEY",
        "SL": "SQL LOGIN",
        "SN": "SYNONYM",
        "SO": "SEQUENCE OBJECT",
        "SP": "SECURITY POLICY",
        "SQ": "QUEUE",
        "SR": "SERVER",
        "ST": "STATISTICS",
        "SU": "SQL USER",
        "SV": "SERVICE",
        "SX": "XML SCHEMA COLLECTION",
        "T": "TRIGGER SERVER",
        "TA": "TRIGGER ASSEMBLY",
        "TF": "FUNCTION TABLE-VALUED SQL",
        "TR": "TRIGGER",
        "TY": "TYPE",
        "U": "TABLE",
        "UQ": "UNIQUE CONSTRAINT",
        "US": "USER",
        "V": "VIEW",
        "WG": "WINDOWS GROUP",
        "WL": "WINDOWS LOGIN",
        "WU": "WINDOWS USER",
        "X": "STORED PROCEDURE EXTENDED",
        "XL": "EXTERNAL LOGIN",
        "XR": "XREL TREE",
        "XU": "EXTERNAL USER",
    };