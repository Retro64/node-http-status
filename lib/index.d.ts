export = httpStatus;

declare const httpStatus: httpStatus.HttpStatus;

declare namespace httpStatus {
  interface HttpStatus {
    readonly [key: number]: string

    readonly [key: string]:
      | string
      | number
      | HttpStatusClasses
      | HttpStatusExtra;

    readonly 100: string;
    readonly '100_NAME': string;
    readonly '100_MESSAGE': string;
    readonly '100_CLASS': string;
    readonly CONTINUE: 100;

    readonly 101: string;
    readonly '101_NAME': string;
    readonly '101_MESSAGE': string;
    readonly '101_CLASS': string;
    readonly SWITCHING_PROTOCOLS: 101;

    readonly 200: string;
    readonly '200_NAME': string;
    readonly '200_MESSAGE': string;
    readonly '200_CLASS': string;
    readonly OK: 200;

    readonly 201: string;
    readonly '201_NAME': string;
    readonly '201_MESSAGE': string;
    readonly '201_CLASS': string;
    readonly CREATED: 201;

    readonly 202: string;
    readonly '202_NAME': string;
    readonly '202_MESSAGE': string;
    readonly '202_CLASS': string;
    readonly ACCEPTED: 202;

    readonly 203: string;
    readonly '203_NAME': string;
    readonly '203_MESSAGE': string;
    readonly '203_CLASS': string;
    readonly NON_AUTHORITATIVE_INFORMATION: 203;

    readonly 204: string;
    readonly '204_NAME': string;
    readonly '204_MESSAGE': string;
    readonly '204_CLASS': string;
    readonly NO_CONTENT: 204;

    readonly 205: string;
    readonly '205_NAME': string;
    readonly '205_MESSAGE': string;
    readonly '205_CLASS': string;
    readonly RESET_CONTENT: 205;

    readonly 206: string;
    readonly '206_NAME': string;
    readonly '206_MESSAGE': string;
    readonly '206_CLASS': string;
    readonly PARTIAL_CONTENT: 206;

    readonly 207: string;
    readonly '207_NAME': string;
    readonly '207_MESSAGE': string;
    readonly '207_CLASS': string;
    readonly MULTI_STATUS: 207;

    readonly 208: string;
    readonly '208_NAME': string;
    readonly '208_MESSAGE': string;
    readonly '208_CLASS': string;
    readonly ALREADY_REPORTED: 208;

    readonly 226: string;
    readonly '226_NAME': string;
    readonly '226_MESSAGE': string;
    readonly '226_CLASS': string;
    readonly IM_USED: 226;

    readonly 300: string;
    readonly '300_NAME': string;
    readonly '300_MESSAGE': string;
    readonly '300_CLASS': string;
    readonly MULTIPLE_CHOICES: 300;

    readonly 301: string;
    readonly '301_NAME': string;
    readonly '301_MESSAGE': string;
    readonly '301_CLASS': string;
    readonly MOVED_PERMANENTLY: 301;

    readonly 302: string;
    readonly '302_NAME': string;
    readonly '302_MESSAGE': string;
    readonly '302_CLASS': string;
    readonly FOUND: 302;

    readonly 303: string;
    readonly '303_NAME': string;
    readonly '303_MESSAGE': string;
    readonly '303_CLASS': string;
    readonly SEE_OTHER: 303;

    readonly 304: string;
    readonly '304_NAME': string;
    readonly '304_MESSAGE': string;
    readonly '304_CLASS': string;
    readonly NOT_MODIFIED: 304;

    readonly 305: string;
    readonly '305_NAME': string;
    readonly '305_MESSAGE': string;
    readonly '305_CLASS': string;
    readonly USE_PROXY: 305;

    readonly 306: string;
    readonly '306_NAME': string;
    readonly '306_MESSAGE': string;
    readonly '306_CLASS': string;
    readonly SWITCH_PROXY: 306;

    readonly 307: string;
    readonly '307_NAME': string;
    readonly '307_MESSAGE': string;
    readonly '307_CLASS': string;
    readonly TEMPORARY_REDIRECT: 307;

    readonly 308: string;
    readonly '308_NAME': string;
    readonly '308_MESSAGE': string;
    readonly '308_CLASS': string;
    readonly PERMANENT_REDIRECT: 308;

    readonly 400: string;
    readonly '400_NAME': string;
    readonly '400_MESSAGE': string;
    readonly '400_CLASS': string;
    readonly BAD_REQUEST: 400;

    readonly 401: string;
    readonly '401_NAME': string;
    readonly '401_MESSAGE': string;
    readonly '401_CLASS': string;
    readonly UNAUTHORIZED: 401;

