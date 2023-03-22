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

export interface LaunchDocsDataInterface {
  "fairings": {
    "reused": boolean,
    "recovery_attempt": boolean,
    "recovered": boolean,
    "ships": any[]
  },
  "links": {
    "patch": {
      "small": string,
      "large": string
    },
    "reddit": {
      "campaign": null | any,
      "launch": null | any,
      "media": null | any,
      "recovery": null | any
    },
    "flickr": {
      "small": any[],
      "original": any[]
    },
    "presskit": null,
    "webcast": string,
    "youtube_id": string,
    "article": string,
    "wikipedia": string
  },
  "static_fire_date_utc": string,
  "static_fire_date_unix": number,
  "net": boolean,
  "window": number,
  "rocket": string,
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
