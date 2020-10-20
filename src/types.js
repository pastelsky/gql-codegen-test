// @flow 


/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {|
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** AppStoredEntityFieldValue */
  AppStoredEntityFieldValue: any,
  /** Supported colors in the Palette */
  CardPaletteColor: any,
  /** CardTypeHierarchyLevelType */
  CardTypeHierarchyLevelType: any,
  /** DateTime type */
  DateTime: any,
  /** A JSON scalar */
  JSON: any,
  /** Long type */
  Long: any,
  /** A positive long number used to uniquely identify an app in marketplace. */
  MarketplaceAppId: any,
  /** Unique id of a Marketplace Partner. Accepts positive integers only */
  MarketplacePartnerId: any,
  /** SoftwareBoardFeatureKey */
  SoftwareBoardFeatureKey: any,
  /** SoftwareBoardPermission */
  SoftwareBoardPermission: any,
  /** SprintScopeChangeEventType */
  SprintScopeChangeEventType: any,
  /** A URL Scala type */
  URL: any,
|};

export const AccountStatusValues = Object.freeze({
  /** The account is an active account */
  Active: 'active', 
  /** The account is no longer an active account */
  Inactive: 'inactive', 
  /** The account has been closed */
  Closed: 'closed'
});


/**
 * "
 * The lifecycle status of the account
 */
export type AccountStatus = $Values<typeof AccountStatusValues>;

/**  --------------------------------------- API v2 */
export type Activities = {|
  __typename?: 'Activities',
  /**
   * get all activity
   * - filters - query filter for the activity stream
   * - first - show 1st <N> items of the response
   */
  all: ActivitiesConnection,
  /**
   * get "Worked on" activity
   * - filters - query filter for the activity stream
   * - first - show 1st <N> items of the response
   */
  workedOn: ActivitiesConnection,
  /** get activity for the currently logged in user */
  myActivities?: ?MyActivities,
|};


/**  --------------------------------------- API v2 */
export type ActivitiesAllArgs = {|
  filters?: ?Array<ActivitiesFilter>,
  first?: ?$ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
|};


/**  --------------------------------------- API v2 */
export type ActivitiesWorkedOnArgs = {|
  filters?: ?Array<ActivitiesFilter>,
  first?: ?$ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
|};

export type ActivitiesArguments = {|
  /** set of Atlassian account IDs */
  accountIds?: ?Array<$ElementType<Scalars, 'ID'>>,
  /** set of Cloud IDs */
  cloudIds?: ?Array<$ElementType<Scalars, 'ID'>>,
  /** set of products */
  products?: ?Array<ActivityProduct>,
  /** set of Event Types */
  eventTypes?: ?Array<ActivityEventType>,
  /** set of Object Types */
  objectTypes?: ?Array<ActivitiesObjectType>,
  /** arbitrary transition filters */
  transitions?: ?Array<ActivityTransition>,
  /** set of Container IDs */
  containerIds?: ?Array<$ElementType<Scalars, 'ID'>>,
  /** The creation time of the earliest events to be included in the result */
  earliestStart?: ?$ElementType<Scalars, 'DateTime'>,
  /** The creation time of the latest events to be included in the result */
  latestStart?: ?$ElementType<Scalars, 'DateTime'>,
|};

/** Extension of ActivitiesEvent, is a part of ActivitiesEventExtension union */
export type ActivitiesCommentedEvent = {|
  __typename?: 'ActivitiesCommentedEvent',
  commentId: $ElementType<Scalars, 'ID'>,
|};

export type ActivitiesConnection = {|
  __typename?: 'ActivitiesConnection',
  edges?: ?Array<?ActivityEdge>,
  nodes: Array<ActivitiesItem>,
  pageInfo: ActivityPageInfo,
|};

export type ActivitiesContainer = {|
  __typename?: 'ActivitiesContainer',
  /** Base64 encoded ARI of container. */
  id: $ElementType<Scalars, 'ID'>,
  /** Local (in product) object ID of the corresponding object. */
  localResourceId?: ?$ElementType<Scalars, 'ID'>,
  name?: ?$ElementType<Scalars, 'String'>,
  type?: ?ActivitiesContainerType,
  product?: ?ActivityProduct,
  cloudId?: ?$ElementType<Scalars, 'String'>,
  url?: ?$ElementType<Scalars, 'URL'>,
  iconUrl?: ?$ElementType<Scalars, 'URL'>,
|};

export const ActivitiesContainerTypeValues = Object.freeze({
  Site: 'SITE', 
  Project: 'PROJECT', 
  Space: 'SPACE'
});


export type ActivitiesContainerType = $Values<typeof ActivitiesContainerTypeValues>;

export type ActivitiesContributor = {|
  __typename?: 'ActivitiesContributor',
  profile?: ?User,
  lastAccessedDate?: ?$ElementType<Scalars, 'DateTime'>,
  /**
   * count of contributions for sorting by frequency,
   * all event types that is being ingested, except VIEWED and VIEWED_CONTENT
   * is considered to be a contribution
   */
  count?: ?$ElementType<Scalars, 'Int'>,
|};

export type ActivitiesEvent = {|
  ...Node,
  ...{|
    __typename?: 'ActivitiesEvent',
    /** Unique event ID */
  id: $ElementType<Scalars, 'ID'>,
    timestamp?: ?$ElementType<Scalars, 'DateTime'>,
    eventType?: ?ActivityEventType,
    user?: ?ActivitiesUser,
    extension?: ?ActivitiesEventExtension,
  |}
|};

export type ActivitiesEventExtension = ActivitiesTransitionedEvent | ActivitiesCommentedEvent;

export type ActivitiesFilter = {|
  /** defines relationship in-between filter arguments (AND/OR) */
  type?: ?ActivitiesFilterType,
  arguments?: ?ActivitiesArguments,
|};

export const ActivitiesFilterTypeValues = Object.freeze({
  And: 'AND', 
  Or: 'OR'
});


export type ActivitiesFilterType = $Values<typeof ActivitiesFilterTypeValues>;

export type ActivitiesItem = {|
  ...Node,
  ...{|
    __typename?: 'ActivitiesItem',
    /** Base64 encoded ARI of the activity. */
  id: $ElementType<Scalars, 'ID'>,
    timestamp?: ?$ElementType<Scalars, 'DateTime'>,
    object?: ?ActivitiesObject,
  |}
|};

/** Extension of ActivitiesObject, is a part of ActivitiesObjectExtension union */
export type ActivitiesJiraIssue = {|
  __typename?: 'ActivitiesJiraIssue',
  issueKey?: ?$ElementType<Scalars, 'String'>,
|};

export type ActivitiesObject = {|
  ...Node,
  ...{|
    __typename?: 'ActivitiesObject',
    /** Base64 encoded ARI of the object. */
  id: $ElementType<Scalars, 'ID'>,
    /** Local (in product) object ID of the corresponding object. */
  localResourceId?: ?$ElementType<Scalars, 'ID'>,
    name?: ?$ElementType<Scalars, 'String'>,
    type?: ?ActivityObjectType,
    product?: ?ActivityProduct,
    cloudId?: ?$ElementType<Scalars, 'String'>,
    url?: ?$ElementType<Scalars, 'URL'>,
    iconUrl?: ?$ElementType<Scalars, 'URL'>,
    /** Hierarchy of the containers, top container comes first */
  containers?: ?Array<ActivitiesContainer>,
    contributors?: ?Array<ActivitiesContributor>,
    parent?: ?ActivitiesObjectParent,
    events?: ?Array<ActivitiesEvent>,
    extension?: ?ActivitiesObjectExtension,
  |}
|};


export type ActivitiesObjectEventsArgs = {|
  first?: ?$ElementType<Scalars, 'Int'>,
|};

export type ActivitiesObjectExtension = ActivitiesJiraIssue;

export type ActivitiesObjectParent = {|
  __typename?: 'ActivitiesObjectParent',
  /** Base64 encoded ARI of the object. */
  id: $ElementType<Scalars, 'ID'>,
  type?: ?ActivityObjectType,
|};

export const ActivitiesObjectTypeValues = Object.freeze({
  Issue: 'ISSUE', 
  Page: 'PAGE', 
  Blogpost: 'BLOGPOST'
});


export type ActivitiesObjectType = $Values<typeof ActivitiesObjectTypeValues>;

/** Extension of ActivitiesEvent, is a part of ActivitiesEventExtension union */
export type ActivitiesTransitionedEvent = {|
  __typename?: 'ActivitiesTransitionedEvent',
  from?: ?$ElementType<Scalars, 'String'>,
  to?: ?$ElementType<Scalars, 'String'>,
|};

export type ActivitiesUser = {|
  __typename?: 'ActivitiesUser',
  profile?: ?User,
|};

export type ActivityConnection = {|
  __typename?: 'ActivityConnection',
  nodes: Array<?ActivityItem>,
|};

export type ActivityContributor = {|
  __typename?: 'ActivityContributor',
  profile?: ?ActivityUser,
  /** ISO 8601 */
  lastAccessedDate?: ?$ElementType<Scalars, 'String'>,
  /**
   * count of contributions for sorting by frequency,
   * all event types that is being ingested, except VIEWED and VIEWED_CONTENT
   * is considered to be a contribution
   */
  count?: ?$ElementType<Scalars, 'Int'>,
|};

export type ActivityEdge = {|
  __typename?: 'ActivityEdge',
  cursor: $ElementType<Scalars, 'String'>,
  node?: ?ActivitiesItem,
|};

export const ActivityEventTypeValues = Object.freeze({
  Assigned: 'ASSIGNED', 
  Unassigned: 'UNASSIGNED', 
  Viewed: 'VIEWED', 
  Commented: 'COMMENTED', 
  Updated: 'UPDATED', 
  Created: 'CREATED', 
  Liked: 'LIKED', 
  Transitioned: 'TRANSITIONED', 
  Published: 'PUBLISHED', 
  Edited: 'EDITED'
});


export type ActivityEventType = $Values<typeof ActivityEventTypeValues>;

export type ActivityFilter = {|
  /** set of Atlassian account IDs */
  aaIDs?: ?Array<?$ElementType<Scalars, 'ID'>>,
  /** set of Cloud IDs */
  cloudIDs?: ?Array<?$ElementType<Scalars, 'ID'>>,
  /** set of products */
  products?: ?Array<?ActivityProduct>,
  /** set of Event Types */
  eventTypes?: ?Array<?ActivityEventType>,
  /** set of Object Types */
  objectTypes?: ?Array<?ActivityObjectType>,
  /** arbitrary transition filters */
  transitions?: ?Array<?ActivityTransition>,
  /** set of Container IDs */
  containerIDs?: ?Array<?$ElementType<Scalars, 'ID'>>,
  /**
   * deprecated (use earliestStart instead)
   * events created on or after this date. eq. 2019-02-15T05:47:32.589Z
   */
  from?: ?$ElementType<Scalars, 'String'>,
  /**
   * deprecated (use latestStart instead)
   * events created on or before this date. eq. 2019-07-05T07:23:50.000Z
   */
  to?: ?$ElementType<Scalars, 'String'>,
  /**
   * The creation time of the earliest events to be included in the result
   * RFC-3339 formatted timestamp
   */
  earliestStart?: ?$ElementType<Scalars, 'String'>,
  /**
   * The creation time of the latest events to be included in the result
   * RFC-3339 formatted timestamp
   */
  latestStart?: ?$ElementType<Scalars, 'String'>,
|};

export type ActivityHistory = {|
  __typename?: 'ActivityHistory',
  actioner?: ?ActivityUser,
  eventType?: ?ActivityEventType,
  /** ISO 8601 */
  timestamp?: ?$ElementType<Scalars, 'String'>,
|};

export type ActivityHistoryConnection = {|
  __typename?: 'ActivityHistoryConnection',
  nodes: Array<?ActivityHistory>,
|};

export type ActivityItem = {|
  ...Node,
  ...{|
    __typename?: 'ActivityItem',
    /** Base64 encoded ARI. */
  id: $ElementType<Scalars, 'ID'>,
    /** ISO 8601 */
  timestamp?: ?$ElementType<Scalars, 'String'>,
    eventType?: ?ActivityEventType,
    object?: ?ActivityObject,
    /** hierarchy of the containers, top container comes first */
  containers?: ?Array<?ActivityObject>,
    contributors?: ?Array<?ActivityContributor>,
  |}
|};

export type ActivityObject = {|
  ...Node,
  ...{|
    __typename?: 'ActivityObject',
    /** Base64 encoded ARI. */
  id: $ElementType<Scalars, 'ID'>,
    /** Local (in product) object ID of the corresponding object. */
  localResourceId: $ElementType<Scalars, 'ID'>,
    /** in Jira's case it is: <Issue_key> + " " + <Issue_summary>"  */
  name?: ?$ElementType<Scalars, 'String'>,
    type?: ?ActivityObjectType,
    product?: ?ActivityProduct,
    cloudID?: ?$ElementType<Scalars, 'String'>,
    url?: ?$ElementType<Scalars, 'String'>,
    iconURL?: ?$ElementType<Scalars, 'String'>,
    history?: ?ActivityHistoryConnection,
  |}
|};

export type ActivityObjectConnection = {|
  __typename?: 'ActivityObjectConnection',
  nodes: Array<?ActivityObject>,
|};

export const ActivityObjectTypeValues = Object.freeze({
  Site: 'SITE', 
  Project: 'PROJECT', 
  Issue: 'ISSUE', 
  Comment: 'COMMENT', 
  Space: 'SPACE', 
  Page: 'PAGE', 
  Blogpost: 'BLOGPOST', 
  Task: 'TASK'
});


export type ActivityObjectType = $Values<typeof ActivityObjectTypeValues>;

export type ActivityPageInfo = {|
  __typename?: 'ActivityPageInfo',
  hasNextPage: $ElementType<Scalars, 'Boolean'>,
  hasPreviousPage: $ElementType<Scalars, 'Boolean'>,
|};

export const ActivityProductValues = Object.freeze({
  Jira: 'JIRA', 
  JiraBusiness: 'JIRA_BUSINESS', 
  JiraSoftware: 'JIRA_SOFTWARE', 
  JiraOps: 'JIRA_OPS', 
  JiraServiceDesk: 'JIRA_SERVICE_DESK', 
  Confluence: 'CONFLUENCE'
});


export type ActivityProduct = $Values<typeof ActivityProductValues>;

/**
 * Represents arbitrary transition,
 * e.g. in case of TRANSITIONED event type it could be `from: "inprogress" to: "done"`.
 */
export type ActivityTransition = {|
  from?: ?$ElementType<Scalars, 'String'>,
  to?: ?$ElementType<Scalars, 'String'>,
|};

export type ActivityUser = {|
  __typename?: 'ActivityUser',
  accountId: $ElementType<Scalars, 'ID'>,
  name?: ?$ElementType<Scalars, 'String'>,
  picture?: ?$ElementType<Scalars, 'String'>,
|};

export type AddPolarisColumnInput = {|
  /**
   * The column to insert this column before.  If not specified,
   * the new column is added to the right of all columns.
   */
  before?: ?$ElementType<Scalars, 'ID'>,
  /** The id of the field to add */
  field: $ElementType<Scalars, 'ID'>,
  /** The format to use for the rendering the field's data */
  format?: ?$ElementType<Scalars, 'String'>,
  /** The width to configure on the column */
  width?: ?$ElementType<Scalars, 'Int'>,
  /**
   * An override for the column heading; if not specified,
   * the field label should be used.
   */
  heading?: ?$ElementType<Scalars, 'String'>,
|};

export const ApiContextValues = Object.freeze({
  Devops: 'DEVOPS'
});


/** Only used for inside the schema to mark the context for generic types */
export type ApiContext = $Values<typeof ApiContextValues>;

export type App = {|
  __typename?: 'App',
  id: $ElementType<Scalars, 'ID'>,
  name: $ElementType<Scalars, 'String'>,
  description: $ElementType<Scalars, 'String'>,
  environments: Array<AppEnvironment>,
  environmentByKey?: ?AppEnvironment,
|};


export type AppEnvironmentByKeyArgs = {|
  key: $ElementType<Scalars, 'String'>,
|};

export type AppDeployment = {|
  __typename?: 'AppDeployment',
  id: $ElementType<Scalars, 'ID'>,
  appId: $ElementType<Scalars, 'ID'>,
  environmentKey: $ElementType<Scalars, 'String'>,
  status: AppDeploymentStatus,
  errorDetails?: ?ErrorDetails,
  createdBy?: ?User,
  createdAt: $ElementType<Scalars, 'String'>,
  stages?: ?Array<AppDeploymentStage>,
|};

export type AppDeploymentEvent = {|
  createdAt: $ElementType<Scalars, 'String'>,
  stepName: $ElementType<Scalars, 'String'>,
|};

export const AppDeploymentEventLogLevelValues = Object.freeze({
  Info: 'INFO', 
  Warning: 'WARNING', 
  Error: 'ERROR'
});


export type AppDeploymentEventLogLevel = $Values<typeof AppDeploymentEventLogLevelValues>;

export type AppDeploymentLogEvent = {|
  ...AppDeploymentEvent,
  ...{|
    __typename?: 'AppDeploymentLogEvent',
    stepName: $ElementType<Scalars, 'String'>,
    message?: ?$ElementType<Scalars, 'String'>,
    level?: ?AppDeploymentEventLogLevel,
    createdAt: $ElementType<Scalars, 'String'>,
  |}
|};

export type AppDeploymentSnapshotLogEvent = {|
  ...AppDeploymentEvent,
  ...{|
    __typename?: 'AppDeploymentSnapshotLogEvent',
    stepName: $ElementType<Scalars, 'String'>,
    message?: ?$ElementType<Scalars, 'String'>,
    level?: ?AppDeploymentEventLogLevel,
    createdAt: $ElementType<Scalars, 'String'>,
  |}
|};

export type AppDeploymentStage = {|
  __typename?: 'AppDeploymentStage',
  key: $ElementType<Scalars, 'String'>,
  description: $ElementType<Scalars, 'String'>,
  progress: AppDeploymentStageProgress,
  events?: ?Array<AppDeploymentEvent>,
|};

export type AppDeploymentStageProgress = {|
  __typename?: 'AppDeploymentStageProgress',
  totalSteps: $ElementType<Scalars, 'Int'>,
  doneSteps: $ElementType<Scalars, 'Int'>,
|};

export const AppDeploymentStatusValues = Object.freeze({
  InProgress: 'IN_PROGRESS', 
  Done: 'DONE', 
  Failed: 'FAILED'
});


export type AppDeploymentStatus = $Values<typeof AppDeploymentStatusValues>;

export const AppDeploymentStepStatusValues = Object.freeze({
  Started: 'STARTED', 
  Done: 'DONE', 
  Failed: 'FAILED'
});


export type AppDeploymentStepStatus = $Values<typeof AppDeploymentStepStatusValues>;

export type AppDeploymentTransitionEvent = {|
  ...AppDeploymentEvent,
  ...{|
    __typename?: 'AppDeploymentTransitionEvent',
    stepName: $ElementType<Scalars, 'String'>,
    newStatus?: ?AppDeploymentStepStatus,
    createdAt: $ElementType<Scalars, 'String'>,
  |}
|};

export type AppEnvironment = {|
  __typename?: 'AppEnvironment',
  id: $ElementType<Scalars, 'ID'>,
  appId: $ElementType<Scalars, 'ID'>,
  key: $ElementType<Scalars, 'String'>,
  type: AppEnvironmentType,
  createdBy?: ?User,
  createdAt: $ElementType<Scalars, 'String'>,
  variables: Array<AppEnvironmentVariable>,
  scopes?: ?Array<$ElementType<Scalars, 'String'>>,
  /** A list of installations of the app */
  installations: Array<AppInstallation>,
|};

/** Used to uniquely identify an environment, when being used as an input. */
export type AppEnvironmentInput = {|
  appId: $ElementType<Scalars, 'ID'>,
  key: $ElementType<Scalars, 'String'>,
|};

export const AppEnvironmentTypeValues = Object.freeze({
  Development: 'DEVELOPMENT', 
  Production: 'PRODUCTION'
});


export type AppEnvironmentType = $Values<typeof AppEnvironmentTypeValues>;

export type AppEnvironmentVariable = {|
  __typename?: 'AppEnvironmentVariable',
  /** The key of the environment variable */
  key: $ElementType<Scalars, 'String'>,
  /** The value of the environment variable */
  value?: ?$ElementType<Scalars, 'String'>,
  /** Whether or not to encrypt */
  encrypt: $ElementType<Scalars, 'Boolean'>,
|};

/** The input needed to create or update an environment variable. */
export type AppEnvironmentVariableInput = {|
  /** The key of the environment variable */
  key: $ElementType<Scalars, 'String'>,
  /** The value of the environment variable */
  value: $ElementType<Scalars, 'String'>,
  /** Whether or not to encrypt (default=false) */
  encrypt?: ?$ElementType<Scalars, 'Boolean'>,
|};

export type AppInstallation = {|
  __typename?: 'AppInstallation',
  /** A unique Id representing installation the app into a context in the environment */
  id: $ElementType<Scalars, 'ID'>,
  /** A unique Id representing the context into which the app is being installed */
  installationContext: $ElementType<Scalars, 'ID'>,
  /** A unique Id representing account that installed the app */
  createdBy?: ?User,
  /** Time when the app was installed */
  createdAt: $ElementType<Scalars, 'String'>,
  /** An object that refers to the version of the installation */
  version?: ?AppVersion,
|};

export type AppInstallationContext = {|
  __typename?: 'AppInstallationContext',
  id: $ElementType<Scalars, 'ID'>,
|};

/** Input payload for the app environment install mutation */
export type AppInstallationInput = {|
  /** A unique Id representing the context into which the app is being installed */
  installationContext: $ElementType<Scalars, 'ID'>,
  /** An unique Id representing the app */
  appId: $ElementType<Scalars, 'ID'>,
  /** The key of the app's environment to be used for installation */
  environmentKey: $ElementType<Scalars, 'String'>,
|};

/** The response from the installation of an app environment */
export type AppInstallationResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'AppInstallationResponse',
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
    errorDetails?: ?ErrorDetails,
    installationId?: ?$ElementType<Scalars, 'ID'>,
    authorizationUrl?: ?$ElementType<Scalars, 'URL'>,
  |}
|};

/** Input payload for the app environment upgrade mutation */
export type AppInstallationUpgradeInput = {|
  /** A unique Id representing the context into which the app is being upgraded */
  installationContext: $ElementType<Scalars, 'ID'>,
  /** A unique Id representing the app */
  appId: $ElementType<Scalars, 'ID'>,
  /** The key of the app's environment to be used for installation upgrade */
  environmentKey: $ElementType<Scalars, 'String'>,
|};

/** The response from the installation upgrade of an app environment */
export type AppInstallationUpgradeResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'AppInstallationUpgradeResponse',
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
    installationId?: ?$ElementType<Scalars, 'ID'>,
    authorizationUrl?: ?$ElementType<Scalars, 'String'>,
    errorDetails?: ?ErrorDetails,
  |}
|};

export type AppLog = {|
  ...FunctionInvocationMetadata,
  ...Node,
  ...{|
    __typename?: 'AppLog',
    id: $ElementType<Scalars, 'ID'>,
    appVersion: $ElementType<Scalars, 'String'>,
    installationContext?: ?AppInstallationContext,
    function?: ?FunctionDescription,
    trigger?: ?FunctionTrigger,
    /**
   * The start time of the invocation
   * 
   * RFC-3339 formatted timestamp.
   */
  startTime?: ?$ElementType<Scalars, 'String'>,
    /**
   * Gets up to 200 earliest log lines for this invocation.
   * For getting more log lines use appLogLines field in Query type.
   */
  appLogLines?: ?AppLogLines,
  |}
|};


export type AppLogAppLogLinesArgs = {|
  first: $ElementType<Scalars, 'Int'>,
|};

/** Relay-style Connection to `AppLog` objects. */
export type AppLogConnection = {|
  __typename?: 'AppLogConnection',
  edges?: ?Array<?AppLogEdge>,
  nodes?: ?Array<?AppLog>,
  pageInfo: PageInfo,
|};

/** Relay-style Edge to an `AppLog` object. */
export type AppLogEdge = {|
  __typename?: 'AppLogEdge',
  node: AppLog,
  cursor: $ElementType<Scalars, 'String'>,
|};

export type AppLogLine = {|
  __typename?: 'AppLogLine',
  /**
   * Time the log line was issued
   * 
   * RFC-3339 formatted timestamp
   */
  timestamp: $ElementType<Scalars, 'String'>,
  /**
   * Log level of log line.  Typically one of:
   * TRACE, DEBUG, INFO, WARN, ERROR, FATAL
   */
  level?: ?$ElementType<Scalars, 'String'>,
  /** The free-form textual message from the log statement. */
  message?: ?$ElementType<Scalars, 'String'>,
  /**
   * We really don't know what other fields may be in the logs.
   * 
   * This field may be an array or an object.
   * 
   * If it's an object, it will include only fields in `includeFields`,
   * unless `includeFields` is null, in which case it will include
   * all fields that are not in `excludeFields`.
   * 
   * If it's an array it will include the entire array.
   */
  other?: ?$ElementType<Scalars, 'JSON'>,
|};

/** Relay-style Connection to `AppLogLine` objects. */
export type AppLogLineConnection = {|
  __typename?: 'AppLogLineConnection',
  edges?: ?Array<?AppLogLineEdge>,
  nodes?: ?Array<?AppLogLine>,
  pageInfo: PageInfo,
  /** Metadata about the function invocation (applies to all log lines of invocation) */
  metadata: FunctionInvocationMetadata,
|};

/** Relay-style Edge to an `AppLogLine` object. */
export type AppLogLineEdge = {|
  __typename?: 'AppLogLineEdge',
  node: AppLogLine,
  cursor: $ElementType<Scalars, 'String'>,
|};

/**
 * AppLogLines returned from AppLog query.
 * 
 * Not quite a Relay-style Connection since you can't page from this query.
 */
export type AppLogLines = {|
  __typename?: 'AppLogLines',
  edges?: ?Array<?AppLogLineEdge>,
  nodes?: ?Array<?AppLogLine>,
  pageInfo: PageInfo,
|};

export type AppStorageMutation = {|
  __typename?: 'AppStorageMutation',
  /** Set an untyped entity in a specific context given a key */
  setAppStoredEntity?: ?SetAppStoredEntityPayload,
  /** Delete an untyped entity in a specific context given a key */
  deleteAppStoredEntity?: ?DeleteAppStoredEntityPayload,
|};


export type AppStorageMutationSetAppStoredEntityArgs = {|
  input: SetAppStoredEntityMutationInput,
|};


export type AppStorageMutationDeleteAppStoredEntityArgs = {|
  input: DeleteAppStoredEntityMutationInput,
|};