    readonly 402: string;
    readonly '402_NAME': string;
    readonly '402_MESSAGE': string;
    readonly '402_CLASS': string;
    readonly PAYMENT_REQUIRED: 402;

    readonly 403: string;
    readonly '403_NAME': string;
    readonly '403_MESSAGE': string;
    readonly '403_CLASS': string;
    readonly FORBIDDEN: 403;

    readonly 404: string;
    readonly '404_NAME': string;
    readonly '404_MESSAGE': string;
    readonly '404_CLASS': string;
    readonly NOT_FOUND: 404;

    readonly 405: string;
    readonly '405_NAME': string;
    readonly '405_MESSAGE': string;
    readonly '405_CLASS': string;
    readonly METHOD_NOT_ALLOWED: 405;

    readonly 406: string;
    readonly '406_NAME': string;
    readonly '406_MESSAGE': string;
    readonly '406_CLASS': string;
    readonly NOT_ACCEPTABLE: 406;

    readonly 407: string;
    readonly '407_NAME': string;
    readonly '407_MESSAGE': string;
    readonly '407_CLASS': string;
    readonly PROXY_AUTHENTICATION_REQUIRED: 407;

    readonly 408: string;
    readonly '408_NAME': string;
    readonly '408_MESSAGE': string;
    readonly '408_CLASS': string;
    readonly REQUEST_TIMEOUT: 408;

    readonly 409: string;
    readonly '409_NAME': string;
    readonly '409_MESSAGE': string;
    readonly '409_CLASS': string;
    readonly CONFLICT: 409;

    readonly 410: string;
    readonly '410_NAME': string;
    readonly '410_MESSAGE': string;
    readonly '410_CLASS': string;
    readonly GONE: 410;

    readonly 411: string;
    readonly '411_NAME': string;
    readonly '411_MESSAGE': string;
    readonly '411_CLASS': string;
    readonly LENGTH_REQUIRED: 411;

    readonly 412: string;
    readonly '412_NAME': string;
    readonly '412_MESSAGE': string;
    readonly '412_CLASS': string;
    readonly PRECONDITION_FAILED: 412;

    readonly 413: string;
    readonly '413_NAME': string;
    readonly '413_MESSAGE': string;
    readonly '413_CLASS': string;
    readonly REQUEST_ENTITY_TOO_LARGE: 413;

    readonly 414: string;
    readonly '414_NAME': string;
    readonly '414_MESSAGE': string;
    readonly '414_CLASS': string;
    readonly REQUEST_URI_TOO_LONG: 414;

    readonly 415: string;
    readonly '415_NAME': string;
    readonly '415_MESSAGE': string;
    readonly '415_CLASS': string;
    readonly UNSUPPORTED_MEDIA_TYPE: 415;

    readonly 416: string;
    readonly '416_NAME': string;
    readonly '416_MESSAGE': string;
    readonly '416_CLASS': string;
    readonly REQUESTED_RANGE_NOT_SATISFIABLE: 416;

    readonly 417: string;
    readonly '417_NAME': string;
    readonly '417_MESSAGE': string;
    readonly '417_CLASS': string;
    readonly EXPECTATION_FAILED: 417;

    readonly 418: string;
    readonly '418_NAME': string;
    readonly '418_MESSAGE': string;
    readonly '418_CLASS': string;
    readonly IM_A_TEAPOT: 418;

    readonly 421: string;
    readonly '421_NAME': string;
    readonly '421_MESSAGE': string;
    readonly '421_CLASS': string;
    readonly MISDIRECTED_REQUEST: 421;

    readonly 422: string;
    readonly '422_NAME': string;
    readonly '422_MESSAGE': string;
    readonly '422_CLASS': string;
    readonly UNPROCESSABLE_ENTITY: 422;

    readonly 423: string;
    readonly '423_NAME': string;
    readonly '423_MESSAGE': string;
    readonly '423_CLASS': string;
    readonly LOCKED: 423;

    readonly 424: string;
    readonly '424_NAME': string;
    readonly '424_MESSAGE': string;
    readonly '424_CLASS': string;
    readonly FAILED_DEPENDENCY: 424;

    readonly 426: string;
    readonly '426_NAME': string;
    readonly '426_MESSAGE': string;
    readonly '426_CLASS': string;
    readonly UPGRADE_REQUIRED: 426;

    readonly 428: string;
    readonly '428_NAME': string;
    readonly '428_MESSAGE': string;
    readonly '428_CLASS': string;
    readonly PRECONDITION_REQUIRED: 428;

