# New REST API Operations

Open API Document | Function | Operation | URL |
|---| ---| ---| ---|
| Exposure Management | Create exposure set | POST |  /api/v1/exposure-management/sets
| Exposure Management | Get exposure sets | GET | /sets
| Exposure Management | Get exposure set | GET |/sets/{sid}
| Event Set Management | Get event set | GET  | /eventsets/{sid}
| Loss Modification | Get loss mod template | GET | /api/v1/loss-modification/templates/{sid}
| Reinsurance Loss| Get reinsurance loss analysis | GET  | /api/reinsurance-analysis/v1/program-analyses/{sid}
| Reinsurance Loss| Delete reinsurance loss analysis |  DELETE | /api/reinsurance-analysis/v1/program-analyses/{sid}
| Reinsurance Loss| Get EP summary | GET | /api/reinsurance-analysis/v1/program-analyses/{sid}/results/ep-summary
| Reinsurance Loss| Get annual EP |  GET | /api/reinsurance-analysis/v1/program-analyses/{sid}/results/ep
| Reinsurance Loss| Get event loss | GET  | /api/reinsurance-analysis/v1/program-analyses/{sid}/results/event-loss
| Activity Management| Get activity status only | GET | /api/activity-management/v1/activities/{sid}/status
| Program Management | Create Scenarios | POST | /api/v1/program-management/scenarios
| Loss Set Management | Create a new loss set | POST  |  /api/v1/loss-set-management/loss-sets