export type AppStoredEntity = {|
  __typename?: 'AppStoredEntity',
  /**
   * Entities may be up to 2000 bytes long. Note that size within ESS may differ from
   * the size of the entity sent to this service. The entity size is counted within this service.
   */
  value?: ?$ElementType<Scalars, 'JSON'>,
  /**
   * The identifier for this entity
   * 
   * Keys must be between 1-100 characters long and must match the following pattern /^[a-zA-Z0-9:._\s-]+$/
   */
  key: $ElementType<Scalars, 'ID'>,
|};

export const AppStoredEntityConditionValues = Object.freeze({
  StartsWith: 'STARTS_WITH'
});


export type AppStoredEntityCondition = $Values<typeof AppStoredEntityConditionValues>;

export type AppStoredEntityConnection = {|
  __typename?: 'AppStoredEntityConnection',
  /** The AppStoredEntityConnection is a paginated list of Entities from storage service */
  edges?: ?Array<?AppStoredEntityEdge>,
  /** nodes field allows easy access for the first N data items */
  nodes?: ?Array<?AppStoredEntity>,
  /** pageInfo determines whether there are more entries to query. */
  pageInfo?: ?AppStoredEntityPageInfo,
  /** totalCount is the number of records retrived on a query. */
  totalCount?: ?$ElementType<Scalars, 'Int'>,
|};

export type AppStoredEntityEdge = {|
  __typename?: 'AppStoredEntityEdge',
  /**
   * Edge is a combination of node and cursor and follows the relay specs.
   * 
   * Cursor returns the key of the last record that was queried and
   * should be used as input to after when querying for paginated entities
   */
  cursor: $ElementType<Scalars, 'String'>,
  node?: ?AppStoredEntity,
|};


/**
 * The identifier for this entity
 * 
 * where condition to filter
 */
export type AppStoredEntityFilter = {|
  /** Condition filter to be provided when querying for Entities. */
  field: $ElementType<Scalars, 'String'>,
  condition: AppStoredEntityCondition,
  value: $ElementType<Scalars, 'AppStoredEntityFieldValue'>,
|};

export type AppStoredEntityPageInfo = {|
  __typename?: 'AppStoredEntityPageInfo',
  /** The pageInfo is the place to allow code to navigate the paginated list. */
  hasNextPage: $ElementType<Scalars, 'Boolean'>,
  hasPreviousPage: $ElementType<Scalars, 'Boolean'>,
|};

/** Input payload for the app environment uninstall mutation */
export type AppUninstallationInput = {|
  /** A unique Id representing the app */
  appId: $ElementType<Scalars, 'ID'>,
  /** The key of the app's environment to be used for installation */
  environmentKey: $ElementType<Scalars, 'String'>,
  /** A unique Id representing the installationId */
  installationId: $ElementType<Scalars, 'ID'>,
|};

/** The response of the uninstallation of an app environment */
export type AppUninstallationResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'AppUninstallationResponse',
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
    errorDetails?: ?ErrorDetails,
  |}
|};

/**
 * This does not represent a real person but rather the identity that backs an installed application
 * 
 * See the documentation on the `User` for more details
 */
export type AppUser = {|
  ...User,
  ...{|
    __typename?: 'AppUser',
    accountId: $ElementType<Scalars, 'ID'>,
    accountStatus: AccountStatus,
    name: $ElementType<Scalars, 'String'>,
    picture: $ElementType<Scalars, 'URL'>,
  |}
|};

export type AppVersion = {|
  __typename?: 'AppVersion',
  /** A boolean value that informs if the version installed is the latest */
  isLatest: $ElementType<Scalars, 'Boolean'>,
|};

/**
 * This represents a real person that has an account in a wide range of Atlassian products
 * 
 * See the documentation on the `User` and `LocalizationContext` for more details
 */
export type AtlassianAccountUser = {|
  ...User,
  ...LocalizationContext,
  ...{|
    __typename?: 'AtlassianAccountUser',
    accountId: $ElementType<Scalars, 'ID'>,
    accountStatus: AccountStatus,
    name: $ElementType<Scalars, 'String'>,
    picture: $ElementType<Scalars, 'URL'>,
    email?: ?$ElementType<Scalars, 'String'>,
    zoneinfo?: ?$ElementType<Scalars, 'String'>,
    locale?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export const AtlassianProductHostingTypeValues = Object.freeze({
  Cloud: 'CLOUD', 
  Server: 'SERVER', 
  DataCenter: 'DATA_CENTER'
});


/** Hosting type where Atlassian product instance is installed. */
export type AtlassianProductHostingType = $Values<typeof AtlassianProductHostingTypeValues>;

/** This type contains information about the currently logged in user */
export type AuthenticationContext = {|
  __typename?: 'AuthenticationContext',
  /** Information about the currently logged in user. */
  user?: ?User,
|};

/** Payload to invoke an AUX Effect */
export type AuxEffectsInvocationPayload = {|
  /** The current state of the AUX extension */
  state: $ElementType<Scalars, 'JSON'>,
  /** The effects to action inside the function */
  effects: Array<$ElementType<Scalars, 'JSON'>>,
  /** Environment information about where the effects are dispatched from */
  context: $ElementType<Scalars, 'JSON'>,
  /** Configuration arguments for the instance of the AUX extension */
  config?: ?$ElementType<Scalars, 'JSON'>,
|};

/** A response to an aux invocation */
export type AuxEffectsResult = {|
  __typename?: 'AuxEffectsResult',
  /**
   * The list of effects in response to an aux effects invocation.
   *         
   * Render effects should return valid rendering effects to the invoker,
   * to allow the front-end to render the required content. These are kept as
   * generic JSON blobs since consumers of this API are responsible for defining
   * what these effects look like.
   */
  effects: Array<$ElementType<Scalars, 'JSON'>>,
|};

export type AvailableEstimations = {|
  __typename?: 'AvailableEstimations',
  /** Unique identifier of the estimation. Temporary naming until we remove "statistic" from Jira. */
  statisticFieldId: $ElementType<Scalars, 'String'>,
  /** Name of the estimation. */
  name: $ElementType<Scalars, 'String'>,
|};

export type Backlog = {|
  __typename?: 'Backlog',
  /**
   * Temporarily needed to support legacy write API_.  the issue list key to use when creating issue's on the board.
   * Required when creating issues on a board with backlogs
   */
  boardIssueListKey?: ?$ElementType<Scalars, 'String'>,
  /** Whether or not to show the 'migrate this column to your backlog' prompt (set when first enabling backlogs) */
  requestColumnMigration: $ElementType<Scalars, 'Boolean'>,
  /** connect add-ons information */
  extension?: ?BacklogExtension,
  cards: Array<?SoftwareCard>,
  /** List of the assignees of all cards currently displayed on the backlog */
  assignees?: ?Array<?User>,
  /** List of card types which can be created directly on the backlog or sprints */
  cardTypes: Array<?CardType>,
  /** Labels for filtering and adding to cards */
  labels: Array<?$ElementType<Scalars, 'String'>>,
|};


export type BacklogCardsArgs = {|
  cardIds?: ?Array<?$ElementType<Scalars, 'ID'>>,
|};

export type BacklogExtension = {|
  __typename?: 'BacklogExtension',
  /** list of operations that add-on can perform */
  operations?: ?Array<?SoftwareOperation>,
|};

export type BitbucketQuery = {|
  __typename?: 'BitbucketQuery',
  /** Look up the Bitbucket repository by ARI */
  bitbucketRepository?: ?BitbucketRepository,
|};


export type BitbucketQueryBitbucketRepositoryArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};

export type BitbucketRepository = {|
  ...Node,
  ...{|
    __typename?: 'BitbucketRepository',
    /** The ARI of the Bitbucket repository. */
  id: $ElementType<Scalars, 'ID'>,
    /** Name of Bitbucket repository. */
  name: $ElementType<Scalars, 'String'>,
    /** URI for accessing Bitbucket repository. */
  webUrl: $ElementType<Scalars, 'URL'>,
    /** The Bitbucket avatar. */
  avatar?: ?BitbucketRepositoryAvatar,
  |}
|};

export type BitbucketRepositoryAvatar = {|
  __typename?: 'BitbucketRepositoryAvatar',
  /** URI for retrieving Bitbucket avatar. */
  url: $ElementType<Scalars, 'URL'>,
|};

export type BoardFeature = {|
  __typename?: 'BoardFeature',
  key?: ?$ElementType<Scalars, 'SoftwareBoardFeatureKey'>,
  status?: ?BoardFeatureStatus,
  toggle?: ?BoardFeatureToggleStatus,
  category: $ElementType<Scalars, 'String'>,
  prerequisites?: ?Array<?BoardFeature>,
|};

export const BoardFeatureStatusValues = Object.freeze({
  Enabled: 'ENABLED', 
  Disabled: 'DISABLED', 
  ComingSoon: 'COMING_SOON'
});


export type BoardFeatureStatus = $Values<typeof BoardFeatureStatusValues>;

export const BoardFeatureToggleStatusValues = Object.freeze({
  Enabled: 'ENABLED', 
  Disabled: 'DISABLED'
});


export type BoardFeatureToggleStatus = $Values<typeof BoardFeatureToggleStatusValues>;

/** Root node for queries about simple / agility / nextgen boards. */
export type BoardScope = {|
  __typename?: 'BoardScope',
  board?: ?SoftwareBoard,
  /** Current user's swimlane-strategy, NONE if SWAG was unable to retrieve it */
  userSwimlaneStrategy?: ?SwimlaneStrategy,
  /** Null if there's no backlog */
  backlog?: ?Backlog,
  /** Null if sprints are disabled (empty if there are no sprints) */
  sprints?: ?Array<?Sprint>,
  /** The project location for this board scope */
  projectLocation: SoftwareProject,
  /** Card parents (AKA Epics) for filtering and adding to cards */
  cardParents: Array<?CardParent>,
  /** List of all features on the board, and their state. */
  features: Array<?BoardFeature>,
  /** List of reports on this board.  null if reports are not enabled on this board. */
  reports?: ?SoftwareReports,
  /** Cards in the board scope with given card IDs */
  cards: Array<?SoftwareCard>,
  /** Estimation type currently configured for the board. */
  estimation?: ?EstimationConfig,
  /** Information about the user making this request. */
  currentUser: CurrentUser,
|};


/** Root node for queries about simple / agility / nextgen boards. */
export type BoardScopeSprintsArgs = {|
  state?: ?Array<?SprintState>,
|};


/** Root node for queries about simple / agility / nextgen boards. */
export type BoardScopeCardsArgs = {|
  cardIds: Array<?$ElementType<Scalars, 'ID'>>,
|};

export const BuiltinPolarisIdeaFieldValues = Object.freeze({
  Key: 'KEY', 
  Summary: 'SUMMARY', 
  Description: 'DESCRIPTION', 
  Implementations: 'IMPLEMENTATIONS', 
  Supports: 'SUPPORTS'
});


export type BuiltinPolarisIdeaField = $Values<typeof BuiltinPolarisIdeaFieldValues>;

/** Burndown chart focuses on remaining scope over time */
export type BurndownChart = {|
  __typename?: 'BurndownChart',
  /** Burndown charts are graphing the remaining over time */
  chart: BurndownChartData,
  /** Filters for the report */
  filters: SprintReportsFilters,
|};


/** Burndown chart focuses on remaining scope over time */
export type BurndownChartChartArgs = {|
  sprintId?: ?$ElementType<Scalars, 'ID'>,
  estimation?: ?SprintReportsEstimationStatisticType,
|};

export type BurndownChartData = {|
  __typename?: 'BurndownChartData',
  /** the start time of the sprint */
  startTime?: ?$ElementType<Scalars, 'DateTime'>,
  /** the set end time of the sprint, not when the sprint completed */
  endTime?: ?$ElementType<Scalars, 'DateTime'>,
  /** data for sprint start event */
  sprintStartEvent: SprintStartData,
  /**
   * data for a sprint scope change
   * each point are assumed to be scope change during a sprint
   */
  scopeChangeEvents: Array<?SprintScopeChangeData>,
  /**
   * data for sprint end event
   * can be null if sprint has not been completed yet
   */
  sprintEndEvent?: ?SprintEndData,
  /** data for the table */
  table?: ?BurndownChartDataTable,
  /** the current user's timezone */
  timeZone?: ?$ElementType<Scalars, 'String'>,
|};

export type BurndownChartDataTable = {|
  __typename?: 'BurndownChartDataTable',
  scopeChanges: Array<?BurndownChartDataTableScopeChangeRow>,
  incompleteIssues: Array<?BurndownChartDataTableIssueRow>,
  completedIssues: Array<?BurndownChartDataTableIssueRow>,
  completedIssuesOutsideOfSprint: Array<?BurndownChartDataTableIssueRow>,
  issuesRemovedFromSprint: Array<?BurndownChartDataTableIssueRow>,
|};

export type BurndownChartDataTableIssueRow = {|
  __typename?: 'BurndownChartDataTableIssueRow',
  issueKey: $ElementType<Scalars, 'String'>,
  issueSummary: $ElementType<Scalars, 'String'>,
  cardType?: ?CardType,
  cardParent?: ?CardParent,
  cardStatus?: ?CardStatus,
  assignee?: ?User,
  estimate?: ?$ElementType<Scalars, 'Float'>,
|};

export type BurndownChartDataTableScopeChangeRow = {|
  __typename?: 'BurndownChartDataTableScopeChangeRow',
  timestamp: $ElementType<Scalars, 'DateTime'>,
  sprintScopeChange: SprintScopeChangeData,
  cardType?: ?CardType,
  cardParent?: ?CardParent,
|};

/**
 * Report pagination
 * -----------------
 */
export type CfdChartConnection = {|
  __typename?: 'CFDChartConnection',
  edges: Array<?CfdChartEdge>,
  pageInfo: PageInfo,
|};

/**
 * Report data
 * -----------------
 */
export type CfdChartData = {|
  __typename?: 'CFDChartData',
  timestamp: $ElementType<Scalars, 'DateTime'>,
  changes: Array<?CfdIssueColumnChangeEntry>,
  columnCounts: Array<?CfdColumnCount>,
|};

export type CfdChartEdge = {|
  __typename?: 'CFDChartEdge',
  cursor: $ElementType<Scalars, 'String'>,
  node: CfdChartData,
|};

export type CfdColumn = {|
  __typename?: 'CFDColumn',
  name: $ElementType<Scalars, 'String'>,
|};

export type CfdColumnCount = {|
  __typename?: 'CFDColumnCount',
  columnIndex: $ElementType<Scalars, 'Int'>,
  count: $ElementType<Scalars, 'Int'>,
|};

/**
 * Report filters
 * --------------
 */
export type CfdFilters = {|
  __typename?: 'CFDFilters',
  columns: Array<?CfdColumn>,
|};

export type CfdIssueColumnChangeEntry = {|
  __typename?: 'CFDIssueColumnChangeEntry',
  key?: ?$ElementType<Scalars, 'ID'>,
  /** in ISO 8601 format */
  timestamp: $ElementType<Scalars, 'String'>,
  columnFrom?: ?$ElementType<Scalars, 'Int'>,
  columnTo?: ?$ElementType<Scalars, 'Int'>,
  statusTo?: ?$ElementType<Scalars, 'ID'>,
  point?: ?TimeSeriesPoint,
|};

export type CardCoverMedia = {|
  __typename?: 'CardCoverMedia',
  attachmentMediaApiId?: ?$ElementType<Scalars, 'ID'>,
  attachmentId?: ?$ElementType<Scalars, 'Long'>,
  token?: ?$ElementType<Scalars, 'String'>,
  clientId?: ?$ElementType<Scalars, 'String'>,
  /** endpoint to retrieve the media from */
  endpointUrl?: ?$ElementType<Scalars, 'String'>,
  /** true if this card has media, but it's explicity been hidden by the user */
  hiddenByUser: $ElementType<Scalars, 'Boolean'>,
|};

export type CardMediaConfig = {|
  __typename?: 'CardMediaConfig',
  /** Whether or not to show card media on this board */
  enabled: $ElementType<Scalars, 'Boolean'>,
|};


export type CardParent = {|
  __typename?: 'CardParent',
  /** Card id */
  id: $ElementType<Scalars, 'ID'>,
  /** Card key */
  key: $ElementType<Scalars, 'String'>,
  /** Card summary */
  summary: $ElementType<Scalars, 'String'>,
  /** Card type */
  cardType: CardType,
  /** The color for this card */
  color?: ?$ElementType<Scalars, 'CardPaletteColor'>,
|};

export type CardPriority = {|
  __typename?: 'CardPriority',
  name?: ?$ElementType<Scalars, 'String'>,
  iconUrl?: ?$ElementType<Scalars, 'String'>,
|};

export type CardStatus = {|
  __typename?: 'CardStatus',
  /** Card status id */
  id?: ?$ElementType<Scalars, 'ID'>,
  /** Card status name */
  name?: ?$ElementType<Scalars, 'String'>,
  /** Which status category this statue belongs to.  Values:  "undefined" | "new" (ie todo) | "indeterminate" (aka "in progress") | "done" */
  category?: ?$ElementType<Scalars, 'String'>,
|};

export type CardType = {|
  __typename?: 'CardType',
  id?: ?$ElementType<Scalars, 'ID'>,
  name?: ?$ElementType<Scalars, 'String'>,
  /** URL to the icon to show for this card type */
  iconUrl?: ?$ElementType<Scalars, 'String'>,
  /** The configuration for creating cards with this type inline. */
  inlineCardCreate?: ?InlineCardCreateConfig,
  /** The type of hierarchy level that card type belongs to */
  hierarchyLevelType?: ?$ElementType<Scalars, 'CardTypeHierarchyLevelType'>,
|};


export type ChangePolarisIdeaFieldValue = {|
  fieldId: $ElementType<Scalars, 'Int'>,
  stringValue?: ?$ElementType<Scalars, 'String'>,
  numberValue?: ?$ElementType<Scalars, 'Float'>,
  labelAddValues?: ?Array<$ElementType<Scalars, 'String'>>,
  labelRemoveValues?: ?Array<$ElementType<Scalars, 'String'>>,
  labelSetValues?: ?Array<$ElementType<Scalars, 'String'>>,
|};

export type ChangePolarisIdeaInput = {|
  idea: $ElementType<Scalars, 'ID'>,
  summary?: ?$ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
  fields?: ?Array<ChangePolarisIdeaFieldValue>,
  unread?: ?$ElementType<Scalars, 'Boolean'>,
|};

export type ChangePolarisIdeaPayload = {|
  ...Payload,
  ...{|
    __typename?: 'ChangePolarisIdeaPayload',
    success: $ElementType<Scalars, 'Boolean'>,
    errors?: ?Array<MutationError>,
    node?: ?PolarisIdea,
  |}
|};

/** ##### Input ####### */
export type ChangePolarisIdeaRankInput = {|
  /** The ARI of the project in which we are changing ranks */
  project: $ElementType<Scalars, 'ID'>,
  /** The ARIs of the subject ideas whose ranks are to be changed */
  ideas: Array<$ElementType<Scalars, 'ID'>>,
  /**
   * The ARI of the idea which we are ranking these issues BEFORE.  In other
   * words, this is the ARI of the idea which will come after the subject ideas.
   */
  before?: ?$ElementType<Scalars, 'ID'>,
  /**
   * The ARI of the idea which we are ranking these issues AFTER.  In other
   * words, this is the ARI of the idea which will come before the subject ideas.
   * One of before or after must be specified.
   */
  after?: ?$ElementType<Scalars, 'ID'>,
|};

export type ChangePolarisIdeaRankPayload = {|
  __typename?: 'ChangePolarisIdeaRankPayload',
  statusCode: $ElementType<Scalars, 'Int'>,
  message: $ElementType<Scalars, 'String'>,
  success: $ElementType<Scalars, 'Boolean'>,
  errors?: ?Array<MutationError>,
|};

/** Children metadata for cards */
export type ChildCardsMetadata = {|
  __typename?: 'ChildCardsMetadata',
  complete?: ?$ElementType<Scalars, 'Int'>,
  total?: ?$ElementType<Scalars, 'Int'>,
|};

export type CodeInJira = {|
  __typename?: 'CodeInJira',
  /** Site specific configuration required to build the 'Code in Jira' page */
  siteConfiguration?: ?CodeInJiraSiteConfiguration,
  /** User specific configuration required to build the 'Code in Jira' page */
  userConfiguration?: ?CodeInJiraUserConfiguration,
|};

export type CodeInJiraBitbucketWorkspace = {|
  __typename?: 'CodeInJiraBitbucketWorkspace',
  /** Unique ID of the Bitbucket workspace in UUID format */
  uuid: $ElementType<Scalars, 'ID'>,
  /** Workspace name (eg. Fusion) */
  name?: ?$ElementType<Scalars, 'String'>,
  /**
   * URL slug (eg. fusion). Used to differentiate multiple workspaces
   * to the user when the names are same
   */
  slug?: ?$ElementType<Scalars, 'String'>,
|};

export type CodeInJiraSiteConfiguration = {|
  __typename?: 'CodeInJiraSiteConfiguration',
  /**
   * A list of providers that are already connected to the site
   * Eg. Bitbucket, Github, Gitlab etc.
   */
  connectedVcsProviders?: ?Array<?CodeInJiraVcsProvider>,
|};

export type CodeInJiraUserConfiguration = {|
  __typename?: 'CodeInJiraUserConfiguration',
  /**
   * A list of Bitbucket workspaces that the current user has admin access too
   * The user can connect Jira to one these Workspaces
   */
  ownedBitbucketWorkspaces?: ?Array<?CodeInJiraBitbucketWorkspace>,
|};

/**
 * A Version Control System object
 * Eg. Bitbucket, GitHub, GitLab
 */
export type CodeInJiraVcsProvider = {|
  __typename?: 'CodeInJiraVcsProvider',
  id: $ElementType<Scalars, 'ID'>,
  name?: ?$ElementType<Scalars, 'String'>,
  providerNamespace?: ?$ElementType<Scalars, 'String'>,
  providerId?: ?$ElementType<Scalars, 'String'>,
|};

/** A column on the board */
export type Column = {|
  __typename?: 'Column',
  /** Column's id */
  id?: ?$ElementType<Scalars, 'ID'>,
  /** Column's name */
  name?: ?$ElementType<Scalars, 'String'>,
  /** The cards contained in the column */
  cards: Array<?SoftwareCard>,
  /** Number of cards allowed in this column before displaying a warning,  null if no limit */
  maxCardCount?: ?$ElementType<Scalars, 'Int'>,
  /** The statuses mapped to this column */
  columnStatus: Array<ColumnStatus>,
  /** Whether this column is the inital column.  Each board has exactly one initial column. */
  isInitial: $ElementType<Scalars, 'Boolean'>,
  /** Whether this column is the done column.  Each board has exactly one done column. */
  isDone: $ElementType<Scalars, 'Boolean'>,
|};

/** Represents a column inside a swimlane.  Each swimlane gets a ColumnInSwimlane for each column. */
export type ColumnInSwimlane = {|
  __typename?: 'ColumnInSwimlane',
  /** The details of the column */
  columnDetails?: ?Column,
  /** The cards contained in this column in the given swimlane */
  cards: Array<?SoftwareCard>,
|};


/** Represents a column inside a swimlane.  Each swimlane gets a ColumnInSwimlane for each column. */
export type ColumnInSwimlaneCardsArgs = {|
  cardIds?: ?Array<?$ElementType<Scalars, 'ID'>>,
|};

/** A status associated with a column, along with its transitions */
export type ColumnStatus = {|
  __typename?: 'ColumnStatus',
  /** Possible transitions into this status */
  transitions: Array<SoftwareCardTransition>,
  /** The status */
  status: CardStatus,
|};

/** Complete sprint */
export type CompleteSprintInput = {|
  boardId: $ElementType<Scalars, 'ID'>,
  sprintId: $ElementType<Scalars, 'ID'>,
  incompleteCardsDestination: SoftwareCardsDestination,
|};

export type CompleteSprintResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'CompleteSprintResponse',
    boardScope?: ?BoardScope,
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
  |}
|};

export type CreateAppDeploymentInput = {|
  appId: $ElementType<Scalars, 'ID'>,
  environmentKey: $ElementType<Scalars, 'String'>,
  artifactUrl: $ElementType<Scalars, 'URL'>,
  hostedResourceUploadId?: ?$ElementType<Scalars, 'ID'>,
|};

/** Response from creating a deployment */
export type CreateAppDeploymentResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'CreateAppDeploymentResponse',
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
    errorDetails?: ?ErrorDetails,
    /** Details about the created deployment */
  deployment?: ?AppDeployment,
  |}
|};

export type CreateAppDeploymentUrlInput = {|
  appId: $ElementType<Scalars, 'ID'>,
|};

/** Response from creating an app deployment url */
export type CreateAppDeploymentUrlResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'CreateAppDeploymentUrlResponse',
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
    errorDetails?: ?ErrorDetails,
    deploymentUrl?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type CreateAppInput = {|
  name: $ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
|};

/** Response from creating an app */
export type CreateAppResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'CreateAppResponse',
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
    errorDetails?: ?ErrorDetails,
    /** Details about the created app */
  app?: ?App,
  |}
|};

/**
 * Establish a tunnel for a specific environment of an app. This will redirect
 * all function calls to a separate tunnel URL. This URL must implement the same
 * invocation contract that is used elsewhere in Xen.
 */
export type CreateAppTunnelInput = {|
  /** The app to setup a tunnel for */
  appId: $ElementType<Scalars, 'ID'>,
  /** The environment key */
  environmentKey: $ElementType<Scalars, 'String'>,
  /** The URL to tunnel calls to */
  tunnelUrl: $ElementType<Scalars, 'URL'>,
  /** Should existing tunnels be overwritten */
  force?: ?$ElementType<Scalars, 'Boolean'>,
|};

/** A response to a tunnel creation request */
export type CreateAppTunnelResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'CreateAppTunnelResponse',
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
    errorDetails?: ?ErrorDetails,
    /**
   * The recommended keep-alive time (in milliseconds) by which the forge CLI (or
   * other clients) should re-establish the forge tunnel.
   * This is guaranteed to be less than the expiry of the forge tunnel.
   */
  keepAlive?: ?$ElementType<Scalars, 'String'>,
    /**
   * The actual expiry time (in milliseconds) of the created forge tunnel. Once the
   * tunnel expires, Forge apps will display the deployed version even
   * if the local development server is still active.
   */
  expiry?: ?$ElementType<Scalars, 'String'>,
  |}
|};

/**
 * ## Mutations
 * ## Column Mutations ###
 */
export type CreateColumnInput = {|
  boardId: $ElementType<Scalars, 'ID'>,
  columnName: $ElementType<Scalars, 'String'>,
|};

export type CreateColumnOutput = {|
  ...MutationResponse,
  ...{|
    __typename?: 'CreateColumnOutput',
    newColumn?: ?Column,
    columns?: ?Array<Column>,
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
  |}
|};

export type CreateContainerTokenInput = {|
  appId: $ElementType<Scalars, 'ID'>,
|};