    readonly 429: string;
    readonly '429_NAME': string;
    readonly '429_MESSAGE': string;
    readonly '429_CLASS': string;
    readonly TOO_MANY_REQUESTS: 429;

    readonly 431: string;
    readonly '431_NAME': string;
    readonly '431_MESSAGE': string;
    readonly '431_CLASS': string;
    readonly REQUEST_HEADER_FIELDS_TOO_LARGE: 431;

    readonly 451: string;
    readonly '451_NAME': string;
    readonly '451_MESSAGE': string;
    readonly '451_CLASS': string;
    readonly UNAVAILABLE_FOR_LEGAL_REASONS: 451;

    readonly 500: string;
    readonly '500_NAME': string;
    readonly '500_MESSAGE': string;
    readonly '500_CLASS': string;
    readonly INTERNAL_SERVER_ERROR: 500;

    readonly 501: string;
    readonly '501_NAME': string;
    readonly '501_MESSAGE': string;
    readonly '501_CLASS': string;
    readonly NOT_IMPLEMENTED: 501;

    readonly 502: string;
    readonly '502_NAME': string;
    readonly '502_MESSAGE': string;
    readonly '502_CLASS': string;
    readonly BAD_GATEWAY: 502;

    readonly 503: string;
    readonly '503_NAME': string;
    readonly '503_MESSAGE': string;
    readonly '503_CLASS': string;
    readonly SERVICE_UNAVAILABLE: 503;

    readonly 504: string;
    readonly '504_NAME': string;
    readonly '504_MESSAGE': string;
    readonly '504_CLASS': string;
    readonly GATEWAY_TIMEOUT: 504;

    readonly 505: string;
    readonly '505_NAME': string;
    readonly '505_MESSAGE': string;
    readonly '505_CLASS': string;
    readonly HTTP_VERSION_NOT_SUPPORTED: 505;

    readonly 506: string;
    readonly '506_NAME': string;
    readonly '506_MESSAGE': string;
    readonly '506_CLASS': string;
    readonly VARIANT_ALSO_NEGOTIATES: 506;

    readonly 507: string;
    readonly '507_NAME': string;
    readonly '507_MESSAGE': string;
    readonly '507_CLASS': string;
    readonly INSUFFICIENT_STORAGE: 507;

    readonly 508: string;
    readonly '508_NAME': string;
    readonly '508_MESSAGE': string;
    readonly '508_CLASS': string;
    readonly LOOP_DETECTED: 508;

    readonly 510: string;
    readonly '510_NAME': string;
    readonly '510_MESSAGE': string;
    readonly '510_CLASS': string;
    readonly NOT_EXTENDED: 510;

    readonly 511: string;
    readonly '511_NAME': string;
    readonly '511_MESSAGE': string;
    readonly '511_CLASS': string;
    readonly NETWORK_AUTHENTICATION_REQUIRED: 511;

    classes: HttpStatusClasses;

    extra: HttpStatusExtra;
  }

  interface HttpStatusExtra {
    readonly unofficial: HttpStatusUnofficial;

    readonly iis: HttpStatusIis;

    readonly nginx: HttpStatusNginx;

    readonly cloudflare: HttpStatusCloudfare;
  }

  interface HttpStatusClasses {
    readonly [key: string]: string | number;

    readonly '1xx': string;
    readonly '1xx_NAME': string;
    readonly '1xx_MESSAGE': string;
    readonly INFORMATIONAL: string;

    readonly '2xx': string;
    readonly '2xx_NAME': string;
    readonly '2xx_MESSAGE': string;
    readonly SUCCESSFUL: string;

    readonly '3xx': string;
    readonly '3xx_NAME': string;
    readonly '3xx_MESSAGE': string;
    readonly REDIRECTION: string;

    readonly '4xx': string;
    readonly '4xx_NAME': string;
    readonly '4xx_MESSAGE': string;
    readonly CLIENT_ERROR: string;

    readonly '5xx': string;
    readonly '5xx_NAME': string;
    readonly '5xx_MESSAGE': string;
    readonly SERVER_ERROR: string;
  }

  interface HttpStatusUnofficial {
    readonly [key: string]: string | number;

    readonly 103: string;
    readonly '103_NAME': string;
    readonly '103_MESSAGE': string;
    readonly '103_CLASS': string;
    readonly CHECKPOINT: 103;

    readonly 420: string;
    readonly '420_NAME': string;
    readonly '420_MESSAGE': string;
    readonly '420_CLASS': string;
    readonly ENHANCE_YOUR_CALM: 420;

    readonly 450: string;
    readonly '450_NAME': string;
    readonly '450_MESSAGE': string;
    readonly '450_CLASS': string;
    readonly BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS: 450;

