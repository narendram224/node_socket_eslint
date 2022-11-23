// import { transports, format } from "winston";
// import { format as _format, transports as _transports, loggers } from "winston";
// const { combine, timestamp,json } = _format;
// import "winston-daily-rotate-file";

// // var options = {
// // 	file: {
// // 		level: "info",
// // 		filename: `${appRoot}/logs/app.log`,
// // 		handleExceptions: true,
// // 		json: true,
// // 		maxsize: 5242880, // 5MB
// // 		maxFiles: 5,
// // 		colorize: false,
// // 	},
// // 	console: {
// // 		level: "debug",
// // 		handleExceptions: true,
// // 		json: false,
// // 		colorize: true,
// // 	},
// // };
// // var logger = new winston.Logger( {
// // 	transports: [
// // 		new winston.transports.File( options.file ),
// // 		new winston.transports.Console( options.console ),
// // 	],
// // 	exitOnError: false, // do not exit on handled exceptions
// // } );
// // logger.stream = {
// // 	write: function ( message ) {
// // 		logger.info( message );
// // 	},
// // };

// const logLevels = {
// 	fatal: 0,
// 	error: 1,
// 	warn: 2,
// 	info: 3,
// 	debug: 4,
// 	trace: 5,
// 	http: 6,
// };

// const basicLoggerConfig ={
// 	levels: logLevels,
// 	exitOnError: false ,
// 	maxsize: 5242880, // 5MB
// 	maxFiles: 5,
	
// 	format: combine( timestamp(), json() ),

// 	transports: [ new transports.Console(),
// 		new transports.DailyRotateFile( {
// 			filename: "logs/server/%DATE%/combined.log",
// 			datePattern: "DD-MMM-YYYY",
// 			level: "debug",
// 			format: format.combine( format.uncolorize() ),
// 		} ),
// 		new transports.DailyRotateFile( {
// 			filename: "logs/server/%DATE%/errors.log",
// 			datePattern: "DD-MMM-YYYY",
// 			level: "error",
// 			format: format.combine( format.colorize(),
// 				format.timestamp( {
// 					format: "DD-MM-YYYY HH:mm:ss"
// 				} ), 
// 				format.printf( info => `[${info.timestamp}]  [${info.level}] : ${info.message}` ) ),
// 		} ),
// 	],
// 	exceptionHandlers: [
// 		new _transports.File( { filename: "logs/exception.log" } ),
// 	],
// 	rejectionHandlers: [
// 		new _transports.File( { filename: "logs/rejections.log" } ),
// 	],
// }; 


// loggers.add( "serviceALogger", basicLoggerConfig );


// const httpLoggerConfig = {
// 	level: "http",
// 	format: combine(
// 		timestamp( {
// 			format: "YYYY-MM-DD hh:mm:ss.SSS A",
// 		} ),
// 		json()
// 	),
// 	transports: [ new _transports.File( { filename: "logs/http.log" } ) ],
// }; 

// loggers.add( "serviceBLogger", httpLoggerConfig );