export type CreateContainerTokenResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'CreateContainerTokenResponse',
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
    errorDetails?: ?ErrorDetails,
    token?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type CreateHostedResourceUploadUrlInput = {|
  appId: $ElementType<Scalars, 'ID'>,
  environmentKey: $ElementType<Scalars, 'String'>,
  resourceKeys: Array<$ElementType<Scalars, 'String'>>,
|};

/** Response from creating a hosted resource upload url */
export type CreateHostedResourceUploadUrlPayload = {|
  ...Payload,
  ...{|
    __typename?: 'CreateHostedResourceUploadUrlPayload',
    success: $ElementType<Scalars, 'Boolean'>,
    errors?: ?Array<MutationError>,
    preSignedUrls?: ?Array<HostedResourcePreSignedUrl>,
    uploadId: $ElementType<Scalars, 'ID'>,
  |}
|};

export type CreatePolarisIdeaInput = {|
  inProject: $ElementType<Scalars, 'ID'>,
  ideaType?: ?$ElementType<Scalars, 'ID'>,
  summary?: ?$ElementType<Scalars, 'String'>,
|};

export type CreatePolarisIdeaPayload = {|
  ...Payload,
  ...{|
    __typename?: 'CreatePolarisIdeaPayload',
    success: $ElementType<Scalars, 'Boolean'>,
    errors?: ?Array<MutationError>,
    node?: ?PolarisIdea,
  |}
|};

export type CreatePolarisProjectInput = {|
  tenant: $ElementType<Scalars, 'ID'>,
  key: $ElementType<Scalars, 'String'>,
  name: $ElementType<Scalars, 'String'>,
|};

export type CreatePolarisViewInput = {|
  container: $ElementType<Scalars, 'ID'>,
  visualizationType?: ?PolarisVisualizationType,
  /**  the type of viz to create */
  copyView?: ?$ElementType<Scalars, 'ID'>,
  /**  view to copy configuration from */
  update?: ?UpdatePolarisViewInput,
|};

/** #### Payload ##### */
export type CreatePolarisViewPayload = {|
  __typename?: 'CreatePolarisViewPayload',
  success: $ElementType<Scalars, 'Boolean'>,
  errors?: ?Array<MutationError>,
  node?: ?PolarisView,
|};

/** Create sprint */
export type CreateSprintInput = {|
  boardId: $ElementType<Scalars, 'ID'>,
|};

export type CreateSprintResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'CreateSprintResponse',
    sprint?: ?CreatedSprint,
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
  |}
|};

/** Response from creating an webtrigger url */
export type CreateWebTriggerUrlResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'CreateWebTriggerUrlResponse',
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
    /** Url of the webtrigger. Populated only if success is true. */
  url?: ?$ElementType<Scalars, 'URL'>,
    /** Id of the webtrigger. Populated only if success is true. */
  id?: ?$ElementType<Scalars, 'ID'>,
  |}
|};

export type CreatedSprint = {|
  __typename?: 'CreatedSprint',
  /** The ID of the sprint */
  id: $ElementType<Scalars, 'ID'>,
  /** The sprint's name */
  name?: ?$ElementType<Scalars, 'String'>,
  /** The start date of the sprint, in ISO 8601 format */
  startDate?: ?$ElementType<Scalars, 'DateTime'>,
  /** The end date of the sprint, in ISO 8601 format */
  endDate?: ?$ElementType<Scalars, 'DateTime'>,
  /** The number of days remaining */
  daysRemaining?: ?$ElementType<Scalars, 'Int'>,
  /** The state of the sprint, can be one of the following (FUTURE, ACTIVE, CLOSED) */
  sprintState?: ?SprintState,
  /** Can this sprint be update by the current user */
  canUpdateSprint?: ?$ElementType<Scalars, 'Boolean'>,
|};

/** Node for querying the Cumulative Flow Diagram report */
export type CumulativeFlowDiagram = {|
  __typename?: 'CumulativeFlowDiagram',
  chart: CfdChartConnection,
  filters: CfdFilters,
|};


/** Node for querying the Cumulative Flow Diagram report */
export type CumulativeFlowDiagramChartArgs = {|
  first?: ?$ElementType<Scalars, 'Int'>,
  cursor?: ?$ElementType<Scalars, 'String'>,
|};

export type CurrentEstimation = {|
  __typename?: 'CurrentEstimation',
  /** Custom field configured as the estimation type. Null when estimation feature is disabled. */
  customFieldId?: ?$ElementType<Scalars, 'String'>,
  /** Name of the custom field. */
  name?: ?$ElementType<Scalars, 'String'>,
|};

/** Information about the current user. Different users will see different results. */
export type CurrentUser = {|
  __typename?: 'CurrentUser',
  /** List of permissions the *user making the request* has for this board. */
  permissions: Array<?$ElementType<Scalars, 'SoftwareBoardPermission'>>,
|};

/**
 * This represents a real person that has an free account within the Jira Service Desk product
 * 
 * See the documentation on the `User` and `LocalizationContext` for more details
 */
export type CustomerUser = {|
  ...User,
  ...LocalizationContext,
  ...{|
    __typename?: 'CustomerUser',
    accountId: $ElementType<Scalars, 'ID'>,
    accountStatus: AccountStatus,
    name: $ElementType<Scalars, 'String'>,
    picture: $ElementType<Scalars, 'URL'>,
    email?: ?$ElementType<Scalars, 'String'>,
    zoneinfo?: ?$ElementType<Scalars, 'String'>,
    locale?: ?$ElementType<Scalars, 'String'>,
  |}
|};

/** Time ranges of invocation date. */
export type DateSearchInput = {|
  /**
   * The start time of the earliest invocation to include in the results.
   * If null, search results will only be limited by retention limits.
   * 
   * RFC-3339 formatted timestamp.
   */
  earliestStart?: ?$ElementType<Scalars, 'String'>,
  /**
   * The start time of the latest invocation to include in the results.
   * If null, will include most recent invocations.
   * 
   * RFC-3339 formatted timestamp.
   */
  latestStart?: ?$ElementType<Scalars, 'String'>,
|};


export type DeleteAppEnvironmentVariableInput = {|
  environment: AppEnvironmentInput,
  /** The key of the environment variable to delete */
  key: $ElementType<Scalars, 'String'>,
|};

export type DeleteAppInput = {|
  appId: $ElementType<Scalars, 'ID'>,
|};

/** Response from deleting an app */
export type DeleteAppResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'DeleteAppResponse',
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
    errorDetails?: ?ErrorDetails,
  |}
|};

export type DeleteAppStoredEntityMutationInput = {|
  /**
   * The identifier for the entity
   * 
   * Keys must be between 1-100 characters long and must match the following pattern /^[a-zA-Z0-9:._\s-]+$/
   */
  key: $ElementType<Scalars, 'ID'>,
  /** The ARI to store this entity within */
  contextAri: $ElementType<Scalars, 'ID'>,
|};

/** Generic implementation of MutationResponse for responses that don't need any extra data */
export type DeleteAppStoredEntityPayload = {|
  ...Payload,
  ...{|
    __typename?: 'DeleteAppStoredEntityPayload',
    success: $ElementType<Scalars, 'Boolean'>,
    errors?: ?Array<MutationError>,
  |}
|};

export type DeleteAppTunnelInput = {|
  /** The app to setup a tunnel for */
  appId: $ElementType<Scalars, 'ID'>,
  /** The environment key */
  environmentKey: $ElementType<Scalars, 'String'>,
|};

export type DeleteColumnInput = {|
  boardId: $ElementType<Scalars, 'ID'>,
  columnId: $ElementType<Scalars, 'ID'>,
|};

export type DeleteColumnOutput = {|
  ...MutationResponse,
  ...{|
    __typename?: 'DeleteColumnOutput',
    columns?: ?Array<Column>,
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
  |}
|};

export type DeletePolarisViewPayload = {|
  __typename?: 'DeletePolarisViewPayload',
  success: $ElementType<Scalars, 'Boolean'>,
  errors?: ?Array<MutationError>,
|};

/** Delete sprint */
export type DeleteSprintInput = {|
  boardId: $ElementType<Scalars, 'ID'>,
  sprintId: $ElementType<Scalars, 'ID'>,
|};

/** Response from creating an webtrigger url */
export type DeleteWebTriggerUrlResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'DeleteWebTriggerUrlResponse',
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
  |}
|};

/**
 * This object models the Continuous Delivery (CD) Pipeline concept, an automated process (usually comprised of multiple stages)
 * for getting software from version control right through to the production environment.
 */
export type DeploymentPipeline = {|
  __typename?: 'DeploymentPipeline',
  /** A URL users can use to link to this deployment pipeline. */
  url?: ?$ElementType<Scalars, 'String'>,
  /** The name of the pipeline to present to the user. */
  displayName?: ?$ElementType<Scalars, 'String'>,
|};

export const DeploymentStateValues = Object.freeze({
  Pending: 'PENDING', 
  InProgress: 'IN_PROGRESS', 
  Successful: 'SUCCESSFUL', 
  Cancelled: 'CANCELLED', 
  Failed: 'FAILED', 
  RolledBack: 'ROLLED_BACK', 
  Unknown: 'UNKNOWN'
});


/** The state that a code deployment can be in (think of a deployment in Bitbucket Pipelines, CircleCI, etc). */
export type DeploymentState = $Values<typeof DeploymentStateValues>;

/**
 * This object models a deployment in the Continuous Delivery (CD) Pipeline concept, an automated process (usually comprised of
 * multiple stages) for getting software from version control right through to the production environment.
 * 
 * TODO: Add `services` field when Service Registry has been integrated into AGG.
 */
export type DeploymentSummary = {|
  ...Node,
  ...{|
    __typename?: 'DeploymentSummary',
    id: $ElementType<Scalars, 'ID'>,
    /**
   * IDs of the issues that are included in the deployment.
   * 
   * At least one of the commits in the deployment must be associated with an issue for it
   * to appear here (meaning the issue key is mentioned in the commit message).
   */
  issueIds?: ?Array<$ElementType<Scalars, 'ID'>>,
    /**
   * This is the identifier for the deployment.
   *         
   * It must be unique for the specified pipeline and environment. It must be a monotonically
   * increasing number, as this is used to sequence the deployments.
   */
  deploymentSequenceNumber?: ?$ElementType<Scalars, 'Long'>,
    /**
   * A number used to apply an order to the updates to the deployment, as identified by the
   * `deploymentSequenceNumber`, in the case of out-of-order receipt of update requests.
   *         
   * It must be a monotonically increasing number. For example, epoch time could be one
   * way to generate the `updateSequenceNumber`.
   */
  updateSequenceNumber?: ?$ElementType<Scalars, 'Long'>,
    /** The human-readable name for the deployment. Will be shown in the UI. */
  displayName?: ?$ElementType<Scalars, 'String'>,
    /** A URL users can use to link to this deployment, in this environment. */
  url?: ?$ElementType<Scalars, 'String'>,
    /** A short description of the deployment. */
  description?: ?$ElementType<Scalars, 'String'>,
    /** The state of the deployment. */
  state?: ?DeploymentState,
    /** The last-updated timestamp to present to the user as a summary of the state of the deployment. */
  lastUpdated?: ?$ElementType<Scalars, 'DateTime'>,
    /**
   * This object models the Continuous Delivery (CD) Pipeline concept, an automated process
   * (usually comprised of multiple stages) for getting software from version control right through
   * to the production environment.
   */
  pipeline?: ?DeploymentPipeline,
    /** The environment that the deployment is present in. */
  environment?: ?DevOpsEnvironment,
  |}
|};

export type DevOpsAvatar = {|
  __typename?: 'DevOpsAvatar',
  /** The URL of the avatar. */
  url?: ?$ElementType<Scalars, 'URL'>,
  /** The description of the avatar. */
  description?: ?$ElementType<Scalars, 'String'>,
|};

/**
 * An environment that a code change can be released to.
 * 
 * The release may be via a code deployment or via a feature flag change.
 */
export type DevOpsEnvironment = {|
  __typename?: 'DevOpsEnvironment',
  /** The type of the environment. */
  category?: ?DevOpsEnvironmentCategory,
  /** The name of the environment to present to the user. */
  displayName?: ?$ElementType<Scalars, 'String'>,
|};

export const DevOpsEnvironmentCategoryValues = Object.freeze({
  Production: 'PRODUCTION', 
  Staging: 'STAGING', 
  Testing: 'TESTING', 
  Development: 'DEVELOPMENT', 
  Unmapped: 'UNMAPPED'
});


/**
 * The types of environments that a code change can be released to.
 *     
 * The release may be via a code deployment or via a feature flag change.
 */
export type DevOpsEnvironmentCategory = $Values<typeof DevOpsEnvironmentCategoryValues>;

export type DevOpsMetrics = {|
  __typename?: 'DevOpsMetrics',
  deploymentFrequency?: ?DevOpsMetricsDeploymentFrequency,
  cycleTime?: ?DevOpsMetricsCycleTime,
|};


export type DevOpsMetricsDeploymentFrequencyArgs = {|
  filter: DevOpsMetricsFilterInput,
|};


export type DevOpsMetricsCycleTimeArgs = {|
  filter: DevOpsMetricsFilterInput,
  isIncludeCycleTimeMean?: ?$ElementType<Scalars, 'Boolean'>,
  cycleTimePercentiles?: ?Array<$ElementType<Scalars, 'Int'>>,
|};

export type DevOpsMetricsCycleTime = {|
  __typename?: 'DevOpsMetricsCycleTime',
  /**
   * The size of time interval in which data points are rolled up in.
   * E.g. Count of data over 2 weeks with 1 day resolution means rollup is number of datapoints per day over 2 weeks.
   */
  resolution?: ?DevOpsMetricsResolution,
  /** The development phase which the cycle time is calculated for. */
  phase?: ?DevOpsMetricsCycleTimePhase,
  /** List of cycle time metrics for each requested roll up metric type. */
  cycleTimeMetrics?: ?Array<?DevOpsMetricsCycleTimeMetrics>,
|};

export type DevOpsMetricsCycleTimeData = {|
  __typename?: 'DevOpsMetricsCycleTimeData',
  /** dataTime of data point. Each data point is separated by size of time resolution specified. */
  dateTime?: ?$ElementType<Scalars, 'DateTime'>,
  /** Rolled up cycle time data (in seconds) between ('dateTime') and ('dateTime' + 'resolution'). Roll up method specified by 'metric'. */
  cycleTimeSeconds?: ?$ElementType<Scalars, 'Long'>,
|};

export type DevOpsMetricsCycleTimeMean = {|
  ...DevOpsMetricsCycleTimeMetrics,
  ...{|
    __typename?: 'DevOpsMetricsCycleTimeMean',
    /** Mean of data points in 'data' array. Rounded to the nearest second. */
  aggregateData?: ?$ElementType<Scalars, 'Long'>,
    data?: ?Array<?DevOpsMetricsCycleTimeData>,
  |}
|};

export type DevOpsMetricsCycleTimeMetrics = {|
  /** Data aggregated according to the metricType specified. Rounded to the nearest second. */
  aggregateData?: ?$ElementType<Scalars, 'Long'>,
  /** The cycle time data points, computed using roll up of the type specified in 'metric'. Rolled up by specified resolution. */
  data?: ?Array<?DevOpsMetricsCycleTimeData>,
|};

export type DevOpsMetricsCycleTimePercentile = {|
  ...DevOpsMetricsCycleTimeMetrics,
  ...{|
    __typename?: 'DevOpsMetricsCycleTimePercentile',
    /**
   * The percentile value across all cycle-times in the database between dateTimeFrom and dateTimeTo
   * (not across the datapoints in 'data' array). Rounded to the nearest second.
   */
  aggregateData?: ?$ElementType<Scalars, 'Long'>,
    data?: ?Array<?DevOpsMetricsCycleTimeData>,
    /** Percentile metric of returned values. Will be between 0 and 100. */
  percentile?: ?$ElementType<Scalars, 'Int'>,
  |}
|};

export const DevOpsMetricsCycleTimePhaseValues = Object.freeze({
  /** Development phase from initial code commit to opened pull request. */
  CommitToPr: 'COMMIT_TO_PR', 
  /** Development phase from initial code commit to deployed code. */
  CommitToDeployment: 'COMMIT_TO_DEPLOYMENT'
});


export type DevOpsMetricsCycleTimePhase = $Values<typeof DevOpsMetricsCycleTimePhaseValues>;

export type DevOpsMetricsDeploymentFrequency = {|
  __typename?: 'DevOpsMetricsDeploymentFrequency',
  /**
   * The size of time interval in which data points are rolled up in.
   * E.g. Count of data over 2 weeks with 1 day resolution means rollup is number of datapoints per day over 2 weeks.
   */
  resolution?: ?DevOpsMetricsResolution,
  /** Deployment state. Currently will only return for SUCCESSFUL, no State filter/input supported yet. */
  state?: ?DeploymentState,
  /** Deployment environment type. Currently will only return for PRODUCTION, no EnvironmentType filter/input supported yet. */
  environmentType?: ?DevOpsEnvironmentCategory,
  /** Mean of data points in 'data' array. */
  aggregateData?: ?$ElementType<Scalars, 'Float'>,
  /** The deployment frequency data points rolled up by specified resolution. */
  data?: ?Array<?DevOpsMetricsDeploymentFrequencyData>,
|};

/** #### Response ##### */
export type DevOpsMetricsDeploymentFrequencyData = {|
  __typename?: 'DevOpsMetricsDeploymentFrequencyData',
  /** dataTime of data point. Each data point is separated by size of time resolution specified. */
  dateTime?: ?$ElementType<Scalars, 'DateTime'>,
  /** Number of deployments between ('dateTime') and ('dateTime' + 'resolution') */
  count?: ?$ElementType<Scalars, 'Int'>,
|};

/** No results will be returned unless an association type is specified. Currently only 'jiraProjectIds' association type is supported. */
export type DevOpsMetricsFilterInput = {|
  /** The identifier that indicates which cloud instance this data is to be fetched for. */
  cloudId: $ElementType<Scalars, 'ID'>,
  /** The start dateTime for overall time interval to return results for. The interval is inclusive of this value. */
  startFromInclusive: $ElementType<Scalars, 'DateTime'>,
  /** The end dateTime for overall time interval to return results for. The interval is exclusive of this value. */
  endAtExclusive: $ElementType<Scalars, 'DateTime'>,
  /**
   * The size of time interval in which to rollup data points in. Default is 1 day.
   * E.g. Count of data over 2 weeks with 1 day resolution means rollup is number of datapoints per day over 2 weeks.
   */
  resolution?: ?DevOpsMetricsResolutionInput,
  /** List of Jira projectIds in the given 'cloudId' to fetch metrics for. Max limit of 10. */
  jiraProjectIds?: ?Array<$ElementType<Scalars, 'ID'>>,
|};

export type DevOpsMetricsResolution = {|
  __typename?: 'DevOpsMetricsResolution',
  /** Value for resolution specified. */
  value?: ?$ElementType<Scalars, 'Int'>,
  /** Unit for specified resolution value. */
  unit?: ?DevOpsMetricsResolutionUnit,
|};

export type DevOpsMetricsResolutionInput = {|
  /** Input value for resolution specified. */
  value: $ElementType<Scalars, 'Int'>,
  /** Input unit for specified resolution value. */
  unit: DevOpsMetricsResolutionUnit,
|};

export const DevOpsMetricsResolutionUnitValues = Object.freeze({
  Hour: 'HOUR', 
  Day: 'DAY', 
  Week: 'WEEK'
});


/** Unit for specified resolution value. */
export type DevOpsMetricsResolutionUnit = $Values<typeof DevOpsMetricsResolutionUnitValues>;

export const DevOpsRelationshipCertaintyValues = Object.freeze({
  /** The relationship was created by a user. */
  Explicit: 'EXPLICIT', 
  /** The relationship was inferred by a system. */
  Implicit: 'IMPLICIT'
});


export type DevOpsRelationshipCertainty = $Values<typeof DevOpsRelationshipCertaintyValues>;

export const DevOpsRelationshipCertaintyFilterValues = Object.freeze({
  /** Return only relationships created by a user. */
  Explicit: 'EXPLICIT', 
  /** Return only relationships inferred by a system. */
  Implicit: 'IMPLICIT', 
  /** Return all relationships. */
  All: 'ALL'
});


export type DevOpsRelationshipCertaintyFilter = $Values<typeof DevOpsRelationshipCertaintyFilterValues>;

export const DevOpsRepositoryHostingProviderFilterValues = Object.freeze({
  BitbucketCloud: 'BITBUCKET_CLOUD', 
  ThirdParty: 'THIRD_PARTY', 
  All: 'ALL'
});


export type DevOpsRepositoryHostingProviderFilter = $Values<typeof DevOpsRepositoryHostingProviderFilterValues>;

/** #################### Supporting Types ##################### */
export type DevOpsThirdPartyRepository = {|
  __typename?: 'DevOpsThirdPartyRepository',
  /** The ID of the third party repository. */
  id: $ElementType<Scalars, 'ID'>,
  /** The URL of the third party repository. */
  webUrl?: ?$ElementType<Scalars, 'URL'>,
  /** The name of the third party repository. */
  name?: ?$ElementType<Scalars, 'String'>,
  /** Avatar details for the third party repository. */
  avatar?: ?DevOpsAvatar,
|};

/** Dev status context */
export type DevStatus = {|
  __typename?: 'DevStatus',
  activity: DevStatusActivity,
  count?: ?$ElementType<Scalars, 'Int'>,
|};

export const DevStatusActivityValues = Object.freeze({
  PrOpen: 'PR_OPEN', 
  PrMerged: 'PR_MERGED', 
  PrDeclined: 'PR_DECLINED', 
  BranchOpen: 'BRANCH_OPEN', 
  Commit: 'COMMIT'
});


export type DevStatusActivity = $Values<typeof DevStatusActivityValues>;

/** Edit sprint */
export type EditSprintInput = {|
  boardId: $ElementType<Scalars, 'ID'>,
  sprintId: $ElementType<Scalars, 'ID'>,
  name?: ?$ElementType<Scalars, 'String'>,
  goal?: ?$ElementType<Scalars, 'String'>,
  startDate?: ?$ElementType<Scalars, 'DateTime'>,
  endDate?: ?$ElementType<Scalars, 'DateTime'>,
|};

/**
 * WARNING: This ErrorDetails is shared with "xen_lifecycle_service". This should not be,
 * but it was on oversight.
 */
export type ErrorDetails = {|
  __typename?: 'ErrorDetails',
  /** Specific code used to make difference between errors to handle them differently */
  code: $ElementType<Scalars, 'String'>,
  /** Addition error data */
  fields?: ?$ElementType<Scalars, 'JSON'>,
  /** Copy of top-level message */
  message: $ElementType<Scalars, 'String'>,
|};

/** Estimate object which contains an estimate for a card when it exists */
export type Estimate = {|
  __typename?: 'Estimate',
  storyPoints?: ?$ElementType<Scalars, 'Float'>,
|};

export type EstimationConfig = {|
  __typename?: 'EstimationConfig',
  /** Currently configured estimation. */
  current: CurrentEstimation,
  /** All available estimation types that can be used in the project. */
  available: Array<AvailableEstimations>,
|};

/** An arbitrary extension definition as defined by the Ecosystem */
export type Extension = {|
  __typename?: 'Extension',
  id: $ElementType<Scalars, 'ID'>,
  definitionId: $ElementType<Scalars, 'ID'>,
  environmentId: $ElementType<Scalars, 'ID'>,
  environmentKey: $ElementType<Scalars, 'String'>,
  environmentType: $ElementType<Scalars, 'String'>,
  installationId: $ElementType<Scalars, 'String'>,
  type: $ElementType<Scalars, 'String'>,
  key: $ElementType<Scalars, 'String'>,
  appOwner?: ?User,
  appVersion?: ?$ElementType<Scalars, 'String'>,
  properties: $ElementType<Scalars, 'JSON'>,
|};

/** The context in which an extension exists */
export type ExtensionContext = {|
  __typename?: 'ExtensionContext',
  id: $ElementType<Scalars, 'ID'>,
  extensionsByType: Array<Extension>,
|};


/** The context in which an extension exists */
export type ExtensionContextExtensionsByTypeArgs = {|
  type: $ElementType<Scalars, 'String'>,
|};

/**
 * Details about an extension.
 *     
 * This information is used to look up the extension within CaaS so that the
 * correct function can be resolved.
 *     
 * This will eventually be superseded by an Id.
 */
export type ExtensionDetailsInput = {|
  /** The definition identifier as provided by CaaS */
  definitionId: $ElementType<Scalars, 'ID'>,
  /** The extension key as provided by CaaS */
  extensionKey: $ElementType<Scalars, 'String'>,
|};

export type ExternalAuthCredentialsInput = {|
  /** The oAuth Client Id */
  clientId: $ElementType<Scalars, 'ID'>,
  /** The shared secret */
  clientSecret: $ElementType<Scalars, 'String'>,
|};

export type ExternalAuthProvider = {|
  __typename?: 'ExternalAuthProvider',
  key: $ElementType<Scalars, 'String'>,
  displayName: $ElementType<Scalars, 'String'>,
  url: $ElementType<Scalars, 'URL'>,
|};

export type FunctionDescription = {|
  __typename?: 'FunctionDescription',
  key: $ElementType<Scalars, 'String'>,
|};

/** The data describing a function invocation. */
export type FunctionInvocationMetadata = {|
  /** The invocation ID */
  id: $ElementType<Scalars, 'ID'>,
  appVersion: $ElementType<Scalars, 'String'>,
  /** The context in which the app is installed */
  installationContext?: ?AppInstallationContext,
  /** Metadata about the function of the app that was called */
  function?: ?FunctionDescription,
  /** Metadata about what caused the function to run */
  trigger?: ?FunctionTrigger,
|};

export type FunctionTrigger = {|
  __typename?: 'FunctionTrigger',
  type?: ?FunctionTriggerType,
  key?: ?$ElementType<Scalars, 'String'>,
|};

export const FunctionTriggerTypeValues = Object.freeze({
  Frontend: 'FRONTEND', 
  Manual: 'MANUAL', 
  Product: 'PRODUCT', 
  Web: 'WEB'
});


/** Which type of trigger */
export type FunctionTriggerType = $Values<typeof FunctionTriggerTypeValues>;

export type GenericMutationErrorExtension = {|
  ...MutationErrorExtension,
  ...{|
    __typename?: 'GenericMutationErrorExtension',
    statusCode?: ?$ElementType<Scalars, 'Int'>,
    errorType?: ?$ElementType<Scalars, 'String'>,
  |}
|};

/** Generic implementation of MutationResponse for responses that don't need any extra data */
export type GenericMutationResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'GenericMutationResponse',
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
    errorDetails?: ?ErrorDetails,
  |}
|};

