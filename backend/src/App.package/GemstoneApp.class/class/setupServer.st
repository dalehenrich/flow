other
setupServer

	"
	GemstoneApp setupServer 

	"

	(GemServerRegistry gemServerNamed: GemstoneApp flowApplicationServerName) 
		ifNil:[
				ZnFlowGemServer register: GemstoneApp flowApplicationServerName
	].

	
	(GemServerRegistry gemServerNamed: GemstoneApp flowApplicationServerName) 
		 logFilter: nil;
		logToObjectLog;
		debugMode: true;
		delegate: ( FWDelegate new
							addHandler: FWRESTAPIv10Handler new;
							addHandler: (FWFilesHandler for: ((GsFile _expandEnvVariable: 'GEMSTONE_STONE_DIR' isClient: false) ,'/service') base: 'service');
							addHandler: FWWebSocketsAPIHandler new;
						yourself).