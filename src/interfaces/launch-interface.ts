export interface CoreInterface {
  "core": string,
  "flight": number,
  "gridfins": boolean,
  "legs": boolean,
  "reused": boolean,
  "landing_attempt": boolean,
  "landing_success": null | string | any,
  "landing_type": null | string | any,
  "landpad": null | string | any
}

interface linksInterface {
  "patch": {
    "small": string,
    "large": string
  }
  "reddit": {
    "campaign": string,
    "launch": string,
    "media": string,
    "recovery": null | boolean | any
  }
  "flickr": {
    "small": Array<string | any>,
    "original": Array<string | any>
  }

  "presskit": string,
  "webcast": string,
  "youtube_id": string,
  "article": string,
  "wikipedia": string
}

export interface LaunchDocsDataInterface {
  "fairings": {
    "reused": boolean,
    "recovery_attempt": boolean,
    "recovered": boolean,
    "ships": any[]
  },
  "links": linksInterface,
  "static_fire_date_utc": string,
  "static_fire_date_unix": number,
  "net": boolean,
  "window": number,
  "rocket": {
    "name": string,
  },
  "success": boolean,
  "failures": Array<{
    "time": number,
    "altitude": null | any,
    "reason": string
  }>,
  "details": string,
  "crew": any[],
  "ships": any[],
  "capsules": any[],
  "payloads": string[],
  "launchpad": string,
  "flight_number": number,
  "name": string,
  "date_utc": string,
  "date_unix": number,
  "date_local": string,
  "date_precision": string,
  "upcoming": boolean,
  "cores": Array<CoreInterface>,
  "auto_update": boolean,
  "tbd": boolean,
  "launch_library_id": null | string | any,
  "id": string
}

export interface LaunchInterface {
  "fairings": null | string | any,
  "links": linksInterface,
  "static_fire_date_utc": string,
  "static_fire_date_unix": number,
  "tdb": boolean,
  "net": boolean,
  "window": number,
  "rocket": {
    "name": string | any,
  },
  "success": boolean,
  "failures": Array<any>,
  "details": string,
  "ships": Array<any>,
  "capsules": Array<string | any>,
  "payloads": Array<string | any>,
  "launchpad": string,
  "auto_update": boolean,
  "flight_number": number,
  "name": string,
  "date_utc": string,
  "date_unix": number,
  "date_local": string,
  "date_precision": string,
  "upcoming": boolean,
  "cores": Array<CoreInterface | null | any>,
  "id": string
}