export type HostedResourcePreSignedUrl = {|
  __typename?: 'HostedResourcePreSignedUrl',
  uploadUrl: $ElementType<Scalars, 'String'>,
  uploadFormData: $ElementType<Scalars, 'JSON'>,
|};

export type Icon = {|
  __typename?: 'Icon',
  url?: ?$ElementType<Scalars, 'String'>,
|};

export type InlineCardCreateConfig = {|
  __typename?: 'InlineCardCreateConfig',
  /** Whether inline create is enabled */
  enabled: $ElementType<Scalars, 'Boolean'>,
  /** Whether the global create should be used when creating */
  useGlobalCreate?: ?$ElementType<Scalars, 'Boolean'>,
|};

/** The data returned from a function invocation */
export type InvocationResponsePayload = {|
  __typename?: 'InvocationResponsePayload',
  /** The body of the function response */
  body: $ElementType<Scalars, 'JSON'>,
|};

/** Input payload for the invoke aux mutation */
export type InvokeAuxEffectsInput = {|
  /**
   * The list of applicable context Ids
   * Context Ids are used within the ecosystem platform to identify product
   * controlled areas into which apps can be installed. Host products should
   * determine how this list of contexts is constructed.
   *         
   * *Important:* this should start with the most specific context as the
   * most specific extension will be the selected extension.
   */
  contextIds: Array<$ElementType<Scalars, 'ID'>>,
  /**
   * Information needed to look up an extension
   *         
   * Note: Either `extensionDetails` or `extensionId` must be provided
   */
  extensionDetails?: ?ExtensionDetailsInput,
  /**
   * An identifier for the extension to invoke
   *         
   * Note: Either `extensionDetails` or `extensionId` must be provided
   */
  extensionId?: ?$ElementType<Scalars, 'ID'>,
  /** An identifier for an alternative entry point function to invoke */
  entryPoint?: ?$ElementType<Scalars, 'String'>,
  /** The payload to invoke an AUX Effect */
  payload: AuxEffectsInvocationPayload,
|};

/** The response from an AUX effects invocation */
export type InvokeAuxEffectsResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'InvokeAuxEffectsResponse',
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
    errorDetails?: ?ErrorDetails,
    result?: ?AuxEffectsResult,
  |}
|};

/** Input payload for the invoke mutation */
export type InvokeExtensionInput = {|
  /**
   * The list of applicable context Ids
   * Context Ids are used within the ecosystem platform to identify product
   * controlled areas into which apps can be installed. Host products should
   * determine how this list of contexts is constructed.
   *         
   * *Important:* this should start with the most specific context as the
   * most specific extension will be the selected extension.
   */
  contextIds: Array<$ElementType<Scalars, 'ID'>>,
  /**
   * Information needed to look up an extension
   *         
   * Note: Either `extensionDetails` or `extensionId` must be provided
   */
  extensionDetails?: ?ExtensionDetailsInput,
  /**
   * An identifier for the extension to invoke
   *         
   * Note: Either `extensionDetails` or `extensionId` must be provided
   */
  extensionId?: ?$ElementType<Scalars, 'ID'>,
  /** The payload to send as part of the invocation */
  payload: $ElementType<Scalars, 'JSON'>,
  /** An identifier for an alternative entry point function to invoke */
  entryPoint?: ?$ElementType<Scalars, 'String'>,
|};

/** The response from a function invocation */
export type InvokeExtensionResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'InvokeExtensionResponse',
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
    errorDetails?: ?ErrorDetails,
    /** The invocation response */
  response?: ?InvocationResponsePayload,
    /**
   * Details about the external auth for this service, if any exists.
   *         
   * This is typically used for directing the user to a consent screen.
   */
  externalAuth?: ?Array<?ExternalAuthProvider>,
  |}
|};

/** Detailed information of a repository's branch */
export type IssueDevOpsBranchDetails = {|
  __typename?: 'IssueDevOpsBranchDetails',
  name: $ElementType<Scalars, 'String'>,
  url?: ?$ElementType<Scalars, 'String'>,
  createReviewUrl?: ?$ElementType<Scalars, 'String'>,
  createPullRequestUrl?: ?$ElementType<Scalars, 'String'>,
  lastCommit?: ?IssueDevOpsHeadCommit,
  pullRequests?: ?Array<IssueDevOpsBranchPullRequestStatesSummary>,
  reviews?: ?Array<IssueDevOpsReview>,
|};

/** Short description of a pull request associated with a branch */
export type IssueDevOpsBranchPullRequestStatesSummary = {|
  __typename?: 'IssueDevOpsBranchPullRequestStatesSummary',
  name: $ElementType<Scalars, 'String'>,
  url?: ?$ElementType<Scalars, 'String'>,
  status?: ?IssueDevOpsPullRequestStatus,
  /** Time of the last update in ISO 8601 format */
  lastUpdate?: ?$ElementType<Scalars, 'DateTime'>,
|};

/** Detailed information about a build tied to a provider */
export type IssueDevOpsBuildDetail = {|
  __typename?: 'IssueDevOpsBuildDetail',
  id: $ElementType<Scalars, 'String'>,
  buildNumber?: ?$ElementType<Scalars, 'Int'>,
  name?: ?$ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
  url?: ?$ElementType<Scalars, 'String'>,
  state?: ?$ElementType<Scalars, 'String'>,
  testSummary?: ?IssueDevOpsTestSummary,
  lastUpdated?: ?$ElementType<Scalars, 'DateTime'>,
  references?: ?Array<IssueDevOpsBuildReference>,
|};

/** A build pipeline provider */
export type IssueDevOpsBuildProvider = {|
  __typename?: 'IssueDevOpsBuildProvider',
  id: $ElementType<Scalars, 'String'>,
  name?: ?$ElementType<Scalars, 'String'>,
  url?: ?$ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
  avatarUrl?: ?$ElementType<Scalars, 'String'>,
  builds?: ?Array<IssueDevOpsBuildDetail>,
|};

/** Information that links a build to a version control system (commits, branches, etc.) */
export type IssueDevOpsBuildReference = {|
  __typename?: 'IssueDevOpsBuildReference',
  name: $ElementType<Scalars, 'String'>,
  uri?: ?$ElementType<Scalars, 'String'>,
|};

export const IssueDevOpsCommitChangeTypeValues = Object.freeze({
  Added: 'ADDED', 
  Deleted: 'DELETED', 
  Copied: 'COPIED', 
  Moved: 'MOVED', 
  Modify: 'MODIFY', 
  Unknown: 'UNKNOWN'
});


export type IssueDevOpsCommitChangeType = $Values<typeof IssueDevOpsCommitChangeTypeValues>;

/** Detailed information of a commit in a repository */
export type IssueDevOpsCommitDetails = {|
  __typename?: 'IssueDevOpsCommitDetails',
  id: $ElementType<Scalars, 'String'>,
  isMerge?: ?$ElementType<Scalars, 'Boolean'>,
  /** Time of the commit update in ISO 8601 format */
  timestamp?: ?$ElementType<Scalars, 'DateTime'>,
  url?: ?$ElementType<Scalars, 'String'>,
  createReviewUrl?: ?$ElementType<Scalars, 'String'>,
  displayId?: ?$ElementType<Scalars, 'String'>,
  message?: ?$ElementType<Scalars, 'String'>,
  author?: ?IssueDevOpsPullRequestAuthor,
  files?: ?Array<IssueDevOpsCommitFile>,
  reviews?: ?Array<IssueDevOpsReview>,
|};

/** Information of a file modified in a commit */
export type IssueDevOpsCommitFile = {|
  __typename?: 'IssueDevOpsCommitFile',
  linesAdded?: ?$ElementType<Scalars, 'Int'>,
  linesRemoved?: ?$ElementType<Scalars, 'Int'>,
  changeType?: ?IssueDevOpsCommitChangeType,
  url?: ?$ElementType<Scalars, 'String'>,
  path: $ElementType<Scalars, 'String'>,
|};

/** Detailed information of a deployment */
export type IssueDevOpsDeploymentDetails = {|
  __typename?: 'IssueDevOpsDeploymentDetails',
  displayName?: ?$ElementType<Scalars, 'String'>,
  url?: ?$ElementType<Scalars, 'String'>,
  state?: ?IssueDevOpsDeploymentState,
  lastUpdated?: ?$ElementType<Scalars, 'DateTime'>,
  environment?: ?IssueDevOpsDeploymentEnvironment,
  pipelineId: $ElementType<Scalars, 'String'>,
  pipelineDisplayName?: ?$ElementType<Scalars, 'String'>,
  pipelineUrl?: ?$ElementType<Scalars, 'String'>,
|};

export type IssueDevOpsDeploymentEnvironment = {|
  __typename?: 'IssueDevOpsDeploymentEnvironment',
  id: $ElementType<Scalars, 'String'>,
  type?: ?IssueDevOpsDeploymentEnvironmentType,
  displayName?: ?$ElementType<Scalars, 'String'>,
|};

export const IssueDevOpsDeploymentEnvironmentTypeValues = Object.freeze({
  Production: 'PRODUCTION', 
  Staging: 'STAGING', 
  Testing: 'TESTING', 
  Development: 'DEVELOPMENT', 
  Unmapped: 'UNMAPPED'
});


export type IssueDevOpsDeploymentEnvironmentType = $Values<typeof IssueDevOpsDeploymentEnvironmentTypeValues>;

/**
 * This object witholds deployment providers essential information,
 * as well as its list of latest deployments per pipeline.
 * A provider without deployments related to the asked issueId will not be returned.
 */
export type IssueDevOpsDeploymentProviderDetails = {|
  __typename?: 'IssueDevOpsDeploymentProviderDetails',
  id: $ElementType<Scalars, 'String'>,
  name?: ?$ElementType<Scalars, 'String'>,
  homeUrl?: ?$ElementType<Scalars, 'String'>,
  logoUrl?: ?$ElementType<Scalars, 'String'>,
  /** A list of the latest deployments of each pipeline */
  deployments?: ?Array<IssueDevOpsDeploymentDetails>,
|};

export const IssueDevOpsDeploymentStateValues = Object.freeze({
  Pending: 'PENDING', 
  InProgress: 'IN_PROGRESS', 
  Successful: 'SUCCESSFUL', 
  Cancelled: 'CANCELLED', 
  Failed: 'FAILED', 
  RolledBack: 'ROLLED_BACK', 
  Unknown: 'UNKNOWN'
});


export type IssueDevOpsDeploymentState = $Values<typeof IssueDevOpsDeploymentStateValues>;

/** Aggregates all the instance types (bitbucket, stash, github) and its development information */
export type IssueDevOpsDetails = {|
  __typename?: 'IssueDevOpsDetails',
  instanceTypes: Array<IssueDevOpsProviderInstance>,
  featureFlagProviders?: ?Array<IssueDevOpsFeatureFlagProvider>,
  deploymentProviders?: ?Array<IssueDevOpsDeploymentProviderDetails>,
  remoteLinksByType?: ?IssueDevOpsRemoteLinksByType,
  embeddedMarketplace: IssueDevOpsEmbeddedMarketplace,
|};

/** Information related to the development process of an issue */
export type IssueDevOpsDevelopmentInformation = {|
  __typename?: 'IssueDevOpsDevelopmentInformation',
  details?: ?IssueDevOpsDetails,
|};


/** Information related to the development process of an issue */
export type IssueDevOpsDevelopmentInformationDetailsArgs = {|
  instanceTypes: Array<$ElementType<Scalars, 'String'>>,
|};

/**
 * A set of booleans that indicate if the embedded marketplace
 * should be shown if a user does not have installed providers
 */
export type IssueDevOpsEmbeddedMarketplace = {|
  __typename?: 'IssueDevOpsEmbeddedMarketplace',
  shouldDisplayForFeatureFlags: $ElementType<Scalars, 'Boolean'>,
  shouldDisplayForBuilds: $ElementType<Scalars, 'Boolean'>,
  shouldDisplayForDeployments: $ElementType<Scalars, 'Boolean'>,
|};

export type IssueDevOpsFeatureFlag = {|
  __typename?: 'IssueDevOpsFeatureFlag',
  /** Can be used to link to a provider record if required */
  providerId?: ?$ElementType<Scalars, 'String'>,
  /** the identifier for the feature flag as provided */
  id: $ElementType<Scalars, 'String'>,
  key?: ?$ElementType<Scalars, 'String'>,
  displayName?: ?$ElementType<Scalars, 'String'>,
  summary?: ?IssueDevOpsFeatureFlagSummary,
  details?: ?Array<IssueDevOpsFeatureFlagDetails>,
|};

export type IssueDevOpsFeatureFlagDetails = {|
  __typename?: 'IssueDevOpsFeatureFlagDetails',
  url: $ElementType<Scalars, 'String'>,
  lastUpdated?: ?$ElementType<Scalars, 'String'>,
  environment?: ?IssueDevOpsFeatureFlagEnvironment,
  status?: ?IssueDevOpsFeatureFlagStatus,
|};

export type IssueDevOpsFeatureFlagEnvironment = {|
  __typename?: 'IssueDevOpsFeatureFlagEnvironment',
  name: $ElementType<Scalars, 'String'>,
  type?: ?$ElementType<Scalars, 'String'>,
|};

export type IssueDevOpsFeatureFlagProvider = {|
  __typename?: 'IssueDevOpsFeatureFlagProvider',
  id: $ElementType<Scalars, 'String'>,
  createFlagTemplateUrl?: ?$ElementType<Scalars, 'String'>,
  linkFlagTemplateUrl?: ?$ElementType<Scalars, 'String'>,
  featureFlags?: ?Array<IssueDevOpsFeatureFlag>,
|};

export type IssueDevOpsFeatureFlagRollout = {|
  __typename?: 'IssueDevOpsFeatureFlagRollout',
  percentage?: ?$ElementType<Scalars, 'Float'>,
  text?: ?$ElementType<Scalars, 'String'>,
  rules?: ?$ElementType<Scalars, 'Int'>,
|};

export type IssueDevOpsFeatureFlagStatus = {|
  __typename?: 'IssueDevOpsFeatureFlagStatus',
  enabled: $ElementType<Scalars, 'Boolean'>,
  defaultValue?: ?$ElementType<Scalars, 'String'>,
  rollout?: ?IssueDevOpsFeatureFlagRollout,
|};

export type IssueDevOpsFeatureFlagSummary = {|
  __typename?: 'IssueDevOpsFeatureFlagSummary',
  url?: ?$ElementType<Scalars, 'String'>,
  status: IssueDevOpsFeatureFlagStatus,
  lastUpdated?: ?$ElementType<Scalars, 'String'>,
|};

/** Latest commit on a branch */
export type IssueDevOpsHeadCommit = {|
  __typename?: 'IssueDevOpsHeadCommit',
  url?: ?$ElementType<Scalars, 'String'>,
  displayId: $ElementType<Scalars, 'String'>,
  /** Time of the commit in ISO 8601 format */
  timestamp?: ?$ElementType<Scalars, 'DateTime'>,
|};

/** Detailed information of an instance and its data (source data, build data, deployment data) */
export type IssueDevOpsProviderInstance = {|
  __typename?: 'IssueDevOpsProviderInstance',
  id: $ElementType<Scalars, 'String'>,
  /** The name of the instance type */
  name?: ?$ElementType<Scalars, 'String'>,
  /** Raw type of the instance. e.g. bitbucket, stash, github */
  type?: ?$ElementType<Scalars, 'String'>,
  repository?: ?Array<IssueDevOpsRepositoryDetails>,
  buildProviders?: ?Array<IssueDevOpsBuildProvider>,
  /** The descriptive name of the instance type. e.g. Bitbucket Cloud */
  typeName?: ?$ElementType<Scalars, 'String'>,
  /** Indicates if it is possible to return more than a single instance per type. Only possible with FeCru */
  isSingleInstance?: ?$ElementType<Scalars, 'Boolean'>,
  baseUrl?: ?$ElementType<Scalars, 'String'>,
  /**
   * An error message related to this instance passed down from DevStatus
   * These are not GraphQL errors. When an instance type is requested,
   * DevStatus may respond with a list instances and strings nested inside the 'errors' field, as follows:
   * `{ 'errors': [{'_instance': { ... }, error: 'unauthorized' }], detail: [ ... ] }`.
   * The status code for this response however is still 200
   * since only part of the instances requested may present these issues.
   * `devStatusErrorMessage` is deprecated. Use `devStatusErrorMessages`.
   */
  devStatusErrorMessage?: ?$ElementType<Scalars, 'String'>,
  devStatusErrorMessages?: ?Array<$ElementType<Scalars, 'String'>>,
  /**
   * There are common cases where a Pull Request is merged and its branch is deleted.
   * The downstream sources do not provide repository information on the PR, only branches information.
   * When the branch is deleted, it's not possible to create the bridge between PRs and Repository.
   * For this reason, any PR that couldn't be assigned to a repository will appear on this list.
   */
  danglingPullRequests?: ?Array<IssueDevOpsPullRequestDetails>,
|};

/** Description of a pull request or commit author */
export type IssueDevOpsPullRequestAuthor = {|
  __typename?: 'IssueDevOpsPullRequestAuthor',
  /** The avatar URL of the author */
  avatarUrl?: ?$ElementType<Scalars, 'String'>,
  name: $ElementType<Scalars, 'String'>,
|};

/** Detailed information of a pull request */
export type IssueDevOpsPullRequestDetails = {|
  __typename?: 'IssueDevOpsPullRequestDetails',
  id: $ElementType<Scalars, 'String'>,
  url?: ?$ElementType<Scalars, 'String'>,
  name?: ?$ElementType<Scalars, 'String'>,
  branchName?: ?$ElementType<Scalars, 'String'>,
  branchUrl?: ?$ElementType<Scalars, 'String'>,
  /** Time of the last update in ISO 8601 format */
  lastUpdate?: ?$ElementType<Scalars, 'DateTime'>,
  commentCount?: ?$ElementType<Scalars, 'Int'>,
  status?: ?IssueDevOpsPullRequestStatus,
  author?: ?IssueDevOpsPullRequestAuthor,
  reviewers?: ?Array<IssueDevOpsPullRequestReviewer>,
|};

/** Description of a pull request reviewer */
export type IssueDevOpsPullRequestReviewer = {|
  __typename?: 'IssueDevOpsPullRequestReviewer',
  /** The avatar URL of the reviewer */
  avatarUrl?: ?$ElementType<Scalars, 'String'>,
  name: $ElementType<Scalars, 'String'>,
  /** Flag representing if the reviewer has already approved the PR */
  isApproved?: ?$ElementType<Scalars, 'Boolean'>,
|};

export const IssueDevOpsPullRequestStatusValues = Object.freeze({
  Open: 'OPEN', 
  Merged: 'MERGED', 
  Declined: 'DECLINED'
});


export type IssueDevOpsPullRequestStatus = $Values<typeof IssueDevOpsPullRequestStatusValues>;

export type IssueDevOpsRemoteLink = {|
  __typename?: 'IssueDevOpsRemoteLink',
  id: $ElementType<Scalars, 'String'>,
  providerId?: ?$ElementType<Scalars, 'String'>,
  displayName?: ?$ElementType<Scalars, 'String'>,
  url?: ?$ElementType<Scalars, 'String'>,
  type?: ?$ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
  status?: ?IssueDevOpsRemoteLinkStatus,
  actionIds?: ?Array<$ElementType<Scalars, 'String'>>,
  attributeMap?: ?Array<IssueDevOpsRemoteLinkAttributeTuple>,
|};

export type IssueDevOpsRemoteLinkAttributeTuple = {|
  __typename?: 'IssueDevOpsRemoteLinkAttributeTuple',
  key: $ElementType<Scalars, 'String'>,
  value: $ElementType<Scalars, 'String'>,
|};

export type IssueDevOpsRemoteLinkLabel = {|
  __typename?: 'IssueDevOpsRemoteLinkLabel',
  value: $ElementType<Scalars, 'String'>,
|};

export type IssueDevOpsRemoteLinkProvider = {|
  __typename?: 'IssueDevOpsRemoteLinkProvider',
  id: $ElementType<Scalars, 'String'>,
  name?: ?$ElementType<Scalars, 'String'>,
  homeUrl?: ?$ElementType<Scalars, 'String'>,
  logoUrl?: ?$ElementType<Scalars, 'String'>,
  documentationUrl?: ?$ElementType<Scalars, 'String'>,
  actions?: ?Array<IssueDevOpsRemoteLinkProviderAction>,
|};

export type IssueDevOpsRemoteLinkProviderAction = {|
  __typename?: 'IssueDevOpsRemoteLinkProviderAction',
  id: $ElementType<Scalars, 'String'>,
  label?: ?IssueDevOpsRemoteLinkLabel,
  templateUrl?: ?$ElementType<Scalars, 'String'>,
|};

export type IssueDevOpsRemoteLinkStatus = {|
  __typename?: 'IssueDevOpsRemoteLinkStatus',
  appearance?: ?$ElementType<Scalars, 'String'>,
  label?: ?$ElementType<Scalars, 'String'>,
|};

export type IssueDevOpsRemoteLinkType = {|
  __typename?: 'IssueDevOpsRemoteLinkType',
  type: $ElementType<Scalars, 'String'>,
  remoteLinks?: ?Array<IssueDevOpsRemoteLink>,
|};

export type IssueDevOpsRemoteLinksByType = {|
  __typename?: 'IssueDevOpsRemoteLinksByType',
  providers: Array<IssueDevOpsRemoteLinkProvider>,
  types: Array<IssueDevOpsRemoteLinkType>,
|};

/** Detailed information of a VCS repository */
export type IssueDevOpsRepositoryDetails = {|
  __typename?: 'IssueDevOpsRepositoryDetails',
  /** The repository avatar URL */
  avatarUrl?: ?$ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
  name: $ElementType<Scalars, 'String'>,
  url?: ?$ElementType<Scalars, 'String'>,
  /** A reference to the parent repository from where this has been forked for */
  parent?: ?IssueDevOpsRepositoryParent,
  pullRequests?: ?Array<IssueDevOpsPullRequestDetails>,
  branches?: ?Array<IssueDevOpsBranchDetails>,
  commits?: ?Array<IssueDevOpsCommitDetails>,
|};

/** Short description of the parent repository from which the fork was made */
export type IssueDevOpsRepositoryParent = {|
  __typename?: 'IssueDevOpsRepositoryParent',
  name: $ElementType<Scalars, 'String'>,
  url?: ?$ElementType<Scalars, 'String'>,
|};

/** Short desciption of a review associated with a branch or commit */
export type IssueDevOpsReview = {|
  __typename?: 'IssueDevOpsReview',
  state?: ?$ElementType<Scalars, 'String'>,
  url?: ?$ElementType<Scalars, 'String'>,
  id: $ElementType<Scalars, 'String'>,
|};

/** A summary for the tests results for a particular build */
export type IssueDevOpsTestSummary = {|
  __typename?: 'IssueDevOpsTestSummary',
  totalNumber?: ?$ElementType<Scalars, 'Int'>,
  numberPassed?: ?$ElementType<Scalars, 'Int'>,
  numberFailed?: ?$ElementType<Scalars, 'Int'>,
  numberSkipped?: ?$ElementType<Scalars, 'Int'>,
|};


export type JiraAvatar = {|
  __typename?: 'JiraAvatar',
  xsmall?: ?$ElementType<Scalars, 'String'>,
  small?: ?$ElementType<Scalars, 'String'>,
  medium?: ?$ElementType<Scalars, 'String'>,
  large?: ?$ElementType<Scalars, 'String'>,
|};

export type JiraIssueType = {|
  ...Node,
  ...{|
    __typename?: 'JiraIssueType',
    id: $ElementType<Scalars, 'ID'>,
    name: $ElementType<Scalars, 'String'>,
    description?: ?$ElementType<Scalars, 'String'>,
    avatar?: ?JiraAvatar,
  |}
|};

export type JiraIssueTypeConnection = {|
  __typename?: 'JiraIssueTypeConnection',
  /** Information to aid in pagination. */
  pageInfo: JiraProjectsPageInfo,
  /** A list of edges. */
  edges?: ?Array<?JiraIssueTypeEdge>,
|};

export type JiraIssueTypeEdge = {|
  __typename?: 'JiraIssueTypeEdge',
  /** The item at the end of the edge */
  node?: ?JiraIssueType,
  /** A cursor for use in pagination */
  cursor: $ElementType<Scalars, 'String'>,
|};

export type JiraProject = {|
  ...Node,
  ...{|
    __typename?: 'JiraProject',
    id: $ElementType<Scalars, 'ID'>,
    key: $ElementType<Scalars, 'String'>,
    name: $ElementType<Scalars, 'String'>,
    description?: ?$ElementType<Scalars, 'String'>,
    leadId?: ?$ElementType<Scalars, 'ID'>,
    category?: ?JiraProjectCategory,
    avatar?: ?JiraAvatar,
    projectUrl?: ?$ElementType<Scalars, 'String'>,
    issueTypes?: ?JiraIssueTypeConnection,
    /**
   * The connection entity for repository relationships for this Jira project, according to the specified
   * pagination, filtering and sorting.
   */
  repositoryRelationships?: ?JiraProjectAndRepositoryRelationshipConnection,
  |}
|};


export type JiraProjectIssueTypesArgs = {|
  first?: ?$ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
  last?: ?$ElementType<Scalars, 'Int'>,
  before?: ?$ElementType<Scalars, 'String'>,
|};


export type JiraProjectRepositoryRelationshipsArgs = {|
  first: $ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
  filter?: ?JiraProjectAndRepositoryRelationshipFilter,
  sort?: ?JiraProjectAndRepositoryRelationshipSort,
|};

/** A relationship between a Jira project and a repository (Bitbucket or third party). */
export type JiraProjectAndRepositoryRelationship = {|
  ...Node,
  ...{|
    __typename?: 'JiraProjectAndRepositoryRelationship',
    /** The ARI of this relationship. */
  id: $ElementType<Scalars, 'ID'>,
    /**
   * The revision must be provided when updating a relationship to prevent
   * simultaneous updates from overwriting each other.
   */
  revision: $ElementType<Scalars, 'ID'>,
    /** The Jira project related to the repository. */
  jiraProject?: ?JiraProject,
    /**
   * If the repository provider is Bitbucket, this will contain the ARI of the Bitbucket repository,
   * otherwise null. This field is only present for testing and will be removed when the Bitbucket repository
   * is hydrated.
   */
  bitbucketRepository?: ?BitbucketRepository,
    /**
   * If the repository provider is a third party, this will contain the third party repository details,
   * otherwise null.
   */
  thirdPartyRepository?: ?DevOpsThirdPartyRepository,
    /** An optional description of the relationship. */
  description?: ?$ElementType<Scalars, 'String'>,
    /** Whether the relationship is explicit or inferred. */
  certainty: DevOpsRelationshipCertainty,
    /** The AAID or system or system entity that created the relationship. */
  createdBy: $ElementType<Scalars, 'String'>,
    /** When the relationship was created. */
  createdAt: $ElementType<Scalars, 'DateTime'>,
    /**
   * The AAID or system or system entity that updated the relationship last.
   * Only present for relationships that have been updated.
   */
  lastUpdatedBy?: ?$ElementType<Scalars, 'String'>,
    /** When the relationship was updated last.  Only present for relationships that have been updated. */
  lastUpdatedAt?: ?$ElementType<Scalars, 'DateTime'>,
    /**
   * The system that inferred the relationship last.
   * Only present for implicit relationships.
   */
  lastInferredBy?: ?$ElementType<Scalars, 'String'>,
    /** When the relationship was inferred last. Only present for implicit relationships. */
  lastInferredAt?: ?$ElementType<Scalars, 'DateTime'>,
    /** Look up JSON properties of the relationship by keys. */
  properties?: ?$ElementType<Scalars, 'JSON'>,
  |}
|};


