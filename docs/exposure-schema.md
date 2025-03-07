# Exposure data schema in Synergy Studio

The transition to our new cloud-based platform introduces minimal changes to the existing exposure data schema, ensuring a smooth integration with your current workflows.

> Exposure data is a collection of primary insurance policy contracts, location terms, layer condition for each contract, and other related information. The exposure data schema contains these exposure entities that is consumed across the Synergy Studio platform for various functions. 
> 

Synergy Studio enables you to import exposures in various formats including a comma-separated values (CSV) file, UNICEDE/2 data, or in CEDE formats. The imported exposure data files are stored within Synergy Studio. A new web user interface (UI) tool will enable you to interact with the backend data store. You can use this tool to access the imported exposures, modify these exposures, and subsequently run analyses. 

## Tables in the new cloud-based schema versus the old SQL-based schema

 The following table shows the schema in the new cloud-based exposure database versus the old schema:

Table | Old SQL-based schema | New cloud-based schema
---------|----------|---------
 tExposureset | Yes | Yes
 tContract | Yes | Yes
 tLayer | Yes  | Yes 
 tLayercondition | Yes | Yes
|tLocfeature | Yes | Yes 
|tLocparsedaddress | Yes | Yes 
|tLocterm | Yes | Yes 
|tLocWC | Yes | Yes 
|tLocOffshore | Yes | Yes 
|tLocation | Yes | Yes 
|tStepfunction| Yes | Yes 
|tStepfunctiondetail | Yes | Yes
|tReinsAppliesToExp | Yes | Yes 
|**tAggregateExposure** | | Yes 
|**tReinsuranceExposureAdjustmentFactor** | | Yes  
|tLocStepFunctionXref| Yes | Yes 
 tDbHistory | Yes | No
 tDBVersion | Yes | No
 tEngineLocPhysicalProperty | Yes | No
 **tLocStepFunctionXref** | Yes | No
 tSIDControl | Yes | No
 tUpgradeLog | Yes | No
 tUpgradeOption | Yes | No
 tAppliesToArea | Yes | No
 tAppliesToAreaGeoXRef | Yes | No
 tAppliesToEventFilter | Yes | No
 tAppliesToEventFilterGeoXRef | Yes | No
 tAppliesToEventFilterLatLong | Yes | No
 tAppliesToEventFilterRule | Yes | No
 tCatBondAttributeValue | Yes | No
 tCLFCatalog | Yes | No
 tCompany | Yes | No
 tCompanyCLASizes | Yes | No
 tCompanyLossAssociation | Yes | No
 tCompanyLossMarketShare | Yes | No
 tCompanyUDCClassification_Xref | Yes | No
 tGroupPortfolio | Yes | No
 tGroupPortfolioViewXRef | Yes | No
 tPortfolio  | Yes | No
 tPortfolioFilter | Yes | No
 tPortfolioReinsuranceTreaty | Yes | No
 tProgramBusinessCategoryFactor | Yes | No
 tReinsuranceLOBCountryOverride | Yes | No
 tReinsuranceProgram | Yes | No
 tReinsuranceProgramEPAdjustment | Yes | No
 tReinsuranceProgramEPAdjustmentPoints | Yes | No
 tReinsuranceProgramSourceInure | Yes | No
 tReinsuranceProgramStructure | Yes | No
 tReinsuranceProgramStructureXRef| Yes | No
 tReinsuranceProgramTargetXRef | Yes | No
 tReinsuranceTreaty| Yes | No
 tReinsuranceTreatySavedResults| Yes | No
 tReinsuranceTreatyTerrorismOption| Yes | No
 tReinsuranceTreatyUDCClassification_Xref| Yes | No
 tReinsuranceProgramJapanCFLRatio | Yes | No

**Indicates a new table**

## Schema definitions in the detailed versus aggregate loss analyses for Synergy Studio

The following table shows the schema used in the detailed and aggregate loss analyses jobs submitted in the new cloud-based platform:


| Synergy Studio Table  | Detailed loss analysis  | Aggregate loss analysis  |
|---|---|---|
| tContract  |   ⎷ |   |
| tExposureSet  | ⎷  |  ⎷ |
| tLayer  |   ⎷ |    |
| tLayerCondition  |  ⎷  |    |
| tLayerConditionLocationXref  |  ⎷  |    |
|  tLocation |  ⎷  |    |
|  tLocFeature |  ⎷  |   |
| tLocOffshore  |   ⎷ |   |
| tLocParsedAddress  |  ⎷  |   |
| tLocTerm  |  ⎷  |   |
| tLocWC   |  ⎷  |   |
|  tReinsAppliesToExp |  ⎷  |   |
| tStepFunction  |   ⎷ |   |
| tStepFunctionDetail  |   ⎷ |   |
|  tAggregateExposure |   |   ⎷ |
|  tReinsuranceExposureAdjustmentFactor |   |  ⎷  |


## Changes in the column-level schema definitions for Synergy Studio

Some system information captured at the table level is no longer required for jobs submitted in the new cloud instance. We deprecated these columns for the following tables in Synergy Studio.  

Table         | Deprecated Column Name 
--------------|----------
 tExposureSet | Statuscode 
  |           | Rowversion 
  |           | CompanySID 


Table         | Deprecated Column Name 
--------------|----------
 tContract    | Statuscode 
  |           | Rowversion 
  
Table         | Deprecated Column Name 
--------------|----------
 tLayer  | Rowversion 
 tlayer
 tLayerCondition
 tLocFeature
 tLocParsedAddress
 tLocTerm
 tLocWC
 tLocOffShore
 tLocation
 tStepFunction
 tStepFunctionDetail
 tReinsAppliesToExp

Table         | Deprecated Column Name | New Column in Synergy Studio
--------------|----------|----------
 tAggregateExposure    | TotalInsuredValue  | Exposure TypeCode and Value
  |           | RiskCount |
  |           | Premium
  |           | Payroll
  |           | Rates
  |           | UserSpecifiedMarketShare
  |           | IsLossMarketShare
  |           | GeoLevelCode
  |           | GeographySID
  |           | AreaCode
  |           | AreaName
 

Table         | Deprecated Column Name | New Column in Synergy Studio
--------------|----------|----------
 tReinsuranceexposureAdjustmentFactor    | AdjustmentFactortotalInsuredValue  | Exposure TypeCode and Value
  |           | AdjustmentFactorRiskCount |
  |           | AdjustmentFactorPremium
  |           | AdjustmentFactorPayroll