    readonly 498: string;
    readonly '498_NAME': string;
    readonly '498_MESSAGE': string;
    readonly '498_CLASS': string;
    readonly INVALID_TOKEN: 498;

    readonly 499: string;
    readonly '499_NAME': string;
    readonly '499_MESSAGE': string;
    readonly '499_CLASS': string;
    readonly TOKEN_REQUIRED: 499;

    readonly 509: string;
    readonly '509_NAME': string;
    readonly '509_MESSAGE': string;
    readonly '509_CLASS': string;
    readonly BANDWIDTH_LIMIT_EXCEEDED: 509;

    readonly 530: string;
    readonly '530_NAME': string;
    readonly '530_MESSAGE': string;
    readonly '530_CLASS': string;
    readonly SITE_IS_FROZEN: 530;

    readonly 598: string;
    readonly '598_NAME': string;
    readonly '598_MESSAGE': string;
    readonly '598_CLASS': string;
    readonly NETWORK_READ_TIMEOUT_ERROR: 598;
  }

  interface HttpStatusIis {
    readonly [key: string]: string | number;

    readonly 440: string;
    readonly '440_NAME': string;
    readonly '440_MESSAGE': string;
    readonly '440_CLASS': string;
    readonly LOGIN_TIME_OUT: 440;

    readonly 449: string;
    readonly '449_NAME': string;
    readonly '449_MESSAGE': string;
    readonly '449_CLASS': string;
    readonly RETRY_WITH: 449;

    readonly 451: string;
    readonly '451_NAME': string;
    readonly '451_MESSAGE': string;
    readonly '451_CLASS': string;
    readonly REDIRECT: 451;
  }

  interface HttpStatusNginx {
    readonly [key: string]: string | number;

    readonly 444: string;
    readonly '444_NAME': string;
    readonly '444_MESSAGE': string;
    readonly '444_CLASS': string;
    readonly NO_RESPONSE: 444;

    readonly 494: string;
    readonly '494_NAME': string;
    readonly '494_MESSAGE': string;
    readonly '494_CLASS': string;
    readonly REQUEST_HEADER_TOO_LARGE: 494;

    readonly 495: string;
    readonly '495_NAME': string;
    readonly '495_MESSAGE': string;
    readonly '495_CLASS': string;
    readonly SSL_CERTIFICATE_ERROR: 495;

    readonly 496: string;
    readonly '496_NAME': string;
    readonly '496_MESSAGE': string;
    readonly '496_CLASS': string;
    readonly SSL_CERTIFICATE_REQUIRED: 496;

    readonly 497: string;
    readonly '497_NAME': string;
    readonly '497_MESSAGE': string;
    readonly '497_CLASS': string;
    readonly HTTP_REQUEST_SENT_TO_HTTPS_PORT: 497;

    readonly 499: string;
    readonly '499_NAME': string;
    readonly '499_MESSAGE': string;
    readonly '499_CLASS': string;
    readonly CLIENT_CLOSED_REQUEST: 499;
  }

  interface HttpStatusCloudfare {
    readonly 520: string;
    readonly '520_NAME': string;
    readonly '520_MESSAGE': string;
    readonly '520_CLASS': string;
    readonly UNKNOWN_ERROR: 520;

    readonly 521: string;
    readonly '521_NAME': string;
    readonly '521_MESSAGE': string;
    readonly '521_CLASS': string;
    readonly WEB_SERVER_IS_DOWN: 521;

    readonly 522: string;
    readonly '522_NAME': string;
    readonly '522_MESSAGE': string;
    readonly '522_CLASS': string;
    readonly CONNECTION_TIMED_OUT: 522;

    readonly 523: string;
    readonly '523_NAME': string;
    readonly '523_MESSAGE': string;
    readonly '523_CLASS': string;
    readonly ORIGIN_IS_UNREACHABLE: 523;

    readonly 524: string;
    readonly '524_NAME': string;
    readonly '524_MESSAGE': string;
    readonly '524_CLASS': string;
    readonly A_TIMEOUT_OCCURRED: 524;

    readonly 525: string;
    readonly '525_NAME': string;
    readonly '525_MESSAGE': string;
    readonly '525_CLASS': string;
    readonly SSL_HANDSHAKE_FAILED: 525;

    readonly 526: string;
    readonly '526_NAME': string;
    readonly '526_MESSAGE': string;
    readonly '526_CLASS': string;
    readonly INVALID_SSL_CERTIFICATE: 526;

    readonly 527: string;
    readonly '527_NAME': string;
    readonly '527_MESSAGE': string;
    readonly '527_CLASS': string;
    readonly RAILGUN_ERROR: 527;
  }
}