/** A relationship between a Jira project and a repository (Bitbucket or third party). */
export type JiraProjectAndRepositoryRelationshipPropertiesArgs = {|
  keys: Array<$ElementType<Scalars, 'String'>>,
|};

/** The connection object for a collection of Jira project and repository relationships. */
export type JiraProjectAndRepositoryRelationshipConnection = {|
  __typename?: 'JiraProjectAndRepositoryRelationshipConnection',
  edges?: ?Array<?JiraProjectAndRepositoryRelationshipEdge>,
  nodes?: ?Array<?JiraProjectAndRepositoryRelationship>,
  pageInfo: PageInfo,
|};

export type JiraProjectAndRepositoryRelationshipEdge = {|
  __typename?: 'JiraProjectAndRepositoryRelationshipEdge',
  cursor: $ElementType<Scalars, 'String'>,
  node?: ?JiraProjectAndRepositoryRelationship,
|};

/** #################### Filtering and Sorting Inputs ##################### */
export type JiraProjectAndRepositoryRelationshipFilter = {|
  /** Include only relationships with the specified certainty */
  certainty: DevOpsRelationshipCertaintyFilter,
  /** Include only relationships with the specified repository hosting provider type */
  hostingProvider: DevOpsRepositoryHostingProviderFilter,
  /**
   * Include only relationships with all of the specified property keys.
   * If this is omitted, no filtering by 'all property keys' is applied.
   */
  withAllPropertyKeys?: ?Array<$ElementType<Scalars, 'String'>>,
|};

export type JiraProjectAndRepositoryRelationshipSort = {|
  /** The field to apply sorting on */
  by: JiraProjectAndRepositoryRelationshipSortBy,
  /** The direction of sorting */
  order: SortDirection,
|};

export const JiraProjectAndRepositoryRelationshipSortByValues = Object.freeze({
  LastInferredAt: 'LAST_INFERRED_AT'
});


/** #################### Enums ##################### */
export type JiraProjectAndRepositoryRelationshipSortBy = $Values<typeof JiraProjectAndRepositoryRelationshipSortByValues>;

export type JiraProjectCategory = {|
  ...Node,
  ...{|
    __typename?: 'JiraProjectCategory',
    /** Global id of this project category */
  id: $ElementType<Scalars, 'ID'>,
    /** display name of the Project category */
  name?: ?$ElementType<Scalars, 'String'>,
    /** description of the Project category */
  description?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type JiraProjectCategoryConnection = {|
  __typename?: 'JiraProjectCategoryConnection',
  /** Information to aid in pagination. */
  pageInfo: JiraProjectsPageInfo,
  /** A list of edges. */
  edges?: ?Array<?JiraProjectCategoryEdge>,
|};

export type JiraProjectCategoryEdge = {|
  __typename?: 'JiraProjectCategoryEdge',
  /** The item at the end of the edge */
  node?: ?JiraProjectCategory,
  /** A cursor for use in pagination */
  cursor: $ElementType<Scalars, 'String'>,
|};

export type JiraProjectConnection = {|
  __typename?: 'JiraProjectConnection',
  /** Information to aid in pagination. */
  pageInfo: JiraProjectsPageInfo,
  /** A list of edges. */
  edges?: ?Array<?JiraProjectEdge>,
|};

/** An edge in a connection. */
export type JiraProjectEdge = {|
  __typename?: 'JiraProjectEdge',
  /** The item at the end of the edge */
  node?: ?JiraProject,
  /** A cursor for use in pagination */
  cursor: $ElementType<Scalars, 'String'>,
|};

export type JiraProjectFilterInput = {|
  /** the project types that can be used to filter list of projects */
  types?: ?Array<JiraProjectType>,
  /** the project category that can be used to filter list of projects */
  projectCategoryId?: ?$ElementType<Scalars, 'ID'>,
  /**  Filter the results using a literal string. Projects witha matching key or name are returned (case insensitive). */
  keyword?: ?$ElementType<Scalars, 'String'>,
  /** the sort criteria that is used while filtering the projects */
  sortBy?: ?JiraProjectSortInput,
|};

export const JiraProjectSortFieldValues = Object.freeze({
  /** sorts by project name */
  Name: 'NAME', 
  /** sorts by project key */
  Key: 'KEY', 
  /** sorts by lead */
  Lead: 'LEAD', 
  /** sorts by category */
  Category: 'CATEGORY'
});


export type JiraProjectSortField = $Values<typeof JiraProjectSortFieldValues>;

export type JiraProjectSortInput = {|
  sortBy?: ?JiraProjectSortField,
  order?: ?SortDirection,
|};

export const JiraProjectTypeValues = Object.freeze({
  /** A service desk project */
  ServiceDesk: 'SERVICE_DESK', 
  /** A business project */
  Business: 'BUSINESS', 
  /** A software project */
  Software: 'SOFTWARE'
});


/** Jira Project types */
export type JiraProjectType = $Values<typeof JiraProjectTypeValues>;

/** Information about pagination in a connection. */
export type JiraProjectsPageInfo = {|
  __typename?: 'JiraProjectsPageInfo',
  /** When paginating forwards, are there more items? */
  hasNextPage: $ElementType<Scalars, 'Boolean'>,
  /** When paginating backwards, are there more items? */
  hasPreviousPage: $ElementType<Scalars, 'Boolean'>,
  /** When paginating backwards, the cursor to continue. */
  startCursor?: ?$ElementType<Scalars, 'String'>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: ?$ElementType<Scalars, 'String'>,
|};

export type JiraQuery = {|
  __typename?: 'JiraQuery',
  jiraProject?: ?JiraProject,
  /** Returns a paginated connection of projects that meet the provided filter criteria */
  allJiraProjects?: ?JiraProjectConnection,
  /** Returns a paginated connection of project categories */
  allJiraProjectCategories?: ?JiraProjectCategoryConnection,
|};


export type JiraQueryJiraProjectArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type JiraQueryAllJiraProjectsArgs = {|
  cloudId: $ElementType<Scalars, 'ID'>,
  first?: ?$ElementType<Scalars, 'Int'>,
  last?: ?$ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
  before?: ?$ElementType<Scalars, 'String'>,
  filter: JiraProjectFilterInput,
|};


export type JiraQueryAllJiraProjectCategoriesArgs = {|
  cloudId: $ElementType<Scalars, 'ID'>,
  first?: ?$ElementType<Scalars, 'Int'>,
  last?: ?$ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
  before?: ?$ElementType<Scalars, 'String'>,
|};

export type JiraReleases = {|
  __typename?: 'JiraReleases',
  /**
   * Issue data that is filtered & ordered based on release-specific information.
   * 
   * The returned issues will be ordered by the dates of the most recent deployments that
   * match the input filter. An issue that was released more recently will appear earlier
   * in the list.
   */
  issues?: ?JiraReleasesIssueConnection,
  /**
   * Epic data that is filtered & ordered based on release-specific information.
   * 
   * The returned epics will be ordered by the dates of the most recent deployments for
   * the issues within the epic that match the input filter. An epic containing an issue
   * that was released more recently will appear earlier in the list.
   */
  epics?: ?JiraReleasesEpicConnection,
  /** Deployment summaries that are ordered by the date at which they occured (most recent to least recent). */
  deployments?: ?JiraReleasesDeploymentSummaryConnection,
|};


export type JiraReleasesIssuesArgs = {|
  first: $ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
  filter: JiraReleasesIssueFilter,
|};


export type JiraReleasesEpicsArgs = {|
  first: $ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
  filter: JiraReleasesEpicFilter,
|};


export type JiraReleasesDeploymentsArgs = {|
  first: $ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
  filter: JiraReleasesDeploymentFilter,
|};

export type JiraReleasesDeploymentFilter = {|
  /** Only deployments associated with these issues will be returned. */
  issueIds: Array<$ElementType<Scalars, 'ID'>>,
  /** Only deployments in this time window will be returned. */
  timeWindow: JiraReleasesTimeWindowInput,
  /** Only deployments in these environments will be returned. */
  environmentDisplayNames?: ?Array<$ElementType<Scalars, 'String'>>,
  /** Only deployments in these environment types will be returned. */
  environmentCategories?: ?Array<DevOpsEnvironmentCategory>,
|};

export type JiraReleasesDeploymentSummaryConnection = {|
  __typename?: 'JiraReleasesDeploymentSummaryConnection',
  edges?: ?Array<?JiraReleasesDeploymentSummaryEdge>,
  nodes?: ?Array<?DeploymentSummary>,
  pageInfo: PageInfo,
|};

export type JiraReleasesDeploymentSummaryEdge = {|
  __typename?: 'JiraReleasesDeploymentSummaryEdge',
  cursor: $ElementType<Scalars, 'String'>,
  node?: ?DeploymentSummary,
|};

export type JiraReleasesEpic = {|
  __typename?: 'JiraReleasesEpic',
  id: $ElementType<Scalars, 'ID'>,
  issueKey?: ?$ElementType<Scalars, 'String'>,
  issueTypeId?: ?$ElementType<Scalars, 'ID'>,
  assignee?: ?User,
  summary?: ?$ElementType<Scalars, 'String'>,
  color?: ?$ElementType<Scalars, 'String'>,
  lastDeployed?: ?$ElementType<Scalars, 'DateTime'>,
|};

export type JiraReleasesEpicConnection = {|
  __typename?: 'JiraReleasesEpicConnection',
  edges?: ?Array<?JiraReleasesEpicEdge>,
  nodes?: ?Array<?JiraReleasesEpic>,
  pageInfo: PageInfo,
|};

export type JiraReleasesEpicEdge = {|
  __typename?: 'JiraReleasesEpicEdge',
  cursor: $ElementType<Scalars, 'String'>,
  node?: ?JiraReleasesEpic,
|};

export type JiraReleasesEpicFilter = {|
  /** Only epics in this project will be returned. */
  projectId: $ElementType<Scalars, 'ID'>,
  /** Only epics matching this text filter will be returned. */
  text?: ?$ElementType<Scalars, 'String'>,
  /** Determines whether epics that haven't been released should be included in the results. */
  releaseStatusFilter?: ?JiraReleasesEpicReleaseStatusFilter,
|};

export const JiraReleasesEpicReleaseStatusFilterValues = Object.freeze({
  /** Only epics that have been released (to any environment) will be included in the results. */
  Released: 'RELEASED', 
  /**
   * Epics that have been released will be returned first, followed by epics that haven't
   * yet been released.
   */
  ReleasedAndUnreleased: 'RELEASED_AND_UNRELEASED'
});


/**
 * Used for specifying whether or not epics that haven't been released should be included
 * in the results.
 * 
 * For an epic to be considered as released, at least one of the issues or subtasks within
 * it must have been released.
 */
export type JiraReleasesEpicReleaseStatusFilter = $Values<typeof JiraReleasesEpicReleaseStatusFilterValues>;

export type JiraReleasesIssue = {|
  __typename?: 'JiraReleasesIssue',
  id: $ElementType<Scalars, 'ID'>,
  issueKey?: ?$ElementType<Scalars, 'String'>,
  issueTypeId?: ?$ElementType<Scalars, 'ID'>,
  assignee?: ?User,
  summary?: ?$ElementType<Scalars, 'String'>,
  lastDeployed?: ?$ElementType<Scalars, 'DateTime'>,
  /**
   * The epic this issue is contained within (either directly or indirectly).
   * 
   * Note: If the issue and its ancestors are not within an epic, the value will be `null`.
   */
  epic?: ?JiraReleasesEpic,
|};

export type JiraReleasesIssueConnection = {|
  __typename?: 'JiraReleasesIssueConnection',
  edges?: ?Array<?JiraReleasesIssueEdge>,
  nodes?: ?Array<?JiraReleasesIssue>,
  pageInfo: PageInfo,
|};

export type JiraReleasesIssueEdge = {|
  __typename?: 'JiraReleasesIssueEdge',
  cursor: $ElementType<Scalars, 'String'>,
  node?: ?JiraReleasesIssue,
|};

export type JiraReleasesIssueFilter = {|
  /** Only issues in this project will be returned. */
  projectId: $ElementType<Scalars, 'ID'>,
  /** Only issues matching this text filter will be returned (will match against all issue fields). */
  text?: ?$ElementType<Scalars, 'String'>,
  /**
   * Only issues in these epics will be returned.
   * 
   * Note:
   * * If a null ID is included in the list, issues not in epics will be included in the results.
   * * If a subtask's parent issue is in one of the epics, the subtask will also be returned.
   */
  epicIds?: ?Array<?$ElementType<Scalars, 'ID'>>,
  /** Only issues of these types will be returned. */
  issueTypes?: ?Array<$ElementType<Scalars, 'ID'>>,
  /** Only issues assigned to these users will be returned. */
  assignees?: ?Array<$ElementType<Scalars, 'ID'>>,
  /** Only issues that have been released in these environments will be returned. */
  environmentDisplayNames?: ?Array<$ElementType<Scalars, 'String'>>,
  /** Only issues that have been released in these environment *types* will be returned. */
  environmentCategories?: ?Array<?DevOpsEnvironmentCategory>,
  /** Determines whether issues that haven't been released should be included in the results. */
  releaseStatusFilter: JiraReleasesIssueReleaseStatusFilter,
  /**
   * Only issues that have been released within this time window will be returned.
   * 
   * Note: Issues that have not been released within the time window will still be returned
   * if the `includeIssuesWithoutReleases` argument is `true`.
   */
  timeWindow: JiraReleasesTimeWindowInput,
|};

export const JiraReleasesIssueReleaseStatusFilterValues = Object.freeze({
  /** Only issues that have been released (to any environment) will be included in the results. */
  Released: 'RELEASED', 
  /** Only issues that have *not* been released (to any environment) will be included in the results. */
  Unreleased: 'UNRELEASED', 
  /**
   * Issues that have been released will be returned first, followed by issues that haven't
   * yet been released.
   */
  ReleasedAndUnreleased: 'RELEASED_AND_UNRELEASED'
});


/**
 * Used for specifying whether or not issues that haven't been released should be included
 * in the results.
 */
export type JiraReleasesIssueReleaseStatusFilter = $Values<typeof JiraReleasesIssueReleaseStatusFilterValues>;

export type JiraReleasesTimeWindowInput = {|
  after: $ElementType<Scalars, 'DateTime'>,
  before: $ElementType<Scalars, 'DateTime'>,
|};

export type LocalizationContext = {|
  /** The timezone of the user as defined in the tz database https://www.iana.org/time-zones. */
  zoneinfo?: ?$ElementType<Scalars, 'String'>,
  /** The locale of user in RFC5646 format. */
  locale?: ?$ElementType<Scalars, 'String'>,
|};

/** The input for choosing invocations of interest. */
export type LogQueryInput = {|
  /**
   * Specify which installations you want to search.
   * Optional: if empty will search all installations user has access to.
   */
  installationContexts?: ?Array<$ElementType<Scalars, 'ID'>>,
  /**
   * Limits the search to a particular function in the app.
   * Optional: if empty will search all functions.
   */
  functionKey?: ?$ElementType<Scalars, 'String'>,
  /**
   * Limits the search to a particular version of the app.
   * Optional: if empty will search all versions of the app
   */
  appVersion?: ?$ElementType<Scalars, 'String'>,
  /**
   * Limits the search to a particular date range.
   * 
   * Note: Logs may have a TTL on them so older logs may not be available
   * despite search parameters.
   */
  dates?: ?DateSearchInput,
|};


export type MarketplaceApp = {|
  __typename?: 'MarketplaceApp',
  /** A numeric identifier for an app in marketplace. */
  appId: $ElementType<Scalars, 'MarketplaceAppId'>,
  /** A human-readable identifier for an app in marketplace. */
  appKey: $ElementType<Scalars, 'String'>,
  /** App's name in Marketplace. */
  name: $ElementType<Scalars, 'String'>,
  /** Marketplace Partner that provided this app in Marketplace. */
  partner?: ?MarketplacePartner,
  /** Status of app’s listing in Marketplace. */
  listingStatus: MarketplaceListingStatus,
  productHostingOptions: Array<AtlassianProductHostingType>,
  /** App's versions in Marketplace system. */
  versions: Array<MarketplaceAppVersion>,
  /** A short phrase that summarizes what the app does. */
  tagline?: ?$ElementType<Scalars, 'String'>,
  /** Link to a statement explaining how the app uses and secures user data. */
  privacyPolicyUrl?: ?$ElementType<Scalars, 'String'>,
  /** When enabled providing customers with a place to ask questions or browse answers about the app. */
  isAtlassianCommunityEnabled: $ElementType<Scalars, 'Boolean'>,
|};


export const MarketplaceAppSupportTypeValues = Object.freeze({
  Atlassian: 'ATLASSIAN', 
  Partner: 'PARTNER'
});


/** Support type available for an app */
export type MarketplaceAppSupportType = $Values<typeof MarketplaceAppSupportTypeValues>;

/** Verion of App in Marketplace system */
export type MarketplaceAppVersion = {|
  __typename?: 'MarketplaceAppVersion',
  /** An unique number for each version, higher value indicates more recent version of the app. */
  buildNumber: $ElementType<Scalars, 'ID'>,
  /** This version identifier is for end users, more than one app versions can have same version value. */
  version: $ElementType<Scalars, 'String'>,
  /** Support type available for this app version. */
  supportType?: ?MarketplaceAppSupportType,
  /** Awards, customer testimonials, accolades, language support, or other details about this app. */
  moreDetails?: ?$ElementType<Scalars, 'String'>,
  /** The ID of a YouTube video explaining the features of this app version. */
  youtubeId?: ?$ElementType<Scalars, 'String'>,
  /** Feature highlights to be displayed on this app's listing */
  highlights?: ?Array<MarketplaceListingHighlight>,
  /** Feature screenshots to be displayed on this app's listing */
  screenshots?: ?Array<MarketplaceListingScreenshot>,
  /** List of Hosting types where compatible Atlassian product instances are installed. */
  hostingOptions: Array<AtlassianProductHostingType>,
  /** Visibility of this version of Marketplace app. */
  visibility: MarketplaceAppVersionVisibility,
  /** A URL to access the app's source code license agreement. This agreement governs how the app's source code is used. */
  sourceCodeLicenseUrl?: ?$ElementType<Scalars, 'String'>,
  /** A URL where users can find version-specific or general documentation about the app. */
  documentationUrl?: ?$ElementType<Scalars, 'String'>,
  /** Link to the terms that give end users the right to use the app. */
  endUserLicenseAgreementUrl?: ?$ElementType<Scalars, 'String'>,
  /** A URL where customers can purchase this app. */
  purchaseUrl?: ?$ElementType<Scalars, 'String'>,
  /** A URL where customers can access more information about this app. */
  learnMoreUrl?: ?$ElementType<Scalars, 'String'>,
|};

export const MarketplaceAppVersionVisibilityValues = Object.freeze({
  Private: 'PRIVATE', 
  Public: 'PUBLIC'
});


/** Visibility of the Marketplace app's version */
export type MarketplaceAppVersionVisibility = $Values<typeof MarketplaceAppVersionVisibilityValues>;

/** An image file in Atlassian Marketplace system */
export type MarketplaceImageFile = {|
  __typename?: 'MarketplaceImageFile',
  /** Unique id of the file in Atlassian Marketplace system */
  id: $ElementType<Scalars, 'String'>,
  /** Width of the image */
  width: $ElementType<Scalars, 'Int'>,
  /** Height of the image */
  height: $ElementType<Scalars, 'Int'>,
|};

export type MarketplaceListingHighlight = {|
  __typename?: 'MarketplaceListingHighlight',
  /** A short action-oriented highlight title. */
  title?: ?$ElementType<Scalars, 'String'>,
  /** Key feature summary. */
  summary?: ?$ElementType<Scalars, 'String'>,
  /** Highlight's screenshot */
  screenshot: MarketplaceListingScreenshot,
  /** Highlight's cropped screenshot */
  croppedScreenshot: MarketplaceListingImage,
  /** Screenshot's explaination */
  caption?: ?$ElementType<Scalars, 'String'>,
|};

/** Image to be displayed on a listing in Marketplace */
export type MarketplaceListingImage = {|
  __typename?: 'MarketplaceListingImage',
  /** Original image file uploaded */
  original: MarketplaceImageFile,
  /** Image scaled to get required size */
  scaled: MarketplaceImageFile,
  /** High resolution image file */
  highResolution?: ?MarketplaceImageFile,
|};

export type MarketplaceListingScreenshot = {|
  __typename?: 'MarketplaceListingScreenshot',
  /** Screenshot's explaination */
  caption?: ?$ElementType<Scalars, 'String'>,
  /** Screenshot's image file */
  image: MarketplaceListingImage,
|};

export const MarketplaceListingStatusValues = Object.freeze({
  Private: 'PRIVATE', 
  Public: 'PUBLIC', 
  Submitted: 'SUBMITTED', 
  ReadyToLaunch: 'READY_TO_LAUNCH', 
  Rejected: 'REJECTED'
});


/** Status of app’s listing in Marketplace. */
export type MarketplaceListingStatus = $Values<typeof MarketplaceListingStatusValues>;

/** Marketplace Partners provide apps and integrations available for purchase on the Atlassian Marketplace that extend the power of Atlassian products. */
export type MarketplacePartner = {|
  __typename?: 'MarketplacePartner',
  /** Unique id of a Marketplace Partner. */
  id: $ElementType<Scalars, 'MarketplacePartnerId'>,
  /** Name of Marketplace Partner */
  name: $ElementType<Scalars, 'String'>,
  /** Marketplace Partner’s address */
  address?: ?MarketplacePartnerAddress,
  /** Marketplace Partner support information */
  support?: ?MarketplacePartnerSupport,
  /** Marketplace Programs that this Marketplace Partner has participated in. */
  programs?: ?MarketplacePartnerPrograms,
  /** Tells if the Marketplace partner is an Atlassian’s internal one. */
  partnerType?: ?MarketplacePartnerType,
|};

/** Marketplace Partner's address */
export type MarketplacePartnerAddress = {|
  __typename?: 'MarketplacePartnerAddress',
  /** Line 1 of Marketplace Partner’s address */
  line1?: ?$ElementType<Scalars, 'String'>,
  /** Line 2 of Marketplace Partner’s address */
  line2?: ?$ElementType<Scalars, 'String'>,
  /** City of Marketplace Partner’s address */
  city?: ?$ElementType<Scalars, 'String'>,
  /** State of Marketplace Partner’s address */
  state?: ?$ElementType<Scalars, 'String'>,
  /** Country of Marketplace Partner’s address */
  country?: ?$ElementType<Scalars, 'String'>,
  /** Postal code of Marketplace Partner’s address */
  postalCode?: ?$ElementType<Scalars, 'String'>,
|};


/** Marketplace Programs that this Marketplace Partner has participated in. */
export type MarketplacePartnerPrograms = {|
  __typename?: 'MarketplacePartnerPrograms',
  isCloudAppSecuritySelfAssessmentDone?: ?$ElementType<Scalars, 'Boolean'>,
|};

/** Marketplace Partner's support information */
export type MarketplacePartnerSupport = {|
  __typename?: 'MarketplacePartnerSupport',
  /** Marketplace Partner’s support contact details */
  contactDetails?: ?MarketplacePartnerSupportContact,
  /** Marketplace Partner’s support availability details */
  availability?: ?MarketplacePartnerSupportAvailability,
|};

/** Marketplace Partner's support availability information */
export type MarketplacePartnerSupportAvailability = {|
  __typename?: 'MarketplacePartnerSupportAvailability',
  /** Days of week when Marketplace Partner support is available. */
  daysOfWeek: Array<$ElementType<Scalars, 'String'>>,
  /** Support availability start time, in ISO time format `hh:mm` e.g, 23:25 */
  startTime?: ?$ElementType<Scalars, 'String'>,
  /** Support availability end time, in ISO time format `hh:mm` e.g, 23:25 */
  endTime?: ?$ElementType<Scalars, 'String'>,
  /** Support availability timezone for startTime and endTime values. e.g, “America/Los_Angeles” */
  timezone?: ?$ElementType<Scalars, 'String'>,
  /** Dates on which MarketplacePartner’s support is not available due to holiday */
  holidays: Array<MarketplacePartnerSupportHoliday>,
|};

/** Marketplace Partner's support contact information */
export type MarketplacePartnerSupportContact = {|
  __typename?: 'MarketplacePartnerSupportContact',
  /** Marketplace Partner’s support contact email id */
  emailId?: ?$ElementType<Scalars, 'String'>,
  /** Marketplace Partner’s support contact phone number */
  phoneNumber?: ?$ElementType<Scalars, 'String'>,
  /** Marketplace Partner’s support website URL */
  websiteUrl?: ?$ElementType<Scalars, 'String'>,
|};

/** Marketplace Partner's support holiday */
export type MarketplacePartnerSupportHoliday = {|
  __typename?: 'MarketplacePartnerSupportHoliday',
  /** Holiday’s title */
  title: $ElementType<Scalars, 'String'>,
  /** Tells whether it occurs one time or is annual. */
  holidayFrequency: MarketplacePartnerSupportHolidayFrequency,
  /** Support holiday date, follows ISO date format `YYYY-MM-DD` e.g, 2020-08-12 */
  date: $ElementType<Scalars, 'String'>,
|};

export const MarketplacePartnerSupportHolidayFrequencyValues = Object.freeze({
  OneTime: 'ONE_TIME', 
  Annual: 'ANNUAL'
});


/** Tells whether support is on holiday only one time or if it repeats annually. */
export type MarketplacePartnerSupportHolidayFrequency = $Values<typeof MarketplacePartnerSupportHolidayFrequencyValues>;

export const MarketplacePartnerTypeValues = Object.freeze({
  AtlassianInternal: 'ATLASSIAN_INTERNAL'
});


/** Tells if the Marketplace partner is an Atlassian’s internal one. */
export type MarketplacePartnerType = $Values<typeof MarketplacePartnerTypeValues>;

/** Move sprint down */
export type MoveSprintDownInput = {|
  boardId: $ElementType<Scalars, 'ID'>,
  sprintId: $ElementType<Scalars, 'ID'>,
|};

export type MoveSprintDownResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'MoveSprintDownResponse',
    boardScope?: ?BoardScope,
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
  |}
|};

