---
stoplight-id: w8dwtgqnx553h
---

# Mapping SOAP to REST API Operations

Global SOAP Namespace | SOAP API Method | Open API Document | Function | Operation | URL |
|--- |---|---| ---| ---| ---|
| ProjectManagementServiceClient | CreateExposureView | Exposure Management | Create exposure view | POST | /api/v1/exposure-management/view
| ProjectManagementServiceClient | GetExposureViews  | Exposure Management | Get exposure views | GET | /api/v1/exposure-management/views
| ProjectManagementServiceClient | GetExposureView | Exposure Management | Get exposure view | GET | /api/v1/exposure-management/views/{sid}
| DataSourceManagementServiceClient / CompanyManagementServiceClient | CreateExposureSet | Exposure Management | Create exposure set | POST |  /api/v1/exposure-management/sets
| DataSourceManagementServiceClient / CompanyManagementServiceClient  | GetExposureSets  | Exposure Management | Get exposure sets | GET | /api/v1/exposure-management/sets
| LossAnalysisServiceClient | GetEventSets | Event Set Management | Get event sets | GET | /api/v1/event-set-management/eventsets
| ObjectManagementServiceClient  | GetLossModTemplates  | Loss Modification | Get loss mod templates | GET | /api/v1/loss-modification/templates
| ReinsuranceManagementServiceClient | GetReinsurancePrograms | Reinsurance Loss | Get reinsurance analyses | GET | /api/reinsurance-analysis/v1/program-analyses 
| ReinsuranceAggregateLossAnalysisServiceClient | SubmitProgramAggregateLossAnalysis | Reinsurance Loss| Submit reinsurance loss analysis | POST | /api/reinsurance-analysis/v1/program-analyses
| LossAnalysisServiceClient | SubmitDetailedLossAnalysis | Detailed Loss| Submit detailed loss analysis | POST |  /api/v1/detailed-loss/detailed-loss
| ActivityManagementServiceClient  | GetActivities | Activity Management| Get activities |  GET | /api/activity-management/v1/activities
| ActivityManagementServiceClient  | GetActivity | Activity Management | Get activity (includes status) | GET | /api/activity-management/v1/activities/{sid}
| ReinsuranceProgramManagementServiceClient |  GetPrograms  | Program Management | List Programs | GET  | /api/v1/program-management/list
| ReinsuranceProgramManagementServiceClient  | CreateProgram | Program Management | Create Program | POST | /api/v1/program-management/program
| ExposureManagementServiceClient | | Program Management | Create Layer | POST | /api/v1/program-management/layer