/** Move sprint up */
export type MoveSprintUpInput = {|
  boardId: $ElementType<Scalars, 'ID'>,
  sprintId: $ElementType<Scalars, 'ID'>,
|};

export type MoveSprintUpResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'MoveSprintUpResponse',
    boardScope?: ?BoardScope,
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
  |}
|};

export type Mutation = {|
  __typename?: 'Mutation',
  appStorage?: ?AppStorageMutation,
  /** THIS OPERATION IS IN BETA */
  scanPolarisProject?: ?PolarisProject,
  /** THIS OPERATION IS IN BETA */
  createPolarisView?: ?CreatePolarisViewPayload,
  /** THIS OPERATION IS IN BETA */
  updatePolarisView?: ?UpdatePolarisViewPayload,
  /** THIS OPERATION IS IN BETA */
  deletePolarisView?: ?DeletePolarisViewPayload,
  /** THIS OPERATION IS IN BETA */
  changePolarisIdea?: ?ChangePolarisIdeaPayload,
  /** THIS OPERATION IS IN BETA */
  createPolarisIdea?: ?CreatePolarisIdeaPayload,
  /** THIS OPERATION IS IN BETA */
  changePolarisIdeaRank?: ?ChangePolarisIdeaRankPayload,
  /**
   * Create a tunnel for an app
   *         
   * This will allow api calls for this app to be tunnelled to a locally running
   * server to help with writing and debugging functions.
   *         
   * This call will fail if a tunnel already exists, unless the 'force' flag is set.
   *         
   * Tunnels automatically expire after 30 minutes
   */
  createAppTunnel?: ?CreateAppTunnelResponse,
  /**
   * Delete a tunnel for an app
   *         
   * All traffic for this app will return to invoking the deployed function
   * instead of the tunnel url.
   */
  deleteAppTunnel?: ?GenericMutationResponse,
  /**
   * Invoke a function associated with a specific extension.
   *         
   * This is intended to be the main way to interact with extension functions
   * created for apps
   */
  invokeExtension?: ?InvokeExtensionResponse,
  /**
   * Invoke a function using the aux effects handling pipeline
   *         
   * This includes some additional processing over normal invocations, including
   * validation and transformation, and expects functions to return payloads that
   * match the AUX effects spec.
   */
  invokeAuxEffects?: ?InvokeAuxEffectsResponse,
  /**
   * Creates a webtrigger URL. If webtrigger url is already created for given `input` the old url will be returned
   * unless `forceCreate` flag is set to true - in that case new url will be always created.
   */
  createWebTriggerUrl?: ?CreateWebTriggerUrlResponse,
  /** Deletes a webtrigger URL. */
  deleteWebTriggerUrl?: ?DeleteWebTriggerUrlResponse,
  createColumn?: ?CreateColumnOutput,
  setColumnName?: ?SetColumnNameOutput,
  rankColumn?: ?RankColumnOutput,
  setColumnLimit?: ?SetColumnLimitOutput,
  deleteColumn?: ?DeleteColumnOutput,
  startSprint?: ?SprintResponse,
  createSprint?: ?CreateSprintResponse,
  completeSprint?: ?CompleteSprintResponse,
  deleteSprint?: ?MutationResponse,
  moveSprintUp?: ?MoveSprintUpResponse,
  moveSprintDown?: ?MoveSprintDownResponse,
  editSprint?: ?SprintResponse,
  /**
   * Sets the user swimlane strategy for the board.  Use NONE if not using swimlanes.
   * Strategy affects the current user alone.
   */
  setUserSwimlaneStrategy?: ?SetSwimlaneStrategyResponse,
  /**
   * Sets the admin swimlane strategy for the board.  Use NONE is not using swimlanes.
   * Strategy effects everyone who views the board.
   */
  setSwimlaneStrategy?: ?SetSwimlaneStrategyResponse,
  /** Creates an application in Xen */
  createApp?: ?CreateAppResponse,
  /** Deletes an application from Xen */
  deleteApp?: ?DeleteAppResponse,
  createAppDeploymentUrl?: ?CreateAppDeploymentUrlResponse,
  createHostedResourceUploadUrl?: ?CreateHostedResourceUploadUrlPayload,
  createContainerToken?: ?CreateContainerTokenResponse,
  /**
   * Sets the outbound-auth service credentials in a specific environment for a given app.
   *         
   * This makes the assumption that the environment (and hence container) was already created,
   * and the deploy containing the relevant outbound-auth service definition was already deployed.
   */
  setExternalAuthCredentials?: ?GenericMutationResponse,
  /**
   * Sets a key-value pair for a given environment.
   *         
   * It will optionally support encryption of the provided pair for sensitive variables.
   * This operation is an upsert.
   */
  setAppEnvironmentVariable?: ?GenericMutationResponse,
  /**
   * Deletes a key-value pair for a given environment.
   *         
   * This operation is idempotent.
   */
  deleteAppEnvironmentVariable?: ?GenericMutationResponse,
  createAppDeployment?: ?CreateAppDeploymentResponse,
  /** Installs a given app + environment pair into a given installation context. */
  installApp?: ?AppInstallationResponse,
  /** Upgrades a given app + environment pair into a given installation context. */
  upgradeApp?: ?AppInstallationUpgradeResponse,
  /** Uninstalls a given installationId */
  uninstallApp?: ?AppUninstallationResponse,
  /** Onboard a list of external developers into the closed beta by AAIDs */
  onboardUsers?: ?GenericMutationResponse,
|};


export type MutationScanPolarisProjectArgs = {|
  input: ScanPolarisProjectInput,
|};


export type MutationCreatePolarisViewArgs = {|
  input: CreatePolarisViewInput,
|};


export type MutationUpdatePolarisViewArgs = {|
  id: $ElementType<Scalars, 'ID'>,
  input: UpdatePolarisViewInput,
|};


export type MutationDeletePolarisViewArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type MutationChangePolarisIdeaArgs = {|
  input: ChangePolarisIdeaInput,
|};


export type MutationCreatePolarisIdeaArgs = {|
  input: CreatePolarisIdeaInput,
|};


export type MutationChangePolarisIdeaRankArgs = {|
  input: ChangePolarisIdeaRankInput,
|};


export type MutationCreateAppTunnelArgs = {|
  input: CreateAppTunnelInput,
|};


export type MutationDeleteAppTunnelArgs = {|
  input: DeleteAppTunnelInput,
|};


export type MutationInvokeExtensionArgs = {|
  input: InvokeExtensionInput,
|};


export type MutationInvokeAuxEffectsArgs = {|
  input: InvokeAuxEffectsInput,
|};


export type MutationCreateWebTriggerUrlArgs = {|
  input: WebTriggerUrlInput,
  forceCreate: $ElementType<Scalars, 'Boolean'>,
|};


export type MutationDeleteWebTriggerUrlArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type MutationCreateColumnArgs = {|
  input: CreateColumnInput,
|};


export type MutationSetColumnNameArgs = {|
  input: SetColumnNameInput,
|};


export type MutationRankColumnArgs = {|
  input: RankColumnInput,
|};


export type MutationSetColumnLimitArgs = {|
  input: SetColumnLimitInput,
|};


export type MutationDeleteColumnArgs = {|
  input: DeleteColumnInput,
|};


export type MutationStartSprintArgs = {|
  input: StartSprintInput,
|};


export type MutationCreateSprintArgs = {|
  input: CreateSprintInput,
|};


export type MutationCompleteSprintArgs = {|
  input: CompleteSprintInput,
|};


export type MutationDeleteSprintArgs = {|
  input: DeleteSprintInput,
|};


export type MutationMoveSprintUpArgs = {|
  input: MoveSprintUpInput,
|};


export type MutationMoveSprintDownArgs = {|
  input: MoveSprintDownInput,
|};


export type MutationEditSprintArgs = {|
  input: EditSprintInput,
|};


export type MutationSetUserSwimlaneStrategyArgs = {|
  input: SetSwimlaneStrategyInput,
|};


export type MutationSetSwimlaneStrategyArgs = {|
  input: SetSwimlaneStrategyInput,
|};


export type MutationCreateAppArgs = {|
  input: CreateAppInput,
|};


export type MutationDeleteAppArgs = {|
  input: DeleteAppInput,
|};


export type MutationCreateAppDeploymentUrlArgs = {|
  input: CreateAppDeploymentUrlInput,
|};


export type MutationCreateHostedResourceUploadUrlArgs = {|
  input: CreateHostedResourceUploadUrlInput,
|};


export type MutationCreateContainerTokenArgs = {|
  input: CreateContainerTokenInput,
|};


export type MutationSetExternalAuthCredentialsArgs = {|
  input: SetExternalAuthCredentialsInput,
|};


export type MutationSetAppEnvironmentVariableArgs = {|
  input: SetAppEnvironmentVariableInput,
|};


export type MutationDeleteAppEnvironmentVariableArgs = {|
  input: DeleteAppEnvironmentVariableInput,
|};


export type MutationCreateAppDeploymentArgs = {|
  input: CreateAppDeploymentInput,
|};


export type MutationInstallAppArgs = {|
  input: AppInstallationInput,
|};


export type MutationUpgradeAppArgs = {|
  input: AppInstallationUpgradeInput,
|};


export type MutationUninstallAppArgs = {|
  input: AppUninstallationInput,
|};


export type MutationOnboardUsersArgs = {|
  input: UserOnboardingInput,
|};

/** An error that has occured in response to a mutation */
export type MutationError = {|
  __typename?: 'MutationError',
  /** A human readable error message */
  message?: ?$ElementType<Scalars, 'String'>,
  /** A list of extension properties to the error */
  extensions?: ?MutationErrorExtension,
|};

/**
 * A concrete error type that can be returned in response to a failed mutation
 * 
 * This extension carries additional categorisation information about the error
 */
export type MutationErrorExtension = {|
  /** A numerical code (as a HTTP status code) representing the error category */
  statusCode?: ?$ElementType<Scalars, 'Int'>,
  /** Application specific error trace */
  errorType?: ?$ElementType<Scalars, 'String'>,
|};

/**
 * A mutation response interface.
 * 
 * According to the Atlassian stansdards, all mutations should return a type which implements this interface.
 * 
 * [Apollo GraphQL Documentation](https://www.apollographql.com/docs/apollo-server/essentials/schema#mutation-responses)
 */
export type MutationResponse = {|
  /** A numerical code (as a HTTP status code) representing the status of the mutation */
  statusCode: $ElementType<Scalars, 'Int'>,
  /** Was this mutation successful */
  success: $ElementType<Scalars, 'Boolean'>,
  /** A message for this mutation */
  message: $ElementType<Scalars, 'String'>,
|};

export type MyActivities = {|
  __typename?: 'MyActivities',
  /**
   * get all activity for the currently logged in user
   * - filters - query filters for the activity stream
   * - first - show 1st <N> items of the response
   */
  all?: ?ActivitiesConnection,
  /**
   * get "worked on" activity for the currently logged in user
   * - filters - query filters for the activity stream
   * - first - show 1st <N> items of the response
   */
  workedOn?: ?ActivitiesConnection,
  /**
   * get "viewed" activity for the currently logged in user
   * - filters - query filters for the activity stream
   * - first - show 1st <N> items of the response
   */
  viewed?: ?ActivitiesConnection,
|};


export type MyActivitiesAllArgs = {|
  filters?: ?Array<ActivitiesFilter>,
  first?: ?$ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
|};


export type MyActivitiesWorkedOnArgs = {|
  filters?: ?Array<ActivitiesFilter>,
  first?: ?$ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
|};


export type MyActivitiesViewedArgs = {|
  filters?: ?Array<ActivitiesFilter>,
  first?: ?$ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
|};

/**  --------------------------------------- API v1 */
export type MyActivity = {|
  __typename?: 'MyActivity',
  /**
   * get all activity
   * - filter - query filter for the activity stream
   * - first - show 1st <N> items of the response
   */
  all: ActivityConnection,
  /**
   * get "Worked on" activity
   * - filter - query filter for the activity stream
   * - first - show 1st <N> items of the response
   */
  workedOn: ActivityConnection,
  /**
   * get "Viewed" activity
   * - filter - query filter for the activity stream
   * - first - show 1st <N> items of the response
   */
  viewed: ActivityConnection,
|};


/**  --------------------------------------- API v1 */
export type MyActivityAllArgs = {|
  filter?: ?ActivityFilter,
  first?: ?$ElementType<Scalars, 'Int'>,
|};


/**  --------------------------------------- API v1 */
export type MyActivityWorkedOnArgs = {|
  filter?: ?ActivityFilter,
  first?: ?$ElementType<Scalars, 'Int'>,
|};


/**  --------------------------------------- API v1 */
export type MyActivityViewedArgs = {|
  filter?: ?ActivityFilter,
  first?: ?$ElementType<Scalars, 'Int'>,
|};

export type Node = {|
  id: $ElementType<Scalars, 'ID'>,
|};

export type OpsgenieAlertCountByPriority = {|
  __typename?: 'OpsgenieAlertCountByPriority',
  priority?: ?$ElementType<Scalars, 'String'>,
  countPerDay?: ?Array<?OpsgenieAlertCountPerDay>,
|};

export type OpsgenieAlertCountPerDay = {|
  __typename?: 'OpsgenieAlertCountPerDay',
  day?: ?$ElementType<Scalars, 'String'>,
  count?: ?$ElementType<Scalars, 'Int'>,
|};

export type OpsgenieQuery = {|
  __typename?: 'OpsgenieQuery',
  opsgenieTeam?: ?OpsgenieTeam,
  /** for hydration batching, restricted to 25. */
  opsgenieTeams?: ?Array<?OpsgenieTeam>,
|};


export type OpsgenieQueryOpsgenieTeamArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type OpsgenieQueryOpsgenieTeamsArgs = {|
  ids: Array<$ElementType<Scalars, 'ID'>>,
|};

export type OpsgenieSchedule = {|
  __typename?: 'OpsgenieSchedule',
  id: $ElementType<Scalars, 'ID'>,
  name?: ?$ElementType<Scalars, 'String'>,
  enabled?: ?$ElementType<Scalars, 'Boolean'>,
  timezone?: ?$ElementType<Scalars, 'String'>,
  finalTimeline?: ?OpsgenieScheduleTimeline,
|};


export type OpsgenieScheduleFinalTimelineArgs = {|
  startTime: $ElementType<Scalars, 'DateTime'>,
  endTime: $ElementType<Scalars, 'DateTime'>,
|};

export type OpsgenieSchedulePeriod = {|
  __typename?: 'OpsgenieSchedulePeriod',
  startDate?: ?$ElementType<Scalars, 'DateTime'>,
  endDate?: ?$ElementType<Scalars, 'DateTime'>,
  type?: ?$ElementType<Scalars, 'String'>,
  /**  Enum? */
  recipientId?: ?$ElementType<Scalars, 'ID'>,
|};

export type OpsgenieScheduleRotation = {|
  __typename?: 'OpsgenieScheduleRotation',
  id?: ?$ElementType<Scalars, 'ID'>,
  /**  is this id needed? */
  name?: ?$ElementType<Scalars, 'String'>,
  order?: ?$ElementType<Scalars, 'Int'>,
  /**  More than 50 possible? if yes => Connection */
  periods?: ?Array<?OpsgenieSchedulePeriod>,
|};

export type OpsgenieScheduleTimeline = {|
  __typename?: 'OpsgenieScheduleTimeline',
  startDate?: ?$ElementType<Scalars, 'DateTime'>,
  endDate?: ?$ElementType<Scalars, 'DateTime'>,
  /**  # More than 50 possible? if yes => Connection */
  rotations?: ?Array<?OpsgenieScheduleRotation>,
|};

export type OpsgenieTeam = {|
  ...Node,
  ...{|
    __typename?: 'OpsgenieTeam',
    id: $ElementType<Scalars, 'ID'>,
    /**  ARI */
  name?: ?$ElementType<Scalars, 'String'>,
    description?: ?$ElementType<Scalars, 'String'>,
    createdAt?: ?$ElementType<Scalars, 'DateTime'>,
    updatedAt?: ?$ElementType<Scalars, 'DateTime'>,
    members?: ?OpsgenieTeamMemberConnection,
    schedules?: ?Array<?OpsgenieSchedule>,
    alertCounts?: ?Array<?OpsgenieAlertCountByPriority>,
  |}
|};


export type OpsgenieTeamMembersArgs = {|
  first?: ?$ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
  last?: ?$ElementType<Scalars, 'Int'>,
  before?: ?$ElementType<Scalars, 'String'>,
|};


export type OpsgenieTeamAlertCountsArgs = {|
  startTime: $ElementType<Scalars, 'DateTime'>,
  endTime: $ElementType<Scalars, 'DateTime'>,
  timezone?: ?$ElementType<Scalars, 'String'>,
  tags?: ?Array<$ElementType<Scalars, 'String'>>,
|};

export type OpsgenieTeamMember = {|
  __typename?: 'OpsgenieTeamMember',
  user?: ?User,
|};

export type OpsgenieTeamMemberConnection = {|
  __typename?: 'OpsgenieTeamMemberConnection',
  pageInfo: PageInfo,
  edges?: ?Array<?OpsgenieTeamMemberEdge>,
|};

export type OpsgenieTeamMemberEdge = {|
  __typename?: 'OpsgenieTeamMemberEdge',
  node?: ?OpsgenieTeamMember,
  cursor: $ElementType<Scalars, 'String'>,
|};

/** Relay-style PageInfo type. */
export type PageInfo = {|
  __typename?: 'PageInfo',
  hasNextPage: $ElementType<Scalars, 'Boolean'>,
  hasPreviousPage: $ElementType<Scalars, 'Boolean'>,
|};

/** The general shape of a mutation response. */
export type Payload = {|
  /** Was this mutation successful */
  success: $ElementType<Scalars, 'Boolean'>,
  /** A list of errors if the mutation was not successful */
  errors?: ?Array<MutationError>,
|};

export type PolarisAuditFilter = {|
  since?: ?$ElementType<Scalars, 'String'>,
  action?: ?$ElementType<Scalars, 'String'>,
  user?: ?$ElementType<Scalars, 'String'>,
|};

export type PolarisAuditRecord = {|
  __typename?: 'PolarisAuditRecord',
  sequence: $ElementType<Scalars, 'Int'>,
  timestamp: $ElementType<Scalars, 'String'>,
  action: $ElementType<Scalars, 'String'>,
  requestId?: ?$ElementType<Scalars, 'String'>,
  cloudId?: ?$ElementType<Scalars, 'String'>,
  user?: ?$ElementType<Scalars, 'String'>,
  agent?: ?$ElementType<Scalars, 'String'>,
  query?: ?$ElementType<Scalars, 'String'>,
  disposition?: ?$ElementType<Scalars, 'Int'>,
  size?: ?$ElementType<Scalars, 'Int'>,
  duration?: ?$ElementType<Scalars, 'Float'>,
  effort?: ?PolarisAuditWorkLoad,
|};

export type PolarisAuditWorkLoad = {|
  __typename?: 'PolarisAuditWorkLoad',
  jiraRead?: ?$ElementType<Scalars, 'Int'>,
  jiraWrite?: ?$ElementType<Scalars, 'Int'>,
  jiraSearch?: ?$ElementType<Scalars, 'Int'>,
  jiraTime?: ?$ElementType<Scalars, 'Float'>,
  dbCreate?: ?$ElementType<Scalars, 'Int'>,
  dbRead?: ?$ElementType<Scalars, 'Int'>,
  dbUpdate?: ?$ElementType<Scalars, 'Int'>,
  dbDelete?: ?$ElementType<Scalars, 'Int'>,
  dbTime?: ?$ElementType<Scalars, 'Float'>,
|};

export type PolarisBoardVisualization = {|
  ...PolarisVisualization,
  ...{|
    __typename?: 'PolarisBoardVisualization',
    iconUrl: $ElementType<Scalars, 'String'>,
    /** The grouping field for this visualization. */
  groupBy?: ?PolarisIdeaField,
    /** The set of fields to include in cards */
  include: Array<PolarisCardField>,
  |}
|};

export type PolarisCardField = {|
  __typename?: 'PolarisCardField',
  field: PolarisIdeaField,
|};

export type PolarisFilterInput = {|
  jql?: ?$ElementType<Scalars, 'String'>,
|};

export type PolarisGroupValue = {|
  __typename?: 'PolarisGroupValue',
  label?: ?$ElementType<Scalars, 'String'>,
  /**  a label value (which has no identity besides its string value) */
  id?: ?$ElementType<Scalars, 'String'>,
|};

export type PolarisGroupValueInput = {|
  label?: ?$ElementType<Scalars, 'String'>,
  /**  a label value (which has no identity besides its string value) */
  id?: ?$ElementType<Scalars, 'String'>,
|};

/** An PolarisIdea is the unit of management in Polaris */
export type PolarisIdea = {|
  __typename?: 'PolarisIdea',
  id: $ElementType<Scalars, 'ID'>,
  issueId?: ?$ElementType<Scalars, 'Long'>,
  /** Key is builtin; it is the key for the underlying Jira issue */
  key?: ?$ElementType<Scalars, 'String'>,
  /** Summary is builtin */
  summary?: ?$ElementType<Scalars, 'String'>,
  /** Description is builtin */
  description?: ?$ElementType<Scalars, 'String'>,
  /** Status is builtin */
  status?: ?PolarisIdeaStatus,
  /** The values for extension fields */
  fields?: ?Array<PolarisIdeaFieldValue>,
  /** Does this idea have unread information in it? */
  unread?: ?$ElementType<Scalars, 'Boolean'>,
  /** What are the supporting objects */
  supports?: ?PolarisSupportConnection,
  /** What are the implementations, and what is their status */
  implementations?: ?PolarisImplementationConnection,
|};

export type PolarisIdeaConnection = {|
  __typename?: 'PolarisIdeaConnection',
  edges: Array<PolarisIdeaEdge>,
  nodes?: ?Array<PolarisIdea>,
  pageInfo: PolarisIdeaPageInfo,
  totalCount: $ElementType<Scalars, 'Int'>,
|};

export type PolarisIdeaDateField = {|
  ...PolarisIdeaField,
  ...{|
    __typename?: 'PolarisIdeaDateField',
    id: $ElementType<Scalars, 'ID'>,
    fieldId?: ?$ElementType<Scalars, 'Int'>,
    fieldName?: ?$ElementType<Scalars, 'String'>,
    label: $ElementType<Scalars, 'String'>,
    editable: $ElementType<Scalars, 'Boolean'>,
    sortable: $ElementType<Scalars, 'Boolean'>,
    groupable: $ElementType<Scalars, 'Boolean'>,
    linearizable: $ElementType<Scalars, 'Boolean'>,
    defaultSortOrder?: ?PolarisSortOrder,
    jiraFieldKey?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaDateFieldValue = {|
  ...PolarisIdeaFieldValue,
  ...{|
    __typename?: 'PolarisIdeaDateFieldValue',
    fieldId: $ElementType<Scalars, 'Int'>,
    value: $ElementType<Scalars, 'String'>,
    link?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaDateTimeField = {|
  ...PolarisIdeaField,
  ...{|
    __typename?: 'PolarisIdeaDateTimeField',
    id: $ElementType<Scalars, 'ID'>,
    fieldId?: ?$ElementType<Scalars, 'Int'>,
    fieldName?: ?$ElementType<Scalars, 'String'>,
    label: $ElementType<Scalars, 'String'>,
    editable: $ElementType<Scalars, 'Boolean'>,
    sortable: $ElementType<Scalars, 'Boolean'>,
    groupable: $ElementType<Scalars, 'Boolean'>,
    linearizable: $ElementType<Scalars, 'Boolean'>,
    defaultSortOrder?: ?PolarisSortOrder,
    jiraFieldKey?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaDateTimeFieldValue = {|
  ...PolarisIdeaFieldValue,
  ...{|
    __typename?: 'PolarisIdeaDateTimeFieldValue',
    fieldId: $ElementType<Scalars, 'Int'>,
    value: $ElementType<Scalars, 'String'>,
    link?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaDocumentField = {|
  ...PolarisIdeaField,
  ...{|
    __typename?: 'PolarisIdeaDocumentField',
    id: $ElementType<Scalars, 'ID'>,
    fieldId?: ?$ElementType<Scalars, 'Int'>,
    fieldName?: ?$ElementType<Scalars, 'String'>,
    label: $ElementType<Scalars, 'String'>,
    editable: $ElementType<Scalars, 'Boolean'>,
    sortable: $ElementType<Scalars, 'Boolean'>,
    groupable: $ElementType<Scalars, 'Boolean'>,
    linearizable: $ElementType<Scalars, 'Boolean'>,
    defaultSortOrder?: ?PolarisSortOrder,
    jiraFieldKey?: ?$ElementType<Scalars, 'String'>,
  |}
|};

/**
 * PolarisIdeaDocumentFieldValue represents an ADF document,
 * which is the value for description fields and for fields
 * of type "Paragraph" in the NextGen UI
 */
export type PolarisIdeaDocumentFieldValue = {|
  ...PolarisIdeaFieldValue,
  ...{|
    __typename?: 'PolarisIdeaDocumentFieldValue',
    fieldId: $ElementType<Scalars, 'Int'>,
    value: $ElementType<Scalars, 'String'>,
    link?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaEdge = {|
  __typename?: 'PolarisIdeaEdge',
  node: PolarisIdea,
  cursor: $ElementType<Scalars, 'String'>,
|};

/**
 * An PolarisIdeaField is a unit of information that can be instantiated
 * for an PolarisIdea.
 */
export type PolarisIdeaField = {|
  /** The fully qualified globally unique id (ARI) for this field */
  id: $ElementType<Scalars, 'ID'>,
  /**
   * The key of this field in the `fields` structure if it is a Jira
   * field.  Not set for things that don't appear in the fields section
   * of a Jira issue object, such as "key"
   */
  jiraFieldKey?: ?$ElementType<Scalars, 'String'>,
  /**
   * A short identifier suitable for at least within this project,
   * but only supplied for fields that are returned via an PolarisIdea's fields
   * attribute.  If not present, this field represents a builtin field
   * on PolarisIdea.
   */
  fieldId?: ?$ElementType<Scalars, 'Int'>,
  /**
   * The name of the field built in to PolarisIdea, if this field represents
   * a builtin field.
   */
  fieldName?: ?$ElementType<Scalars, 'String'>,
  label: $ElementType<Scalars, 'String'>,
  /**
   * Are values in this field directly editable?  Some integrations
   * might bring in data that is not directly editable.
   */
  editable: $ElementType<Scalars, 'Boolean'>,
  /**
   * Can rows be sorted by this field?  Some fields are not commensurate
   * and hence can't be sorted.
   */
  sortable: $ElementType<Scalars, 'Boolean'>,
  /**
   * Is this field suitable for grouping operations like Board view?
   * (i.e., may it appear in the groupBy field in a view?)
   */
  groupable: $ElementType<Scalars, 'Boolean'>,
  /**
   * Is this field suitable for linear operations like plotting on an axis?
   * (i.e., may it appear in the x or y field in a view?)
   */
  linearizable: $ElementType<Scalars, 'Boolean'>,
  /**
   * What is the default sort order?  This is the order you get on
   * "first click" of the column, and also the semantics of "ORDER BY"
   * without an ASC or DESC qualifier.
   */
  defaultSortOrder?: ?PolarisSortOrder,
|};

export type PolarisIdeaFieldOption = {|
  __typename?: 'PolarisIdeaFieldOption',
  id: $ElementType<Scalars, 'ID'>,
  label: $ElementType<Scalars, 'String'>,
|};

/**
 * An PolarisIdeaField is an extensible unit of information (a cell)
 * attached to an idea
 */
export type PolarisIdeaFieldValue = {|
  fieldId: $ElementType<Scalars, 'Int'>,
  /**
   * An optional link (url) this field value is associated with.  For
   * example, if MRR appears in a field value, it might link to the
   * source of truth for that value
   */
  link?: ?$ElementType<Scalars, 'String'>,
|};

export type PolarisIdeaIssueTypeField = {|
  ...PolarisIdeaField,
  ...{|
    __typename?: 'PolarisIdeaIssueTypeField',
    id: $ElementType<Scalars, 'ID'>,
    fieldId?: ?$ElementType<Scalars, 'Int'>,
    fieldName?: ?$ElementType<Scalars, 'String'>,
    label: $ElementType<Scalars, 'String'>,
    editable: $ElementType<Scalars, 'Boolean'>,
    sortable: $ElementType<Scalars, 'Boolean'>,
    groupable: $ElementType<Scalars, 'Boolean'>,
    defaultSortOrder?: ?PolarisSortOrder,
    linearizable: $ElementType<Scalars, 'Boolean'>,
    jiraFieldKey?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaKeyField = {|
  ...PolarisIdeaField,
  ...{|
    __typename?: 'PolarisIdeaKeyField',
    id: $ElementType<Scalars, 'ID'>,
    fieldId?: ?$ElementType<Scalars, 'Int'>,
    fieldName?: ?$ElementType<Scalars, 'String'>,
    label: $ElementType<Scalars, 'String'>,
    editable: $ElementType<Scalars, 'Boolean'>,
    sortable: $ElementType<Scalars, 'Boolean'>,
    groupable: $ElementType<Scalars, 'Boolean'>,
    defaultSortOrder?: ?PolarisSortOrder,
    linearizable: $ElementType<Scalars, 'Boolean'>,
    jiraFieldKey?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaLabelsField = {|
  ...PolarisIdeaField,
  ...{|
    __typename?: 'PolarisIdeaLabelsField',
    id: $ElementType<Scalars, 'ID'>,
    fieldId?: ?$ElementType<Scalars, 'Int'>,
    fieldName?: ?$ElementType<Scalars, 'String'>,
    label: $ElementType<Scalars, 'String'>,
    editable: $ElementType<Scalars, 'Boolean'>,
    sortable: $ElementType<Scalars, 'Boolean'>,
    groupable: $ElementType<Scalars, 'Boolean'>,
    linearizable: $ElementType<Scalars, 'Boolean'>,
    defaultSortOrder?: ?PolarisSortOrder,
    jiraFieldKey?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaLabelsFieldValue = {|
  ...PolarisIdeaFieldValue,
  ...{|
    __typename?: 'PolarisIdeaLabelsFieldValue',
    fieldId: $ElementType<Scalars, 'Int'>,
    value: Array<$ElementType<Scalars, 'String'>>,
    link?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaNumberField = {|
  ...PolarisIdeaField,
  ...{|
    __typename?: 'PolarisIdeaNumberField',
    id: $ElementType<Scalars, 'ID'>,
    fieldId?: ?$ElementType<Scalars, 'Int'>,
    fieldName?: ?$ElementType<Scalars, 'String'>,
    label: $ElementType<Scalars, 'String'>,
    editable: $ElementType<Scalars, 'Boolean'>,
    sortable: $ElementType<Scalars, 'Boolean'>,
    groupable: $ElementType<Scalars, 'Boolean'>,
    linearizable: $ElementType<Scalars, 'Boolean'>,
    defaultSortOrder?: ?PolarisSortOrder,
    jiraFieldKey?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaNumberFieldValue = {|
  ...PolarisIdeaFieldValue,
  ...{|
    __typename?: 'PolarisIdeaNumberFieldValue',
    fieldId: $ElementType<Scalars, 'Int'>,
    value: $ElementType<Scalars, 'Float'>,
    link?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaOptionField = {|
  ...PolarisIdeaField,
  ...{|
    __typename?: 'PolarisIdeaOptionField',
    id: $ElementType<Scalars, 'ID'>,
    fieldId?: ?$ElementType<Scalars, 'Int'>,
    fieldName?: ?$ElementType<Scalars, 'String'>,
    label: $ElementType<Scalars, 'String'>,
    editable: $ElementType<Scalars, 'Boolean'>,
    sortable: $ElementType<Scalars, 'Boolean'>,
    groupable: $ElementType<Scalars, 'Boolean'>,
    linearizable: $ElementType<Scalars, 'Boolean'>,
    defaultSortOrder?: ?PolarisSortOrder,
    jiraFieldKey?: ?$ElementType<Scalars, 'String'>,
    options?: ?Array<PolarisIdeaFieldOption>,
  |}
|};

export type PolarisIdeaOptionFieldValue = {|
  ...PolarisIdeaFieldValue,
  ...{|
    __typename?: 'PolarisIdeaOptionFieldValue',
    fieldId: $ElementType<Scalars, 'Int'>,
    value: PolarisIdeaFieldOption,
    link?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaOptionsField = {|
  ...PolarisIdeaField,
  ...{|
    __typename?: 'PolarisIdeaOptionsField',
    id: $ElementType<Scalars, 'ID'>,
    fieldId?: ?$ElementType<Scalars, 'Int'>,
    fieldName?: ?$ElementType<Scalars, 'String'>,
    label: $ElementType<Scalars, 'String'>,
    editable: $ElementType<Scalars, 'Boolean'>,
    sortable: $ElementType<Scalars, 'Boolean'>,
    groupable: $ElementType<Scalars, 'Boolean'>,
    linearizable: $ElementType<Scalars, 'Boolean'>,
    defaultSortOrder?: ?PolarisSortOrder,
    jiraFieldKey?: ?$ElementType<Scalars, 'String'>,
    options?: ?Array<PolarisIdeaFieldOption>,
  |}
|};

export type PolarisIdeaOptionsFieldValue = {|
  ...PolarisIdeaFieldValue,
  ...{|
    __typename?: 'PolarisIdeaOptionsFieldValue',
    fieldId: $ElementType<Scalars, 'Int'>,
    value: Array<PolarisIdeaFieldOption>,
    link?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaPageInfo = {|
  __typename?: 'PolarisIdeaPageInfo',
  hasPreviousPage: $ElementType<Scalars, 'Boolean'>,
  hasNextPage: $ElementType<Scalars, 'Boolean'>,
  startCursor: $ElementType<Scalars, 'String'>,
  endCursor: $ElementType<Scalars, 'String'>,
|};

export type PolarisIdeaSpecialField = {|
  ...PolarisIdeaField,
  ...{|
    __typename?: 'PolarisIdeaSpecialField',
    id: $ElementType<Scalars, 'ID'>,
    fieldId?: ?$ElementType<Scalars, 'Int'>,
    fieldName?: ?$ElementType<Scalars, 'String'>,
    label: $ElementType<Scalars, 'String'>,
    editable: $ElementType<Scalars, 'Boolean'>,
    sortable: $ElementType<Scalars, 'Boolean'>,
    groupable: $ElementType<Scalars, 'Boolean'>,
    defaultSortOrder?: ?PolarisSortOrder,
    linearizable: $ElementType<Scalars, 'Boolean'>,
    specialType?: ?$ElementType<Scalars, 'String'>,
    jiraFieldKey?: ?$ElementType<Scalars, 'String'>,
  |}
|};

/** An PolarisIdeaStatus is PolarisIdea builtin status field */
export type PolarisIdeaStatus = {|
  __typename?: 'PolarisIdeaStatus',
  /** Status ID */
  id: $ElementType<Scalars, 'ID'>,
  /** Status name */
  name: $ElementType<Scalars, 'String'>,
  /** Status category */
  statusCategory: PolarisIdeaStatusCategory,
|};

/** An PolarisIdeaStatusCategory is PolarisIdeaStatus category */
export type PolarisIdeaStatusCategory = {|
  __typename?: 'PolarisIdeaStatusCategory',
  /** Status category ID */
  id: $ElementType<Scalars, 'Int'>,
  /** Status category name */
  name?: ?$ElementType<Scalars, 'String'>,
|};

export type PolarisIdeaStatusField = {|
  ...PolarisIdeaField,
  ...{|
    __typename?: 'PolarisIdeaStatusField',
    id: $ElementType<Scalars, 'ID'>,
    fieldId?: ?$ElementType<Scalars, 'Int'>,
    fieldName?: ?$ElementType<Scalars, 'String'>,
    label: $ElementType<Scalars, 'String'>,
    editable: $ElementType<Scalars, 'Boolean'>,
    sortable: $ElementType<Scalars, 'Boolean'>,
    groupable: $ElementType<Scalars, 'Boolean'>,
    defaultSortOrder?: ?PolarisSortOrder,
    linearizable: $ElementType<Scalars, 'Boolean'>,
    jiraFieldKey?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaStringField = {|
  ...PolarisIdeaField,
  ...{|
    __typename?: 'PolarisIdeaStringField',
    id: $ElementType<Scalars, 'ID'>,
    fieldId?: ?$ElementType<Scalars, 'Int'>,
    fieldName?: ?$ElementType<Scalars, 'String'>,
    label: $ElementType<Scalars, 'String'>,
    editable: $ElementType<Scalars, 'Boolean'>,
    sortable: $ElementType<Scalars, 'Boolean'>,
    groupable: $ElementType<Scalars, 'Boolean'>,
    linearizable: $ElementType<Scalars, 'Boolean'>,
    defaultSortOrder?: ?PolarisSortOrder,
    jiraFieldKey?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaStringFieldValue = {|
  ...PolarisIdeaFieldValue,
  ...{|
    __typename?: 'PolarisIdeaStringFieldValue',
    fieldId: $ElementType<Scalars, 'Int'>,
    value: $ElementType<Scalars, 'String'>,
    link?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaType = {|
  __typename?: 'PolarisIdeaType',
  id: $ElementType<Scalars, 'ID'>,
  name: $ElementType<Scalars, 'String'>,
  iconUrl?: ?$ElementType<Scalars, 'String'>,
  description?: ?$ElementType<Scalars, 'String'>,
|};

export type PolarisIdeaUserField = {|
  ...PolarisIdeaField,
  ...{|
    __typename?: 'PolarisIdeaUserField',
    id: $ElementType<Scalars, 'ID'>,
    fieldId?: ?$ElementType<Scalars, 'Int'>,
    fieldName?: ?$ElementType<Scalars, 'String'>,
    label: $ElementType<Scalars, 'String'>,
    editable: $ElementType<Scalars, 'Boolean'>,
    sortable: $ElementType<Scalars, 'Boolean'>,
    groupable: $ElementType<Scalars, 'Boolean'>,
    linearizable: $ElementType<Scalars, 'Boolean'>,
    defaultSortOrder?: ?PolarisSortOrder,
    jiraFieldKey?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaUserFieldValue = {|
  ...PolarisIdeaFieldValue,
  ...{|
    __typename?: 'PolarisIdeaUserFieldValue',
    fieldId: $ElementType<Scalars, 'Int'>,
    value: $ElementType<Scalars, 'ID'>,
    /**  id only, this will get stitched in AGG */
  link?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaUsersField = {|
  ...PolarisIdeaField,
  ...{|
    __typename?: 'PolarisIdeaUsersField',
    id: $ElementType<Scalars, 'ID'>,
    fieldId?: ?$ElementType<Scalars, 'Int'>,
    fieldName?: ?$ElementType<Scalars, 'String'>,
    label: $ElementType<Scalars, 'String'>,
    editable: $ElementType<Scalars, 'Boolean'>,
    sortable: $ElementType<Scalars, 'Boolean'>,
    groupable: $ElementType<Scalars, 'Boolean'>,
    linearizable: $ElementType<Scalars, 'Boolean'>,
    defaultSortOrder?: ?PolarisSortOrder,
    jiraFieldKey?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisIdeaUsersFieldValue = {|
  ...PolarisIdeaFieldValue,
  ...{|
    __typename?: 'PolarisIdeaUsersFieldValue',
    fieldId: $ElementType<Scalars, 'Int'>,
    value: Array<$ElementType<Scalars, 'ID'>>,
    /**  id only, this will get stitched in AGG */
  link?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisImplementation = {|
  ...Node,
  ...{|
    __typename?: 'PolarisImplementation',
    id: $ElementType<Scalars, 'ID'>,
    key: $ElementType<Scalars, 'String'>,
    status?: ?PolarisImplementationStatus,
    summary?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisImplementationConnection = {|
  __typename?: 'PolarisImplementationConnection',
  edges?: ?Array<?PolarisImplementationEdge>,
  nodes?: ?Array<?PolarisImplementation>,
  pageInfo: PolarisImplementationPageInfo,
  totalCount?: ?$ElementType<Scalars, 'Int'>,
  statusBreakdown?: ?PolarisImplementationStatusBreakdown,
|};

export type PolarisImplementationEdge = {|
  __typename?: 'PolarisImplementationEdge',
  node: PolarisImplementation,
  cursor: $ElementType<Scalars, 'String'>,
|};

export type PolarisImplementationPageInfo = {|
  __typename?: 'PolarisImplementationPageInfo',
  hasNextPage: $ElementType<Scalars, 'Boolean'>,
  hasPreviousPage: $ElementType<Scalars, 'Boolean'>,
|};

export type PolarisImplementationStatus = {|
  __typename?: 'PolarisImplementationStatus',
  name: $ElementType<Scalars, 'String'>,
  iconUrl: $ElementType<Scalars, 'String'>,
|};

export type PolarisImplementationStatusBreakdown = {|
  __typename?: 'PolarisImplementationStatusBreakdown',
  totalUndefined?: ?$ElementType<Scalars, 'Int'>,
  totalTodo?: ?$ElementType<Scalars, 'Int'>,
  totalInProgress?: ?$ElementType<Scalars, 'Int'>,
  totalDone?: ?$ElementType<Scalars, 'Int'>,
|};

export type PolarisProject = {|
  __typename?: 'PolarisProject',
  /**
   * ARI of the project which is a polaris project, for example:
   * 
   *    `ari:cloud:cebeacbd-f85e-483c-96ac-fd432a12ad1c:project/10004`
   */
  id: $ElementType<Scalars, 'ID'>,
  /** Every Jira project has a name */
  name: $ElementType<Scalars, 'String'>,
  /** Every Jira project has a key */
  key: $ElementType<Scalars, 'String'>,
  /** The view set associated with the "all PolarisIdeas" dynamic collection */
  viewset: PolarisViewSet,
  views: Array<PolarisView>,
  rankField?: ?$ElementType<Scalars, 'ID'>,
  fields: Array<PolarisIdeaField>,
  /**
   * Initially only expect to have one idea type per project.  Defining
   * as a list here for future expandability.
   */
  ideaTypes: Array<PolarisIdeaType>,
|};

export type PolarisSortField = {|
  __typename?: 'PolarisSortField',
  field: PolarisIdeaField,
  order?: ?PolarisSortOrder,
|};

export type PolarisSortFieldInput = {|
  field: $ElementType<Scalars, 'ID'>,
  order?: ?PolarisSortOrder,
|};

export const PolarisSortOrderValues = Object.freeze({
  Asc: 'ASC', 
  Desc: 'DESC'
});


export type PolarisSortOrder = $Values<typeof PolarisSortOrderValues>;

export type PolarisSupport = {|
  ...Node,
  ...{|
    __typename?: 'PolarisSupport',
    id: $ElementType<Scalars, 'ID'>,
    key: $ElementType<Scalars, 'String'>,
    summary?: ?$ElementType<Scalars, 'String'>,
  |}
|};

export type PolarisSupportConnection = {|
  __typename?: 'PolarisSupportConnection',
  edges?: ?Array<?PolarisSupportEdge>,
  nodes?: ?Array<?PolarisSupport>,
  pageInfo: PolarisSupportPageInfo,
  totalCount?: ?$ElementType<Scalars, 'Int'>,
  jql?: ?$ElementType<Scalars, 'String'>,
|};

export type PolarisSupportEdge = {|
  __typename?: 'PolarisSupportEdge',
  node: PolarisSupport,
  cursor: $ElementType<Scalars, 'String'>,
|};

export type PolarisSupportPageInfo = {|
  __typename?: 'PolarisSupportPageInfo',
  hasNextPage: $ElementType<Scalars, 'Boolean'>,
  hasPreviousPage: $ElementType<Scalars, 'Boolean'>,
|};

export type PolarisTableVisualization = {|
  ...PolarisVisualization,
  ...{|
    __typename?: 'PolarisTableVisualization',
    iconUrl: $ElementType<Scalars, 'String'>,
    /**
   * The set of columns for this visualization.  Configures the column order,
   * sort priority, rendering format, etc.
   */
  columns: Array<PolarisTabularColumn>,
  |}
|};

export type PolarisTabularColumn = {|
  __typename?: 'PolarisTabularColumn',
  /** The unique identifier for this column */
  id: $ElementType<Scalars, 'ID'>,
  /**
   * The horizontal position of the column in a tabular view.
   * The leftmost column is position 0.
   */
  position: $ElementType<Scalars, 'Int'>,
  /**
   * The sort priority of the column, if any.  1 is highest
   * priority sort, 2 is next highest, etc.
   */
  sortPriority?: ?$ElementType<Scalars, 'Int'>,
  /**
   * The format to use to show the data in the column, if other
   * than the default.
   */
  format?: ?$ElementType<Scalars, 'String'>,
  /**
   * The width of the column in proprortional units.  If not specified,
   * client should choose wisely.
   */
  width?: ?$ElementType<Scalars, 'Int'>,
  /**
   * An override for the column heading; if not specified,
   * the field label should be used.
   */
  heading?: ?$ElementType<Scalars, 'String'>,
  /** The field whose value appears in this column. */
  field?: ?PolarisIdeaField,
|};

export type PolarisView = {|
  __typename?: 'PolarisView',
  /**
   * ARI of the polaris view itself.  For example,
   * 
   *    `ari:cloud:cebeacbd-f85e-483c-96ac-fd432a12ad1c:polaris-view/10003`
   */
  id: $ElementType<Scalars, 'ID'>,
  name: $ElementType<Scalars, 'String'>,
  fields: Array<PolarisIdeaField>,
  viewset: PolarisViewSet,
  /**
   * The JQL that would produce the same set of issues as are returned by
   * the ideas connection
   */
  jql?: ?$ElementType<Scalars, 'String'>,
  ideas: PolarisIdeaConnection,
  /**
   * Can the view be changed in-place?  Immutable views can be the
   * source of a clone operation, but it is an error to try to update
   * one.
   */
  immutable?: ?$ElementType<Scalars, 'Boolean'>,
  visualization?: ?PolarisVisualization,
  /**
   * this is being flattened out from the visualization substructure;
   * these view attributes are all modelled as optional, and their
   * significance depends on the selected visualizationType
   */
  visualizationType: PolarisVisualizationType,
  groupBy?: ?PolarisIdeaField,
  x?: ?PolarisIdeaField,
  y?: ?PolarisIdeaField,
  groupValues?: ?Array<?PolarisGroupValue>,
  sort?: ?Array<?PolarisSortField>,
  /** The user-supplied part of a JQL filter */
  userJql?: ?$ElementType<Scalars, 'String'>,
|};


export type PolarisViewJqlArgs = {|
  filter?: ?PolarisFilterInput,
|};


export type PolarisViewIdeasArgs = {|
  first?: ?$ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
  last?: ?$ElementType<Scalars, 'Int'>,
  before?: ?$ElementType<Scalars, 'String'>,
  filter?: ?PolarisFilterInput,
|};

export type PolarisViewSet = {|
  __typename?: 'PolarisViewSet',
  id: $ElementType<Scalars, 'ID'>,
  default: PolarisView,
  additional: Array<PolarisView>,
|};

export type PolarisVisualization = {|
  iconUrl: $ElementType<Scalars, 'String'>,
|};

export const PolarisVisualizationTypeValues = Object.freeze({
  Table: 'TABLE', 
  Board: 'BOARD', 
  Twoxtwo: 'TWOXTWO'
});


export type PolarisVisualizationType = $Values<typeof PolarisVisualizationTypeValues>;

export const ProductValues = Object.freeze({
  Jira: 'Jira', 
  Confluence: 'Confluence'
});


export type Product = $Values<typeof ProductValues>;

export type Query = {|
  __typename?: 'Query',
  echo?: ?$ElementType<Scalars, 'String'>,
  diagnostics?: ?$ElementType<Scalars, 'JSON'>,
  /**
   * `appLogs()` returns an object for paging over AppLog objects, each of which
   * represents one invocation of a function.
   * 
   * The returned objects use the Relay naming/nesting style of
   * `AppLogConnection` &rarr; `[AppLogEdge]` &rarr;  `AppLog`.
   * 
   * It takes parameters (`query: LogQueryInput`) to narrow down the invocations
   * being searched, requiring at least an app and environment.
   */
  appLogs?: ?AppLogConnection,
  /**
   * `appLogLines()` returns an object for paging over the contents of a single
   * invocation's log lines, given by the `invocation` parameter (an ID
   * returned from a `appLogs()` query).
   * 
   * Each `AppLogLine` consists of a `timestamp`, an optional `message`,
   * an optional `level`, and an `other` field that contains any
   * additional JSON fields included in the log line.  (Since
   * the app itself can control the schema of this JSON, we can't
   * use native GraphQL capabilities to describe the fields here.)
   * 
   * The returned objects use the Relay naming/nesting style of
   * `AppLogLineConnection` &rarr; `[AppLogLineEdge]` &rarr;  `AppLogLine`.
   */
  appLogLines?: ?AppLogLineConnection,
  /** Relay-style lookup-individual-node-by-global-ID. */
  node?: ?Node,
  /**
   * API v1
   * Get activity for current user.
   */
  myActivities: MyActivity,
  /**
   * API v2
   * Get user activities.
   */
  activities?: ?Activities,
  /**
   * A Jira or Confluence cloud instance, such as `hello.atlassian.net` has a backing
   * cloud ID such as `0ee6b491-5425-4f19-a71e-2486784ad694`
   * 
   * This field allows you to look up the cloud IDs or host names of tenanted applications
   * such as Jira or Confluence.
   * 
   * You MUST provide a list of cloud IDs or a list of host names to look up but not both
   * otherwise an error will be returned
   */
  tenantContexts?: ?Array<?TenantContext>,
  devOpsMetrics?: ?DevOpsMetrics,
  /**
   * This field is useful for testing the graphql API.  In fact here at Atlassian we run synthetic checks
   * using this field ot help us ensure the graphql API is working as expected.
   */
  testing?: ?Testing,
  /**
   * Get an untyped entity in a specific context given a key
   * 
   * Keys must be between 1-100 characters long and must match the following pattern /^[a-zA-Z0-9:._\s-]+$/
   */
  appStoredEntity?: ?AppStoredEntity,
  /**
   * Get an list of untyped entity in a specific context, optional query parameters where condition, first and after
   * 
   * where condition to filter
   * returns the first N entities when queried. Should not exceed 20
   * this is a cursor after which (exclusive) the data should be fetched from
   */
  appStoredEntities?: ?AppStoredEntityConnection,
  /** THIS QUERY IS IN BETA */
  polarisProject?: ?PolarisProject,
  /** THIS QUERY IS IN BETA */
  polarisView?: ?PolarisView,
  /** THIS QUERY IS IN BETA and IS PRIVATE */
  polarisAudit?: ?Array<PolarisAuditRecord>,
  polarisAPIVersion?: ?$ElementType<Scalars, 'String'>,
  jira?: ?JiraQuery,
  bitbucket?: ?BitbucketQuery,
  extensionContexts?: ?Array<ExtensionContext>,
  extensionByKey?: ?Extension,
  /** Gets all webtrigger URLs for an application in a specified context. */
  webTriggerUrlsByAppContext?: ?Array<WebTriggerUrl>,
  opsgenie?: ?OpsgenieQuery,
  /**
   * Namespace for fields relating to issue releases in Jira.
   * 
   * A "release" in this context can refer to a code deployment or a feature flag change.
   * 
   * This field is currently in BETA.
   */
  jiraReleases?: ?JiraReleases,
  boardScope?: ?BoardScope,
  developmentInformation?: ?IssueDevOpsDevelopmentInformation,
  /** Get MarketplacePartner by id. */
  marketplacePartner?: ?MarketplacePartner,
  /** Get MarketplaceApp by appId */
  marketplaceApp?: ?MarketplaceApp,
  app?: ?App,
  appDeployment?: ?AppDeployment,
  /**
   * This returns information about the currently logged in user.  If there is no logged in user
   * then there really wont be much information to show.
   */
  me: AuthenticationContext,
  /**
   * Given an account id this will return user profile information with applied privacy controls of the caller.
   * 
   * Its important to remember that privacy controls are applied in terms of the caller.  A user with
   * a certain accountId may exist but the current caller may not have the right to view their details.
   */
  user?: ?User,
  /**
   * Given a list of account ids this will return user profile information with applied privacy controls of the caller.
   * 
   * Its important to remember that privacy controls are applied in terms of the caller.  A user with
   * a certain accountId may exist but the current caller may not have the right to view their details.
   * 
   * A maximum of 90 `accountIds` can be asked for at the one time.
   */
  users: Array<User>,
  /**
   * The connection entity for repository relationships for the specified Jira project, according to the specified
   * pagination, filtering and sorting.
   */
  repositoryRelationshipsForJiraProject?: ?JiraProjectAndRepositoryRelationshipConnection,
  /**
   * The connection entity for Jira project relationships for the specified repository, according to the specified
   * pagination, filtering and sorting.
   */
  jiraProjectRelationshipsForRepository?: ?JiraProjectAndRepositoryRelationshipConnection,
  /** The entity for the specified Jira project and repository relationship. */
  jiraProjectAndRepositoryRelationship?: ?JiraProjectAndRepositoryRelationship,
  codeInJira?: ?CodeInJira,
|};


export type QueryAppLogsArgs = {|
  last: $ElementType<Scalars, 'Int'>,
  before?: ?$ElementType<Scalars, 'String'>,
  appId: $ElementType<Scalars, 'ID'>,
  environmentId: Array<$ElementType<Scalars, 'ID'>>,
  query?: ?LogQueryInput,
|};


export type QueryAppLogLinesArgs = {|
  first: $ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
  invocation: $ElementType<Scalars, 'ID'>,
|};


export type QueryNodeArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type QueryTenantContextsArgs = {|
  cloudIds?: ?Array<$ElementType<Scalars, 'ID'>>,
  hostNames?: ?Array<$ElementType<Scalars, 'String'>>,
|};


export type QueryAppStoredEntityArgs = {|
  contextAri: $ElementType<Scalars, 'ID'>,
  key: $ElementType<Scalars, 'ID'>,
|};


export type QueryAppStoredEntitiesArgs = {|
  contextAri: $ElementType<Scalars, 'ID'>,
  where?: ?Array<AppStoredEntityFilter>,
  first?: ?$ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
|};


export type QueryPolarisProjectArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type QueryPolarisViewArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type QueryPolarisAuditArgs = {|
  filter?: ?PolarisAuditFilter,
|};


export type QueryExtensionContextsArgs = {|
  contextIds: Array<$ElementType<Scalars, 'ID'>>,
|};


export type QueryExtensionByKeyArgs = {|
  contextId: $ElementType<Scalars, 'ID'>,
  definitionId: $ElementType<Scalars, 'ID'>,
  extensionKey: $ElementType<Scalars, 'String'>,
|};


export type QueryWebTriggerUrlsByAppContextArgs = {|
  appId: $ElementType<Scalars, 'ID'>,
  envId: $ElementType<Scalars, 'ID'>,
  contextId: $ElementType<Scalars, 'ID'>,
|};


export type QueryBoardScopeArgs = {|
  boardId: $ElementType<Scalars, 'ID'>,
|};


export type QueryDevelopmentInformationArgs = {|
  issueId: $ElementType<Scalars, 'ID'>,
|};


export type QueryMarketplacePartnerArgs = {|
  id: $ElementType<Scalars, 'MarketplacePartnerId'>,
|};


export type QueryMarketplaceAppArgs = {|
  appId: $ElementType<Scalars, 'MarketplaceAppId'>,
|};


export type QueryAppArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type QueryAppDeploymentArgs = {|
  appId: $ElementType<Scalars, 'ID'>,
  environmentKey: $ElementType<Scalars, 'String'>,
  id: $ElementType<Scalars, 'ID'>,
|};


export type QueryUserArgs = {|
  accountId: $ElementType<Scalars, 'ID'>,
|};


export type QueryUsersArgs = {|
  accountIds: Array<$ElementType<Scalars, 'ID'>>,
|};


export type QueryRepositoryRelationshipsForJiraProjectArgs = {|
  id: $ElementType<Scalars, 'ID'>,
  first: $ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
  filter?: ?JiraProjectAndRepositoryRelationshipFilter,
  sort?: ?JiraProjectAndRepositoryRelationshipSort,
|};


export type QueryJiraProjectRelationshipsForRepositoryArgs = {|
  id: $ElementType<Scalars, 'ID'>,
  first: $ElementType<Scalars, 'Int'>,
  after?: ?$ElementType<Scalars, 'String'>,
  filter?: ?JiraProjectAndRepositoryRelationshipFilter,
  sort?: ?JiraProjectAndRepositoryRelationshipSort,
|};


export type QueryJiraProjectAndRepositoryRelationshipArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};


export type QueryCodeInJiraArgs = {|
  cloudId: $ElementType<Scalars, 'ID'>,
|};

export type RankColumnInput = {|
  boardId: $ElementType<Scalars, 'ID'>,
  columnId: $ElementType<Scalars, 'ID'>,
  position: $ElementType<Scalars, 'Int'>,
|};

export type RankColumnOutput = {|
  ...MutationResponse,
  ...{|
    __typename?: 'RankColumnOutput',
    columns?: ?Array<Column>,
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
  |}
|};

export type RemovePolarisColumnInput = {|
  /** The column position to be removed */
  column: $ElementType<Scalars, 'ID'>,
|};

/** Data for the reports overview page */
export type ReportsOverview = {|
  __typename?: 'ReportsOverview',
  metadata: Array<?SoftwareReport>,
|};

export type ScanPolarisProjectInput = {|
  project: $ElementType<Scalars, 'ID'>,
  refresh?: ?$ElementType<Scalars, 'Boolean'>,
|};

export type ScopeSprintIssue = {|
  __typename?: 'ScopeSprintIssue',
  /** issue key */
  issueKey: $ElementType<Scalars, 'String'>,
  /** issue description */
  issueSummary: $ElementType<Scalars, 'String'>,
  /** the estimate on the issue */
  estimate: $ElementType<Scalars, 'Float'>,
|};

export type SetAppEnvironmentVariableInput = {|
  environment: AppEnvironmentInput,
  /** The input identifying the environment variable to insert */
  environmentVariable: AppEnvironmentVariableInput,
|};

export type SetAppStoredEntityMutationInput = {|
  /**
   * The identifier for the entity
   * 
   * Keys must be between 1-100 characters long and must match the following pattern /^[a-zA-Z0-9:._\s-]+$/
   */
  key: $ElementType<Scalars, 'ID'>,
  /** The ARI to store this entity within */
  contextAri: $ElementType<Scalars, 'ID'>,
  /**
   * Entities may be up to 2000 bytes long. Note that size within ESS may differ from
   * the size of the entity sent to this service. The entity size is counted within this service.
   */
  value: $ElementType<Scalars, 'JSON'>,
|};

/** Generic implementation of MutationResponse for responses that don't need any extra data */
export type SetAppStoredEntityPayload = {|
  ...Payload,
  ...{|
    __typename?: 'SetAppStoredEntityPayload',
    success: $ElementType<Scalars, 'Boolean'>,
    errors?: ?Array<MutationError>,
  |}
|};

export type SetColumnLimitInput = {|
  boardId: $ElementType<Scalars, 'ID'>,
  columnId: $ElementType<Scalars, 'ID'>,
  limit?: ?$ElementType<Scalars, 'Int'>,
|};

export type SetColumnLimitOutput = {|
  ...MutationResponse,
  ...{|
    __typename?: 'SetColumnLimitOutput',
    updatedColumn?: ?Column,
    columns?: ?Array<Column>,
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
  |}
|};

export type SetColumnNameInput = {|
  boardId: $ElementType<Scalars, 'ID'>,
  columnId: $ElementType<Scalars, 'ID'>,
  columnName: $ElementType<Scalars, 'String'>,
|};

export type SetColumnNameOutput = {|
  ...MutationResponse,
  ...{|
    __typename?: 'SetColumnNameOutput',
    column?: ?Column,
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
  |}
|};

export type SetExternalAuthCredentialsInput = {|
  /** The input identifying what environment to set credentials for */
  environment: AppEnvironmentInput,
  /** The key for the service we're setting the credentials for (must already exist via previous deployment) */
  serviceKey: $ElementType<Scalars, 'String'>,
  /** An object representing the credentials to set */
  credentials: ExternalAuthCredentialsInput,
|};

/** Swimlane Mutations */
export type SetSwimlaneStrategyInput = {|
  boardId: $ElementType<Scalars, 'ID'>,
  strategy: SwimlaneStrategy,
|};

export type SetSwimlaneStrategyResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'SetSwimlaneStrategyResponse',
    strategy: SwimlaneStrategy,
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
  |}
|};

export type SoftwareBoard = {|
  __typename?: 'SoftwareBoard',
  id?: ?$ElementType<Scalars, 'ID'>,
  /** Name of the board */
  name?: ?$ElementType<Scalars, 'String'>,
  /** The list of columns on the board */
  columns?: ?Array<?Column>,
  /**
   * The current swimlane strategy for the board.  This is a board (not user) property. 
   * All users of the board get the same strategy.
   */
  swimlaneStrategy?: ?SwimlaneStrategy,
  /** Whether any cards on the board are hidden due to board clearing logic (e.g. old cards in the done column are hidden) */
  hasClearedCards?: ?$ElementType<Scalars, 'Boolean'>,
  /** Configuration for showing inline card create */
  inlineCardCreate?: ?InlineCardCreateConfig,
  /** Configuration for showing media previews on cards */
  cardMedia?: ?CardMediaConfig,
  /** List of the assignees of all cards currently displayed on the board */
  assignees?: ?Array<?User>,
  /** [CardType]s which can be created in this column _outside of a swimlane_ (if any) */
  cardTypes: Array<?CardType>,
  /** All cards on the board, optionally filtered by ID */
  cards?: ?Array<?SoftwareCard>,
  /** All issue children which are linked to the cards on the board */
  cardChildren?: ?Array<?SoftwareCard>,
  /**
   * Swimlanes on the board.  If swimlanes are set to "NONE" then this there will be a single swimlane object containing
   *  all cards on the board.
   */
  swimlanes: Array<?Swimlane>,
  /**
   * User Swimlanes on the board.  If swimlanes are set to "NONE" then this there will be a single swimlane object containing
   *  all cards on the board.
   */
  userSwimlanes: Array<?Swimlane>,
  /** List of all labels on all cards current displayed on the board */
  labels?: ?Array<?$ElementType<Scalars, 'String'>>,
  /** Temporarily needed to support legacy write API */
  rankCustomFieldId?: ?$ElementType<Scalars, 'String'>,
|};


export type SoftwareBoardCardsArgs = {|
  cardIds?: ?Array<?$ElementType<Scalars, 'ID'>>,
|};



/** A card on the board */
export type SoftwareCard = {|
  __typename?: 'SoftwareCard',
  id?: ?$ElementType<Scalars, 'ID'>,
  key?: ?$ElementType<Scalars, 'String'>,
  summary?: ?$ElementType<Scalars, 'String'>,
  labels?: ?Array<?$ElementType<Scalars, 'String'>>,
  type?: ?CardType,
  status?: ?CardStatus,
  assignee?: ?User,
  /** Whether or not this card is flagged */
  flagged?: ?$ElementType<Scalars, 'Boolean'>,
  /** Whether or not this card is considered done */
  done?: ?$ElementType<Scalars, 'Boolean'>,
  /** Details of the media to show on this card, null if the card has no media */
  coverMedia?: ?CardCoverMedia,
  /** Dev Status information for the card */
  devStatus?: ?DevStatus,
  /** ID of parent card */
  parentId?: ?$ElementType<Scalars, 'ID'>,
  /** List of children IDs for a card */
  childrenIds?: ?Array<?$ElementType<Scalars, 'ID'>>,
  /** Estimate of size of a card */
  estimate?: ?Estimate,
  /** Child cards metadata */
  childCardsMetadata?: ?ChildCardsMetadata,
  /** Card priority */
  priority?: ?CardPriority,
  /** Due date */
  dueDate?: ?$ElementType<Scalars, 'String'>,
  /** IDs of the fix versions that this issue is related to */
  fixVersionsIds: Array<$ElementType<Scalars, 'ID'>>,
|};

/** Represents a specific transition between statuses that a card can make. */
export type SoftwareCardTransition = {|
  __typename?: 'SoftwareCardTransition',
  /** Identifier for the card's column in swimlane position, to be used as a target for card transitions */
  id?: ?$ElementType<Scalars, 'ID'>,
  /** Name of the transition, as set in the workflow editor */
  name: $ElementType<Scalars, 'String'>,
  /** The status the card's issue will end up in after executing this CardTransition */
  status?: ?CardStatus,
  /** statuses which can move to this location, null if global transition. */
  originStatus?: ?CardStatus,
  /** Card type that this transition applies to */
  cardType: CardType,
  /** true if global transition (anything status can move to this location). */
  isGlobal?: ?$ElementType<Scalars, 'Boolean'>,
  /** true if the transition is initial */
  isInitial?: ?$ElementType<Scalars, 'Boolean'>,
|};

export type SoftwareCardsDestination = {|
  destination?: ?SoftwareCardsDestinationEnum,
  sprintId?: ?$ElementType<Scalars, 'ID'>,
|};

export const SoftwareCardsDestinationEnumValues = Object.freeze({
  NewSprint: 'NEW_SPRINT', 
  Backlog: 'BACKLOG', 
  ExistingSprint: 'EXISTING_SPRINT'
});


export type SoftwareCardsDestinationEnum = $Values<typeof SoftwareCardsDestinationEnumValues>;

export type SoftwareOperation = {|
  __typename?: 'SoftwareOperation',
  icon?: ?Icon,
  name?: ?$ElementType<Scalars, 'String'>,
  url?: ?$ElementType<Scalars, 'String'>,
  tooltip?: ?$ElementType<Scalars, 'String'>,
  styleClass?: ?$ElementType<Scalars, 'String'>,
|};

export type SoftwareProject = {|
  __typename?: 'SoftwareProject',
  /** Project id */
  id?: ?$ElementType<Scalars, 'ID'>,
  /** Project key */
  key?: ?$ElementType<Scalars, 'String'>,
  /** Project name */
  name?: ?$ElementType<Scalars, 'String'>,
  /**
   * List of card types available in the project
   * When on the board, these will NOT include Epics or Subtasks, but when in boardScope they will
   */
  cardTypes?: ?Array<?CardType>,
|};

export type SoftwareReport = {|
  __typename?: 'SoftwareReport',
  id: $ElementType<Scalars, 'ID'>,
  /** unique key identifying the report */
  key: $ElementType<Scalars, 'String'>,
  /** the name of the report in the user's language */
  localisedName: $ElementType<Scalars, 'String'>,
  /** the name of the report in the user's language */
  localisedDescription: $ElementType<Scalars, 'String'>,
  /** Which group this report should be shown in */
  group: $ElementType<Scalars, 'String'>,
  /** uri of the report's icon */
  imageUri: $ElementType<Scalars, 'String'>,
  /**
   * suffix to apply to the reports url to load this report.
   * e.g. https://tenant.com/secure/RapidBoard.jspa?rapidView=*boardId*&view=reports&report=*urlName*
   */
  urlName: $ElementType<Scalars, 'String'>,
  /** whether or not this report is applicable (is enabled for) this board */
  isApplicable: $ElementType<Scalars, 'Boolean'>,
  /** if not applicable - localised text as to why */
  inapplicableReason?: ?$ElementType<Scalars, 'String'>,
  /** if not applicable - localised text as to why */
  inapplicableDescription?: ?$ElementType<Scalars, 'String'>,
|};

/** Node for querying any report page's data */
export type SoftwareReports = {|
  __typename?: 'SoftwareReports',
  /** Data for the reports list overview */
  overview?: ?ReportsOverview,
  /** Data for the cumulative flow diagram report */
  cumulativeFlowDiagram?: ?CumulativeFlowDiagram,
  /** Data for the burndown chart report */
  burndownChart: BurndownChart,
|};

export const SortDirectionValues = Object.freeze({
  /** Sort in ascending order */
  Asc: 'ASC', 
  /** Sort in descending order */
  Desc: 'DESC'
});


/** The sort direction of the collection */
export type SortDirection = $Values<typeof SortDirectionValues>;

export type Sprint = {|
  __typename?: 'Sprint',
  id?: ?$ElementType<Scalars, 'ID'>,
  /** The sprint's name */
  name?: ?$ElementType<Scalars, 'String'>,
  /** The sprint's goal, null if no goal is set */
  goal?: ?$ElementType<Scalars, 'String'>,
  /** The start date of the sprint, in ISO 8601 format */
  startDate?: ?$ElementType<Scalars, 'DateTime'>,
  /** The end date of the sprint, in ISO 8601 format */
  endDate?: ?$ElementType<Scalars, 'DateTime'>,
  /** The number of days remaining */
  daysRemaining?: ?$ElementType<Scalars, 'Int'>,
  cards: Array<?SoftwareCard>,
  sprintState: SprintState,
|};


export type SprintCardsArgs = {|
  cardIds?: ?Array<?$ElementType<Scalars, 'ID'>>,
|};

export type SprintEndData = {|
  __typename?: 'SprintEndData',
  /** timestamp of when sprint was completed */
  timestamp: $ElementType<Scalars, 'DateTime'>,
  /** list of all issues that are in the sprint with their estimates */
  issueList: Array<?ScopeSprintIssue>,
  /** scope remaining at the end of the sprint */
  remainingEstimate: $ElementType<Scalars, 'Float'>,
|};

export const SprintReportsEstimationStatisticTypeValues = Object.freeze({
  StoryPoints: 'STORY_POINTS', 
  IssueCount: 'ISSUE_COUNT'
});


export type SprintReportsEstimationStatisticType = $Values<typeof SprintReportsEstimationStatisticTypeValues>;

export type SprintReportsFilters = {|
  __typename?: 'SprintReportsFilters',
  /** List of sprints to select from */
  sprints: Array<?Sprint>,
  /** Possible statistic that we want to track */
  estimationStatistic: Array<?SprintReportsEstimationStatisticType>,
|};

export type SprintResponse = {|
  ...MutationResponse,
  ...{|
    __typename?: 'SprintResponse',
    sprint?: ?Sprint,
    statusCode: $ElementType<Scalars, 'Int'>,
    success: $ElementType<Scalars, 'Boolean'>,
    message: $ElementType<Scalars, 'String'>,
  |}
|};

export type SprintScopeChangeData = {|
  __typename?: 'SprintScopeChangeData',
  /** timestamp of change */
  timestamp: $ElementType<Scalars, 'DateTime'>,
  /** the issue involved in the change */
  issueKey: $ElementType<Scalars, 'String'>,
  /** the issue description */
  issueSummary: $ElementType<Scalars, 'String'>,
  /** type of event */
  eventType: $ElementType<Scalars, 'SprintScopeChangeEventType'>,
  /** sprint scope after this change */
  scope: $ElementType<Scalars, 'Float'>,
  /** amount completed of the esimtation statistic */
  completion: $ElementType<Scalars, 'Float'>,
  /** amount remaining of the estimation statistic */
  remaining: $ElementType<Scalars, 'Float'>,
  /** estimation of the issue after this change */
  estimate?: ?$ElementType<Scalars, 'Float'>,
  /** the previous completed amount before this change */
  prevCompletion: $ElementType<Scalars, 'Float'>,
  /** the sprint scope before the change */
  prevScope: $ElementType<Scalars, 'Float'>,
  /** the previous remaining amount before this change */
  prevRemaining: $ElementType<Scalars, 'Float'>,
  /** the previous estimation before this change */
  prevEstimate?: ?$ElementType<Scalars, 'Float'>,
|};


export type SprintStartData = {|
  __typename?: 'SprintStartData',
  timestamp: $ElementType<Scalars, 'DateTime'>,
  /** list of all issues that are in the sprint with their estimates */
  issueList: Array<?ScopeSprintIssue>,
  /** scope estimate for start of sprint */
  scopeEstimate: $ElementType<Scalars, 'Float'>,
|};

export const SprintStateValues = Object.freeze({
  Active: 'ACTIVE', 
  Future: 'FUTURE', 
  Closed: 'CLOSED'
});


export type SprintState = $Values<typeof SprintStateValues>;

/** Start sprint */
export type StartSprintInput = {|
  boardId: $ElementType<Scalars, 'ID'>,
  sprintId: $ElementType<Scalars, 'ID'>,
  name: $ElementType<Scalars, 'String'>,
  goal?: ?$ElementType<Scalars, 'String'>,
  startDate: $ElementType<Scalars, 'DateTime'>,
  endDate: $ElementType<Scalars, 'DateTime'>,
|};

export type Swimlane = {|
  __typename?: 'Swimlane',
  /**
   * The swimlane ID.  This will match the id of the object the swimlane is grouping by.  e.g. Epic's it will be the
   * epic's issue Id.  For assignees it will be the assignee's atlassian account id.   For swimlanes which do not
   * represent a object (e.g. "Issues without assignee's" swimlane) the value will be "0".
   */
  id?: ?$ElementType<Scalars, 'ID'>,
  /** The icon to show for the swimlane */
  iconUrl?: ?$ElementType<Scalars, 'String'>,
  /** The name of the swimlane */
  name?: ?$ElementType<Scalars, 'String'>,
  /** The set of card types allowed in the swimlane */
  allowedCardTypes?: ?Array<CardType>,
  /** The column data */
  columnsInSwimlane?: ?Array<?ColumnInSwimlane>,
|};

export const SwimlaneStrategyValues = Object.freeze({
  None: 'NONE', 
  Assignee: 'ASSIGNEE', 
  Issueparent: 'ISSUEPARENT', 
  Issuechildren: 'ISSUECHILDREN'
});


/** How to group cards on the board into swimlanes */
export type SwimlaneStrategy = $Values<typeof SwimlaneStrategyValues>;

export type TenantContext = {|
  __typename?: 'TenantContext',
  /** This cloud id of a tenanted Jira or Confluence instance */
  cloudId?: ?$ElementType<Scalars, 'ID'>,
  /** This host name of a tenanted Jira or Confluence instance */
  hostName?: ?$ElementType<Scalars, 'String'>,
|};

export type Testing = {|
  __typename?: 'Testing',
  /** Echos the message argument back to the caller */
  echo?: ?$ElementType<Scalars, 'String'>,
  /** Generates a new UUID */
  uuid?: ?$ElementType<Scalars, 'String'>,
  /** This returns a hypothetical Movie by id for testing purposes */
  movie?: ?TestingMovie,
  /** This returns a list of hypothetical Movies for testing purposes */
  movies?: ?Array<?TestingMovie>,
|};


export type TestingEchoArgs = {|
  message?: ?$ElementType<Scalars, 'String'>,
|};


export type TestingMovieArgs = {|
  id: $ElementType<Scalars, 'ID'>,
|};

export type TestingCharacter = {|
  __typename?: 'TestingCharacter',
  id: $ElementType<Scalars, 'ID'>,
  name?: ?$ElementType<Scalars, 'String'>,
|};

export type TestingMovie = {|
  __typename?: 'TestingMovie',
  id: $ElementType<Scalars, 'ID'>,
  renamedName?: ?$ElementType<Scalars, 'String'>,
  characters?: ?Array<?TestingCharacter>,
|};

/**
 * General Report Types
 * ====================
 */
export type TimeSeriesPoint = {|
  __typename?: 'TimeSeriesPoint',
  id: $ElementType<Scalars, 'ID'>,
  x: $ElementType<Scalars, 'DateTime'>,
  y: $ElementType<Scalars, 'Int'>,
|};


export type UpdatePolarisTableVisualizationInput = {|
  view: $ElementType<Scalars, 'ID'>,
  update?: ?UpdatePolarisViewInput,
  name?: ?$ElementType<Scalars, 'String'>,
  addColumns?: ?Array<AddPolarisColumnInput>,
  removeColumns?: ?Array<RemovePolarisColumnInput>,
|};

export type UpdatePolarisTableVisualizationPayload = {|
  __typename?: 'UpdatePolarisTableVisualizationPayload',
  statusCode: $ElementType<Scalars, 'Int'>,
  message: $ElementType<Scalars, 'String'>,
  success: $ElementType<Scalars, 'Boolean'>,
  errors?: ?Array<MutationError>,
  node?: ?PolarisView,
|};

export type UpdatePolarisViewInput = {|
  view?: ?$ElementType<Scalars, 'ID'>,
  /**  view to update, if this is an UPDATE operation */
  name?: ?$ElementType<Scalars, 'String'>,
  /**  the name of the view */
  jql?: ?$ElementType<Scalars, 'String'>,
  /**  the JQL (sets filter and sorting) */
  userJql?: ?$ElementType<Scalars, 'String'>,
  /**  just the user filtering part of the JQL */
  fields?: ?Array<$ElementType<Scalars, 'ID'>>,
  /**  the table columns list of fields (table viz) or fields to show */
  groupBy?: ?$ElementType<Scalars, 'ID'>,
  /**  what field to group by (board viz) */
  groupValues?: ?Array<?PolarisGroupValueInput>,
  /**  what are the (ordered) grouping values */
  x?: ?$ElementType<Scalars, 'ID'>,
  /**  the field controlling the abcissa (x coordinate) */
  y?: ?$ElementType<Scalars, 'ID'>,
  /**  the field controlling the ordinate (y coordinate) */
  sort?: ?Array<?PolarisSortFieldInput>,
|};

export type UpdatePolarisViewPayload = {|
  __typename?: 'UpdatePolarisViewPayload',
  success: $ElementType<Scalars, 'Boolean'>,
  errors?: ?Array<MutationError>,
  node?: ?PolarisView,
|};

/**
 * There are 3 types of accounts :
 * 
 * * AtlassianAccountUser
 *   * this represents a real person that has an account in a wide range of Atlassian products
 * 
 * * CustomerUser
 *   * This represents a real person who is a customer of an organisation who uses an Atlassian product to provide service to their customers.
 *     Currently, this isused within Jira Service Desk for external service desks.
 * 
 * * AppUser
 *   * this does not represent a real person but rather the identity that backs an installed application
 */
export type User = {|
  /** The account ID for the user. */
  accountId: $ElementType<Scalars, 'ID'>,
  /** The lifecycle status of the account */
  accountStatus: AccountStatus,
  /**
   * The display name of the user. This should be used when rendering a user textually within content.
   * If the user has restricted visibility of their name, their nickname will be
   * displayed as a substitute value.
   */
  name: $ElementType<Scalars, 'String'>,
  /**
   * The absolute URI (RFC3986) to the avatar name of the user. This should be used when rendering a user graphically within content.
   * If the user has restricted visibility of their avatar or has not set
   * an avatar, an alternative URI will be provided as a substitute value.
   */
  picture: $ElementType<Scalars, 'URL'>,
|};

export type UserOnboardingInput = {|
  /** Input list of AAIDs that should be on-boarded to the closed beta */
  aaids: Array<$ElementType<Scalars, 'ID'>>,
|};

export type WebTriggerUrl = {|
  ...Node,
  ...{|
    __typename?: 'WebTriggerUrl',
    id: $ElementType<Scalars, 'ID'>,
    appId: $ElementType<Scalars, 'ID'>,
    envId: $ElementType<Scalars, 'ID'>,
    triggerKey: $ElementType<Scalars, 'String'>,
    extensionId: $ElementType<Scalars, 'ID'>,
    contextId: $ElementType<Scalars, 'ID'>,
    url: $ElementType<Scalars, 'URL'>,
    /** Product extracted from the context id (e.g. jira, confulence). Only populated if context id is a valid cloud context. */
  product?: ?$ElementType<Scalars, 'String'>,
    /** The tenant context for the cloud id. Only populated if context id is a valid cloud context. */
  tenantContext?: ?TenantContext,
  |}
|};

export type WebTriggerUrlInput = {|
  /** Id of the application */
  appId: $ElementType<Scalars, 'ID'>,
  /** Environment id of the application */
  envId: $ElementType<Scalars, 'ID'>,
  /** Web trigger module key */
  triggerKey: $ElementType<Scalars, 'String'>,
  /**
   * context in which function should run, usually a site context.
   * E.g.: ari:cloud:jira::site/{siteId}
   */
  contextId: $ElementType<Scalars, 'ID'>,
|